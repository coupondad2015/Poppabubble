'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './footer.scss';
import Link from 'next/link';

const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const footerImages = [
    "/images/Footer/01.jpg",
    "/images/Footer/02.png",
    "/images/Footer/03.png",
    "/images/Footer/04.png",
    "/images/Footer/05.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % footerImages.length);
        setIsTransitioning(false); // fade in next
      }, 500); // fade out duration (match CSS transition)
    }, 20000);
    return () => clearInterval(interval);
  }, [footerImages.length]);

  return (
    <footer>
      <div className="footer-slider-wrapper">
        <div className={`footer-image-container ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          <Image
            src={footerImages[currentIndex]}
            alt={`Poppabubble store ${currentIndex + 1}`}
            height={1080}
            width={1920}
            quality={85}
            priority={currentIndex === 0}
            loading={currentIndex === 0 ? undefined : "lazy"}
            style={{ objectFit: "cover", height: '200px', width: '100%' }}
          />
        </div>
      </div>

      <div className="agency-credit">
        <p>© Poppabubble 2025 – Powered by <Link href="https://brandtec.netlify.app" target='_blank'>BRANDTec™</Link></p>
      </div>
    </footer>
  )
}

export default Footer