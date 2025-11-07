import { useEffect } from "react";

export function scrollTrackToSlide(trackRef, slideRefs, index, behavior = "smooth") {
  const track = trackRef?.current;
  const el = slideRefs?.current?.[index];
  if (!track || !el) return;
  track.scrollTo({ left: el.offsetLeft, behavior });
}

export function useTrackAlign(trackRef, slideRefs, currentIndex, options = {}) {
  const { behavior = "smooth", reAlignOnResize = true } = options;

  // Align when index changes
  useEffect(() => {
    scrollTrackToSlide(trackRef, slideRefs, currentIndex, behavior);
  }, [trackRef, slideRefs, currentIndex, behavior]);

  // Re-align on resize (instant)
  useEffect(() => {
    if (!reAlignOnResize) return;
    const onResize = () => scrollTrackToSlide(trackRef, slideRefs, currentIndex, "auto");
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [trackRef, slideRefs, currentIndex, reAlignOnResize]);
}