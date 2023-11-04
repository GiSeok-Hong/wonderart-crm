import { prisma } from '../../lib/prisma';

export async function getAllScheduleMemo() {
  const allScheduleMemo = await prisma.scheduleMemo.findMany();

  if (!allScheduleMemo) throw new Error('스케쥴 메모가 존재하지 않습니다.');

  return allScheduleMemo;
}
