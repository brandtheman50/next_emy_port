// components/Navbar.js
"use client";
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import './Navbar.css';


const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const activeMenu = () => {

  }
  return (
    <nav>
      <a href="/" className="logo-cont">
        <div className="logo-svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
            <g clipPath="url(#clip0_1_1361)">
              <path
                d="M43.2601 40.8767H50.2061C46.9107 47.6115 39.9909 52.2576 32.0026 52.2576C20.834 52.2576 11.7473 43.1704 11.7473 32.001C11.7473 20.8317 20.8326 11.7432 32.0013 11.7432C39.9896 11.7432 46.9094 16.388 50.2048 23.1241H43.2588C40.6335 19.7959 36.5688 17.6616 32.0013 17.6616C24.0797 17.6616 17.6627 24.0829 17.6627 32.001C17.6627 39.9192 24.0797 46.3405 32.0013 46.3405C36.5688 46.3405 40.6335 44.2062 43.2588 40.878L43.2601 40.8767Z"
                fill="#038C8C" />
              <path
                d="M32.4542 29.0408H57.9158C57.6833 26.9848 57.2131 25.002 56.5326 23.1237C52.7709 12.7302 42.5936 5.40898 30.785 5.94582C17.1804 6.56366 6.24027 17.763 5.92419 31.3789C5.58199 46.0684 17.3893 58.0828 32.001 58.0828C43.2885 58.0828 52.9002 50.9118 56.5326 40.8775H62.7458C58.8496 54.3536 46.3135 64.1998 31.5556 63.9986C14.815 63.7674 0.930882 50.4507 0.0453301 33.7313C-0.930344 15.3021 13.7831 0 32.001 0C46.5655 0 58.8875 9.78214 62.7458 23.1237C63.3009 25.0281 63.6784 27.007 63.8625 29.0408C63.9553 30.0178 63.9997 31.0014 63.9997 31.9993C63.9997 32.9972 63.9553 33.9821 63.8625 34.9578H32.4542C30.8202 34.9578 29.4958 33.6334 29.4958 31.9993C29.4958 30.3652 30.8202 29.0408 32.4542 29.0408Z"
                fill="#7D4DE3" />
            </g>
            <defs>
              <clipPath id="clip0_1_1361">
                <rect width="64" height="64" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="logo-name">
          <div className="name">
            Emersyn<br />Caulder
          </div>
        </div>
      </a>
      <div className="nav-menu-cont">
        <div className='menu-icon' onClick={() => activeMenu(true)}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="4" width="36" height="2" fill="#038C8C" />
            <rect y="11" width="36" height="2" fill="#038C8C" />
            <rect y="18" width="36" height="2" fill="#038C8C" />
          </svg></div>

        <ul className="nav-menu">
          <li className="nav-item"><Link href="/">Home</Link></li>
          <li className="nav-item"><Link href="/portfolio">Portfolio</Link></li>
          <li className="nav-item"><Link href="/resume">Resume</Link></li>
          <li className="nav-item"><Link href="/contact">Contact</Link></li>
          <li className="nav-item"><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none">
            <path
              d="M19.52 0H4.48C2 0 0 2 0 4.48V19.52C0 22 2 24 4.48 24H19.52C22 24 24 22 24 19.52V4.48C24 2 22 0 19.52 0ZM4.24 6.48H19.68C19.76 6.48 19.92 6.48 20 6.56L12.24 13.76C12.24 13.76 12.08 13.84 11.92 13.84C11.76 13.84 11.68 13.84 11.6 13.76L10.4 12.64L3.92 6.64C4 6.64 4.08 6.56 4.24 6.56V6.48ZM3.6 16.88V7.12L9.76 12.8L3.68 17.2C3.68 17.12 3.68 17.04 3.68 16.88H3.6ZM19.76 17.52H4.24L10.24 13.2L11.36 14.24C11.52 14.4 11.76 14.48 12 14.48C12.24 14.48 12.48 14.4 12.64 14.24L13.76 13.2L19.76 17.52ZM20.4 16.88C20.4 16.96 20.4 17.12 20.4 17.2L14.32 12.8L20.48 7.12V16.88H20.4Z"
              fill="#7D4DE3" />
          </svg></a></li>
          <li className="nav-item"><a href="https://www.linkedin.com/in/emi-caulder/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19.52 0H4.48C2 0 0 2 0 4.48V19.52C0 22 2 24 4.48 24H19.52C22 24 24 22 24 19.52V4.48C24 2 22 0 19.52 0ZM8.64 18.08H5.92V9.36H8.64V18.08ZM7.28 8.64C6.48 8.64 5.92 8 5.92 7.36C5.92 6.72 6.48 5.92 7.28 5.92C8.08 5.92 8.64 6.56 8.64 7.28C8.64 8 8.16 8.64 7.28 8.64ZM18.08 18.08H15.36V13.44C15.36 12.4 14.96 11.52 14 11.52C13.04 11.52 12.96 12.16 12.72 12.56C12.72 12.8 12.72 12.96 12.72 13.2V18H10V12.24C10 11.2 10 10.32 10 9.6H12.4L12.56 10.72C12.88 10.16 13.68 9.36 15.12 9.36C16.56 9.36 18.08 10.48 18.08 12.96V17.92V18.08Z"
                fill="#7D4DE3" />
            </svg>
          </a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
