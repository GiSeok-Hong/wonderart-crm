'use client';
import { Teacher } from '@prisma/client';
import { useEffect, type ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import plusIcon from '../../public/icons/plus.svg';
import Image from 'next/image';

const TABLE_BORDER = 'border border-black';

const LABEL = ['이름', '이메일', '휴대폰번호'];

export default function TeacherTable() {
  const [teacherList, setTeacherList] = useState<Teacher[]>([]);

  const [openModal, setOpenModal] = useState(false);

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
    </div>
  );
}

const Th = ({ children }: { children: ReactNode }) => {
  return <th className={`${TABLE_BORDER} p-2 bg-primary-color text-white`}>{children}</th>;
};

const Td = ({ children }: { children: ReactNode }) => {
  return <td className={`${TABLE_BORDER} p-2`}>{children}</td>;
};
