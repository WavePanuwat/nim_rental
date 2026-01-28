import { InvoiceDetail, RentalProcessDetail, RentalProcessItem } from "../models/types";

const DETAILS_BY_ID: Record<string, RentalProcessDetail[]> = {
  // === ข้อมูลของ ID 1 (CONFIRM - ตึก A) ===
  '1': [
    { id: '101', contractNo: 'CT6901-A101', roomNo: '101', rent: 5000.00, water: 150.00, electric: 450.00, total: 5600.00, status: 'CONFIRM' },
    { id: '102', contractNo: 'CT6901-A102', roomNo: '102', rent: 5000.00, water: 120.00, electric: 400.00, total: 5520.00, status: 'CONFIRM' },
    { id: '103', contractNo: 'CT6901-A103', roomNo: '103', rent: 4500.00, water: 100.00, electric: 350.00, total: 4950.00, status: 'CONFIRM' },
    { id: '104', contractNo: 'CT01240630',  roomNo: '104',  rent: 2100.00, water: 64.20,  electric: 202.23, total: 3266.43, status: 'CONFIRM' },
    { id: '105', contractNo: 'CT6901-A105', roomNo: '105', rent: 6000.00, water: 200.00, electric: 800.00, total: 7000.00, status: 'CONFIRM' },
  ],

  // === ข้อมูลของ ID 2 (PENDING - ตึก B) ===
  '2': [
    { id: '201', contractNo: 'CT6901-B201', roomNo: '201', rent: 3500.00, water: 0,      electric: 0,      total: 3500.00, status: 'PENDING' }, 
    { id: '202', contractNo: 'CT6901-B202', roomNo: '202', rent: 3500.00, water: 100.00, electric: 300.00, total: 3900.00, status: 'PENDING' },
    { id: '203', contractNo: 'CT6901-B203', roomNo: '203', rent: 3500.00, water: 0,      electric: 0,      total: 3500.00, status: 'PENDING' }, 
  ],

  // === ข้อมูลของ ID 3 (CONFIRM - ตึก C รอบเดือนเก่า) ===
  '3': [
    { id: '301', contractNo: 'CT6812-C301', roomNo: '301', rent: 4000.00, water: 100.00, electric: 500.00, total: 4600.00, status: 'CONFIRM' },
    { id: '302', contractNo: 'CT6812-C302', roomNo: '302', rent: 4000.00, water: 120.00, electric: 450.00, total: 4570.00, status: 'CONFIRM' },
  ],
};


