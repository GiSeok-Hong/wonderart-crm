"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ko";

import WeeklyCalendarToolbar from "./WeeklyCalendarToolbar";

export default function WeeklyCalendar() {
  moment.locale("ko");
  const localizer = momentLocalizer(moment);
  const year = new Date().getFullYear();

  return (
    <Calendar
      localizer={localizer}
      style={{ minWidth: 600 }}
      components={{ toolbar: WeeklyCalendarToolbar }}
      views={["work_week"]}
      defaultView={Views.WORK_WEEK}
      min={new Date(year, 0, 1, 14, 0, 0)}
      max={new Date(year, 0, 1, 19, 59, 59)}
    />
  );
}
