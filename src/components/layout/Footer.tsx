import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
  Link,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { personalInfo } from '../../constants/data';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              {personalInfo.name}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {personalInfo.title} • {personalInfo.location}
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                gap: 1,
              }}
            >
              <IconButton
                component={Link}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
                aria-label="GitHub"
              >
                <GitHubIcon />
              </IconButton>
              
              <IconButton
                component={Link}
                href={`mailto:${personalInfo.email}`}
                sx={{ color: 'white' }}
                aria-label="Email"
              >
                <EmailIcon />
              </IconButton>
              
              <IconButton
                component={Link}
                href={`tel:${personalInfo.phone}`}
                sx={{ color: 'white' }}
                aria-label="Phone"
              >
                <PhoneIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Box
          sx={{
            textAlign: 'center',
            mt: 3,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;