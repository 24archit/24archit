import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Container, Box,
  Button, IconButton, Drawer, List, ListItem, ListItemButton,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { COLORS } from '../../styles/theme';

const NAV_LINKS = [
  { label: 'Home',       path: '/' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects',   path: '/projects' },
];

export const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location                    = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(0,0,0,0.75)'
            : 'rgba(0,0,0,0.4)',
          backdropFilter: 'saturate(180%) blur(24px)',
          borderBottom: `1px solid ${scrolled ? COLORS.border : 'transparent'}`,
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: 60, justifyContent: 'space-between' }}>
            {/* Logo */}
            <Typography
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                fontWeight: 700,
                color: '#fff',
                fontFamily: '"Fira Code", monospace',
                fontSize: '1.0625rem',
                letterSpacing: '-0.02em',
                transition: 'opacity 0.2s',
                '&:hover': { opacity: 0.65 },
              }}
            >
              <Box component="span" sx={{ color: COLORS.silver }}>&lt;</Box>
              Archit
              <Box component="span" sx={{ color: COLORS.silver }}>/&gt;</Box>
            </Typography>

            {/* Desktop links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {NAV_LINKS.map(({ label, path }) => {
                const active = location.pathname === path;
                return (
                  <Button
                    key={path}
                    component={Link}
                    to={path}
                    sx={{
                      fontSize: '0.875rem',
                      fontWeight: active ? 600 : 400,
                      color: active ? '#fff' : COLORS.silver,
                      px: 2,
                      py: 0.75,
                      borderRadius: '980px',
                      background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
                      '&:hover': { background: 'rgba(255,255,255,0.07)', color: '#fff' },
                    }}
                  >
                    {label}
                  </Button>
                );
              })}
              <Button
                component="a"
                href="https://linkedin.com/in/24archit"
                target="_blank"
                rel="noreferrer"
                variant="contained"
                size="small"
                sx={{ ml: 1.5, px: 2.5, py: 0.875, fontSize: '0.875rem' }}
              >
                Contact
              </Button>
            </Box>

            {/* Mobile */}
            <IconButton
              sx={{ display: { md: 'none' }, color: '#fff' }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: 'rgba(10,10,10,0.95)',
            backdropFilter: 'blur(24px)',
            borderLeft: `1px solid ${COLORS.border}`,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: COLORS.silver }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_LINKS.map(({ label, path }) => (
            <ListItem key={path} disablePadding>
              <ListItemButton
                component={Link}
                to={path}
                sx={{
                  px: 3, py: 1.5,
                  fontWeight: location.pathname === path ? 600 : 400,
                  color: location.pathname === path ? '#fff' : COLORS.silver,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1rem',
                }}
              >
                {label}
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ px: 3, pt: 2 }}>
            <Button
              component="a"
              href="https://linkedin.com/in/24archit"
              target="_blank"
              rel="noreferrer"
              variant="contained"
              fullWidth
            >
              Contact
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
