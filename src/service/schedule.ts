import { prisma } from '../../lib/prisma';

export async function getScheduleList() {
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
