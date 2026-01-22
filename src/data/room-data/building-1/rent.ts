import { RentItem } from "@/src/models/types";

/**
 * key = roomId
 * value = รายการสัญญาเช่า
 *
 * ตอนนี้ยังไม่แสดงข้อมูลการเช่าใด ๆ
 */
export const RENT_BY_ROOM: Record<number, RentItem[]> = {};