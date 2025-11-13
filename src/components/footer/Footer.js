'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './footer.scss';
import Link from 'next/link';
import { gsap } from 'gsap';

const Footer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const footerImages = [
    "/images/Footer/02.webp",
    "/images/Footer/01.webp",
    "/images/Footer/03.webp",
    "/images/Footer/04.webp",
    "/images/Footer/05.webp",
  ];

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 1 });
      // 2s cycle: 0.5s fade out -> swap -> 0.5s fade in -> 1s hold
      gsap.timeline({ repeat: -1, repeatDelay: 20 })
        .to(el, { opacity: 0, duration: 0.5, ease: 'power1.out' })
        .add(() => setCurrentIndex(prev => (prev + 1) % footerImages.length))
        .to(el, { opacity: 1, duration: 0.5, ease: 'power1.in' });
    }, el);

    return () => ctx.revert();
  }, [footerImages.length]);

  return (
    <footer>
      <div className="footer-slider-wrapper">
        <div ref={containerRef} className="footer-image-container">
          <Image
            src={footerImages[currentIndex]}
            alt={`Poppabubble store ${currentIndex + 1}`}
            fill
            priority={currentIndex === 0}
            sizes="100vw"
          />
        </div>
      </div>

      <div className="agency-credit">
        <p>© Poppabubble 2025 – Powered by <Link href="https://brandtec.netlify.app" target='_blank'>BRANDTec™</Link></p>
      </div>
    </footer>
  );
};

export default Footer;