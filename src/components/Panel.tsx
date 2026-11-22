import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PanelProps {
  title?: string;
  children: ReactNode;
}

export function Panel({ title, children }: PanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      style={{
        background: 'rgba(16, 18, 24, 0.72)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 14,
        padding: 16,
        color: '#e8ecf4',
      }}
    >
      {title && (
        <div style={{ fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', opacity: 0.6, marginBottom: 12 }}>
          {title}
        </div>
      )}
      {children}
    </motion.div>
  );
}
