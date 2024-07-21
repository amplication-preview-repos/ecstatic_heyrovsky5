import { SortOrder } from "../../util/SortOrder";

export type LikeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  liker?: SortOrder;
  likedPost?: SortOrder;
  likerId?: SortOrder;
  likedPostId?: SortOrder;
};
