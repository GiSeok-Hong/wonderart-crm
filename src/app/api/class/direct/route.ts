import { createClassFrom } from "@/service/class";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const { startDate, studentId, day, time } = await request.json();
  try {
    const classObject = await createClassFrom(startDate, studentId, day, time);
    return NextResponse.json({ data: classObject }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
}