const INVOICE_DETAILS_BY_ID: Record<string, InvoiceDetail> = {
    // --- Group 1: Confirm (ID 101-105) ---
    '101': {
        id: '101', cycle: "2569-01(31/01/2569)", contractNo: "CT6901-A101", docDate: "01/01/2569", property: "A101",
        tenant: "สมชาย ใจดี", address: "123 ถ.สุขุมวิท เขตคลองเตย กทม.", note: "สัญญา 1 ปี", status: 'CONFIRM', totalAmount: 5600.00,
        items: [
            { id: 1, description: "ค่าเช่า", serialNo: "", effectiveDate: "01/01/2569 - 31/01/2569", amountBeforeTax: 5000, tax: 0, wht: 0, total: 5000, note: "" },
            { id: 2, description: "ค่าน้ำ", serialNo: "W-101", effectiveDate: "01/12/2568 - 31/12/2568", amountBeforeTax: 140, tax: 10, wht: 0, total: 150, note: "" },
            { id: 3, description: "ค่าไฟ", serialNo: "E-101", effectiveDate: "01/12/2568 - 31/12/2568", amountBeforeTax: 420, tax: 30, wht: 0, total: 450, note: "" },
        ]
    },
    '102': {
        id: '102', cycle: "2569-01(31/01/2569)", contractNo: "CT6901-A102", docDate: "01/01/2569", property: "A102",
        tenant: "วิภาวดี รังสิต", address: "123 ถ.สุขุมวิท เขตคลองเตย กทม.", note: "-", status: 'CONFIRM', totalAmount: 5520.00,
        items: [
            { id: 1, description: "ค่าเช่า", serialNo: "", effectiveDate: "01/01/2569 - 31/01/2569", amountBeforeTax: 5000, tax: 0, wht: 0, total: 5000, note: "" },
            { id: 2, description: "ค่าน้ำ", serialNo: "W-102", effectiveDate: "01/12/2568 - 31/12/2568", amountBeforeTax: 112, tax: 8, wht: 0, total: 120, note: "" },
            { id: 3, description: "ค่าไฟ", serialNo: "E-102", effectiveDate: "01/12/2568 - 31/12/2568", amountBeforeTax: 374, tax: 26, wht: 0, total: 400, note: "" },
        ]
    },
    '103': {
        id: '103', cycle: "2569-01(31/01/2569)", contractNo: "CT6901-A103", docDate: "01/01/2569", property: "A103",
        tenant: "ปิยะพงษ์ ผิวอ่อน", address: "123 ถ.สุขุมวิท เขตคลองเตย กทม.", note: "-", status: 'CONFIRM', totalAmount: 4950.00,
        items: [
            { id: 1, description: "ค่าเช่า", serialNo: "", effectiveDate: "01/01/2569 - 31/01/2569", amountBeforeTax: 4500, tax: 0, wht: 0, total: 4500, note: "" },
            { id: 2, description: "ค่าน้ำ", serialNo: "W-103", effectiveDate: "01/12/2568 - 31/12/2568", amountBeforeTax: 93, tax: 7, wht: 0, total: 100, note: "" },
            { id: 3, description: "ค่าไฟ", serialNo: "E-103", effectiveDate: "01/12/2568 - 31/12/2568", amountBeforeTax: 327, tax: 23, wht: 0, total: 350, note: "" },
        ]
    },
    '104': { // (ห้องตามตัวอย่างรูปภาพ)
        id: '104', cycle: "2569-01(31/01/2569)", contractNo: "CT01240630", docDate: "01/06/2567", property: "104",
        tenant: "สิปกร นัดดาครี", address: "123 ถ.สุขุมวิท เขตคลองเตย กทม", note: "-", status: 'CONFIRM', totalAmount: 3266.43,
        items: [
            { id: 1, description: "ค่าเช่า", serialNo: "", effectiveDate: "01/01/2569 - 31/01/2569", amountBeforeTax: 2100, tax: 0, wht: 0, total: 2100, note: "" },
            { id: 2, description: "ค่าเช่าเฟอร์นิเจอร์", serialNo: "", effectiveDate: "01/01/2569 - 31/01/2569", amountBeforeTax: 841.12, tax: 58.88, wht: 0, total: 900, note: "" },
            { id: 3, description: "ค่าน้ำ", serialNo: "28-463-W142", effectiveDate: "01/12/2569 - 31/12/2568", amountBeforeTax: 60, tax: 4.2, wht: 0, total: 64.2, note: "" },
            { id: 4, description: "ค่าไฟ", serialNo: "28-463-E142", effectiveDate: "01/12/2568 - 31/12/2568", amountBeforeTax: 189, tax: 13.23, wht: 0, total: 202.23, note: "" },
        ]
    },
    '105': {
        id: '105', cycle: "2569-01(31/01/2569)", contractNo: "CT6901-A105", docDate: "01/01/2569", property: "A105",
        tenant: "บัวขาว บัญชาเมฆ", address: "123 ถ.สุขุมวิท เขตคลองเตย กทม", note: "-", status: 'CONFIRM', totalAmount: 7000.00,
        items: [
            { id: 1, description: "ค่าเช่า", serialNo: "", effectiveDate: "01/01/2569 - 31/01/2569", amountBeforeTax: 6000, tax: 0, wht: 0, total: 6000, note: "" },
            { id: 2, description: "ค่าน้ำ", serialNo: "W-105", effectiveDate: "01/12/2568 - 31/12/2568", amountBeforeTax: 187, tax: 13, wht: 0, total: 200, note: "" },
            { id: 3, description: "ค่าไฟ", serialNo: "E-105", effectiveDate: "01/12/2568 - 31/12/2568", amountBeforeTax: 748, tax: 52, wht: 0, total: 800, note: "" },
        ]
    },

    // --- Group 2: Pending (ID 201-203) ---
    '201': {
        id: '201', cycle: "2569-01(31/01/2569)", contractNo: "CT6901-B201", docDate: "-", property: "B201",
        tenant: "สมหญิง รักดี", address: "-", note: "รอจดมิเตอร์", status: 'PENDING', totalAmount: 3500.00,
        items: [
            { id: 1, description: "ค่าเช่า", serialNo: "", effectiveDate: "01/01/2569 - 31/01/2569", amountBeforeTax: 3500, tax: 0, wht: 0, total: 3500, note: "" },
        ]
    },
    '202': {
        id: '202', cycle: "2569-01(31/01/2569)", contractNo: "CT6901-B202", docDate: "05/01/2569", property: "B202",
        tenant: "มานะ อดทน", address: "101 ถ.ลาดพร้าว กทม.", note: "-", status: 'PENDING', totalAmount: 3900.00,
        items: [
            { id: 1, description: "ค่าเช่า", serialNo: "", effectiveDate: "01/01/2569 - 31/01/2569", amountBeforeTax: 3500, tax: 0, wht: 0, total: 3500, note: "" },
            { id: 2, description: "ค่าน้ำ", serialNo: "W-202", effectiveDate: "01/12/2568 - 31/12/2568", amountBeforeTax: 93, tax: 7, wht: 0, total: 100, note: "" },
            { id: 3, description: "ค่าไฟ", serialNo: "E-202", effectiveDate: "01/12/2568 - 31/12/2568", amountBeforeTax: 280, tax: 20, wht: 0, total: 300, note: "" },
        ]
    },
    '203': {
        id: '203', cycle: "2569-01(31/01/2569)", contractNo: "CT6901-B203", docDate: "-", property: "B203",
        tenant: "ชูใจ ใฝ่เรียน", address: "101 ถ.ลาดพร้าว กทม", note: "รอจดมิเตอร์", status: 'PENDING', totalAmount: 3500.00,
        items: [
            { id: 1, description: "ค่าเช่า", serialNo: "", effectiveDate: "01/01/2569 - 31/01/2569", amountBeforeTax: 3500, tax: 0, wht: 0, total: 3500, note: "" },
        ]
    },

    // --- Group 3: Confirm Old Cycle (ID 301-302) ---
    '301': {
        id: '301', cycle: "2568-12(31/12/2568)", contractNo: "CT6812-C301", docDate: "01/12/2568", property: "C301",
        tenant: "ปิติ ยินดี", address: "999 ถ.พระราม 4 กทม.", note: "รอบบิลธันวาคม", status: 'CONFIRM', totalAmount: 4600.00,
        items: [
            { id: 1, description: "ค่าเช่า", serialNo: "", effectiveDate: "01/12/2568 - 31/12/2568", amountBeforeTax: 4000, tax: 0, wht: 0, total: 4000, note: "" },
            { id: 2, description: "ค่าน้ำ", serialNo: "W-301", effectiveDate: "01/11/2568 - 30/11/2568", amountBeforeTax: 93, tax: 7, wht: 0, total: 100, note: "" },
            { id: 3, description: "ค่าไฟ", serialNo: "E-301", effectiveDate: "01/11/2568 - 30/11/2568", amountBeforeTax: 467, tax: 33, wht: 0, total: 500, note: "" },
        ]
    },
    '302': {
        id: '302', cycle: "2568-12(31/12/2568)", contractNo: "CT6812-C302", docDate: "01/12/2568", property: "C302",
        tenant: "วีระ กล้าหาญ", address: "999 ถ.พระราม 4 กทม.", note: "รอบบิลธันวาคม", status: 'CONFIRM', totalAmount: 4570.00,
        items: [
            { id: 1, description: "ค่าเช่า", serialNo: "", effectiveDate: "01/12/2568 - 31/12/2568", amountBeforeTax: 4000, tax: 0, wht: 0, total: 4000, note: "" },
            { id: 2, description: "ค่าน้ำ", serialNo: "W-302", effectiveDate: "01/11/2568 - 30/11/2568", amountBeforeTax: 112, tax: 8, wht: 0, total: 120, note: "" },
            { id: 3, description: "ค่าไฟ", serialNo: "E-302", effectiveDate: "01/11/2568 - 30/11/2568", amountBeforeTax: 420, tax: 30, wht: 0, total: 450, note: "" },
        ]
    }
};

