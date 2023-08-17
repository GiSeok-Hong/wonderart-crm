import { Student } from "@/types/student";
import { StudentList } from "../../data/studentMockData";

export async function getStudentMockData(studentId: string): Promise<Student> {
  const studentData = await StudentList.find(
    (student) => student.id.toString() === studentId
  );

  if (!studentData) throw new Error(`학생 정보를 찾을 수 없습니다.`);

  return studentData;
}
