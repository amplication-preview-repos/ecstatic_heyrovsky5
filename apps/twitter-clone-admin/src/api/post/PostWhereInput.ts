import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PostWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  author?: StringNullableFilter;
  authorId?: StringNullableFilter;
};
