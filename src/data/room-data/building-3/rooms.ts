import { Room } from "@/src/models/types";

const LOCATION = "กรุงเทพฯ";
const ADDRESS = "88 ถ.รัชดาภิเษก เขตดินแดง กรุงเทพฯ";

export const ROOMS_BUILDING_3: Room[] = [
  { id: 301, buildingId: 3, name: "301", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 302, buildingId: 3, name: "302", status: "occupied", paid: true, location: LOCATION, address: ADDRESS },
  { id: 303, buildingId: 3, name: "303", status: "occupied", paid: false, location: LOCATION, address: ADDRESS },
  { id: 304, buildingId: 3, name: "304", status: "empty", paid: true, moveOutDate: "20", location: LOCATION, address: ADDRESS },
  { id: 305, buildingId: 3, name: "305", status: "maintenance", paid: true, location: LOCATION, address: ADDRESS },
];
