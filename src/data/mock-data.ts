import { User,MeterData } from "../models/types";


export const MOCK_USER: User = {
  username: "admin",
  password: "1234",
  first_name: "ภาณุวัฒน์",
  last_name: "คะชา",
};


// sections/room-information/mock/room-information.mock.ts
export const roomInformationMock = {
  roomNo: '101',
  branch: 'เชียงใหม่',
  location: 'บ้านเพื่อน แมนชั่น',
  address: '161 ม.9 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290',
};

export const MOCK_METER_DATA: MeterData[] = [
  { id: 1, room: "101", contractId: "CT01220640", serialNo: "28-463-W140", tenant: "สิปกร นัดดาครี", lastDate: "22/11/2568", lastReading: 708, currentReading: "", note: "" },
  { id: 2, room: "102", contractId: "CT01220641", serialNo: "28-463-W141", tenant: "ศิริมาศ จันหอม", lastDate: "22/11/2568", lastReading: 1126, currentReading: "", note: "" },
  { id: 3, room: "103", contractId: "CT01220642", serialNo: "28-463-W142", tenant: "สุธี สุขใจ", lastDate: "22/11/2568", lastReading: 544, currentReading: "", note: "" },
  { id: 4, room: "104", contractId: "CT01220643", serialNo: "28-463-W143", tenant: "ชิชาพัชร์ ตรีรัตน์ธัญธร", lastDate: "22/11/2568", lastReading: 916, currentReading: "", note: "" },
  { id: 5, room: "105", contractId: "CT01220644", serialNo: "28-463-W144", tenant: "กัญจนา ศรชัย", lastDate: "22/11/2568", lastReading: 1325, currentReading: "", note: "" },
  { id: 6, room: "106", contractId: "CT01220645", serialNo: "28-463-W145", tenant: "จุฑารัตน์ บุญจันทร์เจือ", lastDate: "22/11/2568", lastReading: 871, currentReading: "", note: "" },
  { id: 7, room: "107", contractId: "CT01220646", serialNo: "28-463-W146", tenant: "ชวโรจน์ เลิศไกรชัยพร", lastDate: "22/11/2568", lastReading: 882, currentReading: "", note: "" },
  { id: 8, room: "108", contractId: "CT01220647", serialNo: "28-463-W147", tenant: "สุภามาศ จินดา", lastDate: "22/11/2568", lastReading: 930, currentReading: "", note: "" },
  { id: 9, room: "109", contractId: "CT01220648", serialNo: "28-463-W148", tenant: "น้ำเย็น สิริเมธิตระกูล", lastDate: "22/11/2568", lastReading: 872, currentReading: "", note: "" },
  { id: 10, room: "110", contractId: "CT01220649", serialNo: "28-463-W149", tenant: "นภสร เชื้อไทย", lastDate: "22/11/2568", lastReading: 825, currentReading: "", note: "" },
];