import React from 'react';
import Image from 'next/image';
import './footer.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
        <div className="footer-image-wrapper">
          <Image
            src="/images/16.webp"
            alt="Poppabubble store"
            height={1080}
            width={1920}
            quality={85}
            loading="lazy"
            style={{ objectFit: "cover", height: '200px', width: '100%' }}
          />
        </div>

        <div className="agency-credit">
          <p>© Poppabubble 2025 – Powered by <Link href="https://brandtec.netlify.app" target='_blank'>BRANDTec™</Link></p>
        </div>
      </footer>
  )
}

export default Footer