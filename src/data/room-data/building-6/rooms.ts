import { Room } from "@/src/models/types";

const LOCATION = "เชียงใหม่";
const ADDRESS = "22 ถ.ห้วยแก้ว เชียงใหม่";

export const ROOMS_BUILDING_6: Room[] = [
  { id: 601, buildingId: 6, name: "601", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 602, buildingId: 6, name: "602", status: "occupied", paid: true, location: LOCATION, address: ADDRESS },
  { id: 603, buildingId: 6, name: "603", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 604, buildingId: 6, name: "604", status: "occupied", paid: false, location: LOCATION, address: ADDRESS },
  { id: 605, buildingId: 6, name: "605", status: "maintenance", paid: true, location: LOCATION, address: ADDRESS },
];
