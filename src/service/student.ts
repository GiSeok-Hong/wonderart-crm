import { prisma } from '../../lib/prisma';

export async function getStudentList() {
  const studentList = await prisma.student.findMany({
    include: {
      guardian: {
        select: {
          phone: true,
        }
      },
    },
    orderBy: {
      id: 'asc',
    }
  });

  return studentList;
}