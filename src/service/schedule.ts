import { prisma } from '../../lib/prisma';

export async function getAllScheduleList() {
  const scheduleList = await prisma.class.findMany({
    include: {
      studentList: {
        select: {
          student: true,
          isAttendance: true,
        },
      },
    },
  });
  return scheduleList;
}
