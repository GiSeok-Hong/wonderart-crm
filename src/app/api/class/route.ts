import { createMonthlyClassList } from '@/service/class';
import moment from 'moment';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // TODO: cron jobs 가 정상적으로 작동시 아래 코드 적용하여 확인해보기
  // const authHeader = request.headers.get('authorization');
  // if (authHeader !== `Bearer ${process.env.NEXT_PUBLIC_CRON_SECRET}`) {
  //   return new Response('Unauthorized', {
  //     status: 401,
  //   });
  // }

  // const { yearMonth } = await request.json();

  const yearMonth = moment().format('YYYYMM');
  console.log('cronjob 테스트 : ', yearMonth);

  try {
    const classList = await createMonthlyClassList(yearMonth);
    return NextResponse.json({ data: classList }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
}
