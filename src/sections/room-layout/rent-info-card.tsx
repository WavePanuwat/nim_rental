"use client";

import React from "react";
import { Box, Card, CardContent, Typography, Stack } from "@mui/material";
import RentCard from "./rent-card";
import RentAddBox from "./rent-add-box";
import { RentItem } from "@/src/models/types";

type RentInfoCardProps = {
  rentList: RentItem[];
  onAdd: () => void;
  onDelete: (id: string) => void;
};

const RentInfoCard: React.FC<RentInfoCardProps> = ({
  rentList,
  onAdd,
  onDelete,
}) => {
  return (
    <Card
      sx={{
        width: 1200,
        borderRadius: 4,
        bgcolor: "#f5f6f8",
        overflow: "hidden",
      }}
    >
      {/* ===== Header ===== */}
      <Box
        sx={{
          bgcolor: "#1f3349",
          color: "#fff",
          height: 60,
          px: 4,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography fontSize={18} fontWeight={600}>
          ข้อมูลการเช่า
        </Typography>
      </Box>

      {/* ===== Content ===== */}
      <CardContent sx={{ p: 3 }}>
        {rentList.length === 0 ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <RentAddBox onClick={onAdd} />
          </Box>
        ) : (
          <Stack spacing={2} alignItems="center">
            {rentList.map((item) => (
              <RentCard
                key={item.id}
                item={item}
                onDelete={onDelete}
              />
            ))}

            <RentAddBox onClick={onAdd} />
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default RentInfoCard;
