import { Paper, Box, Typography, Avatar } from "@mui/material";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { lifestyle } from "../data/items";

const iconMap = {
  DirectionsRun: DirectionsRunIcon,
  SportsBar: SportsBarIcon,
  SmokeFree: SmokeFreeIcon,
  Bedtime: BedtimeIcon,
  Restaurant: RestaurantIcon,
};

export default function LifestyleSection() {
  return (
    <Paper elevation={0} sx={{ borderRadius: 3, p: 2, mb: 2, bgcolor: "white" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar sx={{ bgcolor: "#e3f2fd", width: 32, height: 32, mr: 1 }}>
          <MonitorHeartIcon sx={{ color: "#1976d2", fontSize: 18 }} />
        </Avatar>
        <Typography variant="subtitle1" fontWeight={700} color="primary">
          生活習慣
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {lifestyle.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <Box
              key={item.label}
              sx={{
                width: "33.33%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                pb: 2,
              }}
            >
              <IconComponent sx={{ color: item.color, fontSize: 28, mb: 0.5 }} />
              <Typography variant="caption" color="text.secondary" lineHeight={1.3}>
                {item.label}
              </Typography>
              <Typography variant="caption" fontWeight={700} lineHeight={1.3} sx={{ whiteSpace: "pre-line" }}>
                {item.value}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
}