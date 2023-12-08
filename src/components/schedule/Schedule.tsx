'use client';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import TableTimeColumn from './TableTimeColumn';
import { useEffect, useState } from 'react';
import { type Class, type Student } from '@prisma/client';
import moment from 'moment';
import { getAge } from '@/helper/age';
import DefaultStudentList from './DefaultStudentList';
import FooterCalendar from '../Calendar/FooterCalendar';
import { DAY_OPTION } from '@/consts/day-option';
import { TIME_OPTION } from '@/consts/time-option';

type StudentItem = { student: Student } & { isAttendance: boolean };
type ScheduleItem = Class & { studentList: StudentItem[] };

export default function Schedule() {
  const [allScheduleList, setAllScheduleList] = useState<ScheduleItem[]>([]);
  const [weeklyScheduleList, setWeeklyScheduleList] = useState<ScheduleItem[]>([]);
  const [startDate, setStartDate] = useState(() => {
    const now = moment();
    if (now.day() === 0) {
      return now.add(1, 'days').format('YYYY-MM-DD');
    } else if (now.day() === 6) {
      return now.add(2, 'days').format('YYYY-MM-DD');
    } else {
      return now.subtract(now.day() - 1, 'days').format('YYYY-MM-DD');
    }
  });

  const fetchAllScheduleList = async () => {
    const scheduleList: ScheduleItem[] = await fetch(`/api/schedule`).then((res) => res.json());
    setAllScheduleList(scheduleList);
    calculateWeeklyScheduleList(scheduleList, startDate);
  };

  const calculateWeeklyScheduleList = (scheduleList: ScheduleItem[], startDate: string) => {
    const endDate = moment(startDate).add(4, 'days').format('YYYY-MM-DD');

    const result = scheduleList?.filter((schedule) =>
      moment(moment(schedule.classDate).format('YYYY-MM-DD')).isBetween(startDate, endDate, undefined, '[]'),
    );

    setWeeklyScheduleList(result);
  };

  const changeWeekOnClick = (action: 'PREV' | 'NEXT') => {
    let newStartDate: string;
    if (action === 'PREV') {
      newStartDate = moment(startDate).subtract(1, 'weeks').format('YYYY-MM-DD');
    } else {
      newStartDate = moment(startDate).add(1, 'weeks').format('YYYY-MM-DD');
    }
    setStartDate(newStartDate);
    calculateWeeklyScheduleList(allScheduleList, newStartDate);
  };

  useEffect(() => {
    fetchAllScheduleList();
  }, []);

  return (
    <div className="w-[600px] box-border">
      {/* 스케쥴 툴바 */}
      <div className="schedule-toolbar h-[30px] mb-[10px] flex justify-between items-center">
        <div onClick={() => changeWeekOnClick('PREV')}>
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-center text-xl font-bold">{moment(startDate).format('MM월')}</h1>
        <div onClick={() => changeWeekOnClick('NEXT')}>
          <AiOutlineArrowRight />
        </div>
      </div>

      {/* 스케쥴 테이블 */}
      <div className="schedule-table mb-5">
        {/* 테이블 헤더 */}
        <div className="schedule-table-header  flex border-t border-black text-center h-[30px]">
          <div className="w-[80px]  border-black border-x"></div>
          {DAY_OPTION.map((day, i) => {
            return (
              <div
                key={day.value}
                className="w-[104px]  border-black bg-primary-color border-r flex justify-center items-center"
              >
                {moment(startDate)?.add(i, 'days').format(`${day.name} (D일)`)}
              </div>
            );
          })}
        </div>

        {/* 테이블 컨텐트 */}
        <div className="schedule-table-content flex ">
          <TableTimeColumn />

          {weeklyScheduleList.length === 0 ? (
            <DefaultStudentList />
          ) : (
            <>
              {DAY_OPTION.map((day) => {
                return (
                  <div
                    key={day.value}
                    className="schedule-table-student-list w-[104px] box-boder border-r border-t  border-black text-sm"
                  >
                    {TIME_OPTION.map((time, i) => {
                      return (
                        <div
                          key={time.value}
                          className={`h-[180px] border-black border-b ` + `${i % 2 === 0 ? '' : ` bg-gray-100`}`}
                        >
                          {weeklyScheduleList
                            .filter((scheduleItem) => {
                              const { classDate } = scheduleItem;
                              const scheduleDay = moment(classDate).day();
                              const scheduleTime = moment(classDate).hours();
                              return scheduleDay === day.value && scheduleTime === time.value;
                            })
                            .map((filterdSchedule) => {
                              const { studentList } = filterdSchedule;
                              return studentList.map((student) => {
                                return (
                                  <div
                                    key={student?.student.id}
                                    className="h-[30px] pl-1"
                                  >
                                    {student?.student.name}, {getAge(student?.student.birthDate)}세
                                  </div>
                                );
                              });
                            })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>

      <FooterCalendar />
    </div>
  );
}
