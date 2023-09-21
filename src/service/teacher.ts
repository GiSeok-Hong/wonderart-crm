import { prisma } from "../../lib/prisma";

export async function getTeacherList() {
  const teacherList = await prisma.teacher.findMany();
  return teacherList;
}