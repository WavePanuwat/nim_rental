import { Room } from "@/src/models/types";

const LOCATION = "เชียงใหม่";
const ADDRESS =
  "161 ม.9 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290";

export const ROOMS_BUILDING_1: Room[] = [
  // ===== ชั้น 1 (10 ห้อง) =====
  { id: 101, buildingId: 1, name: "101", status: "empty", paid: true, location: LOCATION, address: ADDRESS, },
  { id: 102, buildingId: 1, name: "102", status: "empty", paid: true, moveOutDate: "10", location: LOCATION, address: ADDRESS, },
  { id: 103, buildingId: 1, name: "103", status: "occupied", paid: true, location: LOCATION, address: ADDRESS, },
  { id: 104, buildingId: 1, name: "104", status: "occupied", paid: false, location: LOCATION, address: ADDRESS, },
  { id: 105, buildingId: 1, name: "105",status: "occupied", paid: true, hasNextTenant: true, moveOutDate: "15", location: LOCATION, address: ADDRESS, },
  { id: 106, buildingId: 1, name: "106", status: "maintenance",  paid: true, location: LOCATION, address: ADDRESS, },
  { id: 107, buildingId: 1, name: "107", status: "empty", paid: true, location: LOCATION, address: ADDRESS, },
  { id: 108, buildingId: 1, name: "108", status: "empty", paid: true, moveOutDate: "15", location: LOCATION, address: ADDRESS, },
  { id: 109, buildingId: 1, name: "109", status: "occupied", paid: true, location: LOCATION, address: ADDRESS, },
  { id: 110, buildingId: 1, name: "110", status: "maintenance", paid: true, location: LOCATION, address: ADDRESS, },
];
