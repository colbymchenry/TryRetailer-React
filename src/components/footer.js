import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container1"></div>
      <div className="footer-container2">
        <span>
          {props.copyright ?? (
            <Fragment>
              <span className="footer-text1">Retailer, LLC 20243</span>
            </Fragment>
          )}
        </span>
      </div>
      <div className="footer-container3">
        <Link to="/privacy-policy" className="footer-link1">
          {props.text ?? (
            <Fragment>
              <span className="footer-text3">Privacy Policy</span>
            </Fragment>
          )}
        </Link>
        <Link to="/terms-of-service" className="footer-link2">
          {props.link ?? (
            <Fragment>
              <span className="footer-text2">Terms of Service</span>
            </Fragment>
          )}
        </Link>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  rootClassName: '',
  copyright: undefined,
  link: undefined,
  text: undefined,
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
  copyright: PropTypes.element,
  link: PropTypes.element,
  text: PropTypes.element,
}

export default Footer
