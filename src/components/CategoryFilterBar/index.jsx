import React, { useMemo } from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ComputerIcon from "@mui/icons-material/Computer";
import CategoryIcon from "@mui/icons-material/Category";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { useHome } from "@/context/HomeContext";
import catalogData from "@/data/catalog.json";

const getCategoryIcon = (category) => {
  switch (category.toLowerCase()) {
    case "cars":
      return <DirectionsCarIcon fontSize="small" />;
    case "bikes":
      return <TwoWheelerIcon fontSize="small" />;
    case "phones":
      return <SmartphoneIcon fontSize="small" />;
    case "computers":
      return <ComputerIcon fontSize="small" />;
    case "all":
      return <AllInclusiveIcon fontSize="small" />;
    default:
      return <CategoryIcon fontSize="small" />;
  }
};

export const CategoryFilterBar = () => {
  const { activeFilter, setActiveFilter } = useHome();

  const categories = useMemo(() => {
    const order = ["Cars", "Bikes", "Phones", "Computers"];
    const found = [...new Set(catalogData.map((i) => i.category))];
    return order.filter((c) => found.includes(c)).concat(found.filter((c) => !order.includes(c)));
  }, []);

  const renderTab = (id, label) => {
    const isActive = activeFilter === id;

    return (
      <ButtonBase key={id} onClick={() => setActiveFilter(id)}
        sx={{ px: { xs: 1.5, sm: 2, md: 3 }, py: { xs: 1, md: 1.5 }, minWidth: "max-content", borderRadius: "12px",
          display: "flex", alignItems: "center", gap: { xs: 1, md: 1.5 },
          scrollSnapAlign: "start", transition: "all 0.25s ease", border: "1px solid",
          bgcolor: isActive ? "#000" : "transparent", color: isActive ? "#fff" : "#000",
          borderColor: isActive ? "#000" : "#e5e7eb",
          "&:hover": { bgcolor: isActive ? "#000" : "#f5f5f5" } }}>
        <Box sx={{ display: "flex", opacity: isActive ? 1 : 0.7 }}>{getCategoryIcon(id)}</Box>

        <Typography sx={{ fontSize: { xs: "0.75rem", md: "0.85rem" },
            fontWeight: isActive ? 700 : 500, whiteSpace: "nowrap" }}>{label}</Typography>
      </ButtonBase>
    );
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "flex-start", md: "center" },
        gap: { xs: 1.5, md: 2 }, mb: { xs: 4, md: 8 }, pb: 1, overflowX: "auto",
        scrollSnapType: "x mandatory",
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        "&::-webkit-scrollbar": { display: "none" } }}>
      {renderTab("all", "Everything")}
      {categories.map((cat) => renderTab(cat, cat))}
    </Box>
  );
};