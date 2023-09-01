import { ReasonForChoosing } from "@prisma/client";

export const REASON_OPTION = {
  [ReasonForChoosing.SEARCHED]: "검색",
  [ReasonForChoosing.RECOMMENDED]: "지인추천",
  [ReasonForChoosing.GOSSIP]: "주변소문",
  [ReasonForChoosing.LOCATION]: "위치",
  [ReasonForChoosing.ETC]: "기타",

} as const;
