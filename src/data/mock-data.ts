import { User, Building, Room } from "../models/types";


export const MOCK_USER: User = {
  username: "admin",
  password: "1234",
  first_name: "ภาณุวัฒน์",
  last_name: "คะชา",
};

export const MOCK_ROOMS: Room[] = [
  { id: 1, buildingId: 1, name: "101", status: "occupied", paid: true },
  { id: 2, buildingId: 1, name: "102", status: "empty", paid: true },
  { id: 3, buildingId: 1, name: "103", status: "maintenance", paid: true }, // สีเทา (lock)
  { id: 4, buildingId: 1, name: "104", status: "occupied", paid: false }, // ค้างชำระ + สิ้นสุดวันที่ 10
  { id: 5, buildingId: 1, name: "105", status: "empty", paid: true, moveOutDate: "10" }, // สีเขียวมีไอคอน (ว่างตั้งแต่วันที่ 10)

  { id: 6, buildingId: 1, name: "106", status: "empty", paid: true },
  { id: 7, buildingId: 1, name: "107", status: "occupied", paid: false, hasNextTenant: true, moveOutDate: "10" }, // ค้างชำระ + มีคนเช่าต่อ
  { id: 8, buildingId: 1, name: "108", status: "empty", paid: true, moveOutDate: "15" },
  { id: 9, buildingId: 1, name: "109", status: "maintenance", paid: true },
  { id: 10, buildingId: 1, name: "110", status: "empty", paid: true },

  { id: 11, buildingId: 1, name: "201", status: "occupied", paid: true },
  { id: 12, buildingId: 1, name: "202", status: "maintenance", paid: true },
  { id: 13, buildingId: 1, name: "203", status: "empty", paid: true },
  { id: 14, buildingId: 1, name: "204", status: "occupied", paid: false },
  { id: 15, buildingId: 1, name: "205", status: "empty", paid: true, moveOutDate: "15" },

  { id: 16, buildingId: 1, name: "203", status: "empty", paid: true }, 
  { id: 17, buildingId: 1, name: "207", status: "occupied", paid: false, hasNextTenant: true, moveOutDate: "15" },
  { id: 18, buildingId: 1, name: "208", status: "empty", paid: true, moveOutDate: "15" },
  { id: 19, buildingId: 1, name: "209", status: "maintenance", paid: true },
  { id: 20, buildingId: 1, name: "210", status: "empty", paid: true },
];

export const calculateBuildingStats = (
  buildingId: number,
  rooms: Room[]
) => {
  const buildingRooms = rooms.filter(
    (room) => room.buildingId === buildingId
  );

  return {
    total: buildingRooms.length,
    empty: buildingRooms.filter((r) => r.status === "empty").length,
    occupied: buildingRooms.filter((r) => r.status === "occupied").length,
    unpaid: buildingRooms.filter(
      (r) => r.status === "occupied" && !r.paid
    ).length,
  };
};

const BASE_BUILDINGS: Omit<Building, "stats">[] = [
  { id: 1, name: "บ้านเพื่อน แมนชั่น", group: "transport" },
  { id: 2, name: "เอลิท ลิฟวิ่ง", group: "leasing" },
  { id: 3, name: "เดอะ แกรนด์ เรสซิเดนซ์", group: "daily" },
  { id: 4, name: "เดอะ พิกเซล อพาร์ทเม้นท์", group: "transport" },
  { id: 5, name: "พรีเมียร์ เพลส", group: "leasing" },
  { id: 6, name: "วิสต้า คอร์ท", group: "daily" },
  { id: 7, name: "เเม่โจ้ แมนชั่น", group: "transport" },
];

export const MOCK_BUILDINGS: Building[] = BASE_BUILDINGS.map((building) => ({
  ...building,
  stats: calculateBuildingStats(building.id, MOCK_ROOMS),
}));