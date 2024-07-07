import { PageHeader } from "./components/PageHeader";
import './components/Section.css';

export default function Home() {
  return (
    <div>
      <PageHeader
        firstTitle={"UI/UX"}
        secondTitle={"DESIGNER"}
        introTitle={`Hello, I'm Emersyn`}
        introP={`I design engaging and user-friendly experiences for websites, mobile interfaces, and emerging technologies. 
        With a background in psychology and digital marketing, I approach every challenge from the user's perspective, 
        ensuring inclusive and enjoyable interactions.`}
        introImg={"./profile_pic_4.png"}
        introBtn={"Need a designer?"} />

      <section className="container navy-blue-gradient">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Portfolio</h2>
            <h5 className="section-subtitle">Explore my most recent projects in UI/UX Design, graphic design, and digital and print
              marketing.</h5>
          </div>
          <div className="photos-cont">
            <img src="media_home/forward.png" />
            <img src="media_home/website_redesigns.png" />
            <img src="media_home/AWWL_brandbook_1.png" />
          </div>
          <div className="center-div">
            <a className="purple-btn btn-center" href="/">Show me more</a>
          </div>
        </div>
      </section>

      <section className="container navy-blue">
        <div className="section-content">
          <div className="about-me-cont">
            <h2 className="about-me">About Me</h2>
            <h5 className="about-me-subtitle section-subtitle">With my unique background in design and research, I blend creativity
              with empirical inquiry to craft meaningful and impactful user experiences.</h5>
            <div className="background-exp">
              <div className="background-item">
                <div className="item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                    <g filter="url(#filter0_d_1_1404)">
                      <path d="M32.4 8H13.6C10.5 8 8 10.5 8 13.6V32.4C8 35.5 10.5 38 13.6 38H32.4C35.5 38 38 35.5 38 32.4V13.6C38 10.5 35.5 8 32.4 8ZM14.3 15.2C14.3 14.4 14.9 13.9 15.6 13.9H30.2C30.9 13.9 31.6 14.5 31.6 15.2V24.2C31.6 24.9 31 25.5 30.2 25.5H15.6C14.9 25.5 14.3 24.9 14.3 24.2V15.2ZM33.2 32.1H12.8C12 32.1 11.5 31.3 11.9 30.6L14.1 26.8C14.3 26.5 14.6 26.3 15 26.3H31.1C31.5 26.3 31.8 26.5 32 26.8L34.2 30.6C34.6 31.3 34.2 32.1 33.3 32.1H33.2Z" fill="#038C8C" />
                      <path d="M30.5 15.8999V23.5999C30.5 24.1999 30 24.5999 29.5 24.5999H16.4C15.8 24.5999 15.4 24.0999 15.4 23.5999V15.8999C15.4 15.2999 15.9 14.8999 16.4 14.8999H29.5C30.1 14.8999 30.5 15.3999 30.5 15.8999Z" fill="#038C8C" />
                    </g>
                    <defs>
                      <filter id="filter0_d_1_1404" x="0" y="0" width="46px" height="46px" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.490196 0 0 0 0 0.301961 0 0 0 0 0.890196 0 0 0 0.3 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1404" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1404" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="item">
                  <h4 className="item-title">UX/UI Design</h4>
                  <h5 className="item-desc">
                    Crafting intuitive interfaces for optimal user
                    experiences with a focus on accessibility compliance.
                  </h5>
                </div>
              </div>
              <div className="background-item">
                <div className="item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                    <g filter="url(#filter0_d_1_1420)">
                      <path d="M32.4 8H13.6C10.5 8 8 10.5 8 13.6V32.4C8 35.5 10.5 38 13.6 38H32.4C35.5 38 38 35.5 38 32.4V13.6C38 10.5 35.5 8 32.4 8ZM32.7 32.6C32 33.3 31 33.3 30.3 32.6L24.4 26.7C21.5 28.5 17.6 28.2 15.1 25.7C12.1 22.8 12 18 14.9 15C17.9 12 22.7 12 25.7 15C28.7 18 28.6 21.5 26.8 24.4L32.7 30.3C33.4 30.9 33.4 31.9 32.7 32.6Z" fill="#038C8C" />
                      <path d="M24.1 24.0998C22.1 26.0998 18.8 26.0998 16.8 24.0998C14.8 22.0998 14.8 18.7998 16.8 16.7998C18.8 14.7998 22.1 14.7998 24.1 16.7998C26.1 18.7998 26.1 22.0998 24.1 24.0998Z" fill="#038C8C" />
                    </g>
                    <defs>
                      <filter id="filter0_d_1_1420" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.490196 0 0 0 0 0.301961 0 0 0 0 0.890196 0 0 0 0.3 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1420" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1420" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="item">
                  <h4 className="item-title">UX Research</h4>
                  <h5 className="item-desc">
                    Uncovering user insights to drive informed design decisions grounded in empirical inquiry.
                  </h5>
                </div>
              </div>
              <div className="background-item">
                <div className="item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                    <g filter="url(#filter0_d_1_1411)">
                      <path d="M32.4 8H13.6C10.5 8 8 10.5 8 13.6V32.4C8 35.5 10.5 38 13.6 38H32.4C35.5 38 38 35.5 38 32.4V13.6C38 10.5 35.5 8 32.4 8ZM33 26V26.3C33 28 31.9 29.5 30.5 30.2C30.5 32.5 28.7 34.3 26.3 34.3C23.9 34.3 23.7 33.6 22.9 32.6C22.1 33.5 21 34.1 19.7 34.1C17.4 34.1 15.6 32.3 15.5 30C14 29.4 13 27.9 13 26.1C12.2 25.2 11.7 24.2 11.7 23C11.7 21.8 12.1 20.9 12.9 20.1H13V19.7C13 18 14.1 16.5 15.6 15.9C15.6 13.6 17.5 11.7 19.7 11.7H20.1C21.2 11.7 22.1 12.5 22.8 13.3C23.6 12.3 24.7 11.7 26.1 11.7C28.4 11.7 30.2 13.6 30.2 15.9C31.7 16.5 32.7 18 32.7 19.7C32.7 21.4 32.7 19.8 32.7 19.9L32.9 20.1C33 20.2 33.1 20.3 33.2 20.4C33.7 20.9 34 21.2 34 23C34 24.8 33.5 25.2 32.7 26H33Z" fill="#038C8C" />
                      <path d="M22.1 15.4999C22.1 15.5999 22.1 15.7999 22.1 15.9999V30.1999C22.1 31.3999 21 32.5999 19.8 32.5999C18.6 32.5999 17.6 31.5999 17.5 30.4999C19 30.4999 19.3 30.0999 19.7 29.4999C19.7 29.4999 19.8 29.2999 19.9 29.1999C20.2 28.7999 20.1 28.2999 19.9 27.9999C19.7 27.8999 19.5 27.7999 19.3 27.7999C19.1 27.7999 18.8 27.7999 18.6 27.9999C18.3 28.3999 17.8 28.5999 17.1 28.5999C16.4 28.5999 15.5 28.0999 15.2 27.2999C15.5 27.2999 15.7 27.2999 16 27.2999C18 27.2999 19.7 25.8999 20.1 23.9999H20.5C21 23.9999 21.4 23.5999 21.4 23.0999C21.4 22.5999 21 22.1999 20.6 22.1999H20C19.4 22.1999 18.9 21.6999 18.9 21.0999C18.9 20.4999 18.5 20.1999 18.1 20.1999H17.9C17.4 20.1999 17.1 20.5999 17.1 21.0999C17.1 22.0999 17.6 22.8999 18.3 23.4999C18.1 24.4999 17.1 25.3999 16 25.3999C14.9 25.3999 15.2 25.2999 14.8 25.0999C14.6 24.9999 14.4 24.8999 14.3 24.6999C13.9 24.2999 13.6 23.6999 13.6 23.0999C13.6 22.4999 13.6 22.3999 13.6 22.1999C13.6 22.1999 13.8 22.2999 13.8 22.3999C13.9 22.3999 14 22.5999 14.1 22.6999C14.2 22.8999 14.5 22.9999 14.8 22.9999C15 22.9999 15.3 22.8999 15.4 22.6999C15.6 22.5999 15.7 22.2999 15.7 22.0999C15.7 21.7999 15.6 21.5999 15.4 21.4999C14.9 20.9999 14.7 20.4999 14.7 19.8999C14.7 18.6999 15.8 17.5999 17 17.5999C18.2 17.5999 18.2 17.7999 18.5 18.0999C18.5 18.0999 18.6 18.1999 18.6 18.2999C18.7 18.4999 19 18.5999 19.2 18.5999C19.4 18.5999 19.7 18.4999 19.8 18.2999C20 18.1999 20.1 17.8999 20.1 17.6999C20.1 17.3999 20 17.1999 19.8 17.0999C19.2 16.4999 18.4 16.0999 17.5 15.9999H17.3C17.5 14.7999 18.5 13.8999 19.6 13.8999C20.7 13.8999 21.6 14.6999 21.9 15.6999L22.1 15.4999Z" fill="#038C8C" />
                      <path d="M32.2 21.8998C32 22.0998 31.9 22.3998 31.7 22.5998C31.6 22.7998 31.4 22.8998 31.2 22.8998C31 22.8998 30.7 22.8998 30.5 22.6998C30.3 22.5998 30.2 22.2998 30.2 21.9998C30.2 21.6998 30.3 21.4998 30.5 21.2998C30.5 21.2998 30.6 21.2998 30.7 21.1998C31 20.9998 31.2 20.7998 31.2 19.6998C31.2 18.5998 30.1 17.2998 28.8 17.2998C27.5 17.2998 27.7 17.4998 27.2 17.9998C27 18.2998 26.5 18.3998 26 17.9998C25.8 17.8998 25.7 17.5998 25.7 17.2998C25.7 16.9998 25.8 16.7998 26 16.5998C26.6 15.9998 27.4 15.5998 28.3 15.4998H28.6C28.5 14.1998 27.4 13.2998 26.3 13.2998C25.2 13.2998 24.2 14.1998 24 15.2998C24 15.3998 24 15.5998 24 15.6998V17.7998C24 18.3998 24.7 18.7998 25.2 18.7998H25.8C26.3 18.7998 26.6 19.2998 26.6 19.7998C26.6 20.2998 26.2 20.5998 25.6 20.5998H25C24.6 20.5998 24.2 20.5998 23.8 20.2998V24.6998C24.1 24.5998 24.5 24.4998 24.9 24.4998H25.3H25.6C26.1 24.4998 26.5 24.9998 26.5 25.4998C26.5 25.9998 26.1 26.2998 25.5 26.2998H24.9C24.3 26.2998 23.8 26.7998 23.8 27.2998V29.7998C23.8 30.9998 25 32.1998 26.3 32.1998C27.6 32.1998 28.5 31.2998 28.6 30.1998C27.5 30.0998 26.7 29.4998 26.2 28.9998C26 28.8998 25.9 28.6998 25.9 28.3998C25.9 28.1998 25.9 27.9998 26.1 27.7998C26.2 27.5998 26.5 27.4998 26.8 27.4998C27.1 27.4998 27.3 27.5998 27.4 27.7998C27.5 27.7998 27.6 27.9998 27.7 27.9998C27.9 28.1998 28.1 28.3998 28.9 28.3998C29.7 28.3998 30.6 27.7998 30.9 26.8998C30.6 26.8998 30.3 26.9998 30 26.9998C29.5 26.9998 29.2 26.4998 29.2 25.9998C29.2 25.4998 29.6 25.0998 30.2 25.0998C30.8 25.0998 30.9 25.0998 31.3 24.7998C31.5 24.6998 31.7 24.5998 31.8 24.3998C32.3 23.9998 32.6 23.3998 32.6 22.6998C32.6 21.9998 32.5 21.8998 32.3 21.5998L32.2 21.8998ZM28.9 25.1998C27.4 25.1998 26 23.8998 26 22.3998C26 20.8998 26.3 21.3998 26.9 21.3998H27.1C27.6 21.3998 28 21.7998 28 22.3998C28 22.9998 28.5 23.3998 29 23.3998C29.5 23.3998 29.8 23.8998 29.8 24.3998C29.8 24.8998 29.4 25.1998 28.9 25.1998Z" fill="#038C8C" />
                    </g>
                    <defs>
                      <filter id="filter0_d_1_1411" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.490196 0 0 0 0 0.301961 0 0 0 0 0.890196 0 0 0 0.3 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1411" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1411" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="item">
                  <h4 className="item-title">B.S. in Psychology</h4>
                  <h5 className="item-desc">
                    Applying psychology to user-centered design, understanding human behavior to create engaging experiences.
                  </h5>
                </div>
              </div>
              <div className="background-item">
                <div className="item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                    <g filter="url(#filter0_d_1_1427)">
                      <path d="M32.4 8H13.6C10.5 8 8 10.5 8 13.6V32.4C8 35.5 10.5 38 13.6 38H32.4C35.5 38 38 35.5 38 32.4V13.6C38 10.5 35.5 8 32.4 8ZM34.1 24.7C33.2 26.6 31.3 28 29.2 28.2C28 28.4 26.6 28.2 25.4 28.4C25.2 28.4 25 28.6 24.9 28.6C24.2 29 24.1 29.9 24.5 30.6C26 32.2 25 34.6 22.8 34.6C15.7 34.8 9.7 27.2 11.7 20.3C13.6 10.2 28.2 8.1 33.3 16.8C34.9 19.1 35.2 22.1 34.1 24.7Z" fill="#038C8C" />
                      <path d="M31.2 20.3998C31.2 21.1998 30.5 21.8998 29.6 21.8998C28.7 21.8998 28.1 21.0998 28.1 20.2998C28.1 19.4998 28.8 18.7998 29.7 18.7998C30.6 18.7998 31.2 19.5998 31.2 20.3998Z" fill="#038C8C" />
                      <path d="M27.2 16.3998C27.2 17.1998 26.5 17.8998 25.7 17.9998C24.8 17.9998 24.1 17.2998 24.1 16.3998C24.1 15.4998 24.8 14.8998 25.6 14.7998C26.5 14.7998 27.2 15.4998 27.2 16.3998Z" fill="#038C8C" />
                      <path d="M22 16.4999C22 17.2999 21.3 17.9999 20.4 17.9999C19.5 17.9999 18.9 17.1999 18.9 16.3999C18.9 15.5999 19.6 14.8999 20.5 14.8999C21.4 14.8999 22 15.6999 22 16.4999Z" fill="#038C8C" />
                      <path d="M18.1 20.2998C18.1 21.1998 17.4 21.8998 16.5 21.8998C15.6 21.8998 15 21.1998 14.9 20.3998C14.9 19.4998 15.6 18.7998 16.5 18.7998C17.4 18.7998 18 19.4998 18.1 20.2998Z" fill="#038C8C" />
                      <path d="M18.6 25.6C18.6 26.5 17.9 27.1 17.1 27.2C16.2 27.2 15.5 26.5 15.5 25.6C15.5 24.7 16.2 24.1 17 24C17.9 24 18.6 24.7 18.6 25.6Z" fill="#038C8C" />
                    </g>
                    <defs>
                      <filter id="filter0_d_1_1427" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.490196 0 0 0 0 0.301961 0 0 0 0 0.890196 0 0 0 0.3 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1427" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1427" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="item">
                  <h4 className="item-title">Graphic Design and Studio Art</h4>
                  <h5 className="item-desc">
                    Bringing creativity to design with visual storytelling and compelling aesthetics.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="software-logos">
            <div className="software-cont figma">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="72" viewBox="0 0 48 72" fill="none">
                <g clipPath="url(#clip0_1_1439)">
                  <path d="M24 36C24 32.8174 25.247 29.7652 27.4666 27.5147C29.6862 25.2643 32.6966 24 35.8356 24C38.9746 24 41.9851 25.2643 44.2047 27.5147C46.4243 29.7652 47.6712 32.8174 47.6712 36C47.6712 39.1826 46.4243 42.2348 44.2047 44.4853C41.9851 46.7357 38.9746 48 35.8356 48C32.6966 48 29.6862 46.7357 27.4666 44.4853C25.247 42.2348 24 39.1826 24 36Z" fill="#1ABCFE" />
                  <path d="M0.328766 60C0.328766 56.8174 1.57573 53.7652 3.79534 51.5147C6.01495 49.2643 9.02538 48 12.1644 48H24V60C24 63.1826 22.753 66.2348 20.5334 68.4853C18.3138 70.7357 15.3034 72 12.1644 72C9.02538 72 6.01495 70.7357 3.79534 68.4853C1.57573 66.2348 0.328766 63.1826 0.328766 60H0.328766Z" fill="#0ACF83" />
                  <path d="M24 0V24H35.8356C38.9746 24 41.9851 22.7357 44.2047 20.4853C46.4243 18.2348 47.6712 15.1826 47.6712 12C47.6712 8.8174 46.4243 5.76515 44.2047 3.51472C41.9851 1.26428 38.9746 0 35.8356 0L24 0Z" fill="#FF7262" />
                  <path d="M0.328766 12C0.328766 15.1826 1.57573 18.2348 3.79534 20.4853C6.01495 22.7357 9.02538 24 12.1644 24H24V0H12.1644C9.02538 0 6.01495 1.26428 3.79534 3.51472C1.57573 5.76515 0.328766 8.8174 0.328766 12H0.328766Z" fill="#F24E1E" />
                  <path d="M0.328766 36C0.328766 39.1826 1.57573 42.2348 3.79534 44.4853C6.01495 46.7357 9.02538 48 12.1644 48H24V24H12.1644C9.02538 24 6.01495 25.2643 3.79534 27.5147C1.57573 29.7652 0.328766 32.8174 0.328766 36H0.328766Z" fill="#A259FF" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1439">
                    <rect width="47.3425" height="72" fill="white" transform="translate(0.328766)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="software-cont adobe-illustrator">
              <svg xmlns="http://www.w3.org/2000/svg" width="58" height="48" viewBox="0 0 58 48" fill="none">
                <path d="M29.022 37.2582H13.2365L10.0115 47.1965C9.92659 47.5771 9.58712 47.8308 9.20521 47.7885H1.22756C0.760783 47.7885 0.633481 47.5348 0.760784 47.0273L14.4246 7.82379C14.5519 7.40088 14.6792 6.93568 14.849 6.42819C15.0187 5.54009 15.1036 4.60969 15.1036 3.67929C15.0611 3.46784 15.2309 3.25639 15.443 3.2141H26.4335C26.773 3.2141 26.9427 3.34097 26.9852 3.55242L42.4737 47.1119C42.601 47.5771 42.4737 47.7885 42.0494 47.7885H33.1806C32.8835 47.8308 32.5865 47.6194 32.5016 47.3234L29.022 37.2582ZM15.6977 28.6731H26.476C26.2214 27.785 25.8819 26.7278 25.5 25.6282C25.1181 24.4863 24.7362 23.2599 24.3543 21.9912C23.9299 20.6802 23.548 19.4115 23.1237 18.1004C22.6993 16.7894 22.3174 15.563 21.9779 14.3366C21.6385 13.1524 21.3414 12.0529 21.0444 11.0379H20.9595C20.5776 12.8564 20.1108 14.6749 19.5167 16.4934C18.8802 18.5233 18.2437 20.6379 17.5648 22.7524C16.9707 24.9093 16.3342 26.8969 15.6977 28.6731ZM51.9365 10.615C50.5362 10.6573 49.1783 10.1075 48.1599 9.1348C47.1839 8.07753 46.6747 6.68194 46.7171 5.24405C46.6747 3.80617 47.2263 2.45286 48.2448 1.48018C49.2632 0.507489 50.6211 0 52.0214 0C53.6763 0 54.9494 0.507489 55.8829 1.48018C56.8165 2.49515 57.3257 3.84846 57.2833 5.24405C57.3257 6.68194 56.8165 8.07753 55.7981 9.1348C54.8221 10.1498 53.3793 10.6996 51.9365 10.615ZM47.1839 47.3234V14.7595C47.1839 14.3366 47.3536 14.1674 47.7356 14.1674H56.1375C56.5194 14.1674 56.6892 14.3789 56.6892 14.7595V47.3234C56.6892 47.7886 56.5194 48 56.1375 48H47.8204C47.3961 48 47.1839 47.7463 47.1839 47.3234Z" fill="#FF9A00" />
              </svg>
            </div>
            <div className="software-cont photoshop">
              <svg xmlns="http://www.w3.org/2000/svg" width="66" height="48" viewBox="0 0 66 48" fill="none">
                <path d="M0.909256 46.4889V0.755556C0.909256 0.444445 1.04259 0.266666 1.3537 0.266666C2.10926 0.266666 2.82037 0.266667 3.84259 0.222222C4.90926 0.177778 6.02037 0.177777 7.22037 0.133333C8.42037 0.0888885 9.70926 0.0888882 11.087 0.0444438C12.4648 -6.78831e-07 13.7981 0 15.1315 0C18.7759 0 21.7981 0.444444 24.287 1.37778C26.5093 2.13333 28.5537 3.37778 30.2426 5.02222C31.6648 6.44445 32.7759 8.17778 33.487 10.0889C34.1537 11.9556 34.5093 13.8667 34.5093 15.8667C34.5093 19.6889 33.6204 22.8444 31.8426 25.3333C30.0648 27.8222 27.5759 29.6889 24.687 30.7556C21.6648 31.8667 18.3315 32.2667 14.687 32.2667C13.6204 32.2667 12.9093 32.2667 12.4648 32.2222C12.0204 32.1778 11.3981 32.1778 10.5537 32.1778V46.4444C10.5981 46.7556 10.3759 47.0222 10.0648 47.0667C10.0204 47.0667 9.97592 47.0667 9.88703 47.0667H1.44259C1.08703 47.0667 0.909256 46.8889 0.909256 46.4889ZM10.5981 8.84444V23.7778C11.2204 23.8222 11.7981 23.8667 12.3315 23.8667H14.687C16.4204 23.8667 18.1537 23.6 19.7981 23.0667C21.2204 22.6667 22.4648 21.8222 23.4426 20.7111C24.3759 19.6 24.8204 18.0889 24.8204 16.1333C24.8648 14.7556 24.5093 13.3778 23.7981 12.1778C23.0426 11.0222 21.9759 10.1333 20.687 9.64444C19.0426 8.97778 17.2648 8.71111 15.4426 8.75555C14.287 8.75555 13.2648 8.75556 12.4204 8.8C11.5315 8.75556 10.9093 8.8 10.5981 8.84444Z" fill="#31A8FF" />
                <path d="M62.2426 21.0669C60.9093 20.3558 59.4871 19.8669 57.976 19.5558C56.3315 19.2002 54.6871 18.978 52.9982 18.978C52.1093 18.9336 51.176 19.0669 50.3315 19.2891C49.7537 19.4225 49.2649 19.7336 48.9537 20.178C48.7315 20.5336 48.5982 20.978 48.5982 21.378C48.5982 21.778 48.776 22.178 49.0426 22.5336C49.4426 23.0225 49.976 23.4225 50.5537 23.7336C51.576 24.2669 52.6426 24.7558 53.7093 25.2002C56.1093 26.0002 58.4204 27.1113 60.5537 28.4447C62.0204 29.378 63.2204 30.6225 64.0649 32.1336C64.776 33.5558 65.1315 35.1114 65.0871 36.7114C65.1315 38.8002 64.5093 40.8891 63.3537 42.6225C62.1093 44.4002 60.376 45.778 58.376 46.578C56.1982 47.5113 53.5315 48.0002 50.3315 48.0002C48.2871 48.0002 46.2871 47.8225 44.2871 47.4225C42.7315 47.1558 41.176 46.6669 39.7537 46.0002C39.4426 45.8225 39.2204 45.5114 39.2648 45.1558V37.4225C39.2648 37.2891 39.3093 37.1113 39.4426 37.0225C39.576 36.9336 39.7093 36.978 39.8426 37.0669C41.576 38.0891 43.3982 38.8002 45.3537 39.2447C47.0426 39.6891 48.8204 39.9114 50.5982 39.9114C52.2871 39.9114 53.4871 39.6891 54.2871 39.2891C54.9982 38.978 55.4871 38.2225 55.4871 37.4225C55.4871 36.8002 55.1315 36.2225 54.4204 35.6447C53.7093 35.0669 52.2426 34.4002 50.0649 33.5558C47.7982 32.7558 45.7093 31.6891 43.7537 30.3558C42.376 29.378 41.2204 28.0891 40.376 26.578C39.6648 25.1558 39.3093 23.6002 39.3537 22.0447C39.3537 20.1336 39.8871 18.3113 40.8648 16.6669C41.976 14.8891 43.6204 13.4669 45.5315 12.578C47.6204 11.5113 50.2426 11.0225 53.3982 11.0225C55.2204 11.0225 57.0871 11.1558 58.9093 11.4225C60.2426 11.6002 61.5315 11.9558 62.7315 12.4447C62.9093 12.4891 63.0871 12.6669 63.176 12.8447C63.2204 13.0225 63.2649 13.2002 63.2649 13.378V20.6225C63.2649 20.8002 63.176 20.978 63.0426 21.0669C62.6426 21.1558 62.4204 21.1558 62.2426 21.0669Z" fill="#31A8FF" />
              </svg>
            </div>
            <div className="software-cont id-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="112" height="128" viewBox="0 0 112 128" fill="none">
                <path d="M19.8333 0H92.1667C103.133 0 112 10.3932 112 23.2479V104.752C112 117.607 103.133 128 92.1667 128H19.8333C8.86667 128 0 117.607 0 104.752V23.2479C0 10.3932 8.86667 0 19.8333 0Z" fill="#49021F" />
                <path d="M42.2499 44.1124V86.6702C42.2499 87.1265 42.0425 87.3339 41.6692 87.3339H33.5392C33.1659 87.3339 33 87.1265 33 86.6702V44.1124C33 43.7391 33.2074 43.5732 33.5807 43.5732H41.6692C41.9181 43.5317 42.1669 43.6976 42.2084 43.988C42.2499 44.0295 42.2499 44.071 42.2499 44.1124Z" fill="#FF3366" />
                <path d="M66.142 87.9981C63.0725 88.0395 60.0031 87.4173 57.224 86.1315C54.6108 84.9286 52.4538 82.9376 50.9606 80.4903C49.4258 77.9601 48.6792 74.8076 48.6792 71.033C48.6377 67.9635 49.4258 64.9355 50.9606 62.2809C52.5368 59.5847 54.8182 57.3448 57.5558 55.8516C60.4593 54.2339 63.9436 53.4458 68.0501 53.4458C68.2575 53.4458 68.5478 53.4458 68.9211 53.4872C69.2944 53.5287 69.7092 53.5287 70.207 53.5702V40.4627C70.207 40.1724 70.3314 40.0064 70.6218 40.0064H79.0421C79.2495 39.965 79.4154 40.1309 79.4569 40.2968C79.4569 40.3383 79.4569 40.3798 79.4569 40.3798V79.8681C79.4569 80.6147 79.4984 81.4443 79.5398 82.3569C79.6228 83.2279 79.6643 84.0575 79.7058 84.7627C79.7058 85.053 79.5813 85.3019 79.291 85.4263C77.134 86.3389 74.8527 87.0026 72.5298 87.4174C70.4559 87.7907 68.2989 87.9981 66.142 87.9981ZM70.207 79.7022V61.4513C69.8337 61.3683 69.4604 61.2854 69.087 61.2439C68.6308 61.2024 68.1745 61.1609 67.7182 61.1609C66.1005 61.1609 64.4828 61.4928 63.0311 62.2394C61.6208 62.9445 60.4179 63.9815 59.5053 65.3089C58.5928 66.6362 58.1365 68.4198 58.1365 70.5767C58.095 72.0285 58.3439 73.4803 58.8416 74.8491C59.2564 75.969 59.8786 76.9646 60.7082 77.7941C61.4963 78.5408 62.4503 79.1215 63.5288 79.4533C64.6488 79.8266 65.8102 79.9925 66.9716 79.9925C67.5938 79.9925 68.1745 79.9511 68.7137 79.9096C69.253 79.9511 69.7507 79.8681 70.207 79.7022Z" fill="#FF3366" />
              </svg>
            </div>
            <div className="software-cont adobe-illustrator">
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="56" viewBox="0 0 62 56" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6501 1.84363L30.9976 0L48.3463 1.84363L61.7775 19.9684L30.9988 55.9999L0.220116 19.9684L13.6501 1.84363Z" fill="#FDB300" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6875 20.1865L30.9988 56L0.220116 20.1865H12.6875Z" fill="#EA6C00" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M49.3137 20.1865L31.0012 56L61.7799 20.1865H49.3137Z" fill="#EA6C00" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4082 20.1865H48.958L30.6831 56L12.4082 20.1865Z" fill="#FDAD00" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3626 0L13.3527 1.86334L12.4082 20.1864L30.3626 0Z" fill="#FDD231" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.994 0L48.004 1.86334L48.9484 20.1864L30.994 0Z" fill="#FDD231" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M61.7799 20.1867L48.3134 1.95361L49.2798 20.1867H61.7799Z" fill="#FDAD00" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.220116 20.1867L13.6853 1.95361L12.719 20.1867H0.220116Z" fill="#FDAD00" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6831 0L12.4082 20.1864H48.958L30.6831 0Z" fill="#FEEEB7" />
              </svg>
            </div>
            <div className="software-cont w-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="44" viewBox="0 0 72 44" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M72 0L49.0256 44H27.4462L37.061 25.7645H36.6297C28.6976 35.8522 16.8628 42.493 0 44V26.017C0 26.017 10.7875 25.3927 17.1292 18.8607H0V0.00034756H19.2514V15.5127L19.6835 15.511L27.5503 0.00034756H42.1096V15.4144L42.5417 15.4137L50.7036 0H72Z" fill="#146EF5" />
              </svg>
            </div>
            <div className="software-cont wordpress">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <path d="M28 1.68C31.556 1.68 35 2.38 38.248 3.752C39.816 4.424 41.3 5.236 42.728 6.188C44.128 7.14 45.444 8.204 46.62 9.408C47.824 10.612 48.888 11.9 49.84 13.3C50.792 14.7 51.604 16.212 52.276 17.78C53.648 21.028 54.348 24.472 54.348 28.028C54.348 31.584 53.648 35.028 52.276 38.276C51.604 39.844 50.792 41.328 49.84 42.756C48.888 44.156 47.824 45.472 46.62 46.648C45.416 47.852 44.128 48.916 42.728 49.868C41.328 50.82 39.816 51.632 38.248 52.304C35 53.676 31.556 54.376 28 54.376C24.444 54.376 21 53.676 17.752 52.304C16.184 51.632 14.7 50.82 13.272 49.868C11.872 48.916 10.556 47.852 9.38 46.648C8.176 45.444 7.112 44.156 6.16 42.756C5.208 41.356 4.396 39.844 3.724 38.276C2.38 35 1.68 31.556 1.68 28C1.68 24.444 2.38 21 3.752 17.752C4.424 16.184 5.236 14.7 6.188 13.272C7.14 11.872 8.204 10.556 9.408 9.38C10.612 8.176 11.9 7.112 13.3 6.16C14.7 5.208 16.212 4.396 17.78 3.724C21 2.38 24.444 1.68 28 1.68ZM28 0C12.544 0 0 12.544 0 28C0 43.456 12.544 56 28 56C43.456 56 56 43.456 56 28C56 12.544 43.456 0 28 0Z" fill="#E6F2FD" />
                <path d="M4.6759 27.9998C4.6759 37.2398 10.0519 45.2198 17.8359 48.9998L6.6919 18.5078C5.4039 21.3918 4.6759 24.6118 4.6759 27.9998ZM43.7639 26.8238C43.7639 23.9398 42.7279 21.9518 41.8319 20.3838C40.6559 18.4518 39.5359 16.8278 39.5359 14.9238C39.5359 12.7678 41.1599 10.7798 43.4559 10.7798C43.5679 10.7798 43.6519 10.7798 43.7639 10.8078C39.5919 6.99978 34.0759 4.67578 27.9999 4.67578C19.8519 4.67578 12.6839 8.84778 8.5119 15.2038C9.0719 15.2318 9.5759 15.2318 10.0239 15.2318C12.4599 15.2318 16.2399 14.9238 16.2399 14.9238C17.4999 14.8398 17.6399 16.6878 16.3799 16.8558C16.3799 16.8558 15.1199 16.9958 13.7199 17.0798L22.2039 42.3638L27.2999 27.0478L23.6599 17.0798C22.3999 16.9958 21.2239 16.8558 21.2239 16.8558C19.9639 16.7718 20.1039 14.8678 21.3639 14.9238C21.3639 14.9238 25.2279 15.2318 27.4959 15.2318C29.9319 15.2318 33.7119 14.9238 33.7119 14.9238C34.9719 14.8398 35.1119 16.6878 33.8519 16.8558C33.8519 16.8558 32.5919 16.9958 31.1919 17.0798L39.6199 42.1678L42.0279 34.5518C43.1199 31.1918 43.7639 28.8118 43.7639 26.8238ZM28.4199 30.0438L21.4199 50.3998C23.5199 51.0158 25.7319 51.3518 27.9999 51.3518C30.7159 51.3518 33.3199 50.8758 35.7559 50.0358C35.6999 49.9238 35.6439 49.8398 35.5879 49.7278L28.4199 30.0438ZM48.4679 16.7998C48.5799 17.5558 48.6359 18.3398 48.6359 19.2078C48.6359 21.5878 48.1879 24.2478 46.8719 27.5518L39.7319 48.1598C46.6759 44.1278 51.3239 36.5958 51.3239 27.9998C51.3239 23.9398 50.2879 20.1318 48.4679 16.7998Z" fill="#E6F2FD" />
              </svg>
            </div>
          </div>
          <div className="center-div">
            <a className="purple-btn btn-center" href="/">View resume</a>
          </div>
        </div>
      </section>
    </div>
  );
}
