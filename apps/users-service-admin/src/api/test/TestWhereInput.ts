import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  results?: DecimalNullableFilter;
  user?: UserWhereUniqueInput;
};
