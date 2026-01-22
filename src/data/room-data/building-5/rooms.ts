import { Room } from "@/src/models/types";

const LOCATION = "สมุทรปราการ";
const ADDRESS = "12 ถ.ศรีนครินทร์ สมุทรปราการ";

export const ROOMS_BUILDING_5: Room[] = [
  { id: 501, buildingId: 5, name: "501", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 502, buildingId: 5, name: "502", status: "occupied", paid: true, location: LOCATION, address: ADDRESS },
  { id: 503, buildingId: 5, name: "503", status: "empty", paid: true, location: LOCATION, address: ADDRESS },
  { id: 504, buildingId: 5, name: "504", status: "occupied", paid: false, location: LOCATION, address: ADDRESS },
  { id: 505, buildingId: 5, name: "505", status: "maintenance", paid: true, location: LOCATION, address: ADDRESS },
];
