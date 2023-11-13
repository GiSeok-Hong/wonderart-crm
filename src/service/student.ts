import { prisma } from '../../lib/prisma';

export async function getStudent(id: number) {
  const student = await prisma.student.findUnique({
    where: {
      id,
    },
    include: {
      guardian: {
        select: {
          phone: true,
          name: true,
        },
      },
    },
  });
  if (!student) throw new Error('학생이 존재하지 않습니다.');
  return student;
}

export async function getStudentList() {
  const studentList = await prisma.student.findMany({
    include: {
      guardian: {
        select: {
          phone: true,
        },
      },
    },
    orderBy: {
      id: 'asc',
    },
  });

  return studentList;
}
