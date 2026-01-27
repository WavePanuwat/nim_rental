// src/data/room-data/building-1/rent.ts
import { RentItem } from "@/src/models/types";
import { createMockRent } from "@/src/data/room-data/helpers/mock-rent";

export const RENT_BY_ROOM: Record<number, RentItem[]> = {
  // ห้องว่าง (ไม่มีคน)
  101: [],

  // ห้องมีผู้เช่าอยู่ 1 คน  (กำลังจะออก + แสดงวันออก)
  102: [
    createMockRent({
      id: "rent-102-1",
      rentNo: "CT01251487",
      renterType: "บุคคลธรรมดา",
      startDate: "01/12/2568",
      endDate: "30/11/2569",
      status: "Approved",
    }),
  ],

  // ห้องมีผู้เช่าอยู่ (1 คน / active)
  103: [
    createMockRent({
      id: "rent-103-1",
      rentNo: "CT01251488",
      renterType: "บุคคลธรรมดา",
      startDate: "01/01/2568",
      endDate: "31/12/2568",
      status: "Approved",
    }),
  ],

  // ห้องมี 1 คน (ค้างชำระ)
  104: [
    createMockRent({
      id: "rent-104-1",
      rentNo: "CT01251489",
      renterType: "บุคคลธรรมดา",
      startDate: "01/01/2568",
      endDate: "15/01/2569",
      status: "Approved",
    }),
  ],
  // ห้องมี 2 คน (คนเดิมกำลังออก + แสดงวันออก + คนใหม่มาต่อ)
  105: [
    createMockRent({
      id: "rent-105-1",
      rentNo: "CT01251489",
      renterType: "บุคคลธรรมดา",
      startDate: "01/01/2568",
      endDate: "15/01/2569",
      status: "Approved",
    }),
    createMockRent({
      id: "rent-105-2",
      rentNo: "CT01251490",
      renterType: "บุคคลธรรมดา",
      startDate: "16/01/2569",
      endDate: "15/01/2570",
      status: "Approved",
    }),
  ],

    107: [],

    108: [
    createMockRent({
      id: "rent-102-1",
      rentNo: "CT01251487",
      renterType: "บุคคลธรรมดา",
      startDate: "01/12/2568",
      endDate: "30/11/2569",
      status: "Approved",
    }),
  ],

  109: [
    createMockRent({
      id: "rent-103-1",
      rentNo: "CT01251488",
      renterType: "บุคคลธรรมดา",
      startDate: "01/01/2568",
      endDate: "31/12/2568",
      status: "Approved",
    }),
  ],
};
