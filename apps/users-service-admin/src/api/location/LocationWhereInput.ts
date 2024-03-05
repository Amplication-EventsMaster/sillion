import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TestListRelationFilter } from "../test/TestListRelationFilter";

export type LocationWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tests?: TestListRelationFilter;
};
