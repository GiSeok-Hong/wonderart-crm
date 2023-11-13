'use client';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './Calendar.css';
import 'moment/locale/ko';
import FooterCalendarToolbar from './FooterCalendarToolbar';

export default function FooterCalendar() {
  const localizer = momentLocalizer(moment);
  return (
    <Calendar
      localizer={localizer}
      style={{ height: 200, width: 215 }}
      components={{ toolbar: FooterCalendarToolbar }}
    />
  );
}
