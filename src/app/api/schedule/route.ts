import { getAllScheduleList } from '@/service/schedule';
import { NextResponse } from 'next/server';

export async function GET() {
  const scheduleList = await getAllScheduleList();
  return NextResponse.json(scheduleList, { status: 200 });
}
