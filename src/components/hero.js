import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className={`hero-hero-container ${props.rootClassName} `}>
      <div className="hero-container">
        <span>
          {props.text ?? (
            <Fragment>
              <span className="hero-text6">
                <span>Retailer</span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
        <span>
          {props.body ?? (
            <Fragment>
              <span className="hero-text1">
                <span>One simple App saving your time and money.</span>
                <br></br>
                <br></br>
                <span>
                  Scan a product&apos;s barcode and instantly find comparable
                  prices and reviews!
                </span>
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="hero-i-phone-container">
        <div className="hero-whiteshadow"></div>
        <img
          alt={props.iphoneAlt}
          src={props.iphoneSrc}
          className="hero-iphone"
        />
        <img alt={props.appAlt} src={props.appSrc} className="hero-app" />
      </div>
    </div>
  )
}

Hero.defaultProps = {
  appSrc: '/screenshot%202024-09-13%20193924-700h.png',
  rootClassName: '',
  appAlt: 'image',
  body: undefined,
  text: undefined,
  iphoneAlt: 'image',
  iphoneSrc: '/iphone-outline1-700h.png',
}

Hero.propTypes = {
  appSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  appAlt: PropTypes.string,
  body: PropTypes.element,
  text: PropTypes.element,
  iphoneAlt: PropTypes.string,
  iphoneSrc: PropTypes.string,
}

export default Hero
