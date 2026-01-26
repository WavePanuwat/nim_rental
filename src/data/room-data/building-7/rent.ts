// src/data/room-data/building-7/rent.ts
import { RentItem } from "@/src/models/types";
import { createMockRent } from "@/src/data/room-data/helpers/mock-rent";

export const RENT_BY_ROOM: Record<number, RentItem[]> = {
  101: [],

  102: [
    createMockRent({
      id: "b7-702-1",
      rentNo: "B7-CT702",
      renterType: "บุคคลธรรมดา",
      status: "active",
    }),
  ],

  103: [],

  104: [
    createMockRent({
      id: "b7-704-1",
      rentNo: "B7-CT704",
      renterType: "บุคคลธรรมดา",
      status: "active",
    }),
  ],

  105: [],
};
