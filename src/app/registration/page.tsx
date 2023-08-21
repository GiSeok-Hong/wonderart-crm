import Form from '@/components/Form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '입학원서',
  description: '원더아트 스튜디오 입학원서 페이지입니다.',
};

export default function RegistrationPage() {
  return <Form />;
}
