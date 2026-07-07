import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { COLORS } from '../../styles/theme';

export const GithubActivity = () => {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 }, bgcolor: COLORS.surface }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: COLORS.silver, mb: 1.5, display: 'block' }}>
            Daily Consistency
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: '#fff' }}>
            GitHub Contributions
          </Typography>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{
            background: '#050505',
            border: `1px solid rgba(255,255,255,0.05)`,
            borderRadius: { xs: '24px', md: '32px' },
            p: { xs: 4, md: 6 },
            display: 'flex',
            justifyContent: 'center',
            overflowX: 'auto',
            '&::-webkit-scrollbar': { display: 'none' }, // hide scrollbar on mobile
            scrollbarWidth: 'none',
            position: 'relative',
          }}>
            {/* Subtle glow mask */}
            <Box sx={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(circle at 50% 100%, rgba(38, 166, 65, 0.08) 0%, transparent 60%)`,
              pointerEvents: 'none', zIndex: 0,
            }} />
            
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <GitHubCalendar 
                username="24archit" 
                blockSize={14}
                blockMargin={5}
                colorScheme="dark"
                theme={{
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'], // Classic GitHub greens
                }}
                style={{
                  color: COLORS.silver,
                  fontFamily: '"Inter", sans-serif',
                }}
              />
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
