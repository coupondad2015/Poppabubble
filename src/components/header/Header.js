import React from "react";
import Image from "next/image";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="menu-box menu-box-top">
        <div className="logo-container">
          <Image
            className="logo"
            src="/images/logo.png"
            alt="logo"
            // fill={true}
            width={96}
            height={96}
            quality={100}
            priority={true}
            style={{height: '2.2rem', width: 'auto', objectFit: 'contain'}}
          />

          {/* <img className="logo" src="/images/poppabubble logo upscale.png" alt="logo" /> */}
        </div>

        <div className="menu-item menu-item-right">


          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            id="ham-menu"
            className="menu-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <div className="menu-box menu-box-bottom">
        <div className="menu-item search-box">
          <input type="text" placeholder="Search" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="menu-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        <div className="cart-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            id="cart-btn"
            className="menu-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
