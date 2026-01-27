// src/data/room-data/building-6/rent.ts
import { RentItem } from "@/src/models/types";
import { createMockRent } from "@/src/data/room-data/helpers/mock-rent";

export const RENT_BY_ROOM: Record<number, RentItem[]> = {
  101: [],

  102: [
    createMockRent({
      id: "b6-602-1",
      rentNo: "B6-CT602",
      renterType: "บุคคลธรรมดา",
      status: "Approved",
    }),
  ],

  103: [],

  104: [
    createMockRent({
      id: "b6-604-1",
      rentNo: "B6-CT604",
      renterType: "บุคคลธรรมดา",
      status: "Approved",
    }),
  ],

  105: [],
};
