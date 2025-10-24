"use client";

import React, { useEffect, useRef, useState } from "react";
import "./hero.scss";
import Image from "next/image";

const images = ["/images/store.jpg", "/images/store.jpg", "/images/store.jpg"];

const Hero = () => {
  const imagesData = [
    "/images/store.jpg",
    "/images/store.jpg",
    "/images/store.jpg",
  ];

  return (
    <div id="hero">
      <div className="welcome-container">
        <span>Welcome to</span>
      </div>

      <div className="logo-wrapper">
        <div className="logo">
          <Image
            src="/images/poppabubble logo upscale.png"
            alt="Poppabubble Logo"
            fill
            quality={100}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="slider-wrapper">
        <div className="slider-track">
          {imagesData.map((image, index) => (
            <div key={index} className="slide">
              <Image
                src={image}
                alt="Slide"
                fill
                quality={100}
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="yellow-border"></div>

      <div className="secondary-slider-wrapper">
        <div className="secondary-slider-track">
          {imagesData.map((image, index) => (
            <div key={index} className="secondary-slide">
              <Image src={image} alt="Slide" fill quality={100} priority />
            </div>
          ))}
        </div>
      </div>

      <div className="secondary-slider-wrapper">
        <div className="secondary-slider-track">
          {imagesData.map((image, index) => (
            <div key={index} className="tertiary-marquee-slide-wrapper">
              <div className="tertiary-marquee-slide">
                <Image src={image} alt="Slide" fill quality={100} priority />
              </div>
              <span style={{display: index===imagesData.length-1?'none':'inline'}}>+</span>
            </div>
          ))}
        </div>
      </div>

      <div className="secondary-slider-wrapper">
        <div className="secondary-slider-track">
          {imagesData.map((image, index) => (
            <div key={index} className="tertiary-marquee2-slide-wrapper">
              <div className="tertiary-marquee2-slide">
                <Image src={image} alt="Slide" fill quality={100} priority />
              </div>
              <span style={{display: index===imagesData.length-1?'none':'inline'}}>+</span>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="footer-image-wrapper">
          <Image
            src="/images/store.jpg"
            alt="Poppabubble Logo"
            fill
            quality={100}
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </footer>
    </div>
  );
};

export default Hero;
