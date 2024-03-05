import { Test } from "../test/Test";

export type Location = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  tests?: Array<Test>;
  updatedAt: Date;
};
