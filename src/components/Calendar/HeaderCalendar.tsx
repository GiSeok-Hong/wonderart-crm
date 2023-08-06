"use client";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./HeaderCalendar.css";
import "moment/locale/ko";
import HeaderCalendarToolbar from "./HeaderCalendarToolbar";

export default function HeaderCalendar({ height }: { height: number }) {
  moment.locale("ko");
  const localizer = momentLocalizer(moment);
  return (
    <Calendar
      localizer={localizer}
      style={{ height: height }}
      components={{ toolbar: HeaderCalendarToolbar }}
    />
  );
}
