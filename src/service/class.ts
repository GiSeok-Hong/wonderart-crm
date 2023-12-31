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
