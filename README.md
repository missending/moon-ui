# moon-ui

The React component kit I use for all my game UIs and menus. Dark, animated, zero CSS framework dependency.

```bash
npm i moon-ui
```

## What's in it

- `Panel`, glass card with optional header, draggable
- `Toggle`, animated switch
- `Slider`, labeled range
- `Dropdown`, searchable select
- `TabStrip`, horizontal / vertical tabs
- `Modal`, centered with blurred backdrop
- `Tooltip`, hover hints
- `Hotkey`, keybind capture input
- `ColorPicker`, RGB + alpha, drag wheel

Built on `framer-motion`. Fully typed. Tree-shakeable.

## Quick example

```tsx
import { Panel, Toggle, Slider } from 'moon-ui';

export default function AimbotTab() {
  const [on, setOn] = useState(false);
  const [fov, setFov] = useState(5);

  return (
    <Panel title="Aimbot">
      <Toggle label="Enable" value={on} onChange={setOn} />
      <Slider label="FOV" min={1} max={30} value={fov} onChange={setFov} />
    </Panel>
  );
}
```

## Live demo

https://tec72.cc

## Contact

- Discord: https://discord.gg/c7d2vBY52z

## License

MIT
