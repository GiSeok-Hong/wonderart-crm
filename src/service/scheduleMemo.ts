import { prisma } from '../../lib/prisma';

export async function getAllScheduleMemo() {
  const allScheduleMemo = await prisma.scheduleMemo.findMany();
  return allScheduleMemo;
}
