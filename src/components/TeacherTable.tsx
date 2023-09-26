'use client';
import { Teacher } from '@prisma/client';
import { useEffect, type ReactNode, useState } from 'react';
import dynamic from 'next/dynamic';
const PlusButton = dynamic(() => import('@/components/PlusButton'), { ssr: false });
import Modal from 'react-modal';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { error } from 'console';

const TABLE_BORDER = 'border border-black';

const LABEL = ['이름', '이메일', '휴대폰번호'];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '250px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

type TForm = {
  name: string;
  email: string;
  phone: string;
};

Modal.setAppElement('#modal-root');

export default function TeacherTable() {
  const { register, handleSubmit, reset } = useForm<TForm>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const [teacherList, setTeacherList] = useState<Teacher[]>([]);

  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    reset();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const fetchTeacherList = async () => {
    const teacherList = await fetch('/api/teacher').then((res) => res.json());
    setTeacherList(teacherList);
  };

  useEffect(() => {
    fetchTeacherList();
  }, []);

  const onSubmit: SubmitHandler<TForm> = async (data) => {
    try {
      await fetch('/api/teacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      fetchTeacherList();
      closeModal();
    } catch (error) {
      alert('선생님 등록에 실패했습니다');
    }
  };

  const onError: SubmitErrorHandler<TForm> = (errors) => {
    if (errors.name) {
      alert('이름을 올바르게 입력해주세요');
    }
    if (errors.email) {
      alert('email을 올바르게 입력해주세요');
    }
    if (errors.phone) {
      alert('휴대폰 번호를 올바르게 입력해주세요');
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <table className={`${TABLE_BORDER} border-collapse w-full mb-5`}>
        <thead>
          <tr>
            {LABEL.map((label) => {
              return <Th key={label}>{label}</Th>;
            })}
          </tr>
        </thead>
        <tbody>
          {teacherList.map((teacher, index) => {
            return (
              <tr
                key={teacher.id}
                className={`text-center ${index % 2 === 0 ? 'transparent' : 'bg-gray-EEE'}`}
              >
                <Td>{teacher.name}</Td>
                <Td>{teacher.email}</Td>
                <Td>{teacher.phone}</Td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PlusButton
        onClick={() => {
          openModal();
        }}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col h-full justify-between items-center gap-2"
        >
          <h2 className="font-bold text-xl">선생님 등록</h2>
          <div className="w-full flex justify-between gap-3">
            <label
              className="w-24"
              htmlFor="name"
            >
              이름
            </label>
            <input
              className="border border-black flex-1"
              type="text"
              maxLength={5}
              {...register('name', { required: true, maxLength: 5 })}
            />
          </div>
          <div className="w-full flex justify-between gap-3">
            <label
              className="w-24"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="border border-black flex-1"
              type="text"
              maxLength={50}
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
          <div className="w-full flex justify-between gap-3">
            <label
              className="w-24"
              htmlFor="phone"
            >
              핸드폰번호
            </label>
            <input
              className="border border-black flex-1"
              type="text"
              maxLength={11}
              {...register('phone', { required: true, minLength: 11, maxLength: 11, pattern: /^[0-9]*$/ })}
            />
          </div>
          <div className="flex flex-1 justify-center items-end gap-4">
            <button
              type="button"
              className="border rounded-[10px] bg-white text-primary-color w-32 h-[40px]"
              onClick={closeModal}
            >
              취소
            </button>
            <button
              type="submit"
              className="border rounded-[10px] bg-primary-color text-white w-32 h-[40px]"
            >
              저장
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

const Th = ({ children }: { children: ReactNode }) => {
  return <th className={`${TABLE_BORDER} p-2 bg-primary-color text-white`}>{children}</th>;
};

const Td = ({ children }: { children: ReactNode }) => {
  return <td className={`${TABLE_BORDER} p-2`}>{children}</td>;
};
