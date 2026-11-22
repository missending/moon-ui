interface SliderProps {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (next: number) => void;
}

export function Slider({ label, min, max, value, onChange }: SliderProps) {
  return (
    <div style={{ padding: '10px 12px', color: '#e8ecf4' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span>{label}</span>
        <span style={{ opacity: 0.6, fontVariantNumeric: 'tabular-nums' }}>{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: '100%', accentColor: '#6c8cff' }}
      />
    </div>
  );
}
