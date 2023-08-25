import StudentDetailForm from '@/components/StudentDetailForm';
import { getStudent } from '@/service/student';
import { Student } from '@/types/student';

type Props = {
  params: {
    studentId: string;
  };
};

export default async function StudentDetailPage({ params: { studentId } }: Props) {
  // TODO: 추후 API 변경 되면 수정 필요
  // 임시로 build를 위해 수정
  // const studentData = await getStudent(Number(studentId));

  return <StudentDetailForm studentData={{} as Student} />;
}
