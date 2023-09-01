import StudentDetailForm from '@/components/StudentDetailForm';
import { getStudent } from '@/service/student';

type Props = {
  params: {
    id: string;
  };
};

export default async function StudentDetailPage({ params: { id } }: Props) {
  // TODO: 추후 API 변경 되면 수정 필요
  // 임시로 build를 위해 수정
  const studentData = await getStudent(Number(id));

  return <StudentDetailForm studentData={studentData} />;
}
