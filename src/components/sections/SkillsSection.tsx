import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
  Avatar,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DevicesIcon from '@mui/icons-material/Devices';
import ArchitectureIcon from '@mui/icons-material/AccountTree';
import MessageIcon from '@mui/icons-material/Message';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { skills } from '../../constants/data';

const SkillsSection: React.FC = () => {
  const theme = useTheme();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages & Core':
        return <CodeIcon />;
      case 'Backend Frameworks':
        return <CodeIcon />;
      case 'Frontend & Mobile':
        return <DevicesIcon />;
      case 'Databases & ORMs':
        return <StorageIcon />;
      case 'Message Queues & Event-Driven':
        return <MessageIcon />;
      case 'Observability & Monitoring':
        return <MonitorHeartIcon />;
      case 'Cloud & Infrastructure':
        return <CloudIcon />;
      case 'Architecture & Design':
        return <ArchitectureIcon />;
      case 'Security & Authentication':
        return <SecurityIcon />;
      case 'AI & Machine Learning':
        return <SmartToyIcon />;
      default:
        return <CodeIcon />;
    }
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      theme.palette.primary.main,    // Languages & Core - Blue/Purple
      theme.palette.secondary.main,  // Backend Frameworks - Purple
      '#FF6B6B',                      // Frontend & Mobile - Red
      '#4ECDC4',                      // Databases & ORMs - Teal
      '#F39C12',                      // Message Queues - Orange
      '#9B59B6',                      // Observability - Purple
      '#45B7D1',                      // Cloud & Infrastructure - Light Blue
      '#96CEB4',                      // Architecture & Design - Green
      '#E74C3C',                      // Security & Authentication - Dark Red
      '#1ABC9C',                      // AI & Machine Learning - Turquoise
    ];
    return colors[index];
  };

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Technical Skills
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '600px', mx: 'auto' }}
          >
            Technologies and tools I work with
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {skills.map((skillCategory, index) => (
            <Grid item xs={12} md={6} lg={4} key={skillCategory.category}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  overflow: 'visible',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.9) 100%)',
                  border: `1px solid ${getCategoryColor(index)}20`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 40px ${getCategoryColor(index)}25`,
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: 24,
                    zIndex: 1,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      backgroundColor: getCategoryColor(index),
                      boxShadow: `0 4px 20px ${getCategoryColor(index)}30`,
                    }}
                  >
                    {getCategoryIcon(skillCategory.category)}
                  </Avatar>
                </Box>

                <CardContent sx={{ pt: 5, pb: 3 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: getCategoryColor(index),
                      mb: 3,
                    }}
                  >
                    {skillCategory.category}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        variant="outlined"
                        sx={{
                          borderColor: `${getCategoryColor(index)}40`,
                          color: getCategoryColor(index),
                          fontWeight: 500,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: `${getCategoryColor(index)}10`,
                            borderColor: getCategoryColor(index),
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Skills Summary */}
        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
            p: 4,
            borderRadius: 3,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}15 100%)`,
            border: `1px solid ${theme.palette.primary.main}20`,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 600, color: 'text.primary' }}
          >
            Always Learning, Always Growing
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto', lineHeight: 1.7 }}
          >
            I believe in continuous learning and staying up-to-date with the latest technologies. 
            My expertise spans across backend development, cloud architectures, and machine learning 
            integration, enabling me to build comprehensive and scalable solutions.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsSection;