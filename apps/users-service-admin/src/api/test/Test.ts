import { Location } from "../location/Location";
import { Decimal } from "decimal.js";
import { User } from "../user/User";

export type Test = {
  createdAt: Date;
  date: Date | null;
  id: string;
  location?: Location | null;
  results: Decimal | null;
  updatedAt: Date;
  user?: User | null;
};
