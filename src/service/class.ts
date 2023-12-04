import moment from "moment";
import { prisma } from "../../lib/prisma";

export async function createClassList(yearMonth: string) {
  if (!yearMonth) {
    throw new Error('yearMonth is required')
  }

  const result = [];

  const startDate = moment(yearMonth, 'YYYY-MM').startOf('month');
  const endDate = moment(yearMonth, 'YYYY-MM').endOf('month');

  const studentList = await prisma.student.findMany();

  console.log(startDate, endDate, yearMonth)

  for (let date = startDate; date.isBefore(endDate); date.add(1, 'day')) {
    const dateObj = date.toDate();
    const dayOfWeek = date.day();

    console.log('day', date);

    for (let timeHour = 14; timeHour < 20; timeHour++) {
      const createdStudentList = [];
      for (const student of studentList) {
        const { time, day } = student;
        if (day.includes(dayOfWeek) && time.includes(timeHour)) {
          createdStudentList.push(student);

        }
      }

      result.push(await prisma.class.create({
        data: {
          classDate: moment(dateObj).set('hour', timeHour).toDate(),
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