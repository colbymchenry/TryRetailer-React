import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './nav.css'

const Nav = (props) => {
  return (
    <div className={`nav-nav ${props.rootClassName} `}>
      <div className="nav-logo">
        <div className="nav-container1">
          <div className="nav-container2">
            <Script
              html={`<svg xmlns="http://www.w3.org/2000/svg" stroke="white" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-barcode"><path d="M3 5v14"/><path d="M8 5v14"/><path d="M12 5v14"/><path d="M17 5v14"/><path d="M21 5v14"/></svg>`}
            ></Script>
          </div>
        </div>
        <Link to="/" className="nav-navlink">
          {props.text1 ?? (
            <Fragment>
              <span className="nav-text5">Retailer</span>
            </Fragment>
          )}
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/privacy-policy" className="nav-link1">
          {props.link ?? (
            <Fragment>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-link3"
              >
                <span>Privacy Policy</span>
                <br></br>
              </a>
            </Fragment>
          )}
        </Link>
        <Link to="/terms-of-service" className="nav-link2">
          {props.link1 ?? (
            <Fragment>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-link4"
              >
                <span>Terms of Service</span>
                <br></br>
              </a>
            </Fragment>
          )}
        </Link>
      </div>
    </div>
  )
}

Nav.defaultProps = {
  link: undefined,
  rootClassName: '',
  link1: undefined,
  text1: undefined,
}

Nav.propTypes = {
  link: PropTypes.element,
  rootClassName: PropTypes.string,
  link1: PropTypes.element,
  text1: PropTypes.element,
}

export default Nav
