import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Hero from '../components/hero'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>TryRetailer</title>
        <meta property="og:title" content="TryRetailer" />
      </Helmet>
      <Hero
        body={
          <Fragment>
            <span className="home-text10">
              <span>One simple App saving you time and money.</span>
              <br></br>
              <br></br>
              <span>
                Scan a product&apos;s barcode and instantly find comparable
                prices and reviews!
              </span>
            </span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="home-text15">
              <span>Retailer</span>
              <br></br>
            </span>
          </Fragment>
        }
        appAlt="app home page inside iphone"
        appSrc="/retailer%20gif-700h.gif"
        iphoneAlt="iphone"
        rootClassName="heroroot-class-name"
      ></Hero>
      <div className="home-main">
        <div className="home-header">
          <span className="home-heading1">
            <span className="home-text18">
              Bringing the power back to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text19">You</span>
            <span className="home-text20">!</span>
          </span>
        </div>
        <div className="home-rich-text">
          <span className="home-heading2">It&apos;s REALLY simple</span>
          <span className="home-line1">
            <span className="home-text21">1.</span>
            <span> Save money while shopping with </span>
            <span className="home-text23">coupons</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text25">price matching</span>
            <span className="home-text26">.</span>
            <br></br>
          </span>
          <span className="home-line2">
            <span className="home-text28">2.</span>
            <span>
              {' '}
              Make informed purchases with
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text30">real reviews</span>
            <span>!</span>
          </span>
          <span className="home-line3">
            <span className="home-text32">3.</span>
            <span>
              {' '}
              Scan products with your camera and
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text34">save time</span>
            <span>.  </span>
          </span>
        </div>
        <div className="home-how-it-works">
          <div className="home-row1">
            <div className="home-iconcontainer1">
              <div className="home-container11">
                <div className="home-container12">
                  <Script
                    html={`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-barcode"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 7v10"/><path d="M12 7v10"/><path d="M17 7v10"/></svg>`}
                  ></Script>
                </div>
              </div>
            </div>
            <span className="home-text36">1. Scan barcode</span>
          </div>
          <div className="home-row2">
            <div className="home-iconcontainer2">
              <div className="home-container13">
                <div className="home-container14">
                  <Script
                    html={`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>`}
                  ></Script>
                </div>
              </div>
            </div>
            <span className="home-text37">2. Compare prices &amp; reviews</span>
          </div>
          <div className="home-row3">
            <div className="home-iconcontainer3">
              <div className="home-container15">
                <div className="home-container16">
                  <Script
                    html={`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`}
                  ></Script>
                </div>
              </div>
            </div>
            <span className="home-text38">3. Add to cart</span>
          </div>
          <div className="home-row4">
            <div className="home-iconcontainer4">
              <div className="home-container17">
                <div className="home-container18">
                  <Script
                    html={`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>`}
                  ></Script>
                </div>
              </div>
            </div>
            <span className="home-text39">4. Save money</span>
          </div>
        </div>
        <div className="home-download-now">
          <span className="home-heading3">Download Retailer</span>
          <span className="home-subheading">
            Start saving time and money on your shopping. Download the Retailer
            app today!
          </span>
          <div className="home-buttons-row">
            <div className="home-button1">
              <div className="home-container19">
                <div className="home-container20">
                  <Script
                    html={`<svg fill="#ffffff" width="100%" height="100%" viewBox="-52.01 0 560.035 560.035" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path></g></svg>`}
                  ></Script>
                </div>
              </div>
              <div className="home-container21">
                <span className="home-text40">Download on the</span>
                <span className="home-text41">App Store</span>
              </div>
            </div>
            <div className="home-button2">
              <div className="home-container22">
                <div className="home-container23">
                  <Script
                    html={`<svg viewBox="0 0 32 32" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <mask id="mask0_87_8320" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="3" width="24" height="26"> <path d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z" fill="#C4C4C4"></path> </mask> <g mask="url(#mask0_87_8320)"> <path d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z" fill="url(#paint0_linear_87_8320)"></path> <path d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z" fill="url(#paint1_linear_87_8320)"></path> <path d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z" fill="url(#paint2_linear_87_8320)"></path> <path d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z" fill="url(#paint3_linear_87_8320)"></path> </g> <defs> <linearGradient id="paint0_linear_87_8320" x1="15.6769" y1="10.874" x2="7.07106" y2="19.5506" gradientUnits="userSpaceOnUse"> <stop stop-color="#00C3FF"></stop> <stop offset="1" stop-color="#1BE2FA"></stop> </linearGradient> <linearGradient id="paint1_linear_87_8320" x1="20.292" y1="15.8176" x2="31.7381" y2="15.8176" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFCE00"></stop> <stop offset="1" stop-color="#FFEA00"></stop> </linearGradient> <linearGradient id="paint2_linear_87_8320" x1="7.36932" y1="30.1004" x2="22.595" y2="17.8937" gradientUnits="userSpaceOnUse"> <stop stop-color="#DE2453"></stop> <stop offset="1" stop-color="#FE3944"></stop> </linearGradient> <linearGradient id="paint3_linear_87_8320" x1="8.10725" y1="1.90137" x2="22.5971" y2="13.7365" gradientUnits="userSpaceOnUse"> <stop stop-color="#11D574"></stop> <stop offset="1" stop-color="#01F176"></stop> </linearGradient> </defs> </g></svg>`}
                  ></Script>
                </div>
              </div>
              <div className="home-container24">
                <span className="home-text42">GET IT ON</span>
                <span className="home-text43">Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        link={
          <Fragment>
            <span className="home-text44">Terms of Service</span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="home-text45">Privacy Policy</span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="home-text46">Retailer, LLC 2024</span>
          </Fragment>
        }
      ></Footer>
    </div>
  )
}

export default Home
