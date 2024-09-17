import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Nav from '../components/nav'
import Footer from '../components/footer'
import './privacy-policy.css'

const PrivacyPolicy = (props) => {
  return (
    <div className="privacy-policy-container">
      <Helmet>
        <title>Privacy-Policy - TryRetailer</title>
        <meta property="og:title" content="Privacy-Policy - TryRetailer" />
      </Helmet>
      <Nav
        link={
          <Fragment>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="privacy-policy-link1"
            >
              <span>Privacy Policy</span>
              <br></br>
            </a>
          </Fragment>
        }
        link1={
          <Fragment>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="privacy-policy-link2"
            >
              <span>Terms of Service</span>
              <br></br>
            </a>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="privacy-policy-text14">Retailer</span>
          </Fragment>
        }
      ></Nav>
      <div className="privacy-policy-main">
        <span className="privacy-policy-text15">
          <span className="privacy-policy-text16">
            Privacy Policy for Retailer
          </span>
          <br className="privacy-policy-text17"></br>
          <br className="privacy-policy-text18"></br>
          <span className="privacy-policy-text19">
            Last updated:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="privacy-policy-text20">9/17/2024</span>
          <br className="privacy-policy-text21"></br>
          <br className="privacy-policy-text22"></br>
          <span className="privacy-policy-text23">
            Retailer, LLC (“we”, “our”, “us”) operates the Retailer app (the
            “App”) that allows users to scan barcodes, look up pricing and
            reviews online, and use geolocation to find nearby stores. We are
            committed to protecting your privacy and ensuring your data is
            handled securely. This Privacy Policy explains how we collect, use,
            and disclose information when you use our App.
          </span>
          <br className="privacy-policy-text24"></br>
          <br className="privacy-policy-text25"></br>
          <span className="privacy-policy-text26">
            1. Information We Collect
          </span>
          <br className="privacy-policy-text27"></br>
          <br className="privacy-policy-text28"></br>
          <span className="privacy-policy-text29">Personal Information:</span>
          <br className="privacy-policy-text30"></br>
          <span className="privacy-policy-text31">
            When you use Google login to access the App, we collect your name,
            email address, and phone number. We do not collect any other
            personally identifiable information unless you provide it
            voluntarily.
          </span>
          <br className="privacy-policy-text32"></br>
          <br className="privacy-policy-text33"></br>
          <span className="privacy-policy-text34">Geolocation Data:</span>
          <br className="privacy-policy-text35"></br>
          <span className="privacy-policy-text36">
            If you enable location services, we may collect your geolocation
            data to provide nearby store information. This data is only used to
            improve your experience with the App and is not stored or shared.
          </span>
          <br className="privacy-policy-text37"></br>
          <br className="privacy-policy-text38"></br>
          <span className="privacy-policy-text39">
            2. How We Use Your Information
          </span>
          <br className="privacy-policy-text40"></br>
          <br className="privacy-policy-text41"></br>
          <span className="privacy-policy-text42">
            We use the information we collect in the following ways:
          </span>
          <br className="privacy-policy-text43"></br>
          <span className="privacy-policy-text44">
            - To provide App functionality: Your personal information (name,
            email, and phone number) is used to create and manage your account.
          </span>
          <br className="privacy-policy-text45"></br>
          <span className="privacy-policy-text46">
            - To display nearby stores: If you allow us to access your location,
            we will use your geolocation data to show you stores near your
            current location.
          </span>
          <br className="privacy-policy-text47"></br>
          <span className="privacy-policy-text48">
            - To display ads: We use Google ads within the App and may display a
            banner ad at the bottom of the app for unsubscribed users. However,
            we do not sell or share your personal data with third-party
            advertisers.
          </span>
          <br className="privacy-policy-text49"></br>
          <br className="privacy-policy-text50"></br>
          <span className="privacy-policy-text51">3. Ads and Analytics</span>
          <br className="privacy-policy-text52"></br>
          <br className="privacy-policy-text53"></br>
          <span className="privacy-policy-text54">Google Ads:</span>
          <br className="privacy-policy-text55"></br>
          <span className="privacy-policy-text56">
            We display Google ads to non-subscribed users. Google may collect
            certain information to show relevant ads, but we do not share or
            sell your personal data for ad targeting.
          </span>
          <br className="privacy-policy-text57"></br>
          <br className="privacy-policy-text58"></br>
          <span className="privacy-policy-text59">Analytics:</span>
          <br className="privacy-policy-text60"></br>
          <span className="privacy-policy-text61">
            We may collect non-personally identifiable data (such as usage data,
            app performance, and user interactions) to improve the functionality
            and performance of the App.
          </span>
          <br className="privacy-policy-text62"></br>
          <br className="privacy-policy-text63"></br>
          <span className="privacy-policy-text64">4. Data Security</span>
          <br className="privacy-policy-text65"></br>
          <br className="privacy-policy-text66"></br>
          <span className="privacy-policy-text67">
            We are committed to ensuring your data is secure. We use
            industry-standard security measures to protect your personal
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="privacy-policy-text68"></br>
          <span className="privacy-policy-text69">
            information. However, no method of transmission over the internet or
            method of electronic storage is 100% secure.
          </span>
          <br className="privacy-policy-text70"></br>
          <br className="privacy-policy-text71"></br>
          <span className="privacy-policy-text72">5. Your Data Rights</span>
          <br className="privacy-policy-text73"></br>
          <br className="privacy-policy-text74"></br>
          <span className="privacy-policy-text75">You have the right to:</span>
          <br className="privacy-policy-text76"></br>
          <span className="privacy-policy-text77">
            - Access the personal information we hold about you.
          </span>
          <br className="privacy-policy-text78"></br>
          <span className="privacy-policy-text79">
            - Update or correct your personal information.
          </span>
          <br className="privacy-policy-text80"></br>
          <span className="privacy-policy-text81">
            - Delete your account and personal information by contacting us
            directly at contact@tryretailer.com.
          </span>
          <br className="privacy-policy-text82"></br>
          <br className="privacy-policy-text83"></br>
          <span className="privacy-policy-text84">6. Third-Party Services</span>
          <br className="privacy-policy-text85"></br>
          <br className="privacy-policy-text86"></br>
          <span className="privacy-policy-text87">
            We may use third-party services like Google for login and
            advertisements. These third parties may have their own privacy
            policies regarding the data they collect. We encourage you to review
            their privacy policies for more information.
          </span>
          <br className="privacy-policy-text88"></br>
          <br className="privacy-policy-text89"></br>
          <span className="privacy-policy-text90">7. Children’s Privacy</span>
          <br className="privacy-policy-text91"></br>
          <br className="privacy-policy-text92"></br>
          <span className="privacy-policy-text93">
            Our App is not intended for children under the age of 13, and we do
            not knowingly collect personal information from children under 13.
            If we become aware that we have collected information from a child
            under 13, we will take steps to delete that information.
          </span>
          <br className="privacy-policy-text94"></br>
          <br className="privacy-policy-text95"></br>
          <span className="privacy-policy-text96">
            8. Changes to This Privacy Policy
          </span>
          <br className="privacy-policy-text97"></br>
          <br className="privacy-policy-text98"></br>
          <span className="privacy-policy-text99">
            We may update this Privacy Policy from time to time. Any changes
            will be posted within the App and will become effective immediately
            upon posting.
          </span>
          <br className="privacy-policy-text100"></br>
          <br className="privacy-policy-text101"></br>
          <span className="privacy-policy-text102">9. Contact Us</span>
          <br className="privacy-policy-text103"></br>
          <br className="privacy-policy-text104"></br>
          <span className="privacy-policy-text105">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at contact@tryretailer.com.
          </span>
        </span>
      </div>
      <Footer
        link={
          <Fragment>
            <span className="privacy-policy-text106">Terms of Service</span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="privacy-policy-text107">Privacy Policy</span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="privacy-policy-text108">Retailer, LLC 2024</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name"
      ></Footer>
    </div>
  )
}

export default PrivacyPolicy
