'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './footer.scss';
import Link from 'next/link';
import { scrollTrackToSlide, useTrackAlign } from '@/utils/scrollTrack';

const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const slideRefs = useRef([]);

  const footerImages = [
    "/images/Footer/01.jpg",
    "/images/Footer/02.png",
    "/images/Footer/03.png",
    "/images/Footer/04.png",
    "/images/Footer/05.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % footerImages.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [footerImages.length]);
  
  useTrackAlign(trackRef, slideRefs, currentIndex, {behavior: "smooth", reAlignOnResize: true, padding: -4});

  useEffect(() => {
    if (trackRef.current && slideRefs.current[currentIndex]) {
      const slide = slideRefs.current[currentIndex];
      trackRef.current.scrollTo({
        left: slide.offsetLeft,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);


  // Re-align on resize
  useEffect(() => {
    const onResize = () => {
      const track = trackRef.current;
      const el = slideRefs.current[currentIndex];
      if (track && el) track.scrollTo({ left: el.offsetLeft });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [currentIndex]);

  return (
    <footer>
      <div className="secondary-slider-wrapper">
        <div
          ref={trackRef}
          style={{scrollBehavior: "auto"}}
          className='secondary-slider-track hide-scrollbar'>
          {footerImages.map((image, index) => (
            <div
              ref={(el) => (slideRefs.current[index] = el)}
              className='footer-marquee-slide' key={index}>
              <Image
                src={image}
                alt={`Poppabubble store ${index + 1}`}
                height={1080}
                width={1920}
                quality={85}
                loading="lazy"
                style={{ objectFit: "cover", height: '200px', width: '100%' }}
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

      <div className="agency-credit">
        <p>© Poppabubble 2025 – Powered by <Link href="https://brandtec.netlify.app" target='_blank'>BRANDTec™</Link></p>
      </div>
    </footer>
  )
}

export default Footer