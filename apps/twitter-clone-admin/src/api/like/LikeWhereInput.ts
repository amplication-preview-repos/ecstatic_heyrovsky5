import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LikeWhereInput = {
  id?: StringFilter;
  liker?: StringNullableFilter;
  likedPost?: StringNullableFilter;
  likerId?: StringNullableFilter;
  likedPostId?: StringNullableFilter;
};
