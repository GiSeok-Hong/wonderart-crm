'use client';
import { Teacher } from '@prisma/client';
import { useEffect, type ReactNode, useState } from 'react';
import dynamic from 'next/dynamic';
const PlusButton = dynamic(() => import('@/components/PlusButton'), { ssr: false });
import Modal from 'react-modal';

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
    height: '50%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modal-root');

export default function TeacherTable() {
  const [teacherList, setTeacherList] = useState<Teacher[]>([]);

  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    (async function () {
      const teacherList = await fetch('/api/teacher').then((res) => res.json());
      setTeacherList(teacherList);
    })();
  }, []);

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
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl">선생님 등록</h2>
          <button onClick={closeModal}>X</button>
          <div className="">
            <input type="text" />
          </div>
        </div>
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
