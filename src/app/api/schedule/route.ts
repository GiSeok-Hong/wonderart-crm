import { getScheduleList } from '@/service/schedule';
import { NextResponse } from 'next/server';

export async function GET() {
  const scheduleList = await getScheduleList();
  return NextResponse.json(scheduleList, { status: 200 });
}
