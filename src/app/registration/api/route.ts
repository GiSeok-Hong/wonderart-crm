import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function POST(req: Request) {
  const data = await req.json();

  if (data === null || data === undefined) throw Error('non null');

  const {
    entranceDate,
    day,
    time,
    name,
    phone,
    birthDate,
    sex,
    address,
    school,
    experience,
    reason,
    importantActivity,
    interestingActivity,
    caution,
    agree,
    guardianName,
    guardianPhone,
  } = data;

  try {
    await prisma.student.create({
      data: {
        entranceDate: new Date(entranceDate),
        day,
        time,
        name,
        phone,
        birthDate: new Date(birthDate),
        sex,
        address,
        school,
        experience,
        reason,
        importantActivity,
        interestingActivity,
        caution,
        agree,
        guardian: {
          create: { name: guardianName, phone: guardianPhone },
        },
        // TODO: 학생 등록 할 때 알맞은 수업 생성 되도록
        class: {
          create: [
            {
              class: {
                create: {
                  classTime: new Date(),
                },
              },
            },
          ],
        },
      },
    });

    return NextResponse.json({ message: '학원생 등록이 완료되었습니다..', success: true, status: 200 });
  } catch {
    return NextResponse.json({ message: '학원생 등록 실패', success: false, status: 400 });
  }
}
