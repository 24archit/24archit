import React from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Cloud, Campaign, MusicNote } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { COLORS } from '../../styles/theme';

const LEADERSHIP = [
  {
    role: 'Member',
    org: 'GDG & GDG Cloud BBSR',
    date: 'Feb 2025 – Present',
    desc: "Active in developer community workshops and cloud meetups. Earned 'Solution Challenge Badge' 2025.",
    icon: <Cloud sx={{ fontSize: 20 }} />,
    color: COLORS.blue,
    current: true,
  },
  {
    role: 'Event Coordinator',
    org: 'Advaita — IIIT-B Annual Fest',
    date: 'Mar 2025',
    desc: 'Coordinated cultural events, managed logistics and ensured high student participation.',
    icon: <Campaign sx={{ fontSize: 20 }} />,
    color: COLORS.gold,
    current: false,
  },
  {
    role: 'Pianist & Member',
    org: 'IIIT-B Cultural Society',
    date: 'Sep 2023 – Present',
    desc: 'Performs as a pianist in the college band — creativity through music and culture.',
    icon: <MusicNote sx={{ fontSize: 20 }} />,
    color: COLORS.purple,
    current: true,
  },
];

export const Community = () => (
  <Box id="community" component="section" sx={{ py: { xs: 4, md: 6 }, bgcolor: COLORS.surface }}>
    <Container maxWidth="lg">
      <Box sx={{ mb: 8 }}>
        <Typography variant="overline" sx={{ color: COLORS.silver, mb: 1.5, display: 'block' }}>
          Leadership & Culture
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: '#fff' }}>
          Community
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {LEADERSHIP.map((item, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ height: '100%' }}
            >
              <Box sx={{
                background: COLORS.surface2,
                border: `1px solid ${COLORS.border}`,
                borderRadius: '20px',
                p: 3.5,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: alpha(item.color, 0.35),
                  boxShadow: `0 0 40px ${alpha(item.color, 0.1)}, 0 8px 30px rgba(0,0,0,0.3)`,
                  transform: 'translateY(-4px)',
                },
              }}>
                {/* Icon */}
                <Box sx={{
                  width: 48, height: 48, borderRadius: '14px', mb: 3, flexShrink: 0,
                  background: alpha(item.color, 0.1),
                  border: `1px solid ${alpha(item.color, 0.2)}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: item.color,
                }}>
                  {item.icon}
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', fontSize: '0.9375rem' }}>
                      {item.org}
                    </Typography>
                    {item.current && (
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: COLORS.green,
                        boxShadow: `0 0 6px ${COLORS.green}`, flexShrink: 0 }} />
                    )}
                  </Stack>
                  <Typography sx={{ color: item.color, fontWeight: 700, fontSize: '0.75rem',
                    letterSpacing: '0.04em', mb: 1.5, display: 'block' }}>
                    {item.role}
                  </Typography>
                  <Typography variant="body2" sx={{ color: COLORS.silver, lineHeight: 1.65 }}>
                    {item.desc}
                  </Typography>
                </Box>

                <Typography variant="caption" sx={{
                  color: COLORS.silverDark, fontWeight: 500, mt: 2.5, pt: 2.5,
                  borderTop: `1px solid ${COLORS.border}`, display: 'block',
                }}>
                  {item.date}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
