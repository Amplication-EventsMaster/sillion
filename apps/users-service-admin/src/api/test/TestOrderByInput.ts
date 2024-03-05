import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  results?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
