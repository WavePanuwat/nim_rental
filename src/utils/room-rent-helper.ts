import { RentItem } from "@/src/models/types";

export const getRoomRentState = (rents: RentItem[]) => {
  if (rents.length === 0) {
    return { type: "empty" }; // เขียว ว่าง
  }

  if (rents.length === 1) {
    if (rents[0].status === "ending") {
      return { type: "ending" }; // เขียว มีคน กำลังออก
    }
    return { type: "active" }; // น้ำเงิน มีคน
  }

  if (rents.length >= 2) {
    return { type: "transfer" }; // น้ำเงิน มี 2 คน
  }

  return { type: "unknown" };
};
