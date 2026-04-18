# Motionsites — Luxury Editorial Glass Design System

> Dark · Premium · Cinematic · Glassmorphism

This repo is the **design system reference** for the Motionsites AI web agency landing page. It is optimised for AI-assisted development — the primary audience for this repo is an LLM building the full page.

---

## ⚡ Quick summary for AI

- **Stack:** React + Vite + TypeScript + Tailwind CSS v3 + shadcn/ui + Framer Motion (`motion/react`) + hls.js
- **Page canvas:** Always `#000` (true black)
- **Text:** Always white + opacity variants (`text-white`, `/80`, `/60`, `/50`, `/40`)
- **Headings:** `font-heading italic` (Instrument Serif) — ALWAYS italic, never bold
- **Body:** `font-body font-light` (Barlow 300)
- **Buttons/badges/nav:** `rounded-full` (pill) only
- **Cards:** `rounded-2xl` (16px); Stats card: `rounded-3xl` (24px)
- **Glass effect:** Use class names `.liquid-glass` (cards, badges) and `.liquid-glass-strong` (CTAs, icon circles) — defined in `index.css`
- **Video:** Every video section gets dual 200px black gradient fade bands (top + bottom)
- **Icons:** lucide-react only — `ArrowUpRight`, `Play`, `Zap`, `Palette`, `BarChart3`, `Shield`

---

## 📁 Files

```
motionsites-design-system/
├── DESIGN_SYSTEM.md          ← Full reference doc (read this first)
├── index.css                 ← CSS tokens + .liquid-glass utilities
├── tailwind.config.ts        ← Tailwind extensions (fonts, colors, radius)
├── package.json              ← Dependencies
├── tokens/
│   └── tokens.json           ← Design tokens (Tokens Studio / Style Dictionary format)
└── components/
    ├── BlurText.tsx          ← Word-by-word blur-in heading component
    └── VideoBackground.tsx   ← HLS + MP4 video bg with gradient fades
```

---

## 🔑 Key patterns

### Glass classes
```tsx
// Subtle — cards, badges, nav pill
<div className="liquid-glass rounded-2xl p-6">...</div>

// Strong — primary CTAs, icon circles
<button className="liquid-glass-strong rounded-full px-5 py-2.5">...</button>
```

### Primary CTA
```tsx
<button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body text-sm font-medium inline-flex items-center gap-2">
  Get Started <ArrowUpRight size={16} />
</button>
```

### Secondary CTA
```tsx
<button className="bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium">
  View Pricing
</button>
```

### Section heading block
```tsx
<div className="flex flex-col items-center gap-4 text-center">
  <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
    Badge Label
  </div>
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
    Headline goes here.
  </h2>
  <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
    Supporting body text.
  </p>
</div>
```

### Animated heading (BlurText)
```tsx
<BlurText
  text="The Website Your Brand Deserves"
  className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic leading-[0.8] tracking-[-4px] max-w-2xl"
/>
```

### Video background
```tsx
<section className="relative overflow-hidden min-h-[500px]">
  <VideoBackground src="https://stream.mux.com/YOUR_ID.m3u8" />
  <div className="relative z-20 py-32 px-8 text-center">
    {/* content */}
  </div>
</section>
```

---

## 🎨 Color tokens

All in HSL via CSS custom properties. Page is always `#000`.

| Token | Value |
|---|---|
| `--foreground` | `0 0% 100%` — white |
| `--primary` | `0 0% 100%` — solid CTA bg |
| `--glass-bg` | `rgba(255,255,255,0.12)` |
| `--glass-border` | `rgba(255,255,255,0.25)` |
| `--border` | `rgba(255,255,255,0.2)` |

See `tokens/tokens.json` for the full token set.

---

## ✋ Rules

| DO | DON'T |
|---|---|
| `font-heading italic` on all display text | Bold on headings |
| `rounded-full` on all interactive elements | `rounded-lg` or `rounded-md` |
| `.liquid-glass` / `.liquid-glass-strong` class names | Inline glass styles |
| Dual 200px black gradient bands on every video | Forget the video fades |
| Import motion from `"motion/react"` | Import from `"framer-motion"` |
| `hls.js` for `.m3u8` Mux sources | Native `<video src>` for HLS |
| `saturate(0)` on stats video only | Desaturate other videos |

---

## 🔗 Media

| Asset | URL |
|---|---|
| Hero video (MP4) | `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4` |
| Start section | `https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8` |
| Stats (desaturated) | `https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8` |
| CTA / Footer | `https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8` |
