# Motionsites — Luxury Editorial Glass Design System

> **For AI assistants:** This file is the canonical reference for this design system. Read it fully before generating any code. Every decision here is intentional — do not introduce new patterns not described below.

---

## Aesthetic in one sentence

Dark, premium, editorial. Black backgrounds. White text. Depth from layered glass surfaces and video — never from color.

---

## Stack

```
React + Vite + TypeScript
Tailwind CSS v3
shadcn/ui (Radix primitives)
Framer Motion (import from "motion/react")
hls.js (for .m3u8 Mux video sources)
lucide-react (icons — only the 6 listed below)
```

---

## Fonts

Import in `index.html` `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

| Role | Family | Weight | Style | Tailwind class |
|---|---|---|---|---|
| Headings / display | Instrument Serif | 400 | **italic always** | `font-heading italic` |
| Body / UI | Barlow | 300 / 400 / 500 / 600 | normal | `font-body` |

**Rules:**
- Every heading, stat value, partner name, section title → `font-heading italic`
- Never bold on headings
- Never Barlow on display text

---

## Colors

All as CSS custom properties on `:root`. Page canvas is always `#000` — the blue `--background` is a token scaffold not shown directly.

```css
:root {
  --background: 213 45% 67%;
  --foreground: 0 0% 100%;
  --card: 213 45% 62%;
  --card-foreground: 0 0% 100%;
  --primary: 0 0% 100%;
  --primary-foreground: 213 45% 67%;
  --secondary: 213 45% 72%;
  --secondary-foreground: 0 0% 100%;
  --muted: 213 35% 60%;
  --muted-foreground: 0 0% 100% / 0.7;
  --accent: 213 45% 72%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84.2% 60.2%;
  --border: 0 0% 100% / 0.2;
  --input: 0 0% 100% / 0.2;
  --ring: 0 0% 100% / 0.3;
  --radius: 9999px;
  --glass-bg: rgba(255, 255, 255, 0.12);
  --glass-border: rgba(255, 255, 255, 0.25);
  --glass-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
  --glass-blur: 16px;
}
```

**Text opacity scale (Tailwind utilities):**

| Token | Class | Usage |
|---|---|---|
| 100% | `text-white` | Headlines |
| 80% | `text-white/80` | Testimonial body |
| 70% | `text-white/70` | Card body |
| 60% | `text-white/60` | Section subtext |
| 50% | `text-white/50` | Roles / minor labels |
| 40% | `text-white/40` | Footer |

---

## Border radius

| Token | Value | Usage |
|---|---|---|
| `rounded-full` | 9999px | Buttons, badges, nav pill, icon circles — everything interactive |
| `rounded-2xl` | 16px | Cards, GIF containers |
| `rounded-3xl` | 24px | Stats hero card only |

**Rule:** Nothing between `rounded-full` and `rounded-2xl`. No `rounded-lg`, no `rounded-md`.

---

## Glass effects

Two utility classes. Both live in `index.css` under `@layer components`. Never replicate inline — always use these class names.

### `.liquid-glass` (subtle — cards, badges, nav, section surfaces)

```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.45) 0%,
    rgba(255, 255, 255, 0.15) 20%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.15) 80%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

### `.liquid-glass-strong` (prominent — primary CTA buttons, icon circles)

```css
.liquid-glass-strong {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border: none;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05),
    inset 0 1px 1px rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
}

.liquid-glass-strong::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 0.2) 80%,
    rgba(255, 255, 255, 0.5) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

**How the border trick works:** The `::before` pseudo paints a gradient over a 1.4px padding area, then `mask-composite: exclude` reveals only that padding strip — creating a glowing gradient border that fades in the middle. The `border-radius: inherit` ensures it follows the parent shape exactly.

---

## Components

### Badge (section label)
```tsx
<div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-flex">
  Section Label
</div>
```

### Badge with inner solid chip ("New" pill)
```tsx
<div className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2">
  <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">New</span>
  <span className="text-white text-sm font-body pr-2">Introducing AI-powered web design.</span>
</div>
```

### Primary CTA button
```tsx
<button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body text-sm font-medium inline-flex items-center gap-2">
  Get Started <ArrowUpRight size={16} />
</button>
```

### Secondary CTA button (solid white)
```tsx
<button className="bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium">
  View Pricing
</button>
```

### Text-only CTA
```tsx
<button className="text-white font-body text-sm font-light inline-flex items-center gap-2">
  <Play size={14} fill="white" /> Watch the Film
</button>
```

### Card
```tsx
<div className="liquid-glass rounded-2xl p-6">
  {/* content */}
</div>
```

### Icon circle (feature grid)
```tsx
<div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
  <Zap size={16} className="text-white" />
</div>
```

### Section heading pattern
```tsx
<div className="flex flex-col items-center gap-4 text-center">
  <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body">
    Section Label
  </div>
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl">
    Headline goes here.
  </h2>
  <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
    Supporting body text.
  </p>
</div>
```

---

## Typography scale

