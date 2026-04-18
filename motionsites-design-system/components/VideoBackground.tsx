import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoBackgroundProps {
  /** .m3u8 HLS stream URL (Mux) or .mp4 URL */
  src: string;
  /** Use true only for the stats section */
  desaturate?: boolean;
  /** Height of top/bottom gradient fade bands in px. Default: 200 */
  fadeHeight?: number;
  /** Optional poster image for MP4 hero */
  poster?: string;
}

/**
 * VideoBackground
 * Shared video background pattern used in StartSection, Stats, CtaFooter.
 * Handles both .m3u8 (HLS via hls.js) and .mp4 sources.
 * Always includes top + bottom black gradient fades.
 *
 * Usage:
 *   <div className="relative overflow-hidden min-h-[500px]">
 *     <VideoBackground src="https://stream.mux.com/YOUR_ID.m3u8" />
 *     <div className="relative z-20 ...">content</div>
 *   </div>
 */
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
        // Safari native HLS
        video.src = src;
      }
    } else {
      video.src = src;
    }
  }, [src]);

  return (
    <>
      {/* Video layer */}
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

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: fadeHeight,
          background: "linear-gradient(to bottom, #000000, transparent)",
        }}
      />

      {/* Bottom gradient fade */}
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
