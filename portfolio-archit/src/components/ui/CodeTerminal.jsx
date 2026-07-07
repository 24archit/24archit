import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';

export const CodeTerminal = () => (
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
            <Typography variant="caption" color="secondary.light">✔ 700+ DSA Problems Verified</Typography><br/>
            <Typography variant="caption" color="secondary.light">✔ AI Models Fine-tuned</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, color: '#10B981', mt: 1 }}><Typography variant="caption" sx={{ animation: 'blink 1s infinite' }}>➜ _</Typography></Box>
        </Stack>
      </Box>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </Paper>
  </motion.div>
);
