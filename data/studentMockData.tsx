import { Student } from '@/types/student';

export const StudentList: Student[] = [
  {
    id: 0,
    entranceDate: '2023.01.01',
    classTime: [
      {
        day: '월',
        time: 14,
      },
      {
        day: '금',
        time: 15,
      },
    ],
    studentName: '홍길동',
    studentPhone: '010-1234-5678',
    birthDate: '2016.01.01',
    sex: '남',
    guardianName: '홍길동아빠',
    guardianPhone: '010-9999-8888',
    address: '경기도 사랑시 행복3로 25 부자아파트 1234동 1234호',
    school: '영재유치원',
    experience: '없음',
    reason: '위치',
    importantActivity: '다양한 재료 수업',
    interestingActivity: '그리기',
    caution: '주의력이 부족합니다',
    agree: true,
    teacherMemo: '옆 친구와 장난을 많이 침',
  },
  {
    id: 1,
    entranceDate: '2023.02.01',
    classTime: [
      {
        day: '수',
        time: 16,
      },
    ],
    studentName: '홍가람',
    studentPhone: '010-5678-1234',
    birthDate: '2017.03.03',
    sex: '여',
    guardianName: '홍가람엄마',
    guardianPhone: '010-7777-7777',
    address: '경기도 사랑시 행복1로 5 대박아파트 3456동 1111호',
    school: '영재유치원',
    experience: '없음',
    reason: '검색',
    importantActivity: '다양한 재료 수업',
    interestingActivity: '명화 수업',
    caution: '부끄러움이 많아서 말 수가 적다',
    agree: true,
    teacherMemo: '모르는 것이 있어도 질문하지 않음.',
  },
  {
    id: 2,
    entranceDate: '2023.03.01',
    classTime: [
      {
        day: '화',
        time: 14,
      },
      {
        day: '수',
        time: 15,
      },
    ],
    studentName: '홍동동',
    studentPhone: '',
    birthDate: '2015.02.11',
    sex: '남',
    guardianName: '홍동동아빠',
    guardianPhone: '010-9999-8888',
    address: '경기도 사랑시 대박1로 11 소박아파트 101동 101호',
    school: '영어유치원',
    experience: '없음',
    reason: '기타',
    importantActivity: '명화 수업',
    interestingActivity: '기법 수업',
    caution: '',
    agree: true,
    teacherMemo: '',
  },
];
