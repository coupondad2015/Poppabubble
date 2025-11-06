"use client";

import React, { useEffect, useRef, useState } from "react";
import "./primaryMarquee.scss";
import Image from "next/image";

const PrimaryMarquee = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);
  const slideTrackRef = useRef(null);

  const primarySliderImages = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
    "/images/8.webp",
    "/images/9.webp",
    "/images/10.webp",
    "/images/11.webp",
    "/images/12.webp",
    "/images/13.webp",
    "/images/14.webp",
    "/images/15.webp",
    "/images/16.webp",
    "/images/17.webp",
    "/images/18.webp",
    "/images/19.webp",
    "/images/20.webp",
    "/images/21.webp",
    "/images/22.webp",
    "/images/23.webp",
    "/images/24.webp",
    "/images/25.webp",
    "/images/26.webp",
    "/images/27.webp",
    "/images/28.webp",
    "/images/29.webp",
    "/images/30.webp",
    "/images/31.webp",
    "/images/32.webp",
    "/images/33.webp",
    "/images/34.webp",
    "/images/35.webp",
  ];

  function slideNext() {
    setCurrentSlide((prev) => (prev + 1) % primarySliderImages.length);
  }

  // Align track to the current slide (no width measuring needed)
  useEffect(() => {
    const track = slideTrackRef.current;
    const el = slideRefs.current[currentSlide];
    if (!track || !el) return;

    track.scrollTo({
      left: el.offsetLeft,
      behavior: "smooth",
    });
  }, [currentSlide]);

  return (
    <div id="primary-marquee">
      <div className="welcome-container">
        <span>Welcome to</span>
      </div>

      <div className="logo-wrapper">
        <div className="logo">
          <Image
            src="/images/poppabubble logo upscale.png"
            alt="Poppabubble Logo"
            fill
            quality={90}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="slider-wrapper">
        <div className="slider-controllers">
          <button
            className="slider-button slide-prev"
            onClick={() =>
              setCurrentSlide(
                (prev) =>
                  (prev - 1 + primarySliderImages.length) %
                  primarySliderImages.length
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button className="slider-button slide-next" onClick={slideNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div ref={slideTrackRef} className="slider-track">
          {primarySliderImages.map((image, index) => (
            <div
              key={index}
              className="slide"
              ref={(el) => (slideRefs.current[index] = el)}
            >
              <Image
                src={image}
                alt={`Poppabubble slide ${index + 1}`}
                height={1080}
                width={1920}
                quality={85}
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
                style={{
                  objectFit: "contain",
                  height: "180px",
                  width: "auto",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Optionally render it */}
      {/* <div style={{ color: 'white' }}>Current width: {currentWidth}px</div> */}

      <div className="yellow-border"></div>
    </div>
  );
};

export default PrimaryMarquee;
