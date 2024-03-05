import { TestUpdateManyWithoutLocationsInput } from "./TestUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  address?: string | null;
  name?: string | null;
  tests?: TestUpdateManyWithoutLocationsInput;
};
