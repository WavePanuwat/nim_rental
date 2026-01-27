// src/data/room-data/building-2/rent.ts
import { RentItem } from "@/src/models/types";
import { createMockRent } from "@/src/data/room-data/helpers/mock-rent";

export const RENT_BY_ROOM: Record<number, RentItem[]> = {
  // 101 empty
  101: [],

  // 102 occupied (paid)
  102: [
    createMockRent({
      id: "b2-102-1",
      rentNo: "B2-CT102",
      renterType: "บุคคลธรรมดา",
      status: "active",
    }),
  ],

  // 103 occupied (unpaid)
  103: [
    createMockRent({
      id: "b2-103-1",
      rentNo: "B2-CT103",
      renterType: "บุคคลธรรมดา",
      status: "active",
    }),
  ],

  // 104 empty แต่กำลังจะออก
  104: [
    createMockRent({
      id: "b2-104-1",
      rentNo: "B2-CT104",
      renterType: "บุคคลธรรมดา",
      status: "ending",
      endDate: "15",
    }),
  ],

  // 105 maintenance
  105: [],
};
