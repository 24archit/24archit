import React from 'react';
import { Box, Container, Typography, Stack, IconButton, Divider } from '@mui/material';
import { GitHub, LinkedIn, Instagram, Email } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { COLORS } from '../../styles/theme';

const SOCIAL = [
  { icon: <GitHub sx={{ fontSize: 18 }} />,    href: 'https://github.com/24archit',       label: 'GitHub'    },
  { icon: <LinkedIn sx={{ fontSize: 18 }} />,  href: 'https://linkedin.com/in/24archit',  label: 'LinkedIn'  },
  { icon: <Instagram sx={{ fontSize: 18 }} />, href: 'https://instagram.com/24.archit',   label: 'Instagram' },
  { icon: <Email sx={{ fontSize: 18 }} />,     href: 'mailto:architmishra016@gmail.com',  label: 'Email'     },
];

const NAV = [
  { label: 'Home',       path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects',   path: '/projects' },
];

export const Footer = () => (
  <Box component="footer" sx={{ bgcolor: COLORS.black, borderTop: `1px solid ${COLORS.border}` }}>
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={5}
        sx={{ mb: 5 }}
      >
        {/* Brand */}
        <Box>
          <Typography
            sx={{
              fontFamily: '"Fira Code", monospace',
              fontWeight: 700, fontSize: '1rem',
              color: '#fff', mb: 1.5,
              letterSpacing: '-0.02em',
            }}
          >
            <Box component="span" sx={{ color: COLORS.silver }}>&lt;</Box>
            Archit
            <Box component="span" sx={{ color: COLORS.silver }}>/&gt;</Box>
          </Typography>
          <Typography variant="body2" sx={{ color: COLORS.silverDark, maxWidth: 260, lineHeight: 1.6 }}>
            Pre-Final Year CS student at IIIT Bhubaneswar. Building scalable systems & intelligent software.
          </Typography>
        </Box>

        {/* Nav */}
        <Box>
          <Typography variant="overline" sx={{ color: COLORS.silverDark, mb: 2, display: 'block' }}>
            Navigation
          </Typography>
          <Stack spacing={1.5}>
            {NAV.map(({ label, path }) => (
              <Typography key={path} component={Link} to={path} variant="body2" sx={{
                textDecoration: 'none', color: COLORS.silver, fontWeight: 500,
                transition: 'color 0.2s', '&:hover': { color: '#fff' },
              }}>
                {label}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* Connect */}
        <Box>
          <Typography variant="overline" sx={{ color: COLORS.silverDark, mb: 2, display: 'block' }}>
            Connect
          </Typography>
          <Stack direction="row" spacing={1}>
            {SOCIAL.map(({ icon, href, label }) => (
              <IconButton
                key={label}
                component="a" href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                sx={{
                  width: 36, height: 36,
                  color: COLORS.silver,
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: '50%',
                  '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.08)', borderColor: COLORS.borderHover },
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Stack>

      <Divider sx={{ borderColor: COLORS.border, mb: 4 }} />

      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={1}>
        <Typography variant="caption" sx={{ color: COLORS.silverDark }}>
          © 2026 Archit Mishra. All rights reserved.
        </Typography>
        <Typography variant="caption" sx={{ color: COLORS.silverDark }}>
          Built with React · MUI · Framer Motion
        </Typography>
      </Stack>
    </Container>
  </Box>
);
