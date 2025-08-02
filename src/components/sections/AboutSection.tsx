import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import { professionalSummary } from '../../constants/data';
import AnimatedSection from '../common/AnimatedSection';

const AboutSection: React.FC = () => {
  const theme = useTheme();

  const highlights = [
    '5+ years of enterprise-grade backend development',
    'Python/FastAPI microservices specialist',
    'Machine learning integration expert',
    '10K+ requests/hour system optimization',
    '99.9% uptime achievement',
    'Secure authentication systems (JWT, OAuth 2.0)',
    'CI/CD pipeline implementation',
    'Cross-functional team leadership',
  ];

  const stats = [
    { icon: <WorkIcon />, value: '5+', label: 'Years Experience' },
    { icon: <CodeIcon />, value: '50+', label: 'Projects Completed' },
    { icon: <CheckCircleIcon />, value: '99.9%', label: 'Uptime Achieved' },
    { icon: <SchoolIcon />, value: 'ITI', label: 'Graduate' },
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <AnimatedSection animation="fade" delay={200}>
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
              About Me
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '600px', mx: 'auto' }}
            >
              Building enterprise solutions with modern technologies
            </Typography>
          </Box>
        </AnimatedSection>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <AnimatedSection animation="slideLeft" delay={400}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: '1.125rem',
                  lineHeight: 1.7,
                  color: 'text.primary',
                  mb: 3,
                }}
              >
                {professionalSummary}
              </Typography>

              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Key Achievements
              </Typography>

              <List dense>
                {highlights.map((highlight, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleIcon 
                        color="primary" 
                        sx={{ fontSize: '1.25rem' }} 
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={highlight}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: '0.95rem',
                          fontWeight: 500,
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              </Box>
            </AnimatedSection>
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimatedSection animation="slideRight" delay={600}>
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid item xs={6} key={index}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                      border: '1px solid rgba(102, 126, 234, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ py: 3 }}>
                      <Avatar
                        sx={{
                          width: 56,
                          height: 56,
                          mx: 'auto',
                          mb: 2,
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        }}
                      >
                        {stat.icon}
                      </Avatar>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          mb: 1,
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontWeight: 500 }}
                      >
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                  border: '1px solid rgba(102, 126, 234, 0.1)',
                }}
              >
                <CardContent sx={{ py: 3 }}>
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: '2rem' }} />
                  </Avatar>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Education
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Python Full Stack Developer Diploma
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Information Technology Institute (ITI) Egypt • Feb 2020
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;