import React from "react";
import { AppBar, Toolbar, Typography, Box, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useHome } from "@/context/HomeContext";
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from "@mui/icons-material/Close";

export const Navbar = ({ showSearch = false }) => {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useHome();

  return (
    <>
      <AppBar position="fixed" elevation={0}
        sx={{ background: "#cecbcb", borderBottom: "1px solid #e5e7eb" }}>
        <Toolbar sx={{ px: { xs: 2, md: 4 }, display: "flex", alignItems: "center",
            justifyContent: "space-between", minHeight: "64px", gap: 2 }}>
          <Box onClick={() => navigate("/")} sx={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ width: 32, height: 32, background: "#000", borderRadius: "8px",
              display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "14px" }}>
              <GridViewIcon /> </Box>

            <Typography sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: "1.1rem",
              letterSpacing: "-0.02em", color: "#000" }}>Catalog</Typography>
          </Box>

          {showSearch && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, px: 1.5, height: "42px",
                width: { xs: "100%", sm: "300px", md: "420px" }, borderRadius: "10px",
                border: "1px solid #e5e7eb", background: "#f9fafb", transition: "all 0.25s ease",
                "&:hover": { background: "#f3f4f6" },
                "&:focus-within": { background: "#fff", borderColor: "#000" } }}>
              <SearchIcon sx={{ fontSize: 18, color: "#9ca3af" }} />
            
              <InputBase placeholder="Search catalog..." value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ flex: 1, fontSize: "0.875rem", color: "#000",
                  "& input::placeholder": { color: "#9ca3af" } }} />

              {searchQuery && (
                <CloseIcon onClick={() => setSearchQuery("")} sx={{
                  fontSize: 18, color: "#000", cursor: "pointer" }} /> )}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Spacer */}
      <Box sx={{ height: "64px" }} />
    </>
  );
};