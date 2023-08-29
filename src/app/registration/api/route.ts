import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function POST(req: Request) {
  const studentData = await req.json();

  try {
    await prisma.student.create({
      data: {
        entranceDate: new Date(studentData.entranceDate),
        day: studentData.day,
        time: studentData.time,
        name: studentData.name,
        phone: studentData.phone,
        birthDate: new Date(studentData.birthDate),
        sex: studentData.sex,
        address: studentData.address,
        school: studentData.school,
        experience: studentData.experience,
        reason: studentData.reason,
        importantActivity: studentData.importantActivity,
        interestingActivity: studentData.interestingActivity,
        caution: studentData.caution,
        agree: studentData.agree,
        guardian: {
          create: { name: studentData.guardianName, phone: studentData.guardianPhone },
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
