import React from 'react';
import { Box, Container, Grid, Typography, Button, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, Instagram, East } from '@mui/icons-material';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { COLORS, METALLIC } from '../../styles/theme';
import { Counter } from '../ui/Counter';

const STATS = [
  { value: 1900, suffix: '+',   label: 'LeetCode Rating',         sub: 'Top 4% Globally' },
  { value: 223,  suffix: '',    label: 'AIR — Naukri Challenge',  sub: 'Top 0.2% of 1.3L+ Candidates' },
  { value: 8,    suffix: '.43', label: 'CGPA at IIIT-B',          sub: 'Computer Science, Class of 2027' },
];


const SOCIAL = [
  { icon: <GitHub />,    href: 'https://github.com/24archit',          label: 'GitHub'    },
  { icon: <LinkedIn />,  href: 'https://linkedin.com/in/24archit',     label: 'LinkedIn'  },
  { icon: <Email />,     href: 'mailto:architmishra016@gmail.com',     label: 'Email'     },
];

export const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: COLORS.black,
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 14, md: 0 },
        pb: { xs: 10, md: 0 },
      }}
    >
      {/* ── Background glows ── */}
      <Box sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: `
          radial-gradient(ellipse 60% 40% at 70% 20%, rgba(94,92,230,0.12) 0%, transparent 60%),
          radial-gradient(ellipse 50% 35% at 20% 80%, rgba(191,90,242,0.08) 0%, transparent 55%)
        `,
      }} />

      {/* ── Faint grid overlay ── */}
      <Box sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">

          {/* ── Main Content ── */}
          <Grid item xs={12} md={10} lg={9}>
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Status badge */}
              <motion.div
                initial={reduce ? {} : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 5,
                  px: 2, py: 0.75, borderRadius: '980px',
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${COLORS.border}`,
                  backdropFilter: 'blur(10px)',
                }}>
                  <Box sx={{
                    width: 6, height: 6, borderRadius: '50%', bgcolor: COLORS.green,
                    boxShadow: `0 0 8px ${COLORS.green}`,
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { boxShadow: `0 0 6px ${COLORS.green}` },
                      '50%': { boxShadow: `0 0 14px ${COLORS.green}` },
                    },
                  }} />
                  <Typography sx={{ fontSize: '0.8125rem', fontWeight: 500, color: COLORS.silverLight, letterSpacing: '0.005em' }}>
                    Open for Summer 2026 Internships
                  </Typography>
                </Box>
              </motion.div>

              {/* Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', sm: '4.25rem', md: '5.5rem', lg: '6.25rem' },
                  color: '#FFFFFF',
                  mb: 3,
                  lineHeight: 1.0,
                }}
              >
                Archit{' '}
                <Box
                  component="span"
                  sx={{
                    background: METALLIC,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Mishra
                </Box>
                .
              </Typography>

              {/* Sub */}
              <Typography
                variant="body1"
                sx={{ color: COLORS.silver, fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.65, maxWidth: 600, mb: 5 }}
              >
                Pre-Final Year CSE at IIIT Bhubaneswar. Engineering scalable full-stack systems and production-grade AI.
              </Typography>

              {/* CTAs */}
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" sx={{ mb: 6, gap: 2 }}>
                <Button
                  component={Link}
                  to="/projects"
                  variant="contained"
                  size="large"
                  endIcon={<East />}
                  sx={{ px: 3.5, py: 1.375, fontSize: '0.9375rem' }}
                >
                  View Projects
                </Button>
                <Button
                  component={Link}
                  to="/experience"
                  variant="outlined"
                  size="large"
                  sx={{ px: 3.5, py: 1.375, fontSize: '0.9375rem' }}
                >
                  My Experience
                </Button>
                <Stack direction="row" spacing={1}>
                  {SOCIAL.map(({ icon, href, label }) => (
                    <IconButton
                      key={label}
                      component="a"
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      aria-label={label}
                      sx={{
                        width: 40, height: 40,
                        color: COLORS.silver,
                        background: 'rgba(255,255,255,0.05)',
                        border: `1px solid ${COLORS.border}`,
                        backdropFilter: 'blur(8px)',
                        '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.1)', borderColor: COLORS.borderHover },
                      }}
                    >
                      {icon}
                    </IconButton>
                  ))}
                </Stack>
              </Stack>

              {/* Stats row */}
              <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                borderTop: `1px solid ${COLORS.border}`,
                pt: 4,
                gap: { xs: 3, sm: 0 },
              }}>
                {STATS.map((s, i) => (
                  <Box
                    key={i}
                    sx={{
                      pr: { sm: 4 },
                      pl: { sm: i > 0 ? 4 : 0 },
                      borderRight: { sm: i < 2 ? `1px solid ${COLORS.border}` : 'none' },
                    }}
                  >
                    <Typography variant="h3" sx={{
                      fontWeight: 700,
                      fontSize: { xs: '2rem', md: '2.25rem' },
                      color: '#FFFFFF',
                      lineHeight: 1,
                      mb: 0.5,
                    }}>
                      <Counter value={s.value} suffix={s.suffix} />
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: COLORS.silverLight, mb: 0.25 }}>{s.label}</Typography>
                    <Typography variant="caption" sx={{ color: COLORS.silverDark, display: 'block', lineHeight: 1.4 }}>{s.sub}</Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};
