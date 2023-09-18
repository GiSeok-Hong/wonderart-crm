import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';

type Params = {
  id: string;
};

export async function PUT(request: NextRequest, context: { params: Params }) {
  const { id } = context.params;
  const body = await request.json();
  if (body === undefined) {
    return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
  }

  const {
    address,
    birthDate,
    entranceDate,
    guardianName,
    guardianPhone,
    name,
    phone,
    sex,
    school,
    time,
    day,
    experience,
    reason,
    importantActivity,
    interestingActivity,
    teacherMemo,
    caution,
    isRegister,
  } = body;

  try {
    const result = await prisma.student.update({
      where: { id: Number(id) },
      data: {
        address,
        birthDate,
        entranceDate,
        guardian: {
          update: {
            name: guardianName,
            phone: guardianPhone,
          },
        },
        name,
        phone,
        sex,
        school,
        time,
        day,
        experience,
        reason,
        importantActivity,
        interestingActivity,
        teacherMemo,
        caution,
        isRegister,
      },
    });
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: '학생 정보 수정에 실패했습니다.' }, { status: 500 });
  }
}
