import FooterCalendar from '@/components/Calendar/FooterCalendar';
import WeeklyCalendar from '@/components/Calendar/WeeklyCalendar';
import ScheduleTextarea from '@/components/ScheduleTextarea';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '시간표',
  description: '원더아트 스튜디오 시간표 페이지입니다.',
};

export default function SchedulePage() {
  return (
    <div>
      <div className="flex justify-between gap-2 mb-5">
        <WeeklyCalendar />
        <div className="mt-[38px] pt-[67px]">
          <ScheduleTextarea />
          <ScheduleTextarea />
          <ScheduleTextarea />
          <ScheduleTextarea />
          <ScheduleTextarea />
        </div>
      </div>
      <div className="flex justify-between gap-2 mb-5">
        <FooterCalendar />
        <textarea
          name=""
          id=""
          cols={30}
          rows={8}
          className="bg-gray-EEE p-2 outline-primary-color resize-none w-2/3 h-[200px]"
          placeholder="노트"
        />
      </div>
    </div>
  );
}
