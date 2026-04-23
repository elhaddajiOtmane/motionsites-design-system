import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoBackgroundProps {
  src: string;
  desaturate?: boolean;
  fadeHeight?: number;
  poster?: string;
}

export function VideoBackground({
  src,
  desaturate = false,
  fadeHeight = 200,
  poster,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isHls = src.includes(".m3u8");

    if (isHls) {
      if (Hls.isSupported()) {
        const hls = new Hls({ autoStartLoad: true });
        hls.loadSource(src);
        hls.attachMedia(video);
        return () => hls.destroy();
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      }
    } else {
      video.src = src;
    }
  }, [src]);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={desaturate ? { filter: "saturate(0)" } : undefined}
      />
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: fadeHeight,
          background: "linear-gradient(to bottom, #000000, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: fadeHeight,
          background: "linear-gradient(to top, #000000, transparent)",
        }}
      />
    </>
  );
}
