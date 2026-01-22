import { Room } from "@/src/models/types";

const LOCATION = "นนทบุรี";
const ADDRESS = "45 ถ.ติวานนท์ นนทบุรี";

export const ROOMS_BUILDING_4: Room[] = [
  { id: 401, buildingId: 4, name: "401", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 402, buildingId: 4, name: "402", status: "occupied", paid: true, location: LOCATION, address: ADDRESS },
  { id: 403, buildingId: 4, name: "403", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 404, buildingId: 4, name: "404", status: "occupied", paid: false, location: LOCATION, address: ADDRESS },
  { id: 405, buildingId: 4, name: "405", status: "maintenance", paid: true, location: LOCATION, address: ADDRESS },
];
