import { Sex } from '@prisma/client';

export function translateWord(sex: Sex) {
  if (sex === undefined || sex === null) {
    return '';
  } else if (sex === 'MALE') {
    return '남';
  } else if (sex === 'FEMALE') {
    return '여';
  }
}
