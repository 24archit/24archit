import React, { useState, useEffect, useRef } from 'react';
import { 
  AppBar, Toolbar, Typography, Container, Grid, Button, Box, 
  Card, CardContent, Chip, IconButton, CssBaseline, Stack, Paper, 
  Tooltip
} from '@mui/material';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import { 
  GitHub, LinkedIn, Email, Code, Storage, 
  EmojiEvents, OpenInNew, ArrowForward, Terminal, 
  Download, CheckCircle, 
  School, Groups, Instagram, MusicNote, Cloud, Campaign
} from '@mui/icons-material';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';

// --- THEME ---
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0F172A' }, // Slate 900
    secondary: { main: '#4F46E5' }, // Indigo 600
    background: { default: '#F8FAFC', paper: '#FFFFFF' },
    text: { primary: '#1E293B', secondary: '#64748B' },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1 },
    h2: { fontWeight: 700, letterSpacing: '-0.03em' },
    h3: { fontWeight: 700, letterSpacing: '-0.02em' },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: '50px', padding: '12px 28px', fontSize: '1rem' },
        contained: { boxShadow: '0 4px 14px 0 rgba(15, 23, 42, 0.15)' },
      },
    },
    MuiChip: { styleOverrides: { root: { fontWeight: 600, borderRadius: '8px' } } },
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
  },
});

// --- DATA ---
const STATS = [
  { value: 223, suffix: "", label: "AIR - Naukri Challenge", sub: "Top 0.2% of 1.3L+ Candidates", icon: <EmojiEvents sx={{ color: '#F59E0B' }} /> },
  { value: 550, suffix: "+", label: "DSA Problems Solved", sub: "LeetCode & GFG Consistency", icon: <Code color="secondary" /> },
  { value: 2, suffix: "nd", label: "National Qualifier", sub: "Flipkart GRID 7.0 (Round 2)", icon: <Terminal color="action" /> },
];

const TIMELINE = [
  {
    year: "Sept 2025",
    title: "AIR 223 - Naukri Campus Challenge",
    desc: "Secured Top 0.2% rank nationwide among ~1.3 Lakh participants in coding & aptitude.",
    icon: <EmojiEvents />,
    color: "#F59E0B"
  },
  {
    year: "Aug 2025",
    title: "Flipkart GRID 7.0 Qualifier",
    desc: "Cleared Round 1 (Screening) and qualified for the Round 2 Coding Phase among thousands of teams.",
    icon: <Terminal />,
    color: "#4F46E5"
  },
  {
    year: "2024",
    title: "SIH 2024 - Institution Top 50",
    desc: "Led the team nominated among the Top 50 projects at IIIT Bhubaneswar for Smart India Hackathon.",
    icon: <Groups />,
    color: "#10B981"
  },
  {
    year: "2024",
    title: "Finalist - Craft & Code (D3 Fest)",
    desc: "Led team to Top 40 All India in the flagship Hackathon of IIIT Bhubaneswar.",
    icon: <Code />,
    color: "#EC4899"
  },
  {
    year: "2023 - Present",
    title: "B.Tech in Computer Science",
    desc: "IIIT Bhubaneswar (Class of 2027). CGPA: 8.51/10.0.",
    icon: <School />,
    color: "#0EA5E9"
  }
];

// NEW DATA: Community & Leadership
const LEADERSHIP = [
  {
    role: "Member",
    org: "GDG & GDG Cloud BBSR",
    date: "Feb 2025 - Present",
    desc: "Actively engaged in developer community workshops and cloud computing meetups. Earned 'Solution Challenge Badge' 2025.",
    icon: <Cloud fontSize="large" sx={{ color: '#4285F4' }} />
  },
  {
    role: "Coordinator",
    org: "Advaita (IIIT-B Fest)",
    date: "Mar 2025",
    desc: "Coordinated cultural events for the annual fest, managing logistics and ensuring high student participation.",
    icon: <Campaign fontSize="large" sx={{ color: '#F59E0B' }} />
  },
  {
    role: "Pianist & Member",
    org: "Cultural Society",
    date: "Sep 2023 - Present",
    desc: "Active member performing as a pianist in the college band, promoting creativity through cultural events.",
    icon: <MusicNote fontSize="large" sx={{ color: '#EC4899' }} />
  }
];

