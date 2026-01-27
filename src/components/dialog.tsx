import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

type DialogHeaderProps = {
  onClose: () => void;
  title?: string;
};

export default function DialogHeader({ onClose, title }: DialogHeaderProps) {
  return (
    <DialogTitle
      sx={{
        bgcolor: "#D70024",
        color: "white",
        display: "flex",
        alignItems: "center",
        py: 1,
        boxShadow: 2,
        flexShrink: 0,
        zIndex: 1100,
      }}
    >
      {/* Title */}
      {title && (
        <Typography
          component="div" // ✅ สำคัญที่สุด
          variant="h6"
          fontWeight={600}
        >
          {title}
        </Typography>
      )}

      <Box sx={{ flexGrow: 1 }} />

      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          color: "white",
          display: "flex",
          gap: 0.5,
          "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
        }}
      >
        <CloseIcon />
        <Typography component="div" fontWeight={600} variant="body2">
          ปิด
        </Typography>
      </IconButton>
    </DialogTitle>
  );
}
