import { TestCreateNestedManyWithoutLocationsInput } from "./TestCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  address?: string | null;
  name?: string | null;
  tests?: TestCreateNestedManyWithoutLocationsInput;
};
