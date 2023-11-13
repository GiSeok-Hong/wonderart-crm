'use client';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import TableTimeColumn from './TableTimeColumn';
import { useEffect, useState } from 'react';
import { type Class, type Student } from '@prisma/client';
import moment from 'moment';
import { getAge } from '@/helper/age';
import DefaultStudentList from './DefaultStudentList';
import FooterCalendar from '../Calendar/FooterCalendar';

type StudentItem = { student: Student } & { isAttendance: boolean };
type ScheduleItem = Class & { studentList: StudentItem[] };

const dayList = ['월', '화', '수', '목', '금'];

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
          {dayList.map((day, i) => {
            return (
              <div
                key={i}
                className="w-[104px]  border-black bg-primary-color border-r flex justify-center items-center"
              >
                {moment(startDate)?.add(i, 'days').format(`${day} (D일)`)}
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
              {weeklyScheduleList?.map((schedule, i) => {
                return (
                  <div
                    key={schedule?.id}
                    className="schedule-table-student-list w-[104px] box-boder border-r border-t  border-black text-sm"
                  >
                    {/* 2시 수업 */}
                    <div className="h-[180px] border-black border-b">
                      {schedule?.studentList
                        .filter((studentItem) => {
                          const { student } = studentItem;
                          const classIndex = student?.day?.findIndex((day) => day === i + 1);
                          return student?.time[classIndex] === 14;
                        })
                        .map((studentItem) => {
                          const { student, isAttendance } = studentItem;
                          // TODO: isAttendance input checkbox 형식으로 작업 필요
                          return (
                            <div
                              key={student?.id}
                              className="h-[30px] pl-1"
                            >
                              {student?.name}, {getAge(student?.birthDate)}세
                            </div>
                          );
                        })}
                    </div>

                    {/* 3시 수업 */}
                    <div className="h-[180px] border-black border-b bg-gray-100">
                      {schedule?.studentList
                        .filter((studentItem) => {
                          const { student } = studentItem;
                          const classIndex = student?.day?.findIndex((day) => day === i + 1);
                          return student?.time[classIndex] === 15;
                        })
                        .map((studentItem) => {
                          const { student } = studentItem;
                          return (
                            <div
                              key={student?.id}
                              className="h-[30px] pl-1"
                            >
                              {student?.name}, {getAge(student?.birthDate)}세
                            </div>
                          );
                        })}
                    </div>

                    {/* 4시 수업 */}
                    <div className="h-[180px] border-black border-b">
                      {schedule?.studentList
                        .filter((studentItem) => {
                          const { student } = studentItem;
                          const classIndex = student?.day?.findIndex((day) => day === i + 1);
                          return student?.time[classIndex] === 16;
                        })
                        .map((studentItem) => {
                          const { student } = studentItem;
                          return (
                            <div
                              key={student?.id}
                              className="h-[30px] pl-1"
                            >
                              {student?.name}, {getAge(student?.birthDate)}세
                            </div>
                          );
                        })}
                    </div>

                    {/* 5시 수업 */}
                    <div className="h-[180px] border-black border-b bg-gray-100">
                      {schedule?.studentList
                        .filter((studentItem) => {
                          const { student } = studentItem;
                          const classIndex = student?.day?.findIndex((day) => day === i + 1);
                          return student?.time[classIndex] === 17;
                        })
                        .map((studentItem) => {
                          const { student } = studentItem;
                          return (
                            <div
                              key={student?.id}
                              className="h-[30px] pl-1"
                            >
                              {student?.name}, {getAge(student?.birthDate)}세
                            </div>
                          );
                        })}
                    </div>

                    {/* 6시 수업 */}
                    <div className="h-[180px] border-black border-b">
                      {schedule?.studentList
                        .filter((studentItem) => {
                          const { student } = studentItem;
                          const classIndex = student?.day?.findIndex((day) => day === i + 1);
                          return student?.time[classIndex] === 18;
                        })
                        .map((studentItem) => {
                          const { student } = studentItem;
                          return (
                            <div
                              key={student?.id}
                              className="h-[30px] pl-1"
                            >
                              {student?.name}, {getAge(student?.birthDate)}세
                            </div>
                          );
                        })}
                    </div>
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
