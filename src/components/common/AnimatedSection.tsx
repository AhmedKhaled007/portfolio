import React, { ReactNode } from 'react';
import { Box, Fade, Slide, Zoom, Grow } from '@mui/material';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'zoom' | 'grow';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade',
  delay = 0,
  duration = 800,
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getAnimationComponent = () => {

    switch (animation) {
      case 'slideUp':
        return (
          <Slide direction="up" in={isVisible} timeout={{ enter: duration }} style={{ transitionDelay: `${delay}ms` }}>
            <Box>{children}</Box>
          </Slide>
        );
      case 'slideLeft':
        return (
          <Slide direction="left" in={isVisible} timeout={{ enter: duration }} style={{ transitionDelay: `${delay}ms` }}>
            <Box>{children}</Box>
          </Slide>
        );
      case 'slideRight':
        return (
          <Slide direction="right" in={isVisible} timeout={{ enter: duration }} style={{ transitionDelay: `${delay}ms` }}>
            <Box>{children}</Box>
          </Slide>
        );
      case 'zoom':
        return (
          <Zoom in={isVisible} timeout={{ enter: duration }} style={{ transitionDelay: `${delay}ms` }}>
            <Box>{children}</Box>
          </Zoom>
        );
      case 'grow':
        return (
          <Grow in={isVisible} timeout={{ enter: duration }} style={{ transitionDelay: `${delay}ms` }}>
            <Box>{children}</Box>
          </Grow>
        );
      case 'fade':
      default:
        return (
          <Fade in={isVisible} timeout={{ enter: duration }} style={{ transitionDelay: `${delay}ms` }}>
            <Box>{children}</Box>
          </Fade>
        );
    }
  };

  return (
    <Box ref={ref}>
      {getAnimationComponent()}
    </Box>
  );
};

export default AnimatedSection;