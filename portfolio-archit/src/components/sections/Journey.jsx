import React, { useRef } from 'react';
import { Box, Container, Typography, Stack, Button, IconButton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Code, School, EmojiEvents, Terminal, Groups, ChevronLeft, ChevronRight, East } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { COLORS } from '../../styles/theme';

const TIMELINE = [
  { year: 'Mar–Nov 2026', title: 'SWE Intern',        company: 'OCAC Bhubaneswar',           icon: <Code sx={{ fontSize: 16 }} />,        color: COLORS.accent,  current: true  },
  { year: 'Feb 2026–Now', title: 'Placement Coord',   company: 'IIIT Bhubaneswar',           icon: <Groups sx={{ fontSize: 16 }} />,      color: COLORS.blue,    current: true },
  { year: 'Sept 2025',    title: 'AIR 223',           company: 'Naukri Campus Challenge',    icon: <EmojiEvents sx={{ fontSize: 16 }} />, color: COLORS.gold,    current: false },
  { year: 'Aug 2025',     title: 'GRID 7.0 Qualifier',company: 'Flipkart',                   icon: <Terminal sx={{ fontSize: 16 }} />,    color: COLORS.accent,  current: false },
  { year: 'May 25–Jun 26',title: 'Freelance SWE',     company: 'Independent',                icon: <Code sx={{ fontSize: 16 }} />,        color: COLORS.purple,  current: false },
  { year: '2025',         title: 'Rank 2516',         company: 'Amazon ML Challenge',        icon: <EmojiEvents sx={{ fontSize: 16 }} />, color: COLORS.gold,    current: false },
  { year: '2024',         title: 'SIH Top 50',        company: 'Smart India Hackathon',      icon: <Groups sx={{ fontSize: 16 }} />,      color: COLORS.green,   current: false },
  { year: '2023–Now',     title: 'B.Tech CSE',        company: 'IIIT-B · 8.43 CGPA',         icon: <School sx={{ fontSize: 16 }} />,      color: COLORS.blue,    current: false },
];

export const Journey = () => {
  const ref = useRef(null);
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * 260, behavior: 'smooth' });

  return (
    <Box id="journey" component="section" sx={{ py: { xs: 4, md: 6 }, bgcolor: COLORS.black, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
          sx={{ mb: 7 }} spacing={2}
        >
          <Box>
            <Typography variant="overline" sx={{ color: COLORS.silver, mb: 1.5, display: 'block' }}>
              Historical
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, color: '#fff' }}>
              Career Milestones
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            {[ChevronLeft, ChevronRight].map((Icon, idx) => (
              <IconButton key={idx} onClick={() => scroll(idx === 0 ? -1 : 1)} size="small" sx={{
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${COLORS.border}`,
                color: COLORS.silver,
                '&:hover': { background: 'rgba(255,255,255,0.1)', color: '#fff' },
              }}>
                <Icon sx={{ fontSize: 20 }} />
              </IconButton>
            ))}
            <Button component={Link} to="/experience" variant="outlined" endIcon={<East sx={{ fontSize: 15 }} />}
              sx={{ fontSize: '0.875rem', px: 2.5, py: 1, ml: 1 }}>
              Full Timeline
            </Button>
          </Stack>
        </Stack>

        <Box sx={{ position: 'relative' }}>
          {/* Right fade */}
          <Box sx={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 100,
            background: `linear-gradient(to right, transparent, ${COLORS.black})`,
            zIndex: 2, pointerEvents: 'none',
          }} />

          {/* Connecting line */}
          <Box sx={{
            position: 'absolute', top: 51, left: 0, right: 0, height: '1px',
            background: `linear-gradient(to right, ${COLORS.accent}, rgba(255,255,255,0.06) 60%, transparent)`,
            zIndex: 0,
          }} />

          {/* Scroll container */}
          <Box ref={ref} sx={{
            display: 'flex', overflowX: 'auto', pb: 3,
            scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' },
            position: 'relative', zIndex: 1,
          }}>
            {TIMELINE.map((item, i) => (
              <motion.div key={i} style={{ flexShrink: 0 }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.35) }}
              >
                <Box sx={{ width: 210, px: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Dot */}
                  <Box sx={{
                    width: 44, height: 44, borderRadius: '50%', flexShrink: 0, zIndex: 2, position: 'relative',
                    background: item.current ? item.color : alpha(item.color, 0.12),
                    border: `2px solid ${item.current ? item.color : alpha(item.color, 0.3)}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.current ? '#fff' : item.color,
                    boxShadow: item.current ? `0 0 16px ${alpha(item.color, 0.5)}` : 'none',
                  }}>
                    {item.icon}
                  </Box>

                  {/* Connector */}
                  <Box sx={{ width: '1px', height: 18, background: alpha(item.color, 0.3) }} />

                  {/* Card */}
                  <Box sx={{
                    background: COLORS.surface1,
                    border: `1px solid ${item.current ? alpha(item.color, 0.3) : COLORS.border}`,
                    borderRadius: '14px',
                    p: 2.5,
                    width: '100%',
                    transition: 'all 0.25s ease',
                    boxShadow: item.current ? `0 0 24px ${alpha(item.color, 0.15)}` : 'none',
                    '&:hover': {
                      borderColor: alpha(item.color, 0.4),
                      boxShadow: `0 8px 28px ${alpha(item.color, 0.2)}`,
                      transform: 'translateY(-3px)',
                    },
                  }}>
                    <Typography sx={{
                      color: item.color, fontWeight: 700, letterSpacing: '0.06em',
                      fontSize: '0.625rem', textTransform: 'uppercase', mb: 0.75, display: 'block',
                      fontFamily: '"Fira Code", monospace',
                    }}>
                      {item.year}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#fff', mb: 0.25, lineHeight: 1.3, fontSize: '0.875rem' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: COLORS.silverDark, lineHeight: 1.4, display: 'block' }}>
                      {item.company}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
