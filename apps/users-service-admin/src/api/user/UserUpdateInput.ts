import { InputJsonValue } from "../../types";
import { TestUpdateManyWithoutUsersInput } from "./TestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tests?: TestUpdateManyWithoutUsersInput;
  username?: string;
};
