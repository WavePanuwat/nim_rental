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

export type RentalProcessStatus = 'CONFIRM' | 'PENDING' | 'CANCEL';

export interface RentalProcessItem {
  id: string;
  processDate: string;
  cycle: string;
  invoiceCount: number;
  totalAmount: number;
  status: RentalProcessStatus;
}

export interface RentalProcessDetail {
  id: string;
  contractNo: string;
  roomNo: string;
  rent: number;
  water: number;
  electric: number;
  total: number;
  status: 'CONFIRM' | 'PENDING';
}

export interface InvoiceItem {
  id: number;
  description: string;
  serialNo: string;
  effectiveDate: string;
  amountBeforeTax: number;
  tax: number;
  wht: number;
  total: number;
  note: string;
}

export interface InvoiceDetail {
  id: string; 
  cycle: string;
  contractNo: string;
  docDate: string;
  property: string;
  tenant: string;
  address: string;
  note: string;
  status: 'CONFIRM' | 'PENDING';
  totalAmount: number;
  items: InvoiceItem[];
}

export interface IInvoiceProcessItem {
  id: string;
  processDate: string;
  period: string;
  invoiceCount: number;
  totalAmount: number;
  status: string;
}

export type IInvoiceDetailItem = {
  id: number;
  dueDate: string;
  roomNumber: string;
  customerName: string;
  rentAmount: number;
  elecAmount: number;
  waterAmount: number;
  otherAmount: number;
  totalAmount: number;
  status: string;
};

export type IInvoiceDetailSummary = {
  grandTotal: number;
  totalRent: number;
  totalWater: number;
  totalElec: number;
  totalOther: number;
};

export type IInvoiceDetailData = {
  summary: IInvoiceDetailSummary;
  items: IInvoiceDetailItem[];
};

export type PaymentRecord = {
  id: number;
  date: string;
  leaseNo: string;
  tenant: string;
  amount: string;
  status: string;
};

export type InvoiceRecord = {
  id: number;
  date: string;
  invoiceNo: string;
  property: string;
  leaseNo: string;
  tenant: string;
  amount: string;
};


