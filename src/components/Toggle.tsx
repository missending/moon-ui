import { motion } from 'framer-motion';

interface ToggleProps {
  label: string;
  value: boolean;
  onChange: (next: boolean) => void;
}

export function Toggle({ label, value, onChange }: ToggleProps) {
  return (
    <button
      onClick={() => onChange(!value)}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '10px 12px',
        background: 'transparent',
        border: 'none',
        color: '#e8ecf4',
        cursor: 'pointer',
      }}
    >
      <span>{label}</span>
      <motion.div
        animate={{ background: value ? '#6c8cff' : 'rgba(255,255,255,0.1)' }}
        style={{ width: 36, height: 20, borderRadius: 10, padding: 2 }}
      >
        <motion.div
          animate={{ x: value ? 16 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          style={{ width: 16, height: 16, borderRadius: 8, background: '#fff' }}
        />
      </motion.div>
    </button>
  );
}
