import React, { useState } from "react";
import { Box, Container, Typography, Button, Grid, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import catalogData from "@/data/catalog.json";
import { Navbar } from "@/components/Navbar/idnex";

export const ItemDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [imgError, setImgError] = useState(false);

  const item = location.state?.item ||
    catalogData.find((i) => i.itemname.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") === slug );


  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", pt: 4, pb: 10 }}>
      <Navbar showSearch={false} />
      
      <Container maxWidth="xl">
        <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />}
          sx={{ textTransform: "none", mb: 6, fontSize: "0.9rem",
            "&:hover": { background: "transparent"  } 
          }}>Back to catalog</Button>

        {!item ? (
          <Box sx={{ textAlign: "center", py: 15, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography sx={{ fontSize: "5rem", mb: 2 }}>🔍</Typography>
            <Typography sx={{ fontWeight: 900, fontSize: "2.5rem", mb: 2 }}>Item Not Found</Typography>
            <Typography sx={{ color: "text.secondary", maxWidth: "450px", mb: 4 }}>
              The specific product configuration you are looking for is currently unavailable or doesn't exist in our database.
            </Typography>
            <Button variant="outlined"  onClick={() => navigate("/")} sx={{ borderRadius: "50px", px: 4 }}>Return to Home</Button>
          </Box>) : 
        (<Grid container spacing={6} sx={{ alignItems: 'flex-start', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Grid xs={12} md={6} sx={{ height: "fit-content" }}>
              <Box sx={{ width: "100%", height: { xs: 350, sm: 450, md: 550 }, borderRadius: "32px", overflow: "hidden",
                border: "1px solid",  borderColor: "divider",  background: "action.hover", display: "flex",
                alignItems: "center", justifyContent: "center", boxShadow: "0 20px 80px rgba(0,0,0,0.05)" }}>
                {!imgError ? (
                  <Box component="img" src={item.image} onError={() => setImgError(true)}
                    sx={{ maxWidth: "85%", maxHeight: "85%", objectFit: "contain",
                      filter: "drop-shadow(0px 30px 60px rgba(0,0,0,0.12))" }} />) :
                 (<Typography sx={{ fontSize: "5rem" }}>📦</Typography>)}
              </Box>
            </Grid>

            <Grid xs={12} md={6}>
              <Box sx={{ pl: { md: 2 } }}>
                <Box sx={{ display: "inline-block", border: "1px solid", borderColor: "text.primary",
                  px: 3, py: 0.8, borderRadius: "50px", fontSize: "12px", fontWeight: 900,
                  textTransform: "uppercase", letterSpacing: "0.15em", mb: 3 }}>{item.category}</Box>
                <Typography sx={{ fontWeight: 900, fontSize: { xs: "3rem", md: "4.5rem" }, 
                  lineHeight: 0.9, mb: 4, letterSpacing: "-0.05em" }}>{item.itemname}</Typography>

                <Divider sx={{ mb: 6 }} />

                <Typography sx={{ fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase",
                  fontWeight: 800, mb: 4 }}>Technical Specifications</Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {item.itemprops?.map((prop, i) => (
                    <Box key={i} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",
                        borderBottom: "1px solid", borderColor: "divider", py: 3, transition: "all 0.2s ease",
                        "&:hover": { px: 1, background: "rgba(232,255,71,0.02)" } }}>
                      <Typography sx={{ fontSize: "14px", fontWeight: 600,
                        textTransform: "uppercase", letterSpacing: "0.05em" }}>{prop.label}</Typography>
                      <Typography sx={{ fontSize: "18px", fontWeight: 800 }}>{prop.value}</Typography>
                    </Box>))}
                </Box>
                
              </Box>
            </Grid>
          </Grid>)}
      </Container>
    </Box>
  );
};
