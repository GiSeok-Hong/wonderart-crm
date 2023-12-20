import moment from 'moment';
import { prisma } from '../../lib/prisma';

const START_TIME_HOUR = 14;
const END_TIME_HOUR = 19;

const SUNDAY = 0;
const SATURDAY = 6;

export async function createMonthlyClassList(yearMonth: string) {
  if (!yearMonth) {
    throw new Error('yearMonth is required');
  }

  const result = [];

  const startDate = moment(yearMonth, 'YYYYMM').startOf('month');
  const endDate = moment(yearMonth, 'YYYYMM').endOf('month');

  const studentList = await prisma.student.findMany({
    where: {
      isRegister: {
        equals: true,
      },
    },
  });

  for (let date = startDate; date.isBefore(endDate); date.add(1, 'day')) {
    if (date.day() === SUNDAY || date.day() === SATURDAY) {
      continue;
    }
    const dateObj = date.toDate();
    const dayOfWeek = date.day();

    for (let timeHour = START_TIME_HOUR; timeHour < END_TIME_HOUR; timeHour++) {
      const createdStudentList = [];
      for (const student of studentList) {
        const { time, day } = student;
        const [day0, day1] = day;
        const [time0, time1] = time;

        if ((day0 === dayOfWeek && time0 === timeHour) || (day1 === dayOfWeek && time1 === timeHour)) {
          createdStudentList.push(student);
        }
      }

      result.push(
        await prisma.class.create({
          data: {
            classDate: moment(dateObj).add(timeHour, 'hour').toDate(),
            studentList: {
              createMany: {
                data: createdStudentList.map((student) => ({
                  studentId: student.id,
                  isAttendance: false,
                })),
              },
            },
          },
        }),
      );
    }
  }
  return result;
}

export async function createClassFrom(startDate, studentId, day, time) {
  if (!startDate || !studentId || !day || !time) {
    throw new Error('startDate, studentId, day, time are required');
  }

  const student = await prisma.student.findUnique({
    where: {
      id: studentId,
      isRegister: true
    },
  });

  if (!student) {
    throw new Error('student not found');
  }

  const startDateObj = new Date(startDate);
  const endDateObj = moment(startDateObj).endOf('month').toDate();

  const classList = await prisma.class.findMany({
    select: {
      id: true,
      classDate: true,
    },
    where: {
      classDate: {
        gte: startDateObj,
        lte: endDateObj,
      }
    }
  });

  console.log('항목', classList, student)

  // TODO: classList가 없을 때에 대한 처리 필요

  const [day0, day1] = day;
  const [time0, time1] = time;

  // const result = [];

  classList.forEach((classObj) => {
    const classDate = moment(classObj.classDate);
    const dayOfWeek = classDate.day();

    if ((day0 === dayOfWeek && time0 === classDate.hour()) || (day1 === dayOfWeek && time1 === classDate.hour())) {
      prisma.class.update({
        where: {
          id: classObj.id
        },
        data: {
          studentList: {
            update: {
              data: {
                isAttendance: false,
                studentId: student.id,
              },
              where: {
                studentId_classId: {
                  classId: classObj.id,
                  studentId: student.id,
                }
              }

            }
          }
        },

      })
    }
  }
  );

  // await prisma.$transaction(result);

  // return result;
}