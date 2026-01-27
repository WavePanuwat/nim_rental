import { Room } from "@/src/models/types";

const LOCATION = "สมุทรปราการ";
const ADDRESS = "12 ถ.ศรีนครินทร์ สมุทรปราการ";

export const ROOMS_BUILDING_5: Room[] = [
  { id: 101, buildingId: 5, name: "101", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 102, buildingId: 5, name: "102", status: "occupied", paid: true, location: LOCATION, address: ADDRESS },
  { id: 103, buildingId: 5, name: "103", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 104, buildingId: 5, name: "104", status: "occupied", paid: false, location: LOCATION, address: ADDRESS },
  { id: 105, buildingId: 5, name: "105", status: "maintenance", paid: true, location: LOCATION, address: ADDRESS },
];
