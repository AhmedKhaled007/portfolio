import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  CircularProgress,
  useTheme,
  Link,
} from '@mui/material';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ContactForm } from '../../types';
import { personalInfo } from '../../constants/data';

const ContactSection: React.FC = () => {
  const theme = useTheme();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be less than 50 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    subject: Yup.string()
      .min(5, 'Subject must be at least 5 characters')
      .max(100, 'Subject must be less than 100 characters')
      .required('Subject is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .max(1000, 'Message must be less than 1000 characters')
      .required('Message is required'),
  });

  const initialValues: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const handleSubmit = async (
    values: ContactForm,
    { setSubmitting, resetForm }: FormikHelpers<ContactForm>
  ) => {
    try {
      setSubmitStatus('idle');
      
      // EmailJS template parameters
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        message: values.message,
        to_name: personalInfo.name,
      };

      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      resetForm();
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <LocationOnIcon />,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      value: 'AhmedKhaled007',
      href: personalInfo.github,
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
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
            Get In Touch
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '600px', mx: 'auto' }}
          >
            Let's discuss your next project or collaboration opportunity
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, color: 'text.primary' }}
              >
                Let's Connect
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.7, mb: 4 }}
              >
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and software development. 
                Feel free to reach out through any of the channels below.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} md={12} key={index}>
                  <Card
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(102, 126, 234, 0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ display: 'flex', alignItems: 'center', py: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          mr: 2,
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          sx={{ fontSize: '0.875rem' }}
                        >
                          {info.label}
                        </Typography>
                        <Typography
                          variant="body1"
                          component={info.href !== '#' ? Link : 'div'}
                          href={info.href !== '#' ? info.href : undefined}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          sx={{
                            fontWeight: 500,
                            color: 'text.primary',
                            textDecoration: 'none',
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.primary.main}20`,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 3 }}
                >
                  Send Message
                </Typography>

                {submitStatus === 'success' && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you for your message! I'll get back to you soon.
                  </Alert>
                )}

                {submitStatus === 'error' && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    Sorry, there was an error sending your message. Please try again or contact me directly.
                  </Alert>
                )}

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
                    <Form>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Your Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                            disabled={isSubmitting}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Your Email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            disabled={isSubmitting}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            id="subject"
                            name="subject"
                            label="Subject"
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.subject && Boolean(errors.subject)}
                            helperText={touched.subject && errors.subject}
                            disabled={isSubmitting}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            id="message"
                            name="message"
                            label="Your Message"
                            multiline
                            rows={6}
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.message && Boolean(errors.message)}
                            helperText={touched.message && errors.message}
                            disabled={isSubmitting}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            disabled={isSubmitting}
                            startIcon={
                              isSubmitting ? (
                                <CircularProgress size={20} color="inherit" />
                              ) : (
                                <SendIcon />
                              )
                            }
                            sx={{
                              py: 1.5,
                              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
                              },
                            }}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;