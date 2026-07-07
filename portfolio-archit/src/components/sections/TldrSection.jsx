import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Code, SmartToy, EmojiEvents } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { COLORS } from '../../styles/theme';

const POINTS = [
  {
    icon: <Code sx={{ fontSize: 28 }} />,
    title: 'State-Scale Engineering',
    desc: 'Architected and deployed GoNidhi, a biometric system running across 300+ units for the Government of Odisha.',
    color: COLORS.accent,
  },
  {
    icon: <SmartToy sx={{ fontSize: 28 }} />,
    title: 'AI & Machine Learning',
    desc: 'Built full-stack AI apps (Sentia.ai, Beatyx) and optimized neural networks to raise live-farm accuracy to 80%.',
    color: COLORS.green,
  },
  {
    icon: <EmojiEvents sx={{ fontSize: 28 }} />,
    title: 'Proven Excellence',
    desc: 'Ranked in the top 0.2% globally (AIR 223) in the Naukri Campus Challenge among 130,000+ competitors.',
    color: COLORS.gold,
  }
];

export const TldrSection = () => {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 }, bgcolor: COLORS.black }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: COLORS.silver, mb: 1.5, display: 'block', textAlign: 'center' }}>
          TL;DR
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: '#fff', textAlign: 'center', mb: 8 }}>
          Why Hire Archit?
        </Typography>

        <Grid container spacing={3}>
          {POINTS.map((item, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ height: '100%' }}
              >
                <Box sx={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid rgba(255,255,255,0.05)`,
                  borderRadius: '24px',
                  p: 4,
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: alpha(item.color, 0.3),
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 40px ${alpha(item.color, 0.1)}`,
                  }
                }}>
                  <Box sx={{
                    position: 'absolute', top: 0, right: 0,
                    background: `radial-gradient(circle at top right, ${alpha(item.color, 0.15)} 0%, transparent 70%)`,
                    width: '100%', height: '100%', pointerEvents: 'none',
                  }} />
                  
                  <Box sx={{
                    width: 56, height: 56, borderRadius: '16px', mb: 3,
                    background: alpha(item.color, 0.1),
                    border: `1px solid ${alpha(item.color, 0.2)}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.color,
                  }}>
                    {item.icon}
                  </Box>

                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#fff', mb: 2, fontSize: '1.25rem' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: COLORS.silver, lineHeight: 1.6, fontSize: '0.9375rem' }}>
                    {item.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
