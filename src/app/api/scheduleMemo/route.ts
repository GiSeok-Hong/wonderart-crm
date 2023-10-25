import { getAllScheduleMemo } from '@/service/scheduleMemo';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const memos = await getAllScheduleMemo();
    return NextResponse.json(memos, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
