"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "./DnDCalendar.css";
import moment from "moment";
import "moment/locale/ko";

import WeeklyCalendarToolbar from "./WeeklyCalendarToolbar";
import { useCallback, useState } from "react";

export default function WeeklyCalendar() {
  moment.locale("ko");
  const localizer = momentLocalizer(moment);
  const year = new Date().getFullYear();

  // DnD 관련 기본 예제 내용 -> 기능 추가시 수정 필요
  const now = new Date();

  const CustomEvent = [
    {
      id: 0,
      title: "All Day Event very long title",
      allDay: true,
      start: new Date(2015, 3, 0),
      end: new Date(2015, 3, 1),
    },
    {
      id: 1,
      title: "Long Event",
      start: new Date(2015, 3, 7),
      end: new Date(2015, 3, 10),
    },

    {
      id: 2,
      title: "DTS STARTS",
      start: new Date(2016, 2, 13, 0, 0, 0),
      end: new Date(2016, 2, 20, 0, 0, 0),
    },

    {
      id: 3,
      title: "DTS ENDS",
      start: new Date(2016, 10, 6, 0, 0, 0),
      end: new Date(2016, 10, 13, 0, 0, 0),
    },

    {
      id: 4,
      title: "Some Event",
      start: new Date(2015, 3, 9, 0, 0, 0),
      end: new Date(2015, 3, 10, 0, 0, 0),
    },
    {
      id: 5,
      title: "Conference",
      start: new Date(2015, 3, 11),
      end: new Date(2015, 3, 13),
      desc: "Big conference for important people",
    },
    {
      id: 6,
      title: "Meeting",
      start: new Date(2015, 3, 12, 10, 30, 0, 0),
      end: new Date(2015, 3, 12, 12, 30, 0, 0),
      desc: "Pre-meeting meeting, to prepare for the meeting",
    },
    {
      id: 7,
      title: "Lunch",
      start: new Date(2015, 3, 12, 12, 0, 0, 0),
      end: new Date(2015, 3, 12, 13, 0, 0, 0),
      desc: "Power lunch",
    },
    {
      id: 8,
      title: "Meeting",
      start: new Date(2015, 3, 12, 14, 0, 0, 0),
      end: new Date(2015, 3, 12, 15, 0, 0, 0),
    },
    {
      id: 9,
      title: "Happy Hour",
      start: new Date(2015, 3, 12, 17, 0, 0, 0),
      end: new Date(2015, 3, 12, 17, 30, 0, 0),
      desc: "Most important meal of the day",
    },
    {
      id: 10,
      title: "Dinner",
      start: new Date(2015, 3, 12, 20, 0, 0, 0),
      end: new Date(2015, 3, 12, 21, 0, 0, 0),
    },
    {
      id: 11,
      title: "Planning Meeting with Paige",
      start: new Date(2015, 3, 13, 8, 0, 0),
      end: new Date(2015, 3, 13, 10, 30, 0),
    },
    {
      id: 11.1,
      title: "Inconvenient Conference Call",
      start: new Date(2015, 3, 13, 9, 30, 0),
      end: new Date(2015, 3, 13, 12, 0, 0),
    },
    {
      id: 11.2,
      title: "Project Kickoff - Lou's Shoes",
      start: new Date(2015, 3, 13, 11, 30, 0),
      end: new Date(2015, 3, 13, 14, 0, 0),
    },
    {
      id: 11.3,
      title: "Quote Follow-up - Tea by Tina",
      start: new Date(2015, 3, 13, 15, 30, 0),
      end: new Date(2015, 3, 13, 16, 0, 0),
    },
    {
      id: 12,
      title: "Late Night Event",
      start: new Date(2015, 3, 17, 19, 30, 0),
      end: new Date(2015, 3, 18, 2, 0, 0),
    },
    {
      id: 12.5,
      title: "Late Same Night Event",
      start: new Date(2015, 3, 17, 19, 30, 0),
      end: new Date(2015, 3, 17, 23, 30, 0),
    },
    {
      id: 13,
      title: "Multi-day Event",
      start: new Date(2015, 3, 20, 19, 30, 0),
      end: new Date(2015, 3, 22, 2, 0, 0),
    },
    {
      id: 14,
      title: "홍길동",
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    // {
    //   id: 15,
    //   title: "Point in Time Event",
    //   start: now,
    //   end: now,
    // },
    {
      id: 16,
      title: "Video Record",
      start: new Date(2015, 3, 14, 15, 30, 0),
      end: new Date(2015, 3, 14, 19, 0, 0),
    },
    {
      id: 17,
      title: "Dutch Song Producing",
      start: new Date(2015, 3, 14, 16, 30, 0),
      end: new Date(2015, 3, 14, 20, 0, 0),
    },
    {
      id: 18,
      title: "Itaewon Halloween Meeting",
      start: new Date(2015, 3, 14, 16, 30, 0),
      end: new Date(2015, 3, 14, 17, 30, 0),
    },
    {
      id: 19,
      title: "Online Coding Test",
      start: new Date(2015, 3, 14, 17, 30, 0),
      end: new Date(2015, 3, 14, 20, 30, 0),
    },
    {
      id: 20,
      title: "An overlapped Event",
      start: new Date(2015, 3, 14, 17, 0, 0),
      end: new Date(2015, 3, 14, 18, 30, 0),
    },
    {
      id: 21,
      title: "Phone Interview",
      start: new Date(2015, 3, 14, 17, 0, 0),
      end: new Date(2015, 3, 14, 18, 30, 0),
    },
    {
      id: 22,
      title: "Cooking Class",
      start: new Date(2015, 3, 14, 17, 30, 0),
      end: new Date(2015, 3, 14, 19, 0, 0),
    },
    {
      id: 23,
      title: "Go to the gym",
      start: new Date(2015, 3, 14, 18, 30, 0),
      end: new Date(2015, 3, 14, 20, 0, 0),
    },
    {
      id: 24,
      title: "DST ends on this day (Europe)",
      start: new Date(2022, 9, 30, 0, 0, 0),
      end: new Date(2022, 9, 30, 4, 30, 0),
    },
    {
      id: 25,
      title: "DST ends on this day (America)",
      start: new Date(2022, 10, 6, 0, 0, 0),
      end: new Date(2022, 10, 6, 4, 30, 0),
    },
    {
      id: 26,
      title: "DST starts on this day (America)",
      start: new Date(2023, 2, 12, 0, 0, 0),
      end: new Date(2023, 2, 12, 4, 30, 0),
    },
    {
      id: 27,
      title: "DST starts on this day (Europe)",
      start: new Date(2023, 2, 26, 0, 0, 0),
      end: new Date(2023, 2, 26, 4, 30, 0),
    },
  ];

  const adjEvents = CustomEvent.map((it, ind) => ({
    ...it,
    isDraggable: ind % 2 === 0,
  }));

  const formatName = (name: string, count: number) => `${name} ID ${count}`;

  const [myEvents, setMyEvents] = useState(adjEvents);
  const [draggedEvent, setDraggedEvent] = useState({ title: "", name: "" });
  const [counters, setCounters] = useState({ item1: 0, item2: 0 });

  const eventPropGetter = useCallback(
    (event: any) => ({
      ...(event.isDraggable
        ? { className: "isDraggable" }
        : { className: "nonDraggable" }),
    }),
    []
  );

  const handleDragStart = useCallback(
    (event: any) => setDraggedEvent(event),
    []
  );

  const customOnDragOver = useCallback(
    (dragEvent: any) => {
      // check for undroppable is specific to this example
      // and not part of API. This just demonstrates that
      // onDragOver can optionally be passed to conditionally
      // allow draggable items to be dropped on cal, based on
      // whether event.preventDefault is called

      if (draggedEvent !== null) {
        console.log("preventDefault");
        dragEvent.preventDefault();
      }
    },
    [draggedEvent]
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
        const existing =
          prev.find((ev: { id: any }) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev: { id: any }) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end, allDay }];
      });
    },
    [setMyEvents]
  );

  const newEvent = useCallback(
    (event: any) => {
      setMyEvents((prev) => {
        const idList = prev.map((item) => item.id);
        const newId = Math.max(...idList) + 1;
        return [...prev, { ...event, id: newId }];
      });
    },
    [setMyEvents]
  );

  const onDropFromOutside = useCallback(
    ({
      start,
      end,
      allDay: isAllDay,
    }: {
      start: any;
      end: any;
      allDay: any;
    }) => {
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
      setDraggedEvent({ title: "", name: "" });
      setCounters((prev: any) => {
        const { [name]: count } = prev;
        return {
          ...prev,
          [name]: count + 1,
        };
      });
      newEvent(event);
    },
    [draggedEvent, counters, setDraggedEvent, setCounters, newEvent]
  );

  const resizeEvent = useCallback(
    ({ event, start, end }: { event: any; start: any; end: any }) => {
      setMyEvents((prev: any) => {
        const existing =
          prev.find((ev: { id: any }) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev: { id: any }) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end }];
      });
    },
    [setMyEvents]
  );

  const DnDCalendar = withDragAndDrop(Calendar);

  return (
    <div>
      <DnDCalendar
        localizer={localizer}
        style={{ minWidth: 600 }}
        components={{ toolbar: WeeklyCalendarToolbar }}
        views={["work_week"]}
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
            onDragStart={() =>
              handleDragStart({ title: formatName(name, count), name })
            }
          >
            {formatName(name, count)}
          </div>
        ))}
      </div>
    </div>
  );
}
