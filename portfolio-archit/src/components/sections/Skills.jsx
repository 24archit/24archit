import React from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { COLORS } from '../../styles/theme';

const SKILLS = [
  { category: 'Core Engineering',    color: COLORS.accent,  skills: ['DSA', 'OOP', 'DBMS', 'System Design', 'API Design', 'SQL', 'Caching', 'Rate Limiting'] },
  { category: 'Full-Stack/Product',  color: COLORS.green,   skills: ['TypeScript', 'Node.js', 'Express', 'React', 'React Native', 'Capacitor', 'Supabase', 'MongoDB'] },
  { category: 'Cloud & Deployment',  color: COLORS.blue,    skills: ['Docker', 'Vercel', 'Render', 'Hugging Face Spaces', 'GitHub'] },
  { category: 'Developer Tools',     color: COLORS.gold,    skills: ['Git', 'VS Code', 'Postman', 'Linux CLI'] },
  { category: 'AI Dev Tools',        color: COLORS.purple,  skills: ['Claude Code', 'Cursor', 'Codex', 'GitHub Copilot'] },
];

export const Skills = () => (
  <Box id="skills" component="section" sx={{ py: { xs: 4, md: 6 }, bgcolor: COLORS.black }}>
    <Container maxWidth="lg">
      <Box sx={{ mb: 8 }}>
        <Typography variant="overline" sx={{ color: COLORS.silver, mb: 1.5, display: 'block' }}>
          Technical Skills
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ md: 'flex-end' }} spacing={2}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: '#fff' }}>The Arsenal</Typography>
          <Typography variant="body1" sx={{ color: COLORS.silver, maxWidth: 380, lineHeight: 1.65, fontSize: '0.9375rem' }}>
            Speed, scale, and intelligence — from low-level optimisation to production AI deployment.
          </Typography>
        </Stack>
      </Box>

      <Grid container spacing={2.5}>
        {SKILLS.map((cat, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              style={{ height: '100%' }}
            >
              <Box sx={{
                background: COLORS.surface1,
                border: `1px solid ${COLORS.border}`,
                borderRadius: '18px',
                p: 3.5,
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: alpha(cat.color, 0.35),
                  boxShadow: `0 0 40px ${alpha(cat.color, 0.1)}, 0 8px 30px rgba(0,0,0,0.3)`,
                  transform: 'translateY(-4px)',
                },
              }}>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
                  <Box sx={{
                    width: 8, height: 8, borderRadius: '50%', bgcolor: cat.color, flexShrink: 0,
                    boxShadow: `0 0 8px ${cat.color}`,
                  }} />
                  <Typography variant="overline" sx={{ color: cat.color, letterSpacing: '0.1em' }}>
                    {cat.category}
                  </Typography>
                </Stack>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {cat.skills.map(skill => (
                    <Box key={skill} sx={{
                      px: 1.75, py: 0.625, borderRadius: '980px',
                      background: alpha(cat.color, 0.07),
                      border: `1px solid ${alpha(cat.color, 0.15)}`,
                      fontSize: '0.8125rem', fontWeight: 600,
                      color: COLORS.silverLight,
                      transition: 'all 0.2s',
                      '&:hover': { background: alpha(cat.color, 0.15), color: cat.color, borderColor: alpha(cat.color, 0.3) },
                    }}>
                      {skill}
                    </Box>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
