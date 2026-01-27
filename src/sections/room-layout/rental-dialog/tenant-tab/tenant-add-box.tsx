import { Box, Typography } from "@mui/material";

type Props = {
  label: string;
  onClick?: () => void;
};

const RentAddBox: React.FC<Props> = ({ onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 900,
        height: 150,
        border: "1px dashed",
        borderColor: "divider",
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        "&:hover": {
          bgcolor: "action.hover",
          borderColor: "primary.main",
        },
      }}
    >
      <Typography fontSize={16} fontWeight={600}>
        + เพิ่มข้อมูลผู้เช่า
      </Typography>
    </Box>
  );
};

export default RentAddBox;
