import { Room } from "@/src/models/types";

const LOCATION = "เชียงใหม่";
const ADDRESS = "22 ถ.ห้วยแก้ว เชียงใหม่";

export const ROOMS_BUILDING_6: Room[] = [
  { id: 101, buildingId: 6, name: "101", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 102, buildingId: 6, name: "102", status: "occupied", paid: true, location: LOCATION, address: ADDRESS },
  { id: 103, buildingId: 6, name: "103", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 104, buildingId: 6, name: "104", status: "occupied", paid: false, location: LOCATION, address: ADDRESS },
  { id: 105, buildingId: 6, name: "105", status: "maintenance", paid: true, location: LOCATION, address: ADDRESS },
];
