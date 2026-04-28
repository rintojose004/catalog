import React from "react";
import { Box, Typography } from "@mui/material";
import { ItemCard } from "../ItemCard/indedx";
import { useHome } from "@/context/HomeContext";

export const CategorySection = ({ category, items }) => {

  const { expandedCategories, toggleCategory } = useHome();

  const isExpanded = expandedCategories[category];
  const displayedItems = isExpanded ? items : items.slice(0, 4);

  return (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3, flexWrap: "wrap", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>          
          <Box sx={{ width: 3, height: 28, opacity: 0.7, borderRadius: "2px" }}/>
          <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.4rem", md: "1.8rem" }, letterSpacing: "-0.02em" }}>
            {category}</Typography>
        </Box>

        {items?.length > 4 && (
          <Typography onClick={() => toggleCategory(category)} sx={{ cursor: "pointer", fontSize: "0.75rem", fontWeight: 600, px: 1.5, py: 0.5,
              borderRadius: "20px", border: "1px solid", borderColor: "divider", transition: "all 0.2s ease",
              "&:hover": { backgroundColor: "action.hover" } }}>
            {isExpanded ? "Show Less" : `View All ${items.length}`}</Typography>)}
      </Box>

      <Box sx={{ display: "grid",
        gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 2, md: 3 } }}>
        {displayedItems.map((item, idx) => (
          <ItemCard key={item.itemname} item={item} idx={idx} />))}
      </Box>
    </Box>
  );
};