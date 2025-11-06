import React from 'react';
import Image from 'next/image';
import './footer.scss';

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
            priority={false}
            loading="lazy"
            sizes="100vw"
            style={{ objectFit: "cover", height: '200px', width: '100%' }}
          />
        </div>
      </footer>
  )
}

export default Footer