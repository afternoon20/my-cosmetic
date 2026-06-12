import { Box, Container, Paper, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LifestyleSection from "./components/LifestyleSection";
import RoutineSection from "./components/RoutineSection";
import SometimesSection from "./components/SometimesSection";
import { morningItems, nightItems } from "./data/items";

export default function App() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", pb: 4 }}>
      <Paper elevation={1} square sx={{ px: 2, py: 1.5, position: "sticky", top: 0, zIndex: 10, textAlign: "center" }}>
        <Typography variant="h6" fontWeight={700}>スキンケアまとめ</Typography>
      </Paper>
      <Container maxWidth="sm" sx={{ pt: 2, px: 2 }}>
        <LifestyleSection />
        <RoutineSection
          title="朝のルーティン"
          icon={<WbSunnyIcon sx={{ color: "#f57c00", fontSize: 18 }} />}
          items={morningItems}
          accentColor="#f57c00"
          bgColor="#fff3e0"
        />
        <RoutineSection
          title="夜のルーティン"
          icon={<NightsStayIcon sx={{ color: "#283593", fontSize: 18 }} />}
          items={nightItems}
          accentColor="#283593"
          bgColor="#e8eaf6"
        />
        <SometimesSection />
      </Container>
    </Box>
  );
}
