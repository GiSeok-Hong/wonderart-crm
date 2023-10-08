import FooterCalendar from '@/components/Calendar/FooterCalendar';
import WeeklyCalendar from '@/components/Calendar/WeeklyCalendar';
import ScheduleTextarea from '@/components/ScheduleTextarea';
import Schedule from '@/components/schedule/Schedule';
import { getStudentList } from '@/service/student';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '시간표',
  description: '원더아트 스튜디오 시간표 페이지입니다.',
};

export default async function SchedulePage() {
  // const students = await getStudentList();

  return (
    <div>
      <div className="flex justify-between gap-2 mb-5">
        {/* <WeeklyCalendar studentsData={students} /> */}
        <Schedule />
        <div className="mt-[40px] pt-[30px] box-border">
          <ScheduleTextarea />
          <ScheduleTextarea />
          <ScheduleTextarea />
          <ScheduleTextarea />
          <ScheduleTextarea />
        </div>
      </div>
      <div className="flex justify-between gap-2 box-border">
        <FooterCalendar />
        <textarea
          name=""
          id=""
          cols={30}
          rows={8}
          className="bg-gray-EEE p-2 outline-primary-color resize-none w-2/3 h-[200px] mb-10 "
          placeholder="노트"
        />
      </div>
    </div>
  );
}
