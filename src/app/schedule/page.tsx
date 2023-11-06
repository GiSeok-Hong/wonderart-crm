import ScheduleMemos from '@/components/ScheduleMemos';
import Schedule from '@/components/schedule/Schedule';
import { getAllScheduleMemo } from '@/service/scheduleMemo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '시간표',
  description: '원더아트 스튜디오 시간표 페이지입니다.',
};

export default async function SchedulePage() {
  const allMemos = await getAllScheduleMemo();

  return (
    <div className="flex justify-between mb-5 relative">
      <Schedule />
      <ScheduleMemos {...allMemos[0]} />
    </div>
  );
}
