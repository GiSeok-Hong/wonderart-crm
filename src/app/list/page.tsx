import StudentSearchInput from '@/components/StudentSearchInput';
import StudentTable from '@/components/StudentTable';
import { Metadata } from 'next';
import { prisma } from '../../../lib/prisma';
import { getStudentList } from '@/service/student';

export const metadata: Metadata = {
  title: '학원생',
  description: '원더아트 스튜디오 학원생 리스트 페이지입니다.',
};

export default async function ListPage() {
  const studentList = await getStudentList();
  return (
    <div className="flex flex-col gap-5">
      <StudentSearchInput />
      <StudentTable studentList={studentList} />
    </div>
  );
}
