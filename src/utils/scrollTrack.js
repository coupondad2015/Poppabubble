import { useEffect } from "react";

export function scrollTrackToSlide(trackRef, slideRefs, index, scrollDirection = "left", behavior = "auto", padding = 0) {
  console.log(scrollDirection);
  const track = trackRef?.current;
  const el = slideRefs?.current?.[index];
  if (!track || !el) return;

  if (scrollDirection === "left") {
    track.scrollTo({ left: el.offsetLeft + padding, behavior });
  } else if (scrollDirection === "right") {
    const targetLeft = el.offsetLeft - (track.clientWidth - el.offsetWidth) + padding;
    track.scrollTo({ left: Math.max(0, targetLeft), behavior });
  }
}

export function useTrackAlign(trackRef, slideRefs, currentIndex, options = {}) {
  if (Object.keys(options).length === 0) {
    options = { behavior: "auto", reAlignOnResize: true, scrollDirection: "left", padding: 0 };
  }

  const { behavior, reAlignOnResize, scrollDirection, padding} = options;
  console.log(padding);

  // Align when index changes
  useEffect(() => {
    scrollTrackToSlide(trackRef, slideRefs, currentIndex, scrollDirection, behavior, padding);
  }, [trackRef, slideRefs, currentIndex, scrollDirection, behavior, padding]);

  // Re-align on resize (instant)
  useEffect(() => {
    if (!reAlignOnResize) return;
    const onResize = () => scrollTrackToSlide(trackRef, slideRefs, currentIndex, scrollDirection, "auto", padding);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [trackRef, slideRefs, currentIndex, reAlignOnResize, scrollDirection, padding]);
}