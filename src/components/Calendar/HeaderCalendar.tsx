'use client';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './Calendar.css';
import 'moment/locale/ko';
import HeaderCalendarToolbar from './HeaderCalendarToolbar';

export default function HeaderCalendar() {
  const localizer = momentLocalizer(moment);
  return (
    <Calendar
      localizer={localizer}
      style={{ height: 200 }}
      components={{ toolbar: HeaderCalendarToolbar }}
    />
  );
}
