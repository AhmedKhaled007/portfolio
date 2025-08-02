import React, { Suspense } from 'react';
import { Box, Link, CircularProgress } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import HeroSection from '../sections/HeroSection';

// Lazy load sections that are below the fold
const AboutSection = React.lazy(() => import('../sections/AboutSection'));
const SkillsSection = React.lazy(() => import('../sections/SkillsSection'));
const ExperienceSection = React.lazy(() => import('../sections/ExperienceSection'));
const ProjectsSection = React.lazy(() => import('../sections/ProjectsSection'));
const ContactSection = React.lazy(() => import('../sections/ContactSection'));

const Layout: React.FC = () => {
  return (
    <Box>
      {/* Skip Navigation Link for Screen Readers */}
      <Link
        href="#main-content"
        sx={{
          position: 'absolute',
          left: '-9999px',
          zIndex: 999,
          padding: '8px 16px',
          backgroundColor: 'primary.main',
          color: 'white',
          textDecoration: 'none',
          '&:focus': {
            left: '10px',
            top: '10px',
          },
        }}
      >
        Skip to main content
      </Link>
      
      <Header />
      <Box component="main" id="main-content" role="main">
        <HeroSection />
        <Suspense
          fallback={
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '200px',
              }}
            >
              <CircularProgress />
            </Box>
          }
        >
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;