import { Room } from "@/src/models/types";

const LOCATION = "นนทบุรี";
const ADDRESS = "45 ถ.ติวานนท์ นนทบุรี";

export const ROOMS_BUILDING_4: Room[] = [
  { id: 101, buildingId: 4, name: "101", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 102, buildingId: 4, name: "102", status: "occupied", paid: true, location: LOCATION, address: ADDRESS },
  { id: 103, buildingId: 4, name: "103", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 104, buildingId: 4, name: "104", status: "occupied", paid: false, location: LOCATION, address: ADDRESS },
  { id: 505, buildingId: 4, name: "105", status: "maintenance", paid: true, location: LOCATION, address: ADDRESS },
];
