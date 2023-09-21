import { getTeacherList } from "@/service/teacher";
import { NextResponse } from "next/server";

export async function GET() {
  const teacherList = await getTeacherList();
  return NextResponse.json(teacherList, { status: 200 });
}