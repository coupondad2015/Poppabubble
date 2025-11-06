import React from "react";
import Image from "next/image";
import "./tertiaryMarquee.scss";

const TertiaryMarquee = () => {
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
  return (
    <>
      <div className="secondary-slider-wrapper">
        <div className="secondary-slider-track hide-scrollbar">
          {tertiarySliderImages.map((image, index) => (
            <div key={index} className="tertiary-marquee-slide-wrapper">
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
        <div className="secondary-slider-track hide-scrollbar">
          {tertiarySliderImages.reverse().map((image, index) => (
            <div key={index} className="tertiary-marquee-slide-wrapper">
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
    </>
  );
};

export default TertiaryMarquee;
