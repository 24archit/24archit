import React from 'react';
import { Box, Container, Typography, Stack, Grid, Chip } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Code, School, EmojiEvents, Terminal, Groups } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/theme';

const EXP = [
  { role: 'Software Engineering Intern', company: 'OCAC, Government of Odisha', type: 'Internship', date: 'March 2026 – November 2026',
    desc: 'Architected GoNidhi biometric cattle-identification system, cutting idle compute costs. Built CV pipeline and backend for 300+ unit state pilot, raising live-farm accuracy to 80%.',
    color: COLORS.accent, icon: <Code sx={{ fontSize: 20 }} />, current: true },
  { role: 'Freelance Software Engineer', company: 'Independent', type: 'Freelance', date: 'May 2025 – June 2026',
    desc: 'Built B2B Logistics API (Ship My Parcel), E-Commerce Platform (Madein Cart), EdTech System (JJ-Classes), and SEO Platforms (Bowling Planet, Indocrypt 2025).',
    color: COLORS.gold, icon: <Terminal sx={{ fontSize: 20 }} />, current: false },
  { role: 'Placement Coordinator', company: 'Training & Placement Cell, IIIT-B', type: 'Leadership', date: 'Feb 2026 – Present',
    desc: 'Coordinate recruitment drives with visiting companies, handling scheduling, student communication, and placement/internship logistics.',
    color: COLORS.blue, icon: <Groups sx={{ fontSize: 20 }} />, current: true },
];

const TIMELINE = [
  { year: 'Mar–Nov 2026', title: 'SWE Intern @ OCAC',
    desc: 'Architected GoNidhi biometric system; built CV pipeline for 300+ unit pilot.',
    icon: <Code />, color: COLORS.accent, current: true },
  { year: 'Feb 2026 – Now', title: 'Placement Coordinator @ IIIT-B',
    desc: 'Coordinate recruitment drives, scheduling, and placement logistics.',
    icon: <Groups />, color: COLORS.blue, current: true },
  { year: 'Sept 2025', title: 'AIR 223 — Naukri Campus Challenge',
    desc: 'Top 0.2% nationwide among ~1.3 Lakh participants in coding & aptitude.',
    icon: <EmojiEvents />, color: COLORS.gold, current: false },
  { year: 'Aug 2025', title: 'Flipkart GRID 7.0 Qualifier',
    desc: 'Cleared Round 1 and qualified for Round 2 Coding Phase.',
    icon: <Terminal />, color: COLORS.accent, current: false },
  { year: 'May 2025–Jun 2026', title: 'Freelance Software Engineer',
    desc: 'B2B Logistics API, E-Commerce platforms, EdTech systems, and SEO websites.',
    icon: <Code />, color: COLORS.purple, current: false },
  { year: '2025', title: 'Amazon ML Challenge — Global Rank 2516',
    desc: 'Secured rank among 20,000+ participating teams worldwide.',
    icon: <EmojiEvents />, color: COLORS.gold, current: false },
  { year: '2024', title: 'SIH 2024 — Institution Top 50',
    desc: 'Led team among Top 50 projects at IIIT Bhubaneswar for Smart India Hackathon.',
    icon: <Groups />, color: COLORS.green, current: false },
  { year: '2023 – Present', title: 'B.Tech CSE — IIIT Bhubaneswar',
    desc: 'Class of 2027 · CGPA: 8.43',
    icon: <School />, color: COLORS.blue, current: false },
];

