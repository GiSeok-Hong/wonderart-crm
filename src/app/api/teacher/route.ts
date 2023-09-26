import { createTeacher, getTeacherList } from "@/service/teacher";
import { NextResponse } from "next/server";

export async function GET() {
  const teacherList = await getTeacherList();
  return NextResponse.json(teacherList, { status: 200 });
}

export async function POST(request: Request) {
  return NextResponse.json(await createTeacher(await request.json()), { status: 201 })
};