import { Building, Room, RentItem } from "@/src/models/types";

// ======================================================
// building-1
// ======================================================
import { BUILDING_1 } from "./building-1/building";
import { ROOMS_BUILDING_1 } from "./building-1/rooms";
import { RENT_BY_ROOM as RENT_1 } from "./building-1/rent";

// ======================================================
// building-2
// ======================================================
import { BUILDING_2 } from "./building-2/building";
import { ROOMS_BUILDING_2 } from "./building-2/rooms";
import { RENT_BY_ROOM as RENT_2 } from "./building-2/rent";

// ======================================================
// building-3
// ======================================================
import { BUILDING_3 } from "./building-3/building";
import { ROOMS_BUILDING_3 } from "./building-3/rooms";
import { RENT_BY_ROOM as RENT_3 } from "./building-3/rent";

// ======================================================
// building-4
// ======================================================
import { BUILDING_4 } from "./building-4/building";
import { ROOMS_BUILDING_4 } from "./building-4/rooms";
import { RENT_BY_ROOM as RENT_4 } from "./building-4/rent";

// ======================================================
// building-5
// ======================================================
import { BUILDING_5 } from "./building-5/building";
import { ROOMS_BUILDING_5 } from "./building-5/rooms";
import { RENT_BY_ROOM as RENT_5 } from "./building-5/rent";

// ======================================================
// building-6
// ======================================================
import { BUILDING_6 } from "./building-6/building";
import { ROOMS_BUILDING_6 } from "./building-6/rooms";
import { RENT_BY_ROOM as RENT_6 } from "./building-6/rent";

// ======================================================
// building-7
// ======================================================
import { BUILDING_7 } from "./building-7/building";
import { ROOMS_BUILDING_7 } from "./building-7/rooms";
import { RENT_BY_ROOM as RENT_7 } from "./building-7/rent";

/* ======================================================
 * Registry Types
 * ====================================================== */
export type RoomRegistryItem = {
  building: Building;
  rooms: Room[];
  rents?: Record<number, RentItem[]>;
};

/* ======================================================
 * Registry กลาง (แทน API)
 * ====================================================== */
export const ROOM_DATA_REGISTRY: Record<number, RoomRegistryItem> = {
  1: { building: BUILDING_1, rooms: ROOMS_BUILDING_1, rents: RENT_1 },
  2: { building: BUILDING_2, rooms: ROOMS_BUILDING_2, rents: RENT_2 },
  3: { building: BUILDING_3, rooms: ROOMS_BUILDING_3, rents: RENT_3 },
  4: { building: BUILDING_4, rooms: ROOMS_BUILDING_4, rents: RENT_4 },
  5: { building: BUILDING_5, rooms: ROOMS_BUILDING_5, rents: RENT_5 },
  6: { building: BUILDING_6, rooms: ROOMS_BUILDING_6, rents: RENT_6 },
  7: { building: BUILDING_7, rooms: ROOMS_BUILDING_7, rents: RENT_7 },
};

/* ======================================================
 * Helpers (ใช้แทน API)
 * ====================================================== */

/** ดึงข้อมูลอาคาร */
export const getBuildingById = (buildingId: number): Building | null =>
  ROOM_DATA_REGISTRY[buildingId]?.building ?? null;

/** ดึงห้องทั้งหมดของอาคาร */
export const getRoomsByBuildingId = (buildingId: number): Room[] =>
  ROOM_DATA_REGISTRY[buildingId]?.rooms ?? [];

/** ดึงข้อมูลการเช่าของห้อง */
export const getRentByRoomId = (
  buildingId: number,
  roomId: number
): RentItem[] =>
  ROOM_DATA_REGISTRY[buildingId]?.rents?.[roomId] ?? [];

/** ดึงอาคารทั้งหมด (ใช้กับ Header / หน้าเลือกตึก) */
export const getAllBuildings = (): Building[] => {
  return Object.values(ROOM_DATA_REGISTRY).map(({ building, rooms }) => ({
    ...building,
    stats: {
      total: rooms.length,
      empty: rooms.filter((r) => r.status === "empty").length,
      occupied: rooms.filter((r) => r.status === "occupied").length,
      unpaid: rooms.filter(
        (r) => r.status === "occupied" && !r.paid
      ).length,
    },
  }));
};
