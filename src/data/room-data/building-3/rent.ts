// src/data/room-data/building-3/rent.ts
import { RentItem } from "@/src/models/types";
import { createMockRent } from "@/src/data/room-data/helpers/mock-rent";

export const RENT_BY_ROOM: Record<number, RentItem[]> = {
  101: [],

  102: [
    createMockRent({
      id: "b3-302-1",
      rentNo: "B3-CT302",
      renterType: "บุคคลธรรมดา",
      status: "active",
    }),
  ],

  103: [
    createMockRent({
      id: "b3-303-1",
      rentNo: "B3-CT303",
      renterType: "บุคคลธรรมดา",
      status: "active",
    }),
  ],

  104: [
    createMockRent({
      id: "b3-304-1",
      rentNo: "B3-CT304",
      renterType: "บุคคลธรรมดา",
      status: "ending",
      endDate: "20",
    }),
  ],

  105: [],
};
