// src/data/room-data/building-4/rent.ts
import { RentItem } from "@/src/models/types";
import { createMockRent } from "@/src/data/room-data/helpers/mock-rent";

export const RENT_BY_ROOM: Record<number, RentItem[]> = {
  101: [],

  102: [
    createMockRent({
      id: "b4-402-1",
      rentNo: "B4-CT402",
      renterType: "บุคคลธรรมดา",
      status: "Approved",
    }),
  ],

  103: [],

  104: [
    createMockRent({
      id: "b4-404-1",
      rentNo: "B4-CT404",
      renterType: "บุคคลธรรมดา",
      status: "Approved",
    }),
  ],

  105: [],
};
