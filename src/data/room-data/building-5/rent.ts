// src/data/room-data/building-5/rent.ts
import { RentItem } from "@/src/models/types";
import { createMockRent } from "@/src/data/room-data/helpers/mock-rent";

export const RENT_BY_ROOM: Record<number, RentItem[]> = {
  101: [],

  102: [
    createMockRent({
      id: "b5-502-1",
      rentNo: "B5-CT502",
      renterType: "บุคคลธรรมดา",
      status: "Approved",
    }),
  ],

  103: [],

  104: [
    createMockRent({
      id: "b5-504-1",
      rentNo: "B5-CT504",
      renterType: "บุคคลธรรมดา",
      status: "Approved",
    }),
  ],

  105: [],
};
