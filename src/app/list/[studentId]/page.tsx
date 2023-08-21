import StudentDetailForm from '@/components/StudentDetailForm';
import { getStudentMockData } from '@/service/student';

type Props = {
  params: {
    studentId: string;
  };
};

export default async function StudentDetailPage({ params: { studentId } }: Props) {
  const studentData = await getStudentMockData(studentId);

  return <StudentDetailForm {...studentData} />;
}
