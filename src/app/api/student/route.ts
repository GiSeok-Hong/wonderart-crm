import { getStudentList } from "@/service/student";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const students = await getStudentList();
    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}