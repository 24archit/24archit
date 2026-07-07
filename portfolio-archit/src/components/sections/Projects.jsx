import React from 'react';
import { Box, Container, Typography, Grid, Stack, Button, IconButton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { GitHub, OpenInNew, East } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { COLORS } from '../../styles/theme';

const PROJECTS = [
  {
    title: 'GoNidhi',
    subtitle: 'Edge-to-Cloud Biometric Identity Engine',
    desc: 'A distributed biometric platform designed to process high-volume identity registrations targeting 10k+ concurrent users. Features a zero-allocation native Android TFLite inference pipeline and an advanced similarity fusion algorithm.',
    tags: ['FastAPI', 'PyTorch', 'React Native', 'Qdrant', 'CUDA'],
    links: { github: null, live: null },
    accent: COLORS.accent, // Indigo
    previewMedia: null, // Add URL to .mp4 or .gif here to show preview on hover
    stats: [
      { label: 'Latency', value: '<50ms', desc: 'Vector Search' },
      { label: 'Quantization', value: 'INT8', desc: 'Qdrant in RAM' },
      { label: 'Memory', value: '-50%', desc: 'Via RGB_565' },
    ]
  },
  {
    title: 'Sentia.ai',
    subtitle: 'AI CRM for E-Commerce Architectures',
    desc: 'An enterprise-grade AI CRM platform that isolated CPU-bound machine learning inference into a dedicated Python FastAPI microservice, reducing routine support operational expenditures (OPEX) by ~70%.',
    tags: ['React', 'Node.js', 'FastAPI', 'Qdrant', 'Hugging Face'],
    links: { github: 'https://github.com/24archit/AI-Powered-CRM-System', live: 'https://sentia.ai.24archit.in' },
    accent: COLORS.purple,
    stats: [
      { label: 'OPEX Reduction', value: '70%', desc: 'Automated RAG' },
      { label: 'MTTR', value: '<2s', desc: 'Agentic Auto-Draft' },
      { label: 'Fraud Detection', value: '100%', desc: 'Predictive Engine' },
    ]
  },
  {
    title: 'Beatyx',
    subtitle: 'Full-Stack Music Streaming Platform',
    desc: 'Resilient full-stack music streaming platform wrapped into native Android and iOS environments via Capacitor. Implemented 4-layer OWASP security pipeline and aggressive 1-hour server-side caching.',
    tags: ['React', 'Node.js', 'Capacitor', 'Security', 'MongoDB'],
    links: { github: 'https://github.com/24archit/project.beatyx', live: 'https://beatyx.vercel.app/' },
    accent: COLORS.green,
    stats: [
      { label: 'Security', value: '4-Layer', desc: 'OWASP Mitigated' },
      { label: 'Rate Limit', value: '2k/15m', desc: 'DDoS Protection' },
      { label: 'Caching', value: '1-Hour', desc: 'Reduced TTFB' },
    ]
  },
];

export const Projects = () => (
  <Box id="projects" component="section" sx={{ py: { xs: 4, md: 6 }, bgcolor: '#000000' }}>
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
        sx={{ mb: 10 }} spacing={2}
      >
        <Box>
          <Typography variant="overline" sx={{ color: COLORS.silver, mb: 1.5, display: 'block', letterSpacing: '0.1em' }}>
            Flagship Engineering
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 700, color: '#fff', letterSpacing: '-0.04em' }}>
            My Projects.
          </Typography>
        </Box>
        <Button component={Link} to="/projects" variant="outlined" endIcon={<East sx={{ fontSize: 15 }} />}
          sx={{ fontSize: '0.9375rem', px: 3, py: 1.25, whiteSpace: 'nowrap', flexShrink: 0, borderRadius: '980px', borderColor: 'rgba(255,255,255,0.2)', color: '#fff', '&:hover': { borderColor: '#fff', background: 'rgba(255,255,255,0.05)' } }}>
          All Projects
        </Button>
      </Stack>

      <Stack spacing={4}>
        {PROJECTS.map((p, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box sx={{
              position: 'relative',
              background: '#050505',
              borderRadius: { xs: '24px', md: '40px' },
              overflow: 'hidden',
              border: `1px solid rgba(255,255,255,0.05)`,
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s ease',
              '&:hover': {
                transform: 'scale(0.99)',
                borderColor: alpha(p.accent, 0.3),
                '& .project-preview': { opacity: 0.25 }
              },
            }}>
              {/* Subtle Radial Glow Mask */}
              <Box sx={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at 80% 0%, ${alpha(p.accent, 0.12)} 0%, transparent 60%)`,
                pointerEvents: 'none',
              }} />

              {/* Interactive Video/GIF Preview */}
              {p.previewMedia && (
                <Box
                  component={p.previewMedia.endsWith('.mp4') ? 'video' : 'img'}
                  src={p.previewMedia}
                  autoPlay loop muted playsInline
                  className="project-preview"
                  sx={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                    objectFit: 'cover', opacity: 0, transition: 'opacity 0.6s ease',
                    pointerEvents: 'none', zIndex: 0, mixBlendMode: 'screen'
                  }}
                />
              )}

              <Box sx={{ p: { xs: 4, md: 8 }, position: 'relative', zIndex: 1 }}>
                <Grid container spacing={{ xs: 6, md: 8 }}>
                  
                  {/* Left Side: Content */}
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
                      {p.links.github && (
                        <IconButton component="a" href={p.links.github} target="_blank" rel="noreferrer" size="small"
                          sx={{ color: COLORS.silver, background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(255,255,255,0.1)`,
                            width: 36, height: 36, '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.1)' } }}>
                          <GitHub sx={{ fontSize: 18 }} />
                        </IconButton>
                      )}
                      {p.links.live && (
                        <IconButton component="a" href={p.links.live} target="_blank" rel="noreferrer" size="small"
                          sx={{ color: COLORS.silver, background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(255,255,255,0.1)`,
                            width: 36, height: 36, '&:hover': { color: '#fff', background: 'rgba(255,255,255,0.1)' } }}>
                          <OpenInNew sx={{ fontSize: 18 }} />
                        </IconButton>
                      )}
                    </Stack>

                    <Typography variant="h3" sx={{ 
                      fontWeight: 700, 
                      fontSize: { xs: '2.5rem', md: '3.5rem' }, 
                      letterSpacing: '-0.04em',
                      lineHeight: 1.1,
                      mb: 2,
                      background: `linear-gradient(180deg, #FFFFFF 0%, ${COLORS.silverLight} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      {p.title}
                    </Typography>
                    
                    <Typography variant="h6" sx={{ color: p.accent, mb: 3, fontWeight: 500, fontSize: '1.125rem' }}>
                      {p.subtitle}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ color: COLORS.silver, lineHeight: 1.7, mb: 5, fontSize: '1.0625rem', maxWidth: 600 }}>
                      {p.desc}
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={1.5}>
                      {p.tags.map(tag => (
                        <Box key={tag} sx={{
                          px: 2, py: 0.75, borderRadius: '980px',
                          background: 'rgba(255,255,255,0.03)', border: `1px solid rgba(255,255,255,0.08)`,
                          fontSize: '0.8125rem', fontWeight: 600, color: COLORS.silverLight,
                        }}>
                          {tag}
                        </Box>
                      ))}
                    </Stack>
                  </Grid>

                  {/* Right Side: Spec Grid */}
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Box sx={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '24px',
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Typography variant="overline" sx={{ color: COLORS.silverDark, display: 'block', mb: 3, letterSpacing: '0.1em' }}>
                        Performance Architecture
                      </Typography>
                      
                      <Stack spacing={4}>
                        {p.stats.map((stat, idx) => (
                          <Box key={idx}>
                            <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mb: 0.5 }}>
                              <Typography sx={{ fontSize: '2rem', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>
                                {stat.value}
                              </Typography>
                            </Stack>
                            <Typography sx={{ fontSize: '0.875rem', fontWeight: 600, color: p.accent, mb: 0.5 }}>
                              {stat.label}
                            </Typography>
                            <Typography sx={{ fontSize: '0.8125rem', color: COLORS.silverDark }}>
                              {stat.desc}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </Grid>

                </Grid>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Stack>
    </Container>
  </Box>
);
