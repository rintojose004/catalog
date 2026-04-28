import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ItemCard = ({ item, idx }) => {
  
  const navigate = useNavigate();
  
  const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  const handleClick = () => {
    navigate(`/item/${slugify(item.itemname)}`, { state: { item } });
  };


  return (
    <Box onClick={handleClick} sx={{ width: "100%", minHeight: 300, borderRadius: 2, overflow: "hidden",
        background: "#12121A",  border: "1px solid rgba(255,255,255,0.08)", transition: "all 0.3s ease", cursor: "pointer",
        "&:hover": { transform: "translateY(-6px)", borderColor: "#E8FF47", boxShadow: "0 10px 30px rgba(0,0,0,0.4)" } }}>
      <Box sx={{ position: "relative", height: 200 }}>
        <Box component="img" src={item.image || `https://picsum.photos/300/200?random=${idx}`}
          sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "0.4s",
            "&:hover": { transform: "scale(1.06)" } }} />
      </Box>

      {/* Content */}
      <Box sx={{ p: 2 }}>
        <Typography fontWeight={700} sx={{ color: "#ffffff" }} mb={1}>{item.itemname}</Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {item.itemprops?.slice(0, 2).map((prop, i) => (
            <Box key={i} sx={{ fontSize: "0.6rem", color: "#E8FF47" }}>{prop.label}: {prop.value}</Box>))}
        </Box>
      </Box>
    </Box>
  );
};