const PROJECTS = [
  {
    title: "Beatyx– Full-Stack Music & Concert Discovery Platform:",
    role: "Full Stack Engineer",
    desc: "A high-performance streaming app integrating Spotify & Ticketmaster APIs. Engineered a custom caching layer with React Query to reduce API latency by 40%.",
    metrics: ["40% Latency Drop", "OAuth 2.0 Security", "20+ API Endpoints", "responsive Design", "real-time Data Fetching"],
    tags: ["React", "Node.js", "MongoDB", "Rest API"],
    links: { github: "https://github.com/24archit/project.beatyx", live: "https://beatyx.vercel.app/" }
  },
  {
    title: "AI-Powered E-commerce CRM System",
    role: "Backend & AI Engineer",
    desc: "Dockerized microservices system for customer support. Deployed fine-tuned BERT models achieving 94% F1-score for sentiment analysis.",
    metrics: ["94% Accuracy", "Docker Microservices", "RAG Engine", "FastAPI Backend", "LangChain Integration"],
    tags: ["FastAPI", "Docker", "BERT", "LangChain"],
    links: { github: "https://github.com/24archit/AI-Powered-CRM-System", live: null }
  }
];

const SKILLS = [
  { category: "Core Stack", skills: ["React.js", "Node.js", "TypeScript", "Next.js", "MongoDB"] },
  { category: "AI & DevOps", skills: ["Docker", "FastAPI", "TensorFlow", "LangChain", "Git"] },
  { category: "Languages", skills: ["C++ (DSA)", "JavaScript", "Python", "SQL"] },
];

