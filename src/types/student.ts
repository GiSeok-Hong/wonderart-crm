type Sex = "남" | "여";

type Day = "월" | "화" | "수" | "목" | "금";

type ReasonForChoosing = "지인추천" | "위치" | "주변소문" | "검색" | "기타";

type ArtActivity =
  | "그리기"
  | "다양한 재료 수업"
  | "명화 수업"
  | "기법 수업"
  | "기타";

type StartTime = 14 | 15 | 16 | 17 | 18;

type ClassTime = {
  day: Day;
  time: StartTime;
};

export type Student = {
  id: number;
  entranceDate: string;
  classTime: ClassTime[];
  studentName: string;
  studentPhone: string;
  birthDate: string;
  sex: Sex;
  guardianName: string;
  guardianPhone: string;
  address: string;
  school: string;
  experience: string;
  reason: ReasonForChoosing;
  importantActivity: ArtActivity;
  interestingActivity: ArtActivity;
  caution: string;
  agree: boolean;
  teacherMemo: string;
};
