import { Room } from "@/src/models/types";

const LOCATION = "กรุงเทพฯ";
const ADDRESS =
  "99 ถ.สุขุมวิท แขวงคลองตัน เขตวัฒนา กรุงเทพมหานคร 10110";

export const ROOMS_BUILDING_2: Room[] = [
  { id: 101, buildingId: 2, name: "101", status: "empty", paid: true, location: LOCATION, address: ADDRESS, },
  { id: 102, buildingId: 2, name: "102", status: "occupied", paid: true, location: LOCATION, address: ADDRESS, },
  { id: 103, buildingId: 2, name: "103", status: "occupied", paid: false, location: LOCATION, address: ADDRESS, },
  { id: 104, buildingId: 2, name: "104", status: "empty", paid: true, moveOutDate: "15", location: LOCATION, address: ADDRESS, },
  { id: 105, buildingId: 2, name: "105", status: "maintenance", paid: true, location: LOCATION, address: ADDRESS, },
];
