import { InputJsonValue } from "../../types";
import { TestCreateNestedManyWithoutUsersInput } from "./TestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  tests?: TestCreateNestedManyWithoutUsersInput;
  username: string;
};
