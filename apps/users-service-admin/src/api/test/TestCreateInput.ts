import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestCreateInput = {
  date?: Date | null;
  location?: LocationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
