import { Room } from "@/src/models/types";

const LOCATION = "เชียงใหม่";
const ADDRESS = "77 ต.หนองหาร อ.สันทราย เชียงใหม่";

export const ROOMS_BUILDING_7: Room[] = [
  { id: 701, buildingId: 7, name: "701", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 702, buildingId: 7, name: "702", status: "occupied", paid: true, location: LOCATION, address: ADDRESS },
  { id: 703, buildingId: 7, name: "703", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 704, buildingId: 7, name: "704", status: "occupied", paid: false, location: LOCATION, address: ADDRESS },
  { id: 705, buildingId: 7, name: "705", status: "maintenance", paid: true, location: LOCATION, address: ADDRESS },
];
