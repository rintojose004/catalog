import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';

export const HeroSection = ({ totalItems, totalCategories }) => {

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', transition: 'all 0.3s ease' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 10 }}>
          <Box sx={{ flex: 2 }}>
            <Typography variant="h1" sx={{ fontWeight: 900, lineHeight: 0.85,
                fontSize: { xs: '3.5rem', sm: '5rem', md: '6rem' },
                letterSpacing: '-0.06em', color: 'text.primary', mb: 4 }}>
              CRAFTED <br />
              INDEX.</Typography>

            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '480px',
              fontWeight: 400, lineHeight: 1.5, mb: 4, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
              A high-performance directory of {totalItems} essentials. 
              Organized into {totalCategories} curated sections for the modern professional.
            </Typography>
            
          </Box>

          <Box sx={{ flex: 1, width: '100%',display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: 4, pt: { md: 2 } }}>
            <Box>
              <Typography variant="h2" sx={{ fontWeight: 900, fontSize: '4rem', lineHeight: 1 }}>
                {totalItems}</Typography>
              <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary', letterSpacing: '0.1em' }}>
                TOTAL OBJECTS</Typography>
            </Box>

            <Box>
              <Typography variant="h2" sx={{ fontWeight: 900, fontSize: '4rem', lineHeight: 1 }}>
                {totalCategories}</Typography>
              <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary', letterSpacing: '0.1em' }}>
                CATEGORIES</Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};