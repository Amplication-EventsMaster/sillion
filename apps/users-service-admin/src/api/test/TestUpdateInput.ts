import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestUpdateInput = {
  date?: Date | null;
  location?: LocationWhereUniqueInput | null;
  results?: Decimal | null;
  user?: UserWhereUniqueInput | null;
};
