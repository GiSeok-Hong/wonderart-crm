import { ReasonForChoosing } from '@prisma/client';

export const REASON_OPTION = {
  [ReasonForChoosing.RECOMMENDED]: '지인추천',
  [ReasonForChoosing.LOCATION]: '위치',
  [ReasonForChoosing.GOSSIP]: '주변소문',
  [ReasonForChoosing.SEARCHED]: '검색',
  [ReasonForChoosing.ETC]: '기타',
} as const;
