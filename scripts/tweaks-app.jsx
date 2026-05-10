// Tweaks app — three expressive controls for the OpenClaw deck.
// Wired by tweaks-panel.jsx (host protocol + control library).

const OPENCLAW_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accent": "gold",
  "vibe": "editorial"
}/*EDITMODE-END*/;

function OpenclawTweaks() {
  const [t, setTweak] = useTweaks(OPENCLAW_TWEAK_DEFAULTS);

  // Apply to <body> as data-attrs so CSS handles the rest.
  React.useEffect(() => {
    const b = document.body;
    b.dataset.theme = t.theme;
    b.dataset.accent = t.accent;
    b.dataset.vibe = t.vibe;
    // Sync the legacy theme button + localStorage.
    if (typeof window.__setOpenclawTheme === 'function') {
      window.__setOpenclawTheme(t.theme);
    }
  }, [t.theme, t.accent, t.vibe]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Theme" />
      <TweakRadio
        label="Surface"
        value={t.theme}
        options={['light', 'dark']}
        onChange={(v) => setTweak('theme', v)}
      />

      <TweakSection label="Accent" />
      <TweakRadio
        label="Color"
        value={t.accent}
        options={['gold', 'electric', 'coral', 'mint']}
        onChange={(v) => setTweak('accent', v)}
      />

      <TweakSection label="Vibe" />
      <TweakRadio
        label="Voice"
        value={t.vibe}
        options={['editorial', 'technical', 'playful']}
        onChange={(v) => setTweak('vibe', v)}
      />
    </TweaksPanel>
  );
}

// Mount once React + tweaks-panel are loaded.
(function mount(){
  if (!window.React || !window.ReactDOM || typeof useTweaks === 'undefined' || typeof TweaksPanel === 'undefined') {
    return setTimeout(mount, 30);
  }
  const node = document.getElementById('tweaks-root');
  if (!node) return;
  ReactDOM.createRoot(node).render(<OpenclawTweaks />);
})();