export const ExperiencePage = () => (
  <Box sx={{ bgcolor: COLORS.black, minHeight: '100vh' }}>
    {/* Page hero */}
    <Box sx={{ bgcolor: COLORS.surface, borderBottom: `1px solid ${COLORS.border}`, pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="overline" sx={{ color: COLORS.silver, mb: 1.5, display: 'block' }}>Career</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.75rem', md: '4.5rem' }, fontWeight: 700, color: '#fff', letterSpacing: '-0.035em', mb: 2 }}>
            Experience & Journey
          </Typography>
          <Typography variant="body1" sx={{ color: COLORS.silver, fontSize: '1.0625rem', maxWidth: 520, lineHeight: 1.65 }}>
            A timeline of professional roles, research, and competitive achievements from 2023 to present.
          </Typography>
        </motion.div>
      </Container>
    </Box>

    {/* Work Experience */}
    <Box sx={{ bgcolor: COLORS.surface }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h3" sx={{ mb: 6, fontSize: '1.75rem', fontWeight: 700, color: '#fff' }}>Work Experience</Typography>
        <Stack spacing={0} divider={<Box sx={{ borderBottom: `1px solid ${COLORS.border}` }} />}>
          {EXP.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Box sx={{ py: { xs: 4, md: 5 }, display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'flex-start' } }}>
                <Box sx={{ width: 48, height: 48, borderRadius: '14px', background: alpha(item.color, 0.1), border: `1px solid ${alpha(item.color, 0.2)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0 }}>
                  {item.icon}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Stack direction="row" alignItems="center" spacing={1.5} flexWrap="wrap" sx={{ mb: 0.75 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff' }}>{item.role}</Typography>
                    {item.current && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, px: 1.25, py: 0.25, borderRadius: '980px', background: alpha(COLORS.green, 0.12), border: `1px solid ${alpha(COLORS.green, 0.25)}` }}>
                        <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: COLORS.green }} />
                        <Typography sx={{ fontSize: '0.6875rem', fontWeight: 600, color: COLORS.green }}>Active</Typography>
                      </Box>
                    )}
                  </Stack>
                  <Typography variant="body2" sx={{ color: COLORS.silverDark, mb: 2 }}>{item.company}</Typography>
                  <Typography variant="body1" sx={{ color: COLORS.silver, lineHeight: 1.7 }}>{item.desc}</Typography>
                </Box>
                <Stack alignItems="flex-end" spacing={1} sx={{ flexShrink: 0, display: { xs: 'none', md: 'flex' } }}>
                  <Chip label={item.type} size="small" sx={{ background: alpha(item.color, 0.1), color: item.color, fontWeight: 700, border: `1px solid ${alpha(item.color, 0.2)}` }} />
                  <Typography variant="caption" sx={{ color: COLORS.silverDark, whiteSpace: 'nowrap' }}>{item.date}</Typography>
                </Stack>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>

    {/* Full Timeline */}
    <Box sx={{ bgcolor: COLORS.black, borderTop: `1px solid ${COLORS.border}` }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h3" sx={{ mb: 8, fontSize: '1.75rem', fontWeight: 700, color: '#fff' }}>Full Timeline</Typography>
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ position: 'absolute', left: { xs: 21, md: 23 }, top: 0, bottom: 0, width: '1px', background: `linear-gradient(to bottom, ${COLORS.accent}, ${COLORS.border} 80%)` }} />
          <Stack spacing={0}>
            {TIMELINE.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.45, delay: i * 0.06 }}>
                <Box sx={{ display: 'flex', gap: 3, pb: i < TIMELINE.length - 1 ? 5 : 0 }}>
                  <Box sx={{
                    width: 46, height: 46, borderRadius: '50%', flexShrink: 0, zIndex: 1, position: 'relative',
                    background: t.current ? t.color : alpha(t.color, 0.1),
                    border: `2px solid ${t.current ? t.color : alpha(t.color, 0.3)}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: t.current ? '#fff' : t.color,
                    boxShadow: t.current ? `0 0 20px ${alpha(t.color, 0.5)}` : 'none',
                  }}>
                    {t.icon}
                  </Box>
                  <Box sx={{ pt: 0.75, pb: i < TIMELINE.length - 1 ? 2 : 0 }}>
                    <Typography variant="caption" sx={{ color: t.color, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.6875rem', fontFamily: '"Fira Code", monospace' }}>{t.year}</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mt: 0.5, mb: 0.5 }}>{t.title}</Typography>
                    <Typography variant="body2" sx={{ color: COLORS.silver, lineHeight: 1.65 }}>{t.desc}</Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  </Box>
);
