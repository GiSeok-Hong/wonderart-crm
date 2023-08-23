'use client';

import { Student } from '@prisma/client';
import { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TABLE_BORDER = 'border border-black';

export default function StudentTable({studentList}: {studentList: Student[]}) {
  const Th = ({ children }: { children: ReactNode }) => {
    return <th className={`${TABLE_BORDER} p-2 bg-primary-color text-white`}>{children}</th>;
  };
  const Td = ({ children }: { children: ReactNode }) => {
    return <td className={`${TABLE_BORDER} p-2`}>{children}</td>;
  };
  return (
    <table className={`${TABLE_BORDER} border-collapse w-full mb-5`}>
      <thead>
        <tr>
          <Th>이름</Th>
          <Th>나이</Th>
          <Th>성별</Th>
          <Th>보호자 연락처</Th>
          <Th>수업 횟수</Th>
          <Th>학교 / 유치원</Th>
        </tr>
      </thead>
      <tbody>
        {studentList.map((student, index) => {
          return (
            <tr
              className={`text-center ${index % 2 === 0 ? 'transparent' : 'bg-gray-EEE'}`}
              key={student.id}
            >
              <Td>{student.name}</Td>
              <Td>{student.birthDate}</Td>
              <Td>{student.sex}</Td>
              <Td>{student.phone}</Td>
              <Td>{student.address}</Td>
              <Td>{student.school}</Td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const studentList = [
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
  {
    id: uuidv4(),
    name: '김철수',
    age: 5,
    gender: '남',
    phone: '010-1234-5678',
    classCount: '주 1회',
    school: '병점초등학교',
  },
];
