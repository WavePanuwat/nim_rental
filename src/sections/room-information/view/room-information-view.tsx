"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material";
import InfoRow from "@/sections/room-information/info-row";
import RentInformationDialog from "@/sections/room-information/rent-information-dialog";
import { roomInformationMock } from "@/data/room-information/room-information.mock";
import RentCard from "@/sections/room-information/rent-card";
import RentAddBox from "@/sections/room-information/rent-add-box";
import { RentItem } from "@/sections/room-information/types";
import AppBarDanger from "@/components/app-bar-danger";

const RoomInformationView: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [rentList, setRentList] = useState<RentItem[]>([]);
  const room = roomInformationMock;

  return (
    <>
      {/* App Bar */}
      <AppBarDanger />
      <Toolbar />

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Stack spacing={3} width={1500}>
          {/* ===== ข้อมูลห้อง ===== */}
          <Box>
            <Typography variant="h4" fontWeight={700} mb={3}>
              ข้อมูลห้อง
            </Typography>

            <Card
              sx={{
                height: 200,
                borderRadius: 7,
                border: "1px solid",
                borderColor: "grey.300",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)", // drop shadow
                bgcolor: "#fff",
              }}
            >
              <CardContent sx={{ px: 7, py: 3 }}>
                <Stack spacing={1.5}>
                  <InfoRow label="เลขห้อง" value={room.roomNo} />
                  <InfoRow label="อาคาร" value={room.branch} />
                  <InfoRow label="สถานที่" value={room.location} />
                  <InfoRow label="ที่ตั้ง" value={room.address} />
                </Stack>
              </CardContent>
            </Card>
          </Box>

          {/* ===== ข้อมูลการเช่า ===== */}
          <Card variant="outlined" sx={{ borderRadius: 4, bgcolor: "fafafa" }}>
            <Box
              sx={{
                bgcolor: "#1f3349",
                color: "#fff",
                height: 80,
                px: 3,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography fontSize={20} fontWeight={600}>
                ข้อมูลการเช่า
              </Typography>
            </Box>

            <CardContent sx={{ p: 3   ,bgcolor: "#f5f6f8",}}>
              {rentList.length === 0 ? (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <RentAddBox onClick={() => setOpenDialog(true)} />
                </Box>
              ) : (
                <Stack spacing={2} alignItems="center">
                  {rentList.map((item) => (
                    <RentCard
                      key={item.id}
                      item={item}
                      onDelete={(id) =>
                        setRentList((prev) => prev.filter((r) => r.id !== id))
                      }
                    />
                  ))}

                  <RentAddBox onClick={() => setOpenDialog(true)} />
                </Stack>
              )}
            </CardContent>
          </Card>
        </Stack>
      </Box>

      <RentInformationDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSubmit={(data: RentItem) => setRentList((prev) => [...prev, data])}
      />
    </>
  );
};

export default RoomInformationView;
