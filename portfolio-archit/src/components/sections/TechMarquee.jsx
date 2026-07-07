import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { COLORS } from '../../styles/theme';

const TECH_STACK = [
  'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 
  'Google Cloud', 'Docker', 'Python', 'TypeScript', 'C++', 
  'TensorFlow', 'OpenCV'
];

export const TechMarquee = () => {
  return (
    <Box sx={{ 
      width: '100%', 
      overflow: 'hidden', 
      bgcolor: COLORS.surface, 
      borderTop: `1px solid ${COLORS.border}`,
      borderBottom: `1px solid ${COLORS.border}`,
      py: { xs: 2.5, md: 3 },
      position: 'relative',
      display: 'flex',
    }}>
      {/* Fade masks */}
      <Box sx={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: { xs: 40, md: 100 }, zIndex: 2,
        background: `linear-gradient(to right, ${COLORS.surface}, transparent)`,
      }} />
      <Box sx={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: { xs: 40, md: 100 }, zIndex: 2,
        background: `linear-gradient(to left, ${COLORS.surface}, transparent)`,
      }} />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30
        }}
        style={{ display: 'flex', whiteSpace: 'nowrap', width: 'fit-content' }}
      >
        {/* We map the array twice to ensure seamless infinite looping */}
        {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
          <Typography
            key={i}
            sx={{
              mx: { xs: 3, md: 5 },
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontWeight: 600,
              color: COLORS.silverDark,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontFamily: '"Fira Code", monospace',
              transition: 'color 0.3s ease',
              '&:hover': { color: COLORS.accent }
            }}
          >
            {tech}
          </Typography>
        ))}
      </motion.div>
    </Box>
  );
};
