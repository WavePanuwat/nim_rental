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

// room-information
export type RentInfo = {
  id: string;
  tenantName: string;
  contractNo: string;
  startDate: string;
  endDate: string;
};

export type RoomInfo = {
  roomNo: string;
  branch: string;
  location: string;
  address: string;
};

export type RentStatus = "Approved" | "Confirm" | "Canceled" | "Closed";
export type RentItem = {
  id: string;
  rentNo: string;
  renterType: string;
  startDate: string;
  endDate: string;
  status: RentStatus;
};

// Meter
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

// Tenant Info
export type TenantInfo = {
  id: string;
  firstName: string;
  lastName: string;
  age?: number;
  address: string;
  phone: string;
  birthDate?: string;
  citizenId?: string;      // เลขบัตรประชาชน
  nonCitizenId?: string;   // บัตรคนไม่มีสัญชาติ
  passportNo?: string;     // หนังสือเดินทาง
  employeeCode?: string;   // รหัสพนักงาน
};
