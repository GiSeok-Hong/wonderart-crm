import { getAllScheduleMemo } from '@/service/scheduleMemo';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET() {
  try {
    const memos = await getAllScheduleMemo();
    return NextResponse.json(memos, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export async function PUT(request: NextRequest) {
  const body = await request.json();

  if (body === undefined) {
    return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
  }

  const { id, memo1, memo2, memo3, memo4, memo5, memo6 } = body;

  try {
    const result = await prisma.scheduleMemo.update({
      where: { id: Number(id) },
      data: {
        memo1,
        memo2,
        memo3,
        memo4,
        memo5,
        memo6,
      },
    });
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: '메모 수정에 실패했습니다.' }, { status: 500 });
  }
}
