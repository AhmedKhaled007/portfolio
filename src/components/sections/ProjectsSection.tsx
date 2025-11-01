import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  useTheme,
  Avatar,
  IconButton,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import ApiIcon from '@mui/icons-material/Api';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { projects } from '../../constants/data';

const ProjectsSection: React.FC = () => {
  const theme = useTheme();

  const getProjectIcon = (title: string) => {
    if (title.toLowerCase().includes('microservices')) {
      return <ApiIcon sx={{ fontSize: '2rem' }} />;
    } else if (title.toLowerCase().includes('authentication')) {
      return <CodeIcon sx={{ fontSize: '2rem' }} />;
    } else if (title.toLowerCase().includes('dashboard')) {
      return <DashboardIcon sx={{ fontSize: '2rem' }} />;
    }
    return <CodeIcon sx={{ fontSize: '2rem' }} />;
  };

  const getProjectGradient = (index: number) => {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <Box
      component="section"
      id="projects"
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
            Projects
          </Typography>

        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                {/* Project Icon */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -28,
                    left: 24,
                    zIndex: 1,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      background: getProjectGradient(index),
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {getProjectIcon(project.title)}
                  </Avatar>
                </Box>

                <CardContent sx={{ pt: 6, pb: 2, flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: 'text.primary',
                      }}
                    >
                      Technologies Used:
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                      }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                            fontSize: '0.75rem',
                            '&:hover': {
                              backgroundColor: `${theme.palette.primary.main}10`,
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>

                <CardActions
                  sx={{
                    justifyContent: 'space-between',
                    px: 3,
                    pb: 3,
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {project.github && (
                      <IconButton
                        component="a"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': {
                            color: 'primary.main',
                            transform: 'scale(1.1)',
                          },
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                    )}
                    {project.demo && (
                      <IconButton
                        component="a"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': {
                            color: 'primary.main',
                            transform: 'scale(1.1)',
                          },
                        }}
                      >
                        <LaunchIcon />
                      </IconButton>
                    )}
                  </Box>

                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<GitHubIcon />}
                    component="a"
                    href={project.github || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      background: getProjectGradient(index),
                      '&:hover': {
                        opacity: 0.9,
                        transform: 'scale(1.02)',
                      },
                    }}
                  >
                    View Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Projects Showcase */}
        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
            p: 4,
            borderRadius: 3,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 100%)`,
            border: `1px solid ${theme.palette.primary.main}20`,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 600, color: 'text.primary' }}
          >
            More Projects on GitHub
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: '600px', mx: 'auto' }}
          >
            Explore my complete portfolio of projects, including open-source contributions, 
            experimental code, and collaborative works on my GitHub profile.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<GitHubIcon />}
            component="a"
            href="https://github.com/AhmedKhaled007"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
              },
            }}
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;