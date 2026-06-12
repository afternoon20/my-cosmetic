import { Paper, Box, Typography, Avatar, Chip, Link } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutlineRounded";
import ScheduleIcon from "@mui/icons-material/Schedule";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { sometimesItems } from "../data/items";

export default function SometimesSection() {
  return (
    <Paper elevation={0} sx={{ borderRadius: 3, p: 2, mb: 2, bgcolor: "white" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar sx={{ bgcolor: "#fce4ec", width: 32, height: 32, mr: 1 }}>
          <HelpOutlineIcon sx={{ color: "#c2185b", fontSize: 18 }} />
        </Avatar>
        <Typography variant="subtitle1" fontWeight={700} sx={{ color: "#c2185b" }}>
          必要時のみ使うもの
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {sometimesItems.map((item) => (
          <Paper key={item.id} variant="outlined" sx={{ borderRadius: 2, p: 1.5 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <ScheduleIcon sx={{ fontSize: 13, color: "#c2185b", mr: 0.5 }} />
              <Typography variant="caption" fontWeight={700} sx={{ color: "#c2185b" }}>
                {item.trigger}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {item.img ? (
                <Box
                  component="img"
                  src={item.img}
                  alt={item.name}
                  onError={(e) => { e.target.style.opacity = 0.1; }}
                  sx={{ width: 64, height: 64, objectFit: "contain", borderRadius: 1, bgcolor: "#fafafa", mr: 1.5, flexShrink: 0 }}
                />
              ) : (
                <Avatar
                  sx={{ width: 64, height: 64, bgcolor: "#f5f5f5", color: "#9e9e9e", fontSize: 20, mr: 1.5, flexShrink: 0, borderRadius: 1 }}
                >
                  NO IMAGE
                </Avatar>
              )}
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" fontWeight={700}>{item.name}</Typography>
                {item.url ? (
                  <Link href={item.url} target="_blank" rel="noopener" variant="caption" underline="hover">
                    {item.maker} <OpenInNewIcon sx={{ fontSize: 11, verticalAlign: "middle" }} />
                  </Link>
                ) : (
                  <Typography variant="caption" color="text.secondary">{item.maker}</Typography>
                )}
              </Box>
              <Chip
                label="必要時"
                size="small"
                color="error"
                variant="outlined"
                sx={{ ml: 1, flexShrink: 0, fontSize: 11 }}
              />
            </Box>
          </Paper>
        ))}
      </Box>
    </Paper>
  );
}