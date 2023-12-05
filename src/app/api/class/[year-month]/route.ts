import { createClassList, deleteAllClassList } from "@/service/class";
import { NextResponse } from "next/server";

export async function POST(request: Request, context: { params: { 'year-month': string } }) {

  try {
    const classList = await createClassList(context.params['year-month']);
    return NextResponse.json({ message: 'helloworld', data: classList }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: { params: { 'year-month': string } }) {
  await deleteAllClassList(context.params['year-month']);
  return NextResponse.json({ message: 'helloworld' }, { status: 200 });
}
