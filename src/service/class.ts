import moment from "moment";
import { prisma } from "../../lib/prisma";

const START_TIME_HOUR = 14;
const END_TIME_HOUR = 19;

export async function createMonthlyClassList(yearMonth: string) {
  if (!yearMonth) {
    throw new Error('yearMonth is required')
  }

  const result = [];

  const startDate = moment(yearMonth, 'YYYYMM').startOf('month');
  const endDate = moment(yearMonth, 'YYYYMM').endOf('month');

  const studentList = await prisma.student.findMany();



  for (let date = startDate; date.isBefore(endDate); date.add(1, 'day')) {
    const dateObj = date.toDate();
    const dayOfWeek = date.day();

    for (let timeHour = START_TIME_HOUR; timeHour < END_TIME_HOUR; timeHour++) {
      const createdStudentList = [];
      for (const student of studentList) {
        const { time, day } = student;
        if (day.includes(dayOfWeek) && time.includes(timeHour)) {
          createdStudentList.push(student);

        }
      }

      result.push(await prisma.class.create({
        data: {
          classDate: moment(dateObj).add(timeHour, 'hour').toDate(),
          studentList: {
            createMany: {
              data: createdStudentList.map(student => ({
                studentId: student.id,
                isAttendance: false,
              }))
            }
          }
        }
      }))
    }
  }
  return result;
}
