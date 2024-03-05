import { JsonValue } from "type-fest";
import { Test } from "../test/Test";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tests?: Array<Test>;
  updatedAt: Date;
  username: string;
};
