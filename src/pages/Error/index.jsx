import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export const Error = () => {
  const navigate = useNavigate();

  return (
    <Box component="main" sx={{ minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box',  position: 'relative', px: 3 }}>
      <Container maxWidth="sm" disableGutters sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="caption" sx={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.5em', textTransform: 'uppercase',
         color: 'text.secondary', mb: 2 }}>Error Reference: 404</Typography>

        <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, color: 'primary.main', textAlign: 'center', lineHeight: 1.1 }}>
          Page not found.</Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 4, maxWidth: '320px' }}>
          The page you are looking for doesn't exist or has been moved to another section.</Typography>

        <Button onClick={() => navigate('/')} startIcon={<KeyboardBackspaceIcon />}
          sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'none',
            fontSize: '1rem', borderBottom: '2px solid transparent', borderRadius: 0,
            padding: '4px 0', '&:hover': { bgcolor: 'transparent', borderBottomColor: 'primary.main' } }}>Back to the home</Button>
      </Container>
    </Box>
  );
};