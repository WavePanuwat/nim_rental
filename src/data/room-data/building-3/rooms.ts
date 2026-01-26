import { Room } from "@/src/models/types";

const LOCATION = "กรุงเทพฯ";
const ADDRESS = "88 ถ.รัชดาภิเษก เขตดินแดง กรุงเทพฯ";

export const ROOMS_BUILDING_3: Room[] = [
  { id: 101, buildingId: 3, name: "101", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 102, buildingId: 3, name: "102", status: "occupied", paid: true, location: LOCATION, address: ADDRESS },
  { id: 103, buildingId: 3, name: "103", status: "occupied", paid: false, location: LOCATION, address: ADDRESS },
  { id: 104, buildingId: 3, name: "104", status: "empty", paid: true, moveOutDate: "20", location: LOCATION, address: ADDRESS },
  { id: 105, buildingId: 3, name: "505", status: "maintenance", paid: true, location: LOCATION, address: ADDRESS },
];
