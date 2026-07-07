import React from 'react';
import { Box, Container, Typography, Stack, Grid, Chip, IconButton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { GitHub, OpenInNew, CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { COLORS } from '../styles/theme';

const PROJECT_CATEGORIES = [
  {
    title: 'Internship Projects',
    projects: [
      {
        title: 'GoNidhi',
        subtitle: 'Edge-to-Cloud Biometric Identity Engine',
        role: 'Backend & ML Engineer',
        desc: 'A distributed biometric platform processing high-volume registrations (10k+ concurrent). Engineered zero-allocation native Android TFLite inference and an advanced similarity fusion algorithm utilizing Qdrant with INT8 quantization.',
        metrics: ['<50ms Latency', 'INT8 Quantization', '-50% Mem Usage', 'Z-Norm + RRF Fusion'],
        tags: ['FastAPI', 'PyTorch', 'React Native', 'Qdrant', 'CUDA'],
        links: { github: null, live: null },
        accent: COLORS.accent,
      }
    ]
  },
  {
    title: 'Personal Projects',
    projects: [
      {
        title: 'Sentia.ai',
        subtitle: 'AI CRM for E-Commerce Architectures',
        role: 'Backend & AI Engineer',
        desc: 'Architected an enterprise AI CRM isolating CPU-bound machine learning inference into a dedicated Python FastAPI microservice. Reduced OPEX by ~70% and MTTR to <2s using an Agentic Auto-Draft system on Qdrant.',
        metrics: ['70% OPEX Reduction', 'MTTR <2s', 'Agentic Auto-Draft', 'Qdrant Vector Search'],
        tags: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'Hugging Face'],
        links: { github: 'https://github.com/24archit/AI-Powered-CRM-System', live: 'https://sentia.ai.24archit.in' },
        accent: COLORS.purple,
      },
      {
        title: 'Beatyx',
        subtitle: 'Music Streaming & Concert Discovery Platform',
        role: 'Full Stack Engineer',
        desc: 'Built a full-stack music streaming platform, packaged as Android/iOS apps through Capacitor. Reduced TTFB with 1-hour caching; mitigated OWASP risks using helmet, xss-clean, and hpp; added highly-available, rate-limited sessions for horizontal scaling.',
        metrics: ['Capacitor Mobile Build', 'Reduced TTFB', 'OWASP Mitigation', 'Rate-limited Sessions'],
        tags: ['React', 'Node.js', 'MongoDB', 'Capacitor', 'Security'],
        links: { github: 'https://github.com/24archit/project.beatyx', live: 'https://beatyx.vercel.app/' },
        accent: COLORS.accent,
      }
    ]
  },
  {
    title: 'Freelancing Projects',
    projects: [
      {
        title: 'Ship My Parcel',
        subtitle: 'B2B Logistics API Platform',
        role: 'Freelance Software Engineer',
        desc: 'Built backend with BlueDart/Movin APIs for real-time pricing and consignment shipping.',
        metrics: ['BlueDart API', 'Movin API', 'Real-time Pricing'],
        tags: ['Node.js', 'REST API', 'Logistics'],
        links: { github: null, live: null },
        accent: COLORS.blue,
      },
      {
        title: 'Madein Cart',
        subtitle: 'E-Commerce Platform',
        role: 'Freelance Software Engineer',
        desc: 'Shipped production app with Supabase and Capacitor React wrappers for cross-platform packaging.',
        metrics: ['Cross-platform', 'Supabase Auth', 'Production Build'],
        tags: ['React', 'Supabase', 'Capacitor'],
        links: { github: null, live: null },
        accent: COLORS.gold,
      },
      {
        title: 'JJ-Classes & Math Super Highway',
        subtitle: 'EdTech Student Management System',
        role: 'Freelance Software Engineer',
        desc: 'Built multi-tier JWT auth and session-promotion flows for comprehensive student management.',
        metrics: ['Multi-tier Auth', 'Session Flows', 'Student Management'],
        tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
        links: { github: null, live: null },
        accent: COLORS.green,
      },
      {
        title: 'SEO Marketing Websites',
        subtitle: 'Bowling Planet & Indocrypt 2025',
        role: 'Freelance Software Engineer',
        desc: 'Delivered SEO platforms with GA4 and Clarity integration for international conferences and businesses.',
        metrics: ['GA4 Integration', 'Clarity Analytics', 'SEO Optimization'],
        tags: ['React', 'SEO', 'Analytics'],
        links: { github: null, live: null },
        accent: COLORS.silver,
      }
    ]
  }
];

export const ProjectsPage = () => (
  <Box sx={{ bgcolor: COLORS.black, minHeight: '100vh' }}>
    {/* Page hero */}
    <Box sx={{ bgcolor: COLORS.surface, borderBottom: `1px solid ${COLORS.border}`, pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="overline" sx={{ color: COLORS.silver, mb: 1.5, display: 'block' }}>Portfolio</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.75rem', md: '4.5rem' }, fontWeight: 700, color: '#fff', letterSpacing: '-0.035em', mb: 2 }}>
            All Projects
          </Typography>
          <Typography variant="body1" sx={{ color: COLORS.silver, fontSize: '1.0625rem', maxWidth: 500, lineHeight: 1.65 }}>
            A complete collection of my work — from full-stack platforms to AI-powered backend systems.
          </Typography>
        </motion.div>
      </Container>
    </Box>

    {/* Projects by Category */}
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={12}>
        {PROJECT_CATEGORIES.map((category, catIdx) => (
          <Box key={catIdx}>
            <Typography variant="h3" sx={{ color: '#fff', mb: 5, fontWeight: 700, fontSize: { xs: '1.75rem', md: '2.25rem' }, letterSpacing: '-0.02em', borderBottom: `1px solid ${COLORS.border}`, pb: 2 }}>
              {category.title}
            </Typography>
            <Stack spacing={3}>
              {category.projects.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}>
                  <Box sx={{
                    background: COLORS.surface1,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      borderColor: alpha(p.accent, 0.35),
                      boxShadow: `0 16px 60px rgba(0,0,0,0.4), 0 0 0 1px ${alpha(p.accent, 0.1)}`,
                      '& .project-preview': { opacity: 0.25 }
                    },
                  }}>
                    <Grid container>
                      <Grid size={{ xs: 12, md: 7 }}>
                        <Box sx={{ p: { xs: 4, md: 5 }, position: 'relative' }}>
                          {p.previewMedia && (
                            <Box
                              component={p.previewMedia.endsWith('.mp4') ? 'video' : 'img'}
                              src={p.previewMedia} autoPlay loop muted playsInline className="project-preview"
                              sx={{
                                position: 'absolute', inset: 0, width: '100%', height: '100%',
                                objectFit: 'cover', opacity: 0, transition: 'opacity 0.6s ease',
                                pointerEvents: 'none', mixBlendMode: 'screen'
                              }}
                            />
                          )}
                          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
                            <Chip label={p.role} size="small" sx={{ background: alpha(p.accent, 0.1), color: p.accent, fontWeight: 700, fontSize: '0.75rem', border: `1px solid ${alpha(p.accent, 0.2)}` }} />
                            <Stack direction="row" spacing={0.5}>
                              {p.links.github && <IconButton component="a" href={p.links.github} target="_blank" rel="noreferrer" size="small"
                                sx={{ color: COLORS.silver, background: 'rgba(255,255,255,0.04)', border: `1px solid ${COLORS.border}`, width: 32, height: 32, '&:hover': { color: '#fff', borderColor: COLORS.borderHover } }}>
                                <GitHub sx={{ fontSize: 15 }} /></IconButton>}
                              {p.links.live && <IconButton component="a" href={p.links.live} target="_blank" rel="noreferrer" size="small"
                                sx={{ color: COLORS.silver, background: 'rgba(255,255,255,0.04)', border: `1px solid ${COLORS.border}`, width: 32, height: 32, '&:hover': { color: '#fff', borderColor: COLORS.borderHover } }}>
                                <OpenInNew sx={{ fontSize: 15 }} /></IconButton>}
                            </Stack>
                          </Stack>
                          <Typography variant="h4" sx={{ fontWeight: 700, color: '#fff', fontSize: { xs: '1.375rem', md: '1.625rem' }, mb: 0.5 }}>{p.title}</Typography>
                          <Typography variant="body2" sx={{ color: COLORS.silverDark, mb: 2.5, fontWeight: 500 }}>{p.subtitle}</Typography>
                          <Typography variant="body1" sx={{ color: COLORS.silver, lineHeight: 1.65, mb: 4, fontSize: '0.9375rem' }}>{p.desc}</Typography>
                          <Stack direction="row" flexWrap="wrap" gap={1}>
                            {p.tags.map(tag => (
                              <Box key={tag} sx={{
                                px: 1.75, py: 0.5, borderRadius: '980px',
                                background: 'rgba(255,255,255,0.04)', border: `1px solid ${COLORS.border}`,
                                fontSize: '0.8125rem', fontWeight: 600, color: COLORS.silverLight,
                                transition: 'all 0.2s',
                                '&:hover': { background: alpha(p.accent, 0.1), color: p.accent, borderColor: alpha(p.accent, 0.3) },
                              }}>{tag}</Box>
                            ))}
                          </Stack>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 12, md: 5 }}>
                        <Box sx={{
                          height: '100%',
                          background: `linear-gradient(135deg, ${alpha(p.accent, 0.05)} 0%, transparent 60%)`,
                          borderLeft: { md: `1px solid ${COLORS.border}` },
                          borderTop: { xs: `1px solid ${COLORS.border}`, md: 'none' },
                          p: { xs: 4, md: 5 },
                          display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        }}>
                          <Typography variant="overline" sx={{ color: p.accent, mb: 3, display: 'block' }}>Key Highlights</Typography>
                          <Stack spacing={2.5}>
                            {p.metrics.map((m, idx) => (
                              <Stack key={idx} direction="row" alignItems="center" spacing={2}>
                                <CheckCircle sx={{ fontSize: 17, color: p.accent, flexShrink: 0 }} />
                                <Typography variant="body2" sx={{ fontWeight: 600, color: COLORS.silverLight }}>{m}</Typography>
                              </Stack>
                            ))}
                          </Stack>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Container>
  </Box>
);
