import { createMonthlyClassList } from "@/service/class";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const { yearMonth } = await request.json();
  try {
    const classList = await createMonthlyClassList(yearMonth);
    return NextResponse.json({ data: classList }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
}
