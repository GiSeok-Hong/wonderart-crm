'use client';
import { getAge } from '@/helper/age';
const StudentRow = ({ name, birthDate, id }: { name: string; birthDate: Date; id: number }) => {
  return (
    <div
      data-id={id?.toString()}
      className="h-[30px] pl-1"
    >
      {name}, {getAge(birthDate)}세
    </div>
  );
};

export default StudentRow;
