import { prisma } from "../../lib/prisma";

export async function getTeacherList() {
  const teacherList = await prisma.teacher.findMany();
  return teacherList;
}

export async function createTeacher(data: { name: string, email: string, phone: string }) {
  if (!data) {
    throw new Error("데이터가 없습니다.");
  }

  const { email, name, phone } = data;

  try {
    const teacher = await prisma.teacher.create({
      data: {
        name,
        email,
        phone,
        password: '1234',
      },
    });
    return teacher;
  } catch (error) {
    throw new Error("데이터 생성에 실패했습니다.");
  }


}