export interface User {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
}

export type BuildingGroup = "transport" | "leasing" | "daily";

export interface BuildingStats {
  total: number;
  empty: number;
  occupied: number;
  unpaid: number;
}


export interface Building {
  id: number;
  name: string;
  group: BuildingGroup;
  stats: BuildingStats;
}

export type RoomStatus = "empty" | "occupied" | "maintenance";

export interface Room {
  id: number;
  buildingId: number;
  name: string;
  status: RoomStatus;
  paid: boolean;
  moveOutDate?: string;     
  hasNextTenant?: boolean;  
}