import { InvoiceRecord, PaymentRecord } from "../models/types";

const dataSet1: InvoiceRecord[] = [
  { 
    id: 1, 
    date: "23/12/2568", 
    invoiceNo: "INV01681223106", 
    property: "A-101", 
    leaseNo: "CT01200375", 
    tenant: "ประยูร สิทธิธัญ", 
    amount: "19,890.97" 
  },
  { 
    id: 2, 
    date: "23/12/2568", 
    invoiceNo: "INV01681223105", 
    property: "A-102",
    leaseNo: "CT01200304", 
    tenant: "นิ่มลิสซิ่ง จำกัด", 
    amount: "5,300.00" 
  },
  { 
    id: 3, 
    date: "23/12/2568", 
    invoiceNo: "INV01681223104", 
    property: "B-205",
    leaseNo: "CT01251283", 
    tenant: "ศุภกิตติ์ คำกำ", 
    amount: "6,662.78" 
  },
  { 
    id: 4, 
    date: "23/12/2568", 
    invoiceNo: "INV01681223103", 
    property: "B-301",
    leaseNo: "CT01230533", 
    tenant: "ชัยอนันต์ สิงห์บุญ", 
    amount: "3,323.90" 
  },
  { 
    id: 5, 
    date: "23/12/2568", 
    invoiceNo: "INV01681223102", 
    property: "C-112",
    leaseNo: "CT01250877", 
    tenant: "จิดาภา วงศ์กวิน", 
    amount: "3,919.13" 
  },
];

// ข้อมูลชุดที่ 2
const dataSet2: InvoiceRecord[] = [
  { 
    id: 1, 
    date: "01/01/2569", 
    invoiceNo: "INV-DEMO-001", 
    property: "Shop-01",
    leaseNo: "CT-DEMO-99", 
    tenant: "บริษัท ตัวอย่าง จำกัด", 
    amount: "5,000.00" 
  }
];


const calculateTotal = (records: InvoiceRecord[]): string => {
  const total = records.reduce((sum, record) => {
    const cleanAmount = record.amount.replace(/,/g, '');
    const value = parseFloat(cleanAmount);
    return sum + (isNaN(value) ? 0 : value);
  }, 0);

  return total.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

export const getInvoicesByPaymentId = (paymentId: number | null): InvoiceRecord[] => {
  if (paymentId === 1) return dataSet1;
  if (paymentId === 2) return dataSet2;
  return [];
};



export const mockData: PaymentRecord[] = [
  {
    id: 1,
    date: "23/12/2568",
    leaseNo: "CT01200375",
    tenant: "บริษัท ABC จำกัด",
    amount: calculateTotal(dataSet1),
    status: "CONFIRM",
  },
  {
    id: 2,
    date: "25/01/2569",
    leaseNo: "CT-DEMO-99",
    tenant: "บริษัท ตัวอย่าง จำกัด",
    amount: calculateTotal(dataSet2),
    status: "CONFIRM",
  },
];