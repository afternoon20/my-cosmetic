import { Box, Typography, Chip, Link, Avatar, Divider } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function ProductItem({ item, index, accentColor, isLast }) {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", py: 1.5 }}>
        <Avatar
          sx={{
            width: 28,
            height: 28,
            bgcolor: accentColor,
            fontSize: 13,
            fontWeight: 700,
            mr: 1.5,
            flexShrink: 0,
          }}
        >
          {index}
        </Avatar>
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
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="caption" color="text.secondary" fontWeight={600} display="block">
            {item.category}
          </Typography>
          <Typography variant="body2" fontWeight={700} lineHeight={1.4}>
            {item.name}
          </Typography>
          {item.url ? (
            <Link href={item.url} target="_blank" rel="noopener" variant="caption" underline="hover">
              {item.maker} <OpenInNewIcon sx={{ fontSize: 11, verticalAlign: "middle" }} />
            </Link>
          ) : (
            <Typography variant="caption" color="text.secondary">{item.maker}</Typography>
          )}
        </Box>
        <Chip
          label="毎日"
          size="small"
          variant="outlined"
          sx={{ ml: 1, flexShrink: 0, fontSize: 11 }}
        />
      </Box>
      {!isLast && <Divider />}
    </>
  );
}