| Level | Tailwind | Leading | Tracking | Notes |
|---|---|---|---|---|
| Hero headline | `text-6xl md:text-7xl lg:text-[5.5rem]` | `leading-[0.8]` | `tracking-[-4px]` | BlurText animated |
| Section heading | `text-4xl md:text-5xl lg:text-6xl` | `leading-[0.9]` | `tracking-tight` | |
| CTA/footer heading | `text-5xl md:text-6xl lg:text-7xl` | `leading-[0.85]` | `tracking-tight` | |
| Stat values | `text-4xl md:text-5xl lg:text-6xl` | `leading-1` | normal | |
| Partner names | `text-2xl md:text-3xl` | normal | normal | font-heading italic |
| Body | `text-sm md:text-base` | `leading-tight` | normal | font-light |
| Label / badge | `text-xs` | normal | normal | font-medium |
| Footer | `text-xs` | normal | normal | font-light, text-white/40 |

---

## Video background pattern

Every section with a video background follows this exact template:

```tsx
function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // For .m3u8 HLS sources:
    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls();
      hls.loadSource("https://stream.mux.com/YOUR_STREAM_ID.m3u8");
      hls.attachMedia(videoRef.current);
    }
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        // For MP4 only: src="https://..."
      />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to bottom, #000, transparent)" }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: 200, background: "linear-gradient(to top, #000, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-8 py-32">
        {/* section content */}
      </div>
    </section>
  );
}
```

**Stats video only** — add `style={{ filter: "saturate(0)" }}` to the `<video>` tag to desaturate to B&W.

**Hero video** — uses `<video src="...mp4">` directly (no HLS). Bottom fade is 300px not 200px. Video is `absolute` with `top: 20%`, not `inset-0`.

---

## Motion / Animation

### BlurText component (word-by-word heading animation)

```tsx
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number; // ms between words, default 200
}

export function BlurText({ text, className, delay = 200 }: BlurTextProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  const variants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 50 },
    mid:    { filter: "blur(5px)",  opacity: 0.5, y: -5 },
    visible:{ filter: "blur(0px)",  opacity: 1,   y: 0  },
  };

  return (
    <span ref={ref} className={className} style={{ display: "block" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{
            delay: (i * delay) / 1000,
            duration: 0.35 * 3,
            times: [0, 0.4, 1],
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
```

### Standard blur-in (subtext, CTAs)

```tsx
// Subtext — delay 0.8s
<motion.p
  initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
>

// CTA row — delay 1.1s
<motion.div
  initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 1.1 }}
>
```

**Motion rules:**
- No bounces, no springs, no parallax
- No hover color changes — only opacity shifts and glass border brightening
- Animate only: opacity, blur filter, y-translate

---

## Icons

From `lucide-react` only. No other icon library.

| Icon | Usage |
|---|---|
| `ArrowUpRight` | Primary CTA buttons |
| `Play` | "Watch the Film" text CTA (fill="white") |
| `Zap` | Feature: "Days, Not Months" |
| `Palette` | Feature: "Obsessively Crafted" |
| `BarChart3` | Feature: "Built to Convert" |
| `Shield` | Feature: "Secure by Default" |

---

## Page sections (in order)

| # | Component | Background | Notes |
|---|---|---|---|
| 1 | `<Navbar />` | Floating, no bg | Fixed top-4, glass pill nav |
| 2 | `<Hero />` | CloudFront MP4 video | 1000px height, 300px bottom fade |
| 3 | `<StartSection />` | Mux HLS video | "How It Works" |
| 4 | `<FeaturesChess />` | None (black) | Alternating text/GIF rows |
| 5 | `<FeaturesGrid />` | None (black) | 4-card "Why Us" grid |
| 6 | `<Stats />` | Mux HLS video (desaturated) | 4-stat card, rounded-3xl |
| 7 | `<Testimonials />` | None (black) | 3-card grid |
| 8 | `<CtaFooter />` | Mux HLS video | CTA + footer bar |

---

## Media assets

| Asset | URL / path |
|---|---|
| Hero video | `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4` |
| Hero poster | `/images/hero_bg.jpeg` (public folder) |
| StartSection video | `https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8` |
| Stats video | `https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8` |
| CtaFooter video | `https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8` |
| Feature GIF 1 | `src/assets/feature-1.gif` (FeaturesChess row 1, right) |
| Feature GIF 2 | `src/assets/feature-2.gif` (FeaturesChess row 2, left) |
| Logo icon | `src/assets/logo-icon.png` (h-12 w-12) |

---

## DO / DON'T

| DO | DON'T |
|---|---|
| Use `font-heading italic` on every display string | Use bold on headings |
| Use `rounded-full` for all interactive elements | Use `rounded-lg` or `rounded-md` |
| Use `.liquid-glass` / `.liquid-glass-strong` class names | Replicate glass styles inline |
| Pair every video with dual black gradient fades | Forget the top/bottom fade bands |
| Keep text strictly monochrome (black + white + opacity) | Introduce color accents |
| Import motion from `"motion/react"` | Import from `"framer-motion"` |
| Use only the 6 listed lucide icons | Add other icon libraries |
| Desaturate only the stats video | Apply `saturate(0)` elsewhere |
| Use `hls.js` for `.m3u8` sources | Use native `<video src>` for HLS |
