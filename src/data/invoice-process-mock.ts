import {
  IInvoiceProcessItem,
  IInvoiceDetailData,
  IInvoiceDetailItem,
  IInvoiceDetailSummary,
} from "@/src/models/types";

const calculateSummary = (items: IInvoiceDetailItem[]): IInvoiceDetailSummary => {
  const summary = items.reduce(
    (acc, item) => ({
      grandTotal: acc.grandTotal + item.totalAmount,
      totalRent: acc.totalRent + item.rentAmount,
      totalWater: acc.totalWater + item.waterAmount,
      totalElec: acc.totalElec + item.elecAmount,
      totalOther: acc.totalOther + item.otherAmount,
    }),
    { grandTotal: 0, totalRent: 0, totalWater: 0, totalElec: 0, totalOther: 0 }
  );
  return summary;
};


const ITEMS_ID_1: IInvoiceDetailItem[] = [
  { id: 1, dueDate: "2026", roomNumber: "101", customerName: "พาวเวอร์ดีไซน์ แอนด์ พริ้นท์ จำกัด", waterAmount: 64.20, elecAmount: 202.23, rentAmount: 3266.43, otherAmount: 0.00, totalAmount: 7854.00, status: "CONFIRM" },
  { id: 2, dueDate: "2026", roomNumber: "102", customerName: "ไซน์ แพคเกจจิ้ง จำกัด", waterAmount: 64.20, elecAmount: 337.05, rentAmount: 3201.25, otherAmount: 0.00, totalAmount: 9147.60, status: "CONFIRM" },
  { id: 3, dueDate: "2026", roomNumber: "103", customerName: "ไซน์ แพคเกจจิ้ง จำกัด", waterAmount: 64.20, elecAmount: 262.15, rentAmount: 2826.35, otherAmount: 0.00, totalAmount: 8585.90, status: "CONFIRM" },
  { id: 4, dueDate: "2026", roomNumber: "104", customerName: "อาหาร สุขภาพดี จำกัด", waterAmount: 128.40, elecAmount: 786.45, rentAmount: 3414.85, otherAmount: 0.00, totalAmount: 12748.58, status: "CONFIRM" },
  { id: 5, dueDate: "2026", roomNumber: "105", customerName: "อาหาร สุขภาพดี จำกัด", waterAmount: 192.60, elecAmount: 194.74, rentAmount: 2887.34, otherAmount: 0.00, totalAmount: 40.00, status: "CONFIRM" },
];
const SUMMARY_ID_1 = calculateSummary(ITEMS_ID_1);


const ITEMS_ID_2: IInvoiceDetailItem[] = [
  { id: 1, dueDate: "2026", roomNumber: "201", customerName: "บริษัท ทดสอบ A", rentAmount: 5000, elecAmount: 1000, waterAmount: 500, otherAmount: 0, totalAmount: 6500, status: "CONFIRM" },
  { id: 2, dueDate: "2026", roomNumber: "202", customerName: "บริษัท ทดสอบ B", rentAmount: 4000, elecAmount: 800, waterAmount: 300, otherAmount: 0, totalAmount: 5100, status: "CONFIRM" },
];
const SUMMARY_ID_2 = calculateSummary(ITEMS_ID_2);


const ITEMS_ID_3: IInvoiceDetailItem[] = [
  { id: 1, dueDate: "2026", roomNumber: "301", customerName: "ร้านค้า C", rentAmount: 10000, elecAmount: 2000, waterAmount: 500, otherAmount: 0, totalAmount: 12500, status: "CONFIRM" },
];
const SUMMARY_ID_3 = calculateSummary(ITEMS_ID_3);


export const INVOICE_DETAILS_DB: Record<string, IInvoiceDetailData> = {
  '1': { summary: SUMMARY_ID_1, items: ITEMS_ID_1 },
  '2': { summary: SUMMARY_ID_2, items: ITEMS_ID_2 },
  '3': { summary: SUMMARY_ID_3, items: ITEMS_ID_3 },
};


export const INVOICE_PROCESS_MOCK_DATA: IInvoiceProcessItem[] = [
  {
    id: '1',
    processDate: '22/12/2568',
    period: '01/20/2569',
    invoiceCount: ITEMS_ID_1.length,
    totalAmount: SUMMARY_ID_1.grandTotal, 
    status: 'FINISH',
  },
  {
    id: '2',
    processDate: '22/11/2568',
    period: '12/20/2568',
    invoiceCount: ITEMS_ID_2.length, 
    totalAmount: SUMMARY_ID_2.grandTotal, 
    status: 'FINISH',
  },
  {
    id: '3',
    processDate: '22/10/2568',
    period: '11/20/2568',
    invoiceCount: ITEMS_ID_3.length, 
    totalAmount: SUMMARY_ID_3.grandTotal, 
    status: 'FINISH',
  },
];


// Format Currency
export const fCurrency = (number: number) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

// Logic การคำนวณแยกออกมาเพื่อให้ Component หลักสะอาด
export const calculateInvoiceDetails = (data: IInvoiceDetailItem) => {
  // -- ค่าเช่า: VAT 0%, หัก ณ ที่จ่าย 5% --
  const rentPrice = data.rentAmount;
  const rentVat = 0;
  const rentWht = rentPrice * 0.05;
  const rentNet = rentPrice + rentVat - rentWht;

  // -- ค่าไฟ: VAT 7%, หัก ณ ที่จ่าย 0% --
  const elecPrice = data.elecAmount;
  const elecVat = elecPrice * 0.07;
  const elecWht = 0;
  const elecNet = elecPrice + elecVat - elecWht;

  // -- ค่าน้ำ: VAT 7%, หัก ณ ที่จ่าย 0% --
  const waterPrice = data.waterAmount;
  const waterVat = waterPrice * 0.07;
  const waterWht = 0;
  const waterNet = waterPrice + waterVat - waterWht;

  // -- ค่าอื่นๆ --
  const otherPrice = data.otherAmount;

  // -- รวมยอดทั้งหมด --
  const totalAmountBeforeVat = rentPrice + elecPrice + waterPrice + otherPrice;
  const totalVat = rentVat + elecVat + waterVat;
  const totalWht = rentWht + elecWht + waterWht;
  const grandTotal = totalAmountBeforeVat + totalVat - totalWht;

  return {
    rent: { price: rentPrice, vat: rentVat, wht: rentWht, net: rentNet },
    elec: { price: elecPrice, vat: elecVat, wht: elecWht, net: elecNet },
    water: { price: waterPrice, vat: waterVat, wht: waterWht, net: waterNet },
    totals: {
      beforeVat: totalAmountBeforeVat,
      vat: totalVat,
      wht: totalWht,
      grandTotal: grandTotal,
    },
  };
};