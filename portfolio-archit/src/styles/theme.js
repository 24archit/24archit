import { createTheme, alpha } from '@mui/material/styles';

// ─── Apple Dark Design Tokens ──────────────────────────────────────────────
export const COLORS = {
  black:        '#000000',
  surface:      '#0A0A0A',
  surface1:     '#111111',
  surface2:     '#1A1A1A',
  surface3:     '#242424',
  border:       'rgba(255, 255, 255, 0.08)',
  borderHover:  'rgba(255, 255, 255, 0.16)',
  white:        '#FFFFFF',
  silver:       '#AEAEB2',
  silverLight:  '#D1D1D6',
  silverDark:   '#636366',
  accent:       '#5E5CE6',   // Apple‑ish indigo
  accentGlow:   'rgba(94, 92, 230, 0.35)',
  green:        '#32D74B',   // Apple green
  purple:       '#BF5AF2',
  gold:         '#FFD60A',
  blue:         '#0A84FF',
  red:          '#FF453A',
};

// Metallic gradient for special text
export const METALLIC = `linear-gradient(135deg, #D1D1D6 0%, #FFFFFF 40%, #AEAEB2 70%, #D1D1D6 100%)`;

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary:    { main: COLORS.accent, light: '#7B79FF', dark: '#3634CF' },
    secondary:  { main: COLORS.green,  light: '#5EE87B', dark: '#248A3D'  },
    background: { default: COLORS.black, paper: COLORS.surface1 },
    text:       { primary: COLORS.white, secondary: COLORS.silver, disabled: COLORS.silverDark },
    divider:    COLORS.border,
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.0 },
    h2: { fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05 },
    h3: { fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.15 },
    h4: { fontWeight: 600, letterSpacing: '-0.02em'  },
    h5: { fontWeight: 600, letterSpacing: '-0.015em' },
    h6: { fontWeight: 600, letterSpacing: '-0.01em'  },
    body1: { lineHeight: 1.65, letterSpacing: '0.004em', color: COLORS.silverLight },
    body2: { lineHeight: 1.6,  letterSpacing: '0.004em', color: COLORS.silver      },
    button:  { fontWeight: 600, textTransform: 'none', letterSpacing: '-0.005em' },
    overline: { fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.6875rem' },
    caption:  { letterSpacing: '0.01em', color: COLORS.silverDark },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        'html, body': {
          backgroundColor: COLORS.black,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          scrollBehavior: 'smooth',
        },
        '::selection': { background: alpha(COLORS.accent, 0.3), color: '#fff' },
        '::-webkit-scrollbar': { width: '5px' },
        '::-webkit-scrollbar-track': { background: 'transparent' },
        '::-webkit-scrollbar-thumb': { background: 'rgba(255,255,255,0.12)', borderRadius: '4px' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: `1px solid ${COLORS.border}`,
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '980px',
          padding: '10px 24px',
          fontSize: '0.9375rem',
          fontWeight: 600,
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          background: COLORS.white,
          color: COLORS.black,
          boxShadow: 'none',
          '&:hover': {
            background: COLORS.silverLight,
            boxShadow: '0 0 0 4px rgba(255,255,255,0.1)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderColor: COLORS.border,
          color: COLORS.white,
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            borderColor: COLORS.borderHover,
            background: 'rgba(255,255,255,0.08)',
          },
        },
        text: {
          color: COLORS.silver,
          '&:hover': { color: COLORS.white, background: 'rgba(255,255,255,0.06)' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: COLORS.surface1,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 20,
          boxShadow: 'none',
          backgroundImage: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: '980px',
          fontSize: '0.8125rem',
          background: 'rgba(255,255,255,0.06)',
          border: `1px solid ${COLORS.border}`,
          color: COLORS.silver,
        },
      },
    },
    MuiPaper:   { styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiDivider: { styleOverrides: { root: { borderColor: COLORS.border } } },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: COLORS.silver,
          transition: 'all 0.2s ease',
          '&:hover': { color: COLORS.white, transform: 'scale(1.1)' },
        },
      },
    },
  },
});
