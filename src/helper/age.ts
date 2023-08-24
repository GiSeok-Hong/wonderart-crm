/**
 * 만 나이를 구하는 함수
 * @param birthDate YYYY.MM.DD
 */
export function getAge(birth: string) {
  if (!birth) return 0;
  const birthYear = Number(birth.substring(0, 4));
  const birthMonth = Number(birth.substring(5, 7));
  const birthDay = Number(birth.substring(8, 10));
  const birthDate = new Date(birthYear, birthMonth, birthDay);
  const today = new Date();
  const age = yearDiff(today, birthDate);
  return age;
}

export function yearDiff(date1: Date, date2: Date) {
  const diff = Math.abs(date1.getTime() - date2.getTime());
  return Math.ceil(diff / (1000 * 3600 * 24 * 365));
}

