import HeaderCalendar from "@/components/Calendar/HeaderCalendar";
import WeeklyCalendar from "@/components/Calendar/WeeklyCalendar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "시간표",
  description: "원더아트 스튜디오 시간표 페이지입니다.",
};

export default function SchedulePage() {
  return (
    <div>
      <div className="flex justify-between overflow-hidden gap-2 mb-5">
        <HeaderCalendar height={200} />
        <textarea
          name=""
          id=""
          cols={30}
          rows={8}
          className="bg-gray-EEE p-1 w-2/3 outline-primary-color resize-none"
          placeholder="노트"
        />
      </div>
      <div>
        <WeeklyCalendar />
      </div>
    </div>
  );
}
