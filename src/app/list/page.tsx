import StudentSearchInput from '@/components/StudentSearchInput';
import StudentTable from '@/components/StudentTable';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '학원생',
  description: '원더아트 스튜디오 학원생 리스트 페이지입니다.',
};

export default function ListPage() {
  return (
    <div className="flex flex-col gap-5">
      <StudentSearchInput />
      <StudentTable />
    </div>
  );
}
