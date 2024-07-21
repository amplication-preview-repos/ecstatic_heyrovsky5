import { Like as TLike } from "../api/like/Like";

export const LIKE_TITLE_FIELD = "liker";

export const LikeTitle = (record: TLike): string => {
  return record.liker?.toString() || String(record.id);
};
