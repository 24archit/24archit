import React from 'react';
import { Fab, Tooltip, Stack } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { COLORS } from '../../styles/theme';

const SOCIALS = [
  { icon: <GitHub />, title: "GitHub", href: "https://github.com/24archit", gradient: `linear-gradient(135deg, #333333 0%, #000000 100%)`, shadow: '0 4px 12px rgba(0,0,0,0.5)' },
  { icon: <LinkedIn />, title: "LinkedIn", href: "https://linkedin.com/in/24archit", gradient: `linear-gradient(135deg, ${COLORS.blue} 0%, #1e40af 100%)`, shadow: `0 4px 16px ${COLORS.blue}40` },
  { icon: <Email />, title: "Hire Me / Get in Touch", href: "mailto:architmishra016@gmail.com", gradient: `linear-gradient(135deg, ${COLORS.accent} 0%, #4338ca 100%)`, shadow: `0 8px 32px rgba(99, 102, 241, 0.4)` },
];

export const FloatingContact = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      sx={{
        position: 'fixed',
        bottom: 24,
        left: 24,
        zIndex: 100,
      }}
    >
      {SOCIALS.map((social, i) => {
        const isMain = i === SOCIALS.length - 1;
        return (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0, x: -20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ delay: 1 + (i * 0.15), type: 'spring', stiffness: 200, damping: 20 }}
          >
            <Tooltip title={social.title} placement="right" arrow>
              <Fab
                size={isMain ? "large" : "medium"}
                aria-label={social.title}
                href={social.href}
                target={isMain ? undefined : "_blank"}
                rel={isMain ? undefined : "noreferrer"}
                sx={{
                  background: social.gradient,
                  color: '#fff',
                  boxShadow: social.shadow,
                  border: `1px solid rgba(255,255,255,0.1)`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1) translateY(-2px)',
                    boxShadow: `0 12px 40px rgba(0,0,0,0.6)`,
                    background: social.gradient,
                  }
                }}
              >
                {social.icon}
              </Fab>
            </Tooltip>
          </motion.div>
        );
      })}
    </Stack>
  );
};
