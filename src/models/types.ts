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
  location: string; 
  address: string; 
  moveOutDate?: string;     
  hasNextTenant?: boolean;  
}

// sections/room-information/types.ts
export type RoomInfo = {
  roomNo: string;
  branch: string;
  location: string;
  address: string;
};

export type RentItem = {
  id: string;
  renterType: string;
  rentNo: string;
  startDate: string;
  endDate: string;
  status: string;
};


export interface MeterData {
  id: number;
  room: string;
  contractId: string;
  serialNo: string;
  tenant: string;
  lastDate: string;
  lastReading: number;
  currentReading: string;
  note: string;
}