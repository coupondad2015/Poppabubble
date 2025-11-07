"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./secondarySlider.scss";
import { scrollTrackToSlide, useTrackAlign } from "@/utils/scrollTrack";

const SecondaryMarquee = () => {
    const [current, setCurrent] = useState(0);
    const trackRef = useRef(null);
    const slideRefs = useRef([]);

    const secondarySliderImages = [
        "/images/GearAndMerch1.webp",
        "/images/GearAndMerch2.webp",
        "/images/GamesAndChallenges1.webp",
        "/images/GamesAndChallenges2.webp",
        "/images/FrostyBeverages1.webp",
        "/images/FrostyBeverages2.webp",
        "/images/ExclusiveProducts1.webp",
        "/images/ExclusiveProducts2.webp",
        "/images/ExclusiveProducts4.webp",
        "/images/36.webp",
        "/images/37.webp",
        "/images/38.webp",
        "/images/39.webp",
        "/images/40.webp",
        "/images/41.webp",
        "/images/42.webp",
        "/images/43.webp",
        "/images/44.webp",
        "/images/45.webp",
        "/images/46.webp",
        "/images/47.webp",
        "/images/48.webp",
        "/images/49.webp",
        "/images/50.webp",
        "/images/51.webp",
        "/images/52.webp",
        "/images/53.webp",
        "/images/54.webp",
        "/images/55.webp",
        "/images/56.webp",
        "/images/57.webp",
        "/images/58.webp",
        "/images/59.webp",
        "/images/60.webp",
        "/images/61.webp",
        "/images/62.webp",
        "/images/63.webp",
        "/images/64.webp",
        "/images/65.webp",
        "/images/66.webp",
        "/images/67.webp",
        "/images/68.webp",
        "/images/69.webp",
    ];

    // Auto-advance every 2s
    useEffect(() => {
        if (secondarySliderImages.length === 0) return;
        const id = setInterval(() => {
            setCurrent((prev) => (prev + 1) % secondarySliderImages.length);
        }, 3000);
        return () => clearInterval(id);
    }, [secondarySliderImages.length]);

    useTrackAlign(trackRef, slideRefs, current, { behavior: "smooth", reAlignOnResize: true });

    // Re-align on resize
    useEffect(() => {
        const onResize = () => {
            const track = trackRef.current;
            const el = slideRefs.current[current];
            if (track && el) track.scrollTo({ left: el.offsetLeft });
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [current]);

    return (
        <div className="secondary-slider-wrapper">
            <div ref={trackRef} className="secondary-slider-track hide-scrollbar">
                {secondarySliderImages.map((image, index) => (
                    <div
                        key={index}
                        className="secondary-slide"
                        ref={(el) => (slideRefs.current[index] = el)}
                    >
                        <Image
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            quality={80}
                            loading="lazy"
                            height={1080}
                            width={1920}
                            style={{
                                height: "120px",
                                width: "auto",
                                objectFit: "contain",
                                display: "block",
                            }}
                            onLoadingComplete={() => {
                                if (index === 0) {
                                    scrollTrackToSlide(trackRef, slideRefs, 0, "auto");
                                }
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecondaryMarquee;