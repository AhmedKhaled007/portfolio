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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// Remove unused import

const ExperienceSection: React.FC = () => {
  const theme = useTheme();
  // Removed unused isMobile variable

  const additionalExperiences = [
    {
      company: 'Senior Software Engineer',
      position: 'Current Role',
      duration: '2020 - Present',
      description: [
        'Architected and delivered 15+ enterprise-grade microservices serving 10K+ requests/hour',
        'Led cross-functional team of 5 developers in Agile environment',
        'Implemented ML model integration reducing processing time by 40%',
        'Built secure authentication systems with JWT and OAuth 2.0',
        'Designed CI/CD pipelines reducing deployment time by 60%',
      ],
      technologies: ['Python', 'FastAPI', 'Docker', 'AWS', 'PostgreSQL', 'Redis'],
    },
    {
      company: 'Backend Developer',
      position: 'Previous Role',
      duration: '2019 - 2020',
      description: [
        'Developed RESTful APIs using Django and Flask frameworks',
        'Optimized database queries improving performance by 35%',
        'Implemented automated testing reducing bugs by 50%',
        'Collaborated with frontend team on API design and documentation',
      ],
      technologies: ['Python', 'Django', 'Flask', 'MySQL', 'Docker'],
    },
    {
      company: 'Junior Developer',
      position: 'Entry Level',
      duration: '2018 - 2019',
      description: [
        'Built web applications using Python and JavaScript',
        'Learned modern development practices and version control',
        'Contributed to open-source projects and team documentation',
        'Participated in code reviews and technical discussions',
      ],
      technologies: ['Python', 'JavaScript', 'HTML/CSS', 'Git'],
    },
  ];

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
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
            Professional Experience
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '600px', mx: 'auto' }}
          >
            Building scalable solutions across diverse industries
          </Typography>
        </Box>

        {/* Use grid layout instead of timeline */}
        {true ? (
          <Grid container spacing={4}>
            {additionalExperiences.map((exp, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <WorkIcon
                        sx={{
                          color: 'primary.main',
                          mr: 1,
                          fontSize: '1.5rem',
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {exp.company}
                      </Typography>
                    </Box>

                    <Typography
                      variant="subtitle1"
                      color="primary.main"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {exp.position}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {exp.duration}
                    </Typography>

                    <List dense>
                      {exp.description.map((item, idx) => (
                        <ListItem key={idx} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <TrendingUpIcon
                              color="primary"
                              sx={{ fontSize: '1rem' }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            sx={{
                              '& .MuiListItemText-primary': {
                                fontSize: '0.9rem',
                                lineHeight: 1.5,
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Box sx={{ mt: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ mb: 1, fontWeight: 600 }}
                      >
                        Technologies:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {exp.technologies.map((tech, techIdx) => (
                          <Chip
                            key={techIdx}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: 'primary.main',
                              color: 'primary.main',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Container>
    </Box>
  );
};

export default ExperienceSection;