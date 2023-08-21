'use client';

import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import './DnDCalendar.css';
import moment from 'moment';
import 'moment/locale/ko';

import WeeklyCalendarToolbar from './WeeklyCalendarToolbar';
import { useCallback, useState } from 'react';
import { ScheduleMockData } from '../../../data/scheduleMockData';

export default function WeeklyCalendar() {
  const localizer = momentLocalizer(moment);
  const year = new Date().getFullYear();

  // DnD 관련 기본 예제 내용 -> 기능 추가시 수정 필요

  const adjEvents = ScheduleMockData.map((it, ind) => ({
    ...it,
    isDraggable: ind % 2 === 0,
  }));

  const formatName = (name: string, count: number) => `${name} ID ${count}`;

  const [myEvents, setMyEvents] = useState(adjEvents);
  const [draggedEvent, setDraggedEvent] = useState({ title: '', name: '' });
  const [counters, setCounters] = useState({ item1: 0, item2: 0 });

  const eventPropGetter = useCallback(
    (event: any) => ({
      ...(event.isDraggable ? { className: 'isDraggable' } : { className: 'nonDraggable' }),
    }),
    [],
  );

  const handleDragStart = useCallback((event: any) => setDraggedEvent(event), []);

  const customOnDragOver = useCallback(
    (dragEvent: any) => {
      // check for undroppable is specific to this example
      // and not part of API. This just demonstrates that
      // onDragOver can optionally be passed to conditionally
      // allow draggable items to be dropped on cal, based on
      // whether event.preventDefault is called

      if (draggedEvent !== null) {
        console.log('preventDefault');
        dragEvent.preventDefault();
      }
    },
    [draggedEvent],
  );

  const moveEvent = useCallback(
    ({
      event,
      start,
      end,
      isAllDay: droppedOnAllDaySlot = false,
    }: {
      event: any;
      start: any;
      end: any;
      isAllDay: any;
    }) => {
      const { allDay } = event;
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true;
      }

      setMyEvents((prev: any) => {
        const existing = prev.find((ev: { id: any }) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev: { id: any }) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end, allDay }];
      });
    },
    [setMyEvents],
  );

  const newEvent = useCallback(
    (event: any) => {
      setMyEvents((prev) => {
        const idList = prev.map((item) => item.id);
        const newId = Math.max(...idList) + 1;
        return [...prev, { ...event, id: newId }];
      });
    },
    [setMyEvents],
  );

  const onDropFromOutside = useCallback(
    ({ start, end, allDay: isAllDay }: { start: any; end: any; allDay: any }) => {
      // if (draggedEvent === "undroppable") {
      //   setDraggedEvent(null);
      //   return;
      // }

      const { name } = draggedEvent;
      const event = {
        title: formatName(name, counters.item1),
        start,
        end,
        isAllDay,
      };
      setDraggedEvent({ title: '', name: '' });
      setCounters((prev: any) => {
        const { [name]: count } = prev;
        return {
          ...prev,
          [name]: count + 1,
        };
      });
      newEvent(event);
    },
    [draggedEvent, counters, setDraggedEvent, setCounters, newEvent],
  );

  const resizeEvent = useCallback(
    ({ event, start, end }: { event: any; start: any; end: any }) => {
      setMyEvents((prev: any) => {
        const existing = prev.find((ev: { id: any }) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev: { id: any }) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end }];
      });
    },
    [setMyEvents],
  );

  const DnDCalendar = withDragAndDrop(Calendar);

  return (
    <div>
      <DnDCalendar
        localizer={localizer}
        style={{ minWidth: 600 }}
        components={{ toolbar: WeeklyCalendarToolbar }}
        views={['work_week']}
        defaultView={Views.WORK_WEEK}
        min={new Date(year, 0, 1, 14, 0, 0)}
        max={new Date(year, 0, 1, 19, 59, 59)}
        timeslots={6}
        step={10}
        eventPropGetter={eventPropGetter} // 선택적으로 이벤트 노드에 적용할 className의 객체를 반환하는 함수
        events={myEvents}
        onSelectSlot={newEvent}
        selectable
        // 아래는 DnD props
        onDropFromOutside={onDropFromOutside}
        onDragOver={customOnDragOver}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        resizable
      />
      <div className="border-[1px] border-black mt-2 p-2">
        {/* TODO: 이름 (만 7세) 형식으로 나오도록*/}
        {Object.entries(counters).map(([name, count]) => (
          <div
            draggable="true"
            key={name}
            onDragStart={() => handleDragStart({ title: formatName(name, count), name })}
          >
            {formatName(name, count)}
          </div>
        ))}
      </div>
    </div>
  );
}
