export interface RoomTenantField {
  label: string;
  value?: string;
}

export const ROOM_RENTAL_LEFT: RoomTenantField[] = [
  { label: "วันที่เอกสาร", value: "1/12/2568" },
  { label: "เลขที่การเช่า", value: "CT01251487" },
  { label: "ประเภทผู้เช่า", value: "บุคคลธรรมดา" },
  { label: "สถานที่", value: "บ้านเพื่อน แมนชั่น" },
  { label: "ห้อง", value: "101" },
  { label: "พื้นที่", value: "0" },
  {
    label: "ที่ตั้ง",
    value: "161 ม.9 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290",
  },
  { label: "หมายเหตุ", value: "-" },
];

export const ROOM_RENTAL_RIGHT: RoomTenantField[] = [
  { label: "เลขที่สัญญา", value: "MMJ68120001" },
  { label: "ประเภทสัญญา", value: "อาคารเช่า" },
  { label: "วันสิ้นสุดสัญญา", value: "30/11/2569" },
  { label: "วัตถุประสงค์การเช่า", value: "เพื่อพักอาศัย" },
  { label: "ภาษีที่ดินและสิ่งปลูกสร้าง", value: "-" },
];

export const RENTAL_TABS = [
  "ผู้เช่า",
  "ผู้ให้เช่า",
  "อัตราค่าเช่า",
  "รายการบัญชี",
  "เอกสารแนบท้ายสัญญา",
  "ไฟล์แนบ",
  "โอนสิทธิ์",
  "ผัง",
];
