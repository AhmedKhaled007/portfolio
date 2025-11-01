import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Avatar,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { personalInfo, professionalSummary } from '../../constants/data';

const HeroSection: React.FC = () => {
  // Removed unused theme and isMobile variables
  
  const { displayedText: typedTitle } = useTypingEffect(personalInfo.title, 80, 1000);
  const { displayedText: typedSummary } = useTypingEffect(
    professionalSummary.substring(0, 120) + '...', 
    30, 
    3000
  );

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 8, md: 0 },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 300,
                  opacity: 0.9,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                }}
              >
                Hello, I'm
              </Typography>

              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #ffffff 30%, #f0f0f0 90%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                {personalInfo.name}
              </Typography>

              <Typography
                variant="h2"
                component="h3"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  color: 'rgba(255, 255, 255, 0.95)',
                  minHeight: { xs: '2.5rem', md: '3rem' },
                }}
              >
                {typedTitle}
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    width: '2px',
                    height: { xs: '1.75rem', md: '2.25rem' },
                    backgroundColor: 'white',
                    ml: 0.5,
                    animation: 'blink 1s infinite',
                    '@keyframes blink': {
                      '0%, 50%': { opacity: 1 },
                      '51%, 100%': { opacity: 0 },
                    },
                  }}
                />
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.6,
                  opacity: 0.9,
                  mb: 4,
                  maxWidth: '600px',
                  mx: { xs: 'auto', md: 0 },
                  minHeight: '4rem',
                }}
              >
                {typedSummary}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: '1rem',
                  opacity: 0.8,
                  mb: 4,
                }}
              >
                📍 {personalInfo.location}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<EmailIcon />}
                  onClick={scrollToContact}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Get In Touch
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<DownloadIcon />}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                  href="/resume.pdf"
                  target="_blank"
                >
                  Download CV
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: { xs: 4, md: 0 },
              }}
            >
              {/* <Avatar
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  border: '4px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
                src="/photo.jpg"
                alt={personalInfo.name}
                imgProps={{
                  style: {
                    objectFit: 'cover',        // How image scales: 'cover', 'contain', 'fill'
                    objectPosition: '9% 25%' // Which part shows: 'top', 'center', 'bottom', etc.
                  }
                }}
              >
                {personalInfo.name.split(' ').map(name => name[0]).join('')}
              </Avatar> */}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': {
              transform: 'translateX(-50%) translateY(0)',
            },
            '40%': {
              transform: 'translateX(-50%) translateY(-10px)',
            },
            '60%': {
              transform: 'translateX(-50%) translateY(-5px)',
            },
          },
        }}
        onClick={() => {
          const element = document.getElementById('about');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <Box
          sx={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '12px',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '4px',
              height: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '2px',
              animation: 'scroll 2s infinite',
              '@keyframes scroll': {
                '0%': {
                  opacity: 0,
                  transform: 'translateX(-50%) translateY(-8px)',
                },
                '50%': {
                  opacity: 1,
                },
                '100%': {
                  opacity: 0,
                  transform: 'translateX(-50%) translateY(8px)',
                },
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;