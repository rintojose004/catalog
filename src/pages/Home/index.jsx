import React, { useMemo } from "react";
import { Navbar } from "@/components/Navbar/idnex";
import { Box, Container, Tooltip, Typography } from "@mui/material";
import { HeroSection } from "@/components/HeroSection";
import catalogData from "@/data/catalog.json";
import { CategoryFilterBar } from "@/components/CategoryFilterBar";
import { CategorySection } from "@/components/CategorySection";
import { useHome } from "@/context/HomeContext";

export const Home = () => {
  
  const { searchQuery, activeFilter } = useHome();

  const categories = useMemo(() => {
    const order = ["Cars", "Bikes", "Phones", "Computers"];
    const found = [...new Set(catalogData.map((i) => i.category))];
    return order.filter((c) => found.includes(c)).concat(found.filter((c) => !order.includes(c)));
  }, []);

  // Filter items by search + category
  const filteredData = useMemo(() => {
    let data = catalogData;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      data = data.filter(
        (item) =>
          item.itemname.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q),
      );
    }
    if (activeFilter !== "all") {
      data = data.filter((item) => item.category === activeFilter);
    }
    return data;
  }, [searchQuery, activeFilter]);

  // Group by category
  const grouped = useMemo(() => {
    return categories.reduce((acc, cat) => {
      const items = filteredData.filter((i) => i.category === cat);
      if (items.length > 0) acc[cat] = items;
      return acc;
    }, {});
  }, [filteredData, categories]);

  return (
    <Box>
      <Navbar showSearch={true} />
      {!searchQuery && <HeroSection totalItems={catalogData?.length} totalCategories={categories?.length} />}

      {searchQuery && (
        <Container maxWidth="xl">
          <Box sx={{ pt: 4, pb: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
              Results for{" "}
              <Tooltip title={searchQuery}>
                <Box component="span" sx={{ display: "inline-block",
                    maxWidth: { xs: "120px", sm: "200px", md: "300px" },
                    verticalAlign: "bottom", whiteSpace: "nowrap", overflow: "hidden",
                    textOverflow: "ellipsis", color: "text.primary" }}>
                  "{searchQuery}"</Box>
              </Tooltip>
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              {filteredData.length} item{filteredData.length !== 1 ? "s" : ""}{" "}found</Typography>
          </Box>
        </Container>)}

      <CategoryFilterBar />
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        {Object.keys(grouped).length === 0 ? (
          <Box sx={{ textAlign: "center", py: 12 }}>
            <Typography sx={{ fontSize: "3rem", mb: 2 }}>🔍</Typography>
            <Typography variant="h5" sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 700, mb: 1 }}>
              No items found</Typography>
            <Typography>Try a different search term or category filter.</Typography>
          </Box>) :
         (Object.entries(grouped).map(([category, items]) => (
            <CategorySection key={category} category={category} items={items} />))
        )}
      </Container>
    </Box>
  );
};
