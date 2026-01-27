// src/data/room-data/_helpers/mock-rent.ts
import { RentItem } from "@/src/models/types";

type MockRentInput = Partial<RentItem> & {
  id: string;
};

export function createMockRent(input: MockRentInput): RentItem {
  return {
    id: input.id,
    rentNo: input.rentNo ?? "-",
    renterType: input.renterType ?? "บุคคลธรรมดา",
    startDate: input.startDate ?? "-",
    endDate: input.endDate ?? "-",
    status: input.status ?? "active",
  };
}
