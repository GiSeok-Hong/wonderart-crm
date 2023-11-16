import { prisma } from "../../lib/prisma";

type Params = {
  startDate: string;
  time: number[];
  day: number[];
  studentId: number;
}
export async function createClass({
  startDate,
  time,
  day,
  studentId,
}: Params) {
  // TODO: 수업 생성 로직
  // const studentList = prisma.studentOnClass.findMany({include: {class}})
  // prisma.class.create({
  //   data: {
  //     classDate: new Date(startDate),
  //     studentList: {
  //       createMany: {
  //         data: [
  //           ...
  //         ]
  //       }
  //     }
  //   }
  // })
}