import { Location } from "../location/Location";
import { User } from "../user/User";

export type Test = {
  createdAt: Date;
  date: Date | null;
  id: string;
  location?: Location | null;
  updatedAt: Date;
  user?: User | null;
};
