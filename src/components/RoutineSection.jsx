import { Paper, Box, Typography, Avatar } from "@mui/material";
import ProductItem from "./ProductItem";

export default function RoutineSection({ title, icon, items, accentColor, bgColor }) {
  return (
    <Paper elevation={0} sx={{ borderRadius: 3, p: 2, mb: 2, bgcolor: "white" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Avatar sx={{ bgcolor: bgColor, width: 32, height: 32, mr: 1 }}>
          {icon}
        </Avatar>
        <Typography variant="subtitle1" fontWeight={700} sx={{ color: accentColor }}>
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
          （毎日使うもの）
        </Typography>
      </Box>
      {items.map((item, i) => (
        <ProductItem
          key={item.id}
          item={item}
          index={item.id}
          accentColor={accentColor}
          isLast={i === items.length - 1}
        />
      ))}
    </Paper>
  );
}
