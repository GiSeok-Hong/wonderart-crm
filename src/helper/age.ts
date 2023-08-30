/**
 * 만 나이를 구하는 함수
 * @param birthDate Date
 */
export function getAge(birthDate: Date) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const month = today.getMonth() - birth.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

export function yearDiff(date1: Date, date2: Date) {
  const diff = Math.abs(date1.getTime() - date2.getTime());
  return Math.ceil(diff / (1000 * 3600 * 24 * 365));
}

