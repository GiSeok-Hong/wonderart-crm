'use client';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import TableTimeColumn from './TableTimeColumn';
import { forwardRef, useEffect, useState } from 'react';
import { type Class, type Student } from '@prisma/client';
import moment from 'moment';
import { getAge } from '@/helper/age';
import DefaultStudentList from './DefaultStudentList';
import FooterCalendar from '../Calendar/FooterCalendar';
import StudentRow from './StudentRow';
import Modal from 'react-modal';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { TIME_OPTION } from '@/consts/time-option';
import { DAY_OPTION } from '@/consts/day-option';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '250px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

type Form = {
  student: {
    id: number;
    name: string;
    birthDate: Date;
  } | null;
  startDate: string;
  time: [number, number];
  day: [number, number];
};

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

  const [modalIsOpen, setIsOpen] = useState(false);
  const { handleSubmit, register } = useForm<Form>({
    defaultValues: {
      student: null,
      startDate: moment(new Date()).format('YYYY.MM.DD'),
      time: [14, 15],
      day: [1, 3],
    },
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);
  };

  const onError: SubmitErrorHandler<Form> = (errors) => {
    console.log(errors);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
        <div
          onClick={(e) => {
            const studentId = (e.target as HTMLDivElement).dataset.id;
            if (studentId) {
              // 퇴원하기
            } else {
              // 추가하기
              setIsOpen(true);
            }
          }}
          className="schedule-table-content flex "
        >
          <TableTimeColumn />

          {weeklyScheduleList.length === 0 ? (
            <DefaultStudentList />
          ) : (
            <>
              {weeklyScheduleList?.map((schedule, i) => {
                return (
                  <div
                    key={schedule?.id}
                    className="schedule-table-student-list w-[104px] box-border border-r border-t border-black text-sm"
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
                            <StudentRow
                              key={student?.id}
                              id={student?.id}
                              name={student?.name}
                              birthDate={student?.birthDate}
                            />
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
                            <StudentRow
                              key={student?.id}
                              id={student?.id}
                              name={student?.name}
                              birthDate={student?.birthDate}
                            />
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
                            <StudentRow
                              key={student?.id}
                              id={student?.id}
                              name={student?.name}
                              birthDate={student?.birthDate}
                            />
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
                            <StudentRow
                              key={student?.id}
                              id={student?.id}
                              name={student?.name}
                              birthDate={student?.birthDate}
                            />
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
                            <StudentRow
                              key={student?.id}
                              id={student?.id}
                              name={student?.name}
                              birthDate={student?.birthDate}
                            />
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col h-full justify-between items-center gap-2"
        >
          <h2 className="font-bold text-xl">수업 생성</h2>
          <div className="w-full flex justify-between gap-3">
            <label
              className="w-24"
              htmlFor="name"
            >
              이름
            </label>
            <input
              className="border border-black flex-1"
              type="text"
              maxLength={5}
              {...register('student.name', { required: true, maxLength: 5 })}
            />
          </div>
          <div className="w-full flex justify-between gap-3">
            <label
              className="w-24"
              htmlFor="startDate"
            >
              시작일
            </label>
            <input
              className="border border-black flex-1"
              type="text"
              maxLength={20}
              {...register('startDate', { required: true, maxLength: 20, minLength: 4 })}
            />
          </div>
          <div className="w-full flex justify-between gap-3">
            <label
              className="w-24"
              htmlFor="times1"
            >
              요일/시간
            </label>
            <div className="w-full flex justify-between gap-3">
              <Select
                style={{ flex: 1 }}
                {...register('day.0', { required: true })}
              >
                {DAY_OPTION.map((day) => {
                  return (
                    <Option
                      key={day.value}
                      value={day.value}
                    >
                      {day.name}
                    </Option>
                  );
                })}
              </Select>
              <Select
                style={{ flex: 1 }}
                {...register('time.0', { required: true })}
              >
                {TIME_OPTION.map((time) => {
                  return (
                    <Option
                      key={time.value}
                      value={time.value}
                    >
                      {time.name}
                    </Option>
                  );
                })}
              </Select>
              <Select
                style={{ flex: 1 }}
                {...register('day.1')}
              >
                {DAY_OPTION.map((day) => {
                  return (
                    <Option
                      key={day.value}
                      value={day.value}
                    >
                      {day.name}
                    </Option>
                  );
                })}
              </Select>
              <Select
                style={{ flex: 1 }}
                {...register('time.1')}
              >
                {TIME_OPTION.map((time) => {
                  return (
                    <Option
                      key={time.value}
                      value={time.value}
                    >
                      {time.name}
                    </Option>
                  );
                })}
              </Select>
            </div>
          </div>

          <div className="flex flex-1 justify-center items-end gap-4">
            <button
              type="button"
              className="border rounded-[10px] bg-white text-primary-color w-32 h-[40px]"
              onClick={closeModal}
            >
              취소
            </button>
            <button
              type="submit"
              className="border rounded-[10px] bg-primary-color text-white w-32 h-[40px]"
            >
              저장
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

const Select = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>, ref) => {
    return (
      <select
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  },
);
Select.displayName = 'Select';

const Option = ({ children, ...props }: React.OptionHTMLAttributes<HTMLOptionElement>) => {
  return <option {...props}>{children}</option>;
};
