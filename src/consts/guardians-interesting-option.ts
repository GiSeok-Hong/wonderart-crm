import { ArtActivity } from "@prisma/client";

export const GUARDIANS_INTERESTING_OPTION = {
  [ArtActivity.DRAWING]: "그리기",
  [ArtActivity.MATERIALCLASS]: "다양한 재료 수업",
  [ArtActivity.MASTERPIECECLASS]: "명화 수업",
  [ArtActivity.TECHNIQUECLASS]: "기법 수업",
  [ArtActivity.ETC]: "기타",
} as const;