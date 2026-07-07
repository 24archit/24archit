import React from 'react';
import { Box, Container, Typography, Stack, Button, Chip, Grid } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { East, Terminal, Code, Groups } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { COLORS } from '../../styles/theme';

const EXPERIENCE = [
  {
    role: 'Software Engineering Intern',
    company: 'OCAC, Government of Odisha',
    type: 'Internship',
    date: 'March 2026 – November 2026',
    desc: 'Architected GoNidhi biometric system, cutting idle compute costs. Built CV pipeline for 300+ unit state pilot, raising live-farm accuracy to 80%.',
    color: COLORS.accent,
    icon: <Code sx={{ fontSize: 17 }} />,
    current: true,
  },
  {
    role: 'Freelance Software Engineer',
    company: 'Independent',
    type: 'Freelance',
    date: 'May 2025 – June 2026',
    desc: 'B2B Logistics API (Ship My Parcel), E-Commerce (Madein Cart), EdTech System (JJ-Classes), and SEO Platforms (Indocrypt 2025).',
    color: COLORS.gold,
    icon: <Terminal sx={{ fontSize: 17 }} />,
    current: false,
  },
  {
    role: 'Placement Coordinator',
    company: 'Training & Placement Cell, IIIT-B',
    type: 'Leadership',
    date: 'February 2026 – Present',
    desc: 'Coordinate recruitment drives, handling scheduling, student communication, and placement logistics.',
    color: COLORS.blue,
    icon: <Groups sx={{ fontSize: 17 }} />,
    current: true,
  },
];

export const Experience = () => (
  <Box id="experience" component="section" sx={{ py: { xs: 4, md: 6 }, bgcolor: COLORS.surface }}>
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
        sx={{ mb: 8 }} spacing={2}
      >
        <Box>
          <Typography variant="overline" sx={{ color: COLORS.silver, mb: 1.5, display: 'block' }}>
            Work History
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: '#fff' }}>
            Experience
          </Typography>
        </Box>
        <Button component={Link} to="/experience" variant="outlined" endIcon={<East sx={{ fontSize: 15 }} />}
          sx={{ fontSize: '0.875rem', px: 2.5, py: 1, whiteSpace: 'nowrap', flexShrink: 0 }}>
          Full Timeline
        </Button>
      </Stack>

      <Grid container spacing={3}>
        {EXPERIENCE.map((item, i) => (
          <Grid size={{ xs: 12, md: 6 }} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: '100%' }}
            >
              <Box
                sx={{
                  height: '100%',
                  background: '#050505',
                  border: `1px solid rgba(255,255,255,0.05)`,
                  borderRadius: '24px',
                  p: { xs: 4, md: 5 },
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.4s ease, border-color 0.4s ease',
                  '&:hover': {
                    transform: 'scale(0.98)',
                    borderColor: alpha(item.color, 0.3),
                  },
                }}
              >
                {/* Subtle Radial Glow Mask */}
                <Box sx={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle at top right, ${alpha(item.color, 0.12)} 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 4 }}>
                    <Box sx={{
                      width: 52, height: 52, borderRadius: '16px', flexShrink: 0,
                      background: alpha(item.color, 0.1),
                      border: `1px solid ${alpha(item.color, 0.2)}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: item.color,
                    }}>
                      {item.icon}
                    </Box>
                    <Stack alignItems="flex-end" spacing={1}>
                      <Chip label={item.type} size="small" sx={{
                        background: alpha(item.color, 0.1), color: item.color,
                        fontWeight: 700, fontSize: '0.75rem',
                        border: `1px solid ${alpha(item.color, 0.2)}`,
                      }} />
                      {item.current && (
                        <Box sx={{
                          display: 'flex', alignItems: 'center', gap: 0.5,
                          px: 1.25, py: 0.25, borderRadius: '980px',
                          background: alpha(COLORS.green, 0.12),
                          border: `1px solid ${alpha(COLORS.green, 0.25)}`,
                        }}>
                          <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: COLORS.green }} />
                          <Typography sx={{ fontSize: '0.6875rem', fontWeight: 600, color: COLORS.green }}>Active</Typography>
                        </Box>
                      )}
                    </Stack>
                  </Stack>

                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#fff', fontSize: '1.375rem', mb: 0.5 }}>
                    {item.role}
                  </Typography>
                  <Typography variant="body2" sx={{ color: item.color, fontWeight: 600, mb: 2, fontSize: '0.9375rem' }}>
                    {item.company}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ color: COLORS.silver, lineHeight: 1.7, flexGrow: 1, mb: 4, fontSize: '0.9375rem' }}>
                    {item.desc}
                  </Typography>
                  
                  <Typography variant="caption" sx={{ color: COLORS.silverDark, fontWeight: 600, letterSpacing: '0.05em', mt: 'auto', display: 'block' }}>
                    {item.date.toUpperCase()}
                  </Typography>

                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
