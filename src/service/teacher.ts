import { prisma } from '../../lib/prisma';

export async function getTeacherList() {
  const teacherList = await prisma.teacher.findMany();
  return teacherList;
}

export async function createTeacher(data: { name: string; email: string; phone: string; password: string }) {
  if (!data) {
    throw new Error('데이터가 없습니다.');
  }

  const { email, name, phone, password } = data;

  const isExist = await prisma.teacher.findUnique({
    where: {
      email,
    },
  });

  if (isExist) throw new Error('이미 존재하는 이메일입니다.');

  try {
    const teacher = await prisma.teacher.create({
      data: {
        name,
        email,
        phone,
        password,
      },
    });
    return teacher;
  } catch (error) {
    throw new Error('데이터 생성에 실패했습니다.');
  }
}