// --- COMPONENTS ---
const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => { if (isInView) motionValue.set(value); }, [isInView, value, motionValue]);
  useEffect(() => { springValue.on("change", (latest) => setDisplayValue(Math.floor(latest))); }, [springValue]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const CodeTerminal = () => (
  <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
    <Paper elevation={4} sx={{ bgcolor: '#0F172A', color: '#E2E8F0', p: 0, borderRadius: 3, fontFamily: 'monospace', overflow: 'hidden', maxWidth: '500px', mx: 'auto', transform: 'rotate(-2deg)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <Box sx={{ bgcolor: '#1E293B', p: 1.5, display: 'flex', gap: 1 }}>
        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#EF4444' }} />
        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#F59E0B' }} />
        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#10B981' }} />
      </Box>
      <Box sx={{ p: 3 }}>
        <Stack spacing={1.5}>
          <Box sx={{ display: 'flex', gap: 1, color: '#10B981' }}><Typography variant="caption">➜</Typography><Typography variant="caption">git clone portfolio-v1</Typography></Box>
          <Box sx={{ display: 'flex', gap: 1, opacity: 0.7 }}><Typography variant="caption">Cloning into 'portfolio-v1'...</Typography></Box>
          <Box sx={{ display: 'flex', gap: 1, color: '#10B981', mt: 1 }}><Typography variant="caption">➜</Typography><Typography variant="caption">npm run deploy:production</Typography></Box>
          <Box sx={{ opacity: 0.9 }}>
            <Typography variant="caption" color="secondary.light">✔ MERN Stack Compiled</Typography><br/>
            <Typography variant="caption" color="secondary.light">✔ 550+ DSA Problems Verified</Typography><br/>
            <Typography variant="caption" color="secondary.light">✔ AI Models Fine-tuned</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, color: '#10B981', mt: 1 }}><Typography variant="caption" sx={{ animation: 'blink 1s infinite' }}>➜ _</Typography></Box>
        </Stack>
      </Box>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </Paper>
  </motion.div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => window.addEventListener('scroll', () => setScrolled(window.scrollY > 20)), []);
  return (
    <AppBar position="fixed" elevation={0} sx={{ bgcolor: scrolled ? 'rgba(255,255,255,0.8)' : 'transparent', backdropFilter: 'blur(12px)', borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none', transition: 'all 0.3s' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 80 }}>
          <Typography variant="h5" sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: -1, color: '#0F172A', display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { transform: 'scale(1.05)', transition: 'all 0.2s' } }}>
            <span style={{ color: '#4F46E5', marginRight: '2px' }}>&lt;</span>Archit<span style={{ color: '#4F46E5', marginLeft: '4px' }}>/&gt;</span>
          </Typography>
          <Stack direction="row" spacing={4} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* Added 'Community' to Navbar links */}
            {['Journey', 'Projects', 'Community', 'Skills'].map((item) => (
              <Button key={item} color="primary" href={`#${item.toLowerCase()}`} sx={{ fontSize: '0.95rem', opacity: 0.7, '&:hover': { opacity: 1, bgcolor: 'transparent', color: '#4F46E5' } }}>{item}</Button>
            ))}
            {/* <Button variant="contained" color="primary" href="/Resume_F.pdf" target="_blank" startIcon={<Download />} size="small">Resume</Button>*/}
          </Stack> 
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const Hero = () => (
  <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', pt: { xs: 12, md: 0 } }}>
    <Box sx={{ position: 'absolute', top: '-20%', right: '-10%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, rgba(255,255,255,0) 70%)', zIndex: -1 }} />
    <Box sx={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(255,255,255,0) 70%)', zIndex: -1 }} />
    <Container maxWidth="lg">
      <Grid container spacing={8} alignItems="center">
        <Grid item xs={12} md={7}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Chip label="Open for Summer 2026 Internships" color="secondary" size="small" sx={{ mb: 4, bgcolor: alpha('#4F46E5', 0.08), color: '#4F46E5', px: 1, py: 0.5, fontWeight: 700 }} />
            <Typography variant="h1" color="primary" sx={{ fontSize: { xs: '3rem', md: '5rem' }, mb: 3, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              <Box component="span" sx={{ position: 'relative', display: 'inline-block', mr: 0.5 }}>
                <span style={{ color: '#4F46E5', position: 'relative', zIndex: 2 }}>Archit</span>
                <span style={{ color: '#0F172A' }}>ecting</span>
                <Box component="svg" viewBox="0 0 200 20" sx={{ position: 'absolute', bottom: { xs: -2, md: 2 }, left: 0, width: '55%', height: 'auto', zIndex: 1, overflow: 'visible' }}>
                  <motion.path d="M 5 15 Q 50 25 100 10" fill="transparent" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} />
                </Box>
              </Box>
              <br />
              <span style={{ background: 'linear-gradient(90deg, #0F172A 0%, #334155 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Scalability.</span>
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 5, fontWeight: 400, maxWidth: '550px', lineHeight: 1.7, fontSize: '1.15rem' }}>
              Hi, I'm <b>Archit Mishra</b>. A Pre-Final Year (CSE) student at IIIT Bhubaneswar. I bridge the gap between <b>Competitive Logic</b> and <b>Production Systems</b>.
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 6 }}>
              <Button variant="contained" color="primary" size="large" href="#projects" endIcon={<ArrowForward />}>Featured Work</Button>
              <Stack direction="row" spacing={1}>
                <Tooltip title="GitHub"><IconButton href="https://github.com/24archit" target="_blank" sx={{ border: '1px solid #E2E8F0', bgcolor: 'white', color: '#333' }}><GitHub /></IconButton></Tooltip>
                <Tooltip title="LinkedIn"><IconButton href="https://linkedin.com/in/24archit" target="_blank" sx={{ border: '1px solid #E2E8F0', bgcolor: 'white', color: '#0077B5' }}><LinkedIn /></IconButton></Tooltip>
                <Tooltip title="Instagram"><IconButton href="https://instagram.com/24.archit" target="_blank" sx={{ border: '1px solid #E2E8F0', bgcolor: 'white', color: '#E4405F' }}><Instagram /></IconButton></Tooltip>
                <Tooltip title="Email Me"><IconButton href="mailto:architmishra016@gmail.com" sx={{ border: '1px solid #E2E8F0', bgcolor: 'white', color: '#EA4335' }}><Email /></IconButton></Tooltip>
              </Stack>
            </Stack>
            <Paper elevation={0} sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 4, width: '100%' }}>
              <Grid container spacing={3} alignItems="center">
                {STATS.map((stat, i) => (
                  <Grid item xs={12} sm={4} key={i}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box sx={{ mt: 0.5, p: 1, bgcolor: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>{stat.icon}</Box>
                      <Box>
                        <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', lineHeight: 1 }}><Counter value={stat.value} suffix={stat.suffix} /></Typography>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', mt: 0.5 }}>{stat.label}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 0.5, lineHeight: 1.2 }}>{stat.sub}</Typography>
                      </Box>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}><CodeTerminal /></Grid>
      </Grid>
    </Container>
  </Box>
);

