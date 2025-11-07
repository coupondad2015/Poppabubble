'use client';
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./tertiaryMarquee.scss";
import { scrollTrackToSlide, useTrackAlign } from "@/utils/scrollTrack";

const TertiaryMarquee = () => {
  const [currentImageIndexM1, setCurrentImageIndexM1] = useState(0);
  const trackRefM1 = useRef(null);
  const slideRefsM1 = useRef([]);
  const [currentImageIndexM2, setCurrentImageIndexM2] = useState(0);
  const trackRefM2 = useRef(null);
  const slideRefsM2 = useRef([]);

  const tertiarySliderImages = [
    {
      src: "/images/Tertiary Marquee/Exclusive Products.png",
      alt: "Exclusive Products",
      title: "Exclusive Products",
      content: "Exotique, Unique, Different, Fun!",
    },
    {
      src: "/images/Tertiary Marquee/Games and Challenges.png",
      alt: "Games and Challenges",
      title: "Games and Challenges",
      content: "All huge selection of Games, Toys, Challenges and Unexpected fun!",
    },
    {
      src: "/images/Tertiary Marquee/Hot Famous Eats.png",
      alt: "Hot Famous Eats",
      title: "Hot Famous Eats",
      content: "From Nachos to Hot Dogs and so much more! we have it all!",
    },
    {
      src: "/images/Tertiary Marquee/Frosty Beverages.png",
      alt: "Frosty Beverages",
      title: "Frosty Beverages",
      content: "Come and experience all the unique flavours under the candy sun!",
    },
    {
      src: "/images/Tertiary Marquee/Gear and Merchandise.png",
      alt: "Gear and Merchandise",
      title: "Gear and Merchandise",
      content: "The newest thing for the latest bling",
    },
  ];

  const tertiarySliderImages2 = [
    {
      src: "/images/Tertiary Marquee/Gear and Merchandise.png",
      alt: "Gear and Merchandise",
      title: "Gear and Merchandise",
      content: "The newest thing for the latest bling",
    },
    {
      src: "/images/Tertiary Marquee/Frosty Beverages.png",
      alt: "Frosty Beverages",
      title: "Frosty Beverages",
      content: "Come and experience all the unique flavours under the candy sun!",
    },
    {
      src: "/images/Tertiary Marquee/Hot Famous Eats.png",
      alt: "Hot Famous Eats",
      title: "Hot Famous Eats",
      content: "From Nachos to Hot Dogs and so much more! we have it all!",
    },
    {
      src: "/images/Tertiary Marquee/Games and Challenges.png",
      alt: "Games and Challenges",
      title: "Games and Challenges",
      content: "All huge selection of Games, Toys, Challenges and Unexpected fun!",
    },
    {
        src: "/images/Tertiary Marquee/Exclusive Products.png",
        alt: "Exclusive Products",
        title: "Exclusive Products",
        content: "Exotique, Unique, Different, Fun!",
      },
  ];

  useEffect(() => {
    if (tertiarySliderImages.length === 0) return;
    const intervalId = setInterval(() => {
      setCurrentImageIndexM1((prevIndex) => (prevIndex + 1) % tertiarySliderImages.length);
    }, 4000);
    
    const intervalId2 = setInterval(() => {
      setCurrentImageIndexM2((prevIndex) => (prevIndex + 1) % tertiarySliderImages2.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }, [tertiarySliderImages.length, tertiarySliderImages2.length]);

  useTrackAlign(trackRefM1, slideRefsM1, currentImageIndexM1, { behavior: "smooth", reAlignOnResize: true });
  useTrackAlign(trackRefM2, slideRefsM2, currentImageIndexM2, { behavior: "smooth", reAlignOnResize: true });

  // Re-align on resize
  useEffect(() => {
    const onResize = () => {
      const track = trackRefM1.current;
      const el = slideRefsM1.current[currentImageIndexM1];
      const track2 = trackRefM2.current;
      const el2 = slideRefsM2.current[currentImageIndexM2];
      if (track && el) track.scrollTo({ left: el.offsetLeft });
      if (track2 && el2) track2.scrollTo({ left: el2.offsetLeft });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [currentImageIndexM1, currentImageIndexM2]);

  return (
    <>
      <div className="secondary-slider-wrapper">
        <div ref={trackRefM1} className="secondary-slider-track hide-scrollbar">
          {tertiarySliderImages.map((image, index) => (
            <div
              ref={(el) => (slideRefsM1.current[index] = el)}
              key={index} className="tertiary-marquee-slide-wrapper">
              <div
                className="tertiary-marquee-slide">
                <Image
                  src={image.src}
                  alt={image.alt}
                  height={1080}
                  width={1920}
                  quality={50}
                  priority={false}
                  loading="lazy"
                  style={{
                    height: "70px",
                    width: "70px",
                    display: "block",
                    objectFit: "contain",
                  }}

                  onLoadingComplete={() => {
                    if (index === 0) {
                      scrollTrackToSlide(trackRefM1, slideRefsM1, 0, "auto");
                    }
                  }}
                />

                <div className="tertiary-marquee-content">
                  <h3>{image.title}</h3>
                  <p>{image.content}</p>
                </div>
              </div>
              <span
                style={{
                  display:
                    index === tertiarySliderImages.length - 1
                      ? "none"
                      : "inline-block",
                }}
              >
                +
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="secondary-slider-wrapper">
        <div
        ref={trackRefM2}
        className="secondary-slider-track hide-scrollbar">
          {tertiarySliderImages2.map((image, index) => (
            <div
            ref={(el)=>(slideRefsM2.current[index] = el)}
            key={index} className="tertiary-marquee-slide-wrapper">
              <div className="tertiary-marquee-slide">
                <Image
                  src={image.src}
                  alt={image.alt}
                  height={1080}
                  width={1920}
                  quality={50}
                  priority={false}
                  loading="lazy"
                  style={{
                    height: "70px",
                    width: "70px",
                    display: "block",
                    objectFit: "contain",
                  }}
                  onLoadingComplete={() => {
                    if (index === 0) {
                      scrollTrackToSlide(trackRefM2, slideRefsM2, 0, "auto");
                    }
                  }}
                />

                <div className="tertiary-marquee-content">
                  <h3>{image.title}</h3>
                  <p>{image.content}</p>
                </div>
              </div>
              <span
                style={{
                  display:
                    index === tertiarySliderImages2.length - 1
                      ? "none"
                      : "inline-block",
                }}
              >
                +
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TertiaryMarquee;
