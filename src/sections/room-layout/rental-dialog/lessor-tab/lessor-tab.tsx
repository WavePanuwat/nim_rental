"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import LessorInfoCard, { LessorData } from "./lessor-info-card";
import LessorAddBox from "./lessor-add-box";
import LessorAddForm from "./lessor-add-form";

// 1. สร้าง Mock Data ตามที่คุณต้องการ (Hardcode ไว้ตรงนี้)
const FIXED_LESSOR_DATA: LessorData = {
  name: "นิ่มซี่เส็งแมนชั่น จำกัด",
  type: "ผู้ให้เช่า", // ประเภท (คงไว้ตามดีไซน์เดิม)
  address: "181 หมู่ที่ 9 ตำบลหนองหาร อำเภอสันทราย จังหวัดเชียงใหม่",
  phone: "053499129",
  idCard: "1234657980",
  taxId: "0505550004262",
};

export default function LessorTab() {
  // State เก็บข้อมูลผู้ให้เช่า
  const [lessorData, setLessorData] = useState<LessorData | null>(null);
  
  // State ควบคุมการเปิดปิด Modal
  const [openForm, setOpenForm] = useState(false);

  // ฟังก์ชันเมื่อกด "บันทึก"
  const handleSaveLessor = () => {
    // 2. ไม่ต้องรับค่า formData มาใช้ 
    // ให้ setLessorData เป็นค่า FIXED_LESSOR_DATA ทันที
    setLessorData(FIXED_LESSOR_DATA);
    
    // ปิด Form
    setOpenForm(false);
  };

  // ฟังก์ชันลบข้อมูล
  const handleDelete = () => {
    if (confirm("คุณต้องการลบข้อมูลผู้ให้เช่าใช่หรือไม่?")) {
      setLessorData(null);
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      {lessorData ? (
        // แสดง Card เมื่อมีข้อมูล
        <LessorInfoCard 
          data={lessorData} 
          onDelete={handleDelete} 
        />
      ) : (
        // แสดงปุ่มเพิ่ม เมื่อยังไม่มีข้อมูล
        <LessorAddBox 
          label="เพิ่มข้อมูลผู้ให้เช่า"
          onClick={() => setOpenForm(true)} 
        />
      )}

      {/* Dialog Form */}
      <LessorAddForm 
        open={openForm} 
        onClose={() => setOpenForm(false)} 
        onSubmit={handleSaveLessor} // ส่งฟังก์ชันไปเรียกใช้เมื่อกดบันทึก
      />
    </Box>
  );
}