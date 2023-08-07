"use client";

import {
  Calendar,
  TimeGrid,
  momentLocalizer,
  Views,
  Navigate,
} from "react-big-calendar";
import moment from "moment";
import "moment/locale/ko";
// import "react-big-calendar/lib/css/react-big-calendar.css";

import WeeklyCalendarToolbar from "./WeeklyCalendarToolbar";
import { useMemo } from "react";
import PropTypes from "prop-types";
import * as dates from "date-arithmetic";

function MyWeek({
  date,
  localizer,
  max = localizer.endOf(new Date(), "day"),
  min = localizer.startOf(new Date(), "day"),
  scrollToTime = localizer.startOf(new Date(), "day"),
  ...props
}: any) {
  const currRange = useMemo(
    () => MyWeek.range(date, { localizer }),
    [date, localizer]
  );

  return (
    <TimeGrid
      date={date}
      eventOffset={15}
      localizer={localizer}
      max={max}
      min={min}
      range={currRange}
      scrollToTime={scrollToTime}
      {...props}
    />
  );
}

MyWeek.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  localizer: PropTypes.object,
  max: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  scrollToTime: PropTypes.instanceOf(Date),
};

MyWeek.range = (date: any, { localizer }: any) => {
  const start = date;
  const end = dates.add(start, 2, "day");

  let current = start;
  const range = [];

  while (localizer.lte(current, end, "day")) {
    range.push(current);
    current = localizer.add(current, 1, "day");
  }

  return range;
};

MyWeek.navigate = (date: any, action: any, { localizer }: any) => {
  switch (action) {
    case Navigate.PREVIOUS:
      return localizer.add(date, -3, "day");

    case Navigate.NEXT:
      return localizer.add(date, 3, "day");

    default:
      return date;
  }
};

MyWeek.title = (date: { toLocaleDateString: () => any }) => {
  return `My awesome week: ${date.toLocaleDateString()}`;
};

export default function WeeklyCalendar() {
  moment.locale("ko");
  const localizer = momentLocalizer(moment);

  return (
    <Calendar
      localizer={localizer}
      style={{ height: 800 }}
      components={{ toolbar: WeeklyCalendarToolbar }}
      defaultView={Views.WEEK}
      // defaultView={Views.WORK_WEEK}
    />
  );
}
