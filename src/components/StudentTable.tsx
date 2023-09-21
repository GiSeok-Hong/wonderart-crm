'use client';

import { getAge } from '@/helper/age';
import { ReactNode, useEffect, useRef, useState } from 'react';
import StudentSearchInput from './StudentSearchInput';
import { useRouter } from 'next/navigation';
import { type Student } from '@prisma/client';

const TABLE_BORDER = 'border border-black';

const LABEL = ['이름', '나이', '성별', '보호자 연락처', '학교 / 유치원'];

type StudentTableItem = Student & { guardian: { phone: string } };

export default function StudentTable() {
  const [studentList, setStudentList] = useState<StudentTableItem[]>([]);
  const studentRef = useRef<StudentTableItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getStudentList = async () => {
      const studentList: StudentTableItem[] = await fetch('/api/student').then((res) => res.json());
      setStudentList(studentList);
      studentRef.current = studentList;
    };
    getStudentList();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <StudentSearchInput
        onChangeInput={(value) => {
          // 빈 문자열이면 원래 학생 리스트를 보여준다.
          if (!value) {
            setStudentList(studentRef.current);
            return;
          }

          // 빈 문자열이 아니면 이름에 포함된 학생만 보여준다.
          const filteredStudentList = studentRef.current?.filter((student) => {
            return student.name.includes(value);
          });
          setStudentList(filteredStudentList);
        }}
      />
      <table className={`${TABLE_BORDER} border-collapse w-full mb-5`}>
        <thead>
          <tr>
            {LABEL.map((label) => {
              return <Th key={label}>{label}</Th>;
            })}
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, index) => {
            return (
              <tr
                onClick={() => {
                  router.push(`/students/${student.id}`);
                }}
                key={student.id}
                className={`text-center ${index % 2 === 0 ? 'transparent' : 'bg-gray-EEE'}`}
              >
                <Td>{student.name}</Td>
                <Td>만 {getAge(student.birthDate)}세</Td>
                <Td>{student.sex}</Td>
                <Td>{student.guardian.phone}</Td>
                <Td>{student.school}</Td>
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
