import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { COLORS } from '../../styles/theme';

const SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'journey', label: 'Milestones' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'community', label: 'Community' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const ScrollSpyTimeline = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Trigger point is roughly 1/3 down the viewport
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = 'hero';

      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check after a slight delay to ensure elements are mounted
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{
      position: 'fixed',
      right: { xs: 12, md: 40 },
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
    }}>
      {SECTIONS.map((section, idx) => {
        const isActive = activeSection === section.id;
        return (
          <Box 
            key={section.id} 
            sx={{ 
              position: 'relative', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              height: 24, 
              cursor: 'pointer',
              '&:hover .timeline-label': {
                opacity: 1,
                transform: 'translateX(0)',
                color: '#fff',
              }
            }} 
            onClick={() => scrollTo(section.id)}
          >
            {/* Label (hidden until hover/active) */}
            <Typography 
              className="timeline-label"
              sx={{
                position: 'absolute', right: '100%', mr: 2,
                whiteSpace: 'nowrap',
                fontSize: '0.6875rem', fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: isActive ? '#fff' : COLORS.silverDark,
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'translateX(0)' : 'translateX(10px)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {section.label}
            </Typography>

            {/* Dot */}
            <Box sx={{
              width: isActive ? 10 : 6,
              height: isActive ? 10 : 6,
              borderRadius: '50%',
              bgcolor: isActive ? '#fff' : 'rgba(255,255,255,0.2)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: isActive ? `0 0 16px rgba(255,255,255,0.6)` : 'none',
              '&:hover': {
                transform: 'scale(1.5)',
                bgcolor: '#fff',
              }
            }} />

            {/* Connecting Line (drawn to the next dot) */}
            {idx < SECTIONS.length - 1 && (
              <Box sx={{
                position: 'absolute',
                top: 24, // below this dot
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1px',
                height: 24, // connects to next dot because gap is 3 (24px)
                bgcolor: 'rgba(255,255,255,0.08)',
              }} />
            )}
          </Box>
        );
      })}
    </Box>
  );
};