export const _rentalProcessMock: RentalProcessItem[] = [
  {
    id: '1',
    processDate: '23/12/2568',
    cycle: '01/2569',
    invoiceCount: 5,
    totalAmount: 27950.00,
    status: 'CONFIRM',
  },
  {
    id: '2',
    processDate: '23/12/2568',
    cycle: '01/2569',
    invoiceCount: 3,
    totalAmount: 10900.00,
    status: 'PENDING',
  },
  {
    id: '3',
    processDate: '22/12/2568',
    cycle: '12/2568',
    invoiceCount: 2,
    totalAmount: 9170.00,
    status: 'CONFIRM',
  },
];


export function getRentalProcessDetail(id: string): RentalProcessDetail[] {
  return DETAILS_BY_ID[id] || [];
}

// Function สำหรับดึงใบแจ้งหนี้ตาม ID รายละเอียด
export function getInvoiceDetail(detailId: string): InvoiceDetail | null {
    // ถ้ามี ID ตรงเป๊ะ ให้คืนค่านั้น
    if (INVOICE_DETAILS_BY_ID[detailId]) {
        return INVOICE_DETAILS_BY_ID[detailId];
    }
    
    // Fallback: ถ้าไม่มี Mock Data ให้สร้าง Data ปลอมๆ กลับไป
    return {
        id: detailId,
        cycle: "2569-01(31/01/2569)",
        contractNo: `MOCK-${detailId}`,
        docDate: "01/01/2569",
        property: detailId,
        tenant: "ข้อมูลทดสอบ (Mock Data)",
        address: "99/99 กรุงเทพมหานคร",
        note: "-",
        status: 'PENDING',
        totalAmount: 0,
        items: []
    };
}

export const _rentalProcessDetailMock: RentalProcessDetail[] = [];