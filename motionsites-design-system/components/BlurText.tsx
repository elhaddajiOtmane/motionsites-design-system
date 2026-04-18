import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number; // ms between words, default 200
  direction?: "bottom" | "top";
}

/**
 * BlurText
 * Animates headline text word-by-word with a gaussian blur dissolve.
 * Triggered by IntersectionObserver — fires once when scrolled into view.
 *
 * Usage:
 *   <BlurText
 *     text="The Website Your Brand Deserves"
 *     className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] max-w-2xl tracking-[-4px]"
 *   />
 */
export function BlurText({
  text,
  className,
  delay = 200,
  direction = "bottom",
}: BlurTextProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  const yFrom = direction === "bottom" ? 50 : -50;

  return (
    <span ref={ref} className={className} style={{ display: "block" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: yFrom }}
          animate={
            inView
              ? { filter: "blur(0px)", opacity: 1, y: 0 }
              : { filter: "blur(10px)", opacity: 0, y: yFrom }
          }
          transition={{
            delay: (i * delay) / 1000,
            duration: 1.05, // 3 × 0.35s steps
            ease: "easeOut",
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