const ProjectCard = ({ project }) => (
  <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }}>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid', borderColor: 'divider', overflow: 'visible', borderRadius: 4 }}>
      <CardContent sx={{ p: 4, flexGrow: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="start" sx={{ mb: 2 }}>
          <Chip label={project.role} size="small" sx={{ bgcolor: alpha('#4F46E5', 0.1), color: 'secondary.main' }} />
          <Stack direction="row" spacing={1}>
            {project.links.github && <IconButton href={project.links.github} size="small"><GitHub fontSize="small" /></IconButton>}
            {project.links.live && <IconButton href={project.links.live} size="small"><OpenInNew fontSize="small" /></IconButton>}
          </Stack>
        </Stack>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>{project.title}</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.05rem', lineHeight: 1.6 }}>{project.desc}</Typography>
        <Stack spacing={1.5} sx={{ mb: 4 }}>
          {project.metrics.map((m, i) => (
            <Stack key={i} direction="row" alignItems="center" spacing={1.5}>
              <CheckCircle sx={{ fontSize: 18, color: 'secondary.main' }} />
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>{m}</Typography>
            </Stack>
          ))}
        </Stack>
        <Box sx={{ pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {project.tags.map(tag => (
              <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ borderRadius: 2, borderColor: '#E2E8F0', bgcolor: '#F8FAFC', fontWeight: 600 }} />
            ))}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  </motion.div>
);

// --- NEW COMPONENT: Leadership Card ---
const LeadershipCard = ({ item }) => (
  <Card sx={{ height: '100%', border: '1px solid', borderColor: 'divider', borderRadius: 4, transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)', borderColor: 'secondary.main', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)' } }}>
    <CardContent sx={{ p: 3 }}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
        <Box sx={{ p: 2, bgcolor: alpha('#4F46E5', 0.05), borderRadius: 3, color: 'secondary.main' }}>
          {item.icon}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>{item.org}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>{item.role}</Typography>
        </Box>
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2 }}>{item.desc}</Typography>
      <Typography variant="caption" sx={{ fontWeight: 700, color: 'secondary.main', bgcolor: alpha('#4F46E5', 0.05), px: 1.5, py: 0.5, borderRadius: 1 }}>
        {item.date}
      </Typography>
    </CardContent>
  </Card>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      
      {/* TIMELINE SECTION */}
      <Box id="journey" sx={{ py: 12, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>My Journey.</Typography>
              <Typography variant="body1" color="text.secondary">Building consistency through Code, Competitions, and Curiosity.</Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Stack spacing={4}>
                {TIMELINE.map((t, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Box sx={{ p: 1, borderRadius: '50%', bgcolor: alpha(t.color, 0.1), color: t.color }}>{t.icon}</Box>
                      {i !== TIMELINE.length - 1 && <Box sx={{ width: 2, flexGrow: 1, bgcolor: '#E2E8F0', my: 1 }} />}
                    </Box>
                    <Box sx={{ pb: 2 }}>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>{t.year}</Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>{t.title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{t.desc}</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PROJECTS SECTION */}
      <Box id="projects" sx={{ py: 15, bgcolor: '#F8FAFC', borderTop: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Typography variant="overline" color="secondary" sx={{ fontWeight: 800, letterSpacing: 1.5, mb: 1, display: 'block' }}>PORTFOLIO</Typography>
          <Typography variant="h2" sx={{ mb: 8, maxWidth: '600px', fontSize: { xs: '2rem', md: '3rem' } }}>Selected works that delivered impact.</Typography>
          <Grid container spacing={6}>
            {PROJECTS.map((p, i) => (
              <Grid item xs={12} md={6} key={i}>
                <ProjectCard project={p} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* NEW COMMUNITY SECTION */}
      <Box id="community" sx={{ py: 12, bgcolor: '#FFFFFF', borderTop: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 6, fontWeight: 800, textAlign: 'center' }}>Community & Leadership.</Typography>
          <Grid container spacing={4}>
            {LEADERSHIP.map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <LeadershipCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SKILLS SECTION */}
      <Box id="skills" sx={{ py: 15, borderTop: '1px solid', borderColor: 'divider', bgcolor: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={5}>
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>The Arsenal.</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>My technical stack is built for speed, scale, and intelligence. I switch between low-level optimization and high-level abstraction effortlessly.</Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container spacing={6}>
                {SKILLS.map((cat, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 3, color: 'secondary.main', textTransform: 'uppercase', letterSpacing: 1 }}>{cat.category}</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1.5}>
                      {cat.skills.map(skill => (
                        <Paper key={skill} elevation={0} sx={{ px: 2.5, py: 1.5, border: '1px solid', borderColor: 'divider', fontWeight: 600, bgcolor: 'white', borderRadius: 2 }}>{skill}</Paper>
                      ))}
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CONTACT CTA */}
      <Box sx={{ py: 10, bgcolor: '#0F172A', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>Ready to Ship?</Typography>
          <Typography variant="body1" sx={{ mb: 5, opacity: 0.8, fontSize: '1.1rem' }}>I am currently looking for Summer 2026 Internships. Let's build something scalable together.</Typography>
          <Button variant="contained" color="secondary" size="large" href="https://linkedin.com/in/24archit" sx={{ px: 5, py: 1.5, fontSize: '1.1rem' }}>Get In Touch</Button>
        </Container>
      </Box>

      <Box sx={{ py: 6, textAlign: 'center', bgcolor: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>© 2026 Archit Mishra. Built with React, MUI & Framer Motion.</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;