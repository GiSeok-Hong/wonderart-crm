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

      const classDate = moment(dateObj).add(timeHour, 'hour').toDate();
      console.log('day', classDate);
      result.push(await prisma.class.create({
        data: {
          classDate,
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

export async function deleteAllClassList(yearMonth: string) {
  if (!yearMonth) {
    throw new Error('yearMonth is required')
  }
  const classDelete = prisma.class.deleteMany({
    where: {
      classDate: {

        gte: new Date(2023, 11, 1)
      }

    }
  });
  const studentOnClassDelete = prisma.studentOnClass.deleteMany({
    where: {
      classId: {
        gte: 11
      }
    }
  });
  return await prisma.$transaction([classDelete, studentOnClassDelete]);
}