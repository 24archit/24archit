import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { East } from '@mui/icons-material';
import { Hero } from '../components/sections/Hero';
import { Experience } from '../components/sections/Experience';
import { Journey } from '../components/sections/Journey';
import { Projects } from '../components/sections/Projects';
import { Community } from '../components/sections/Community';
import { Skills } from '../components/sections/Skills';
import { TechMarquee } from '../components/sections/TechMarquee';
import { TldrSection } from '../components/sections/TldrSection';
import { GithubActivity } from '../components/sections/GithubActivity';
import { COLORS, METALLIC } from '../styles/theme';

const ContactCTA = () => (
  <Box
    id="contact"
    component="section"
    sx={{
      py: { xs: 8, md: 10 },
      bgcolor: COLORS.black,
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Glow */}
    <Box sx={{
      position: 'absolute', top: '0%', left: '50%', transform: 'translateX(-50%)',
      width: '80%', height: '100%',
      background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(94,92,230,0.15) 0%, transparent 65%)',
      pointerEvents: 'none',
    }} />

    {/* Top border line */}
    <Box sx={{
      position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
      background: `linear-gradient(to right, transparent, ${COLORS.border}, transparent)`,
    }} />

    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {/* Badge */}
        <Box sx={{
          display: 'inline-flex', alignItems: 'center', gap: 1,
          px: 2, py: 0.75, mb: 5, borderRadius: '980px',
          background: 'rgba(255,255,255,0.04)',
          border: `1px solid ${COLORS.border}`,
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
          <Typography sx={{ fontSize: '0.8125rem', fontWeight: 500, color: COLORS.silverLight }}>
            Available for Summer 2026 Internships
          </Typography>
        </Box>

        <Typography
          variant="h2"
          sx={{
            color: '#fff',
            fontWeight: 700,
            fontSize: { xs: '2.5rem', md: '4rem' },
            letterSpacing: '-0.035em',
            lineHeight: 1.05,
            mb: 3,
          }}
        >
          Let's build something{' '}
          <Box component="span" sx={{
            background: METALLIC,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            remarkable
          </Box>
          .
        </Typography>

        <Typography variant="body1" sx={{
          color: COLORS.silver,
          fontSize: '1.0625rem',
          lineHeight: 1.65,
          mb: 6,
          maxWidth: 460,
          mx: 'auto',
        }}>
          Actively seeking internship opportunities in full-stack development and AI engineering.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            component="a"
            href="mailto:architmishra016@gmail.com"
            variant="contained"
            size="large"
            endIcon={<East />}
            sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
          >
            Get In Touch
          </Button>
          <Button
            component="a"
            href="https://linkedin.com/in/24archit"
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            size="large"
            sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
          >
            LinkedIn Profile
          </Button>
        </Stack>
      </motion.div>
    </Container>
  </Box>
);

export const Home = () => (
  <Box>
    <Hero />
    <TechMarquee />
    <TldrSection />
    <Journey />
    <Experience />
    <GithubActivity />
    <Projects />
    <Community />
    <Skills />
    <ContactCTA />
  </Box>
);
