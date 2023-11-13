import TeacherTable from '@/components/TeacherTable';
import { createPortal } from 'react-dom';

export default function TeacherList() {
  return (
    <>
      <h2 className="text-bold text-2xl text-center mb-4">선생님 목록</h2>
      <TeacherTable />
    </>
  );
}
