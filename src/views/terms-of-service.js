import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Nav from '../components/nav'
import Footer from '../components/footer'
import './terms-of-service.css'

const TermsOfService = (props) => {
  return (
    <div className="terms-of-service-container">
      <Helmet>
        <title>Terms-of-Service - TryRetailer</title>
        <meta property="og:title" content="Terms-of-Service - TryRetailer" />
      </Helmet>
      <Nav
        link={
          <Fragment>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="terms-of-service-link1"
            >
              <span>Privacy Policy</span>
              <br></br>
            </a>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="terms-of-service-text102">Retailer</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="terms-of-service-link2"
            >
              <span>Terms of Service</span>
              <br></br>
            </a>
          </Fragment>
        }
        rootClassName="navroot-class-name"
      ></Nav>
      <div className="terms-of-service-main">
        <span className="terms-of-service-text105">
          <span className="terms-of-service-text106">
            Terms of Service for Retailer
          </span>
          <br></br>
          <br></br>
          <span className="terms-of-service-text109">
            Last updated:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="terms-of-service-text110">09/17/2024</span>
          <br className="terms-of-service-text111"></br>
          <br className="terms-of-service-text112"></br>
          <span className="terms-of-service-text113">
            Welcome to Retailer! These Terms of Service (&quot;Terms&quot;)
            govern your use of the Retailer app (the &quot;App&quot;) operated
            by Retailer, LLC (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;).
            By downloading or using the App, you agree to be bound by these
            Terms. Please read them carefully.
          </span>
          <br className="terms-of-service-text114"></br>
          <br className="terms-of-service-text115"></br>
          <span className="terms-of-service-text116">1. Use of the App</span>
          <br className="terms-of-service-text117"></br>
          <br className="terms-of-service-text118"></br>
          <span className="terms-of-service-text119">Eligibility:</span>
          <br className="terms-of-service-text120"></br>
          <span className="terms-of-service-text121">
            You must be at least 13 years of age to use the App. By using the
            App, you affirm that you meet this age requirement.
          </span>
          <br className="terms-of-service-text122"></br>
          <br className="terms-of-service-text123"></br>
          <span className="terms-of-service-text124">License to Use:</span>
          <br className="terms-of-service-text125"></br>
          <span className="terms-of-service-text126">
            We grant you a limited, non-exclusive, non-transferable, and
            revocable license to use the App for personal, non-commercial use in
            accordance with these Terms.
          </span>
          <br className="terms-of-service-text127"></br>
          <br className="terms-of-service-text128"></br>
          <span className="terms-of-service-text129">2. User Accounts</span>
          <br className="terms-of-service-text130"></br>
          <br className="terms-of-service-text131"></br>
          <span className="terms-of-service-text132">
            To access certain features of the App, such as scanning barcodes or
            reviewing products, you may be required to create an account. You
            agree to:
          </span>
          <br className="terms-of-service-text133"></br>
          <span className="terms-of-service-text134">
            - Provide accurate and complete information when creating an
            account.
          </span>
          <br className="terms-of-service-text135"></br>
          <span className="terms-of-service-text136">
            - Keep your account login credentials confidential.
          </span>
          <br className="terms-of-service-text137"></br>
          <span className="terms-of-service-text138">
            - Be responsible for all activities that occur under your account.
          </span>
          <br className="terms-of-service-text139"></br>
          <br className="terms-of-service-text140"></br>
          <span className="terms-of-service-text141">
            3. Prohibited Activities
          </span>
          <br className="terms-of-service-text142"></br>
          <br className="terms-of-service-text143"></br>
          <span className="terms-of-service-text144">
            You agree not to engage in the following activities:
          </span>
          <br className="terms-of-service-text145"></br>
          <span className="terms-of-service-text146">
            - Use the App for any unlawful or fraudulent purposes.
          </span>
          <br className="terms-of-service-text147"></br>
          <span className="terms-of-service-text148">
            - Reverse engineer, decompile, or attempt to extract the source code
            of the App.
          </span>
          <br className="terms-of-service-text149"></br>
          <span className="terms-of-service-text150">
            - Use the App to upload, post, or distribute any material that
            infringes on the rights of any third party.
          </span>
          <br className="terms-of-service-text151"></br>
          <span className="terms-of-service-text152">
            - Interfere with or disrupt the App&apos;s operation or servers.
          </span>
          <br className="terms-of-service-text153"></br>
          <span className="terms-of-service-text154">
            - Attempt to gain unauthorized access to any part of the App.
          </span>
          <br className="terms-of-service-text155"></br>
          <br className="terms-of-service-text156"></br>
          <span className="terms-of-service-text157">
            4. Data Collection and Privacy
          </span>
          <br className="terms-of-service-text158"></br>
          <br className="terms-of-service-text159"></br>
          <span className="terms-of-service-text160">
            For information on how we collect, use, and disclose your data,
            please refer to our Privacy Policy. By using the App, you agree to
            the collection and use of information as outlined in our Privacy
            Policy.
          </span>
          <br className="terms-of-service-text161"></br>
          <br className="terms-of-service-text162"></br>
          <span className="terms-of-service-text163">
            5. Google Login and Geolocation
          </span>
          <br className="terms-of-service-text164"></br>
          <br className="terms-of-service-text165"></br>
          <span className="terms-of-service-text166">
            The App allows you to log in via Google OAuth. By doing so, you
            consent to Retailer collecting your name, email, and phone number.
            You may also enable geolocation services to provide
            location-specific features, such as finding nearby stores.
          </span>
          <br className="terms-of-service-text167"></br>
          <br className="terms-of-service-text168"></br>
          <span className="terms-of-service-text169">6. Advertisements</span>
          <br className="terms-of-service-text170"></br>
          <br className="terms-of-service-text171"></br>
          <span className="terms-of-service-text172">
            The App displays advertisements to users who have not subscribed to
            our ad-free service. Advertisements are provided through third-party
            services like Google Ads, and we do not control the content of these
            ads. Retailer is not responsible for any third-party content,
            including ads displayed in the App.
          </span>
          <br className="terms-of-service-text173"></br>
          <br className="terms-of-service-text174"></br>
          <span className="terms-of-service-text175">
            7. Subscription and In-App Purchases
          </span>
          <br className="terms-of-service-text176"></br>
          <br className="terms-of-service-text177"></br>
          <span className="terms-of-service-text178">
            The App may offer subscription services that provide access to
            additional features, such as removing advertisements. All
            subscriptions and in-app purchases are processed through the app
            store (Google Play or Apple App Store) and are subject to their
            terms and policies.
          </span>
          <br className="terms-of-service-text179"></br>
          <br className="terms-of-service-text180"></br>
          <span className="terms-of-service-text181">Cancellation:</span>
          <br className="terms-of-service-text182"></br>
          <span className="terms-of-service-text183">
            You may cancel your subscription at any time through your app store
            account settings. Cancellation will take effect at the end of the
            current billing period, and no refunds will be issued for partial
            billing periods.
          </span>
          <br className="terms-of-service-text184"></br>
          <br className="terms-of-service-text185"></br>
          <span className="terms-of-service-text186">
            8. Intellectual Property
          </span>
          <br className="terms-of-service-text187"></br>
          <br className="terms-of-service-text188"></br>
          <span className="terms-of-service-text189">
            All content, trademarks, logos, and software provided in the App are
            owned by or licensed to Retailer, LLC. You agree not to copy,
            distribute, or create derivative works based on any content from the
            App without our prior written consent.
          </span>
          <br className="terms-of-service-text190"></br>
          <br className="terms-of-service-text191"></br>
          <span className="terms-of-service-text192">
            9. Limitation of Liability
          </span>
          <br className="terms-of-service-text193"></br>
          <br className="terms-of-service-text194"></br>
          <span className="terms-of-service-text195">
            To the fullest extent permitted by law, Retailer, LLC will not be
            liable for any damages arising out of or related to your use of the
            App, including but not limited to:
          </span>
          <br className="terms-of-service-text196"></br>
          <span className="terms-of-service-text197">
            - Direct, indirect, incidental, or consequential damages.
          </span>
          <br className="terms-of-service-text198"></br>
          <span className="terms-of-service-text199">
            - Loss of data, profits, or business opportunities.
          </span>
          <br className="terms-of-service-text200"></br>
          <br className="terms-of-service-text201"></br>
          <span className="terms-of-service-text202">
            The App is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without any warranties of any kind, whether
            express or implied.
          </span>
          <br className="terms-of-service-text203"></br>
          <br className="terms-of-service-text204"></br>
          <span className="terms-of-service-text205">10. Termination</span>
          <br className="terms-of-service-text206"></br>
          <br className="terms-of-service-text207"></br>
          <span className="terms-of-service-text208">
            We reserve the right to suspend or terminate your access to the App
            at any time, without notice or liability, for any reason, including
            if you violate these Terms. Upon termination, you must cease all use
            of the App.
          </span>
          <br className="terms-of-service-text209"></br>
          <br className="terms-of-service-text210"></br>
          <span className="terms-of-service-text211">
            11. Changes to the Terms
          </span>
          <br className="terms-of-service-text212"></br>
          <br className="terms-of-service-text213"></br>
          <span className="terms-of-service-text214">
            We may update these Terms from time to time. Any changes will be
            posted within the App and will become effective immediately upon
            posting. Your continued use of the App after the changes have been
            posted constitutes your acceptance of the revised Terms.
          </span>
          <br className="terms-of-service-text215"></br>
          <br className="terms-of-service-text216"></br>
          <span className="terms-of-service-text217">12. Governing Law</span>
          <br className="terms-of-service-text218"></br>
          <br className="terms-of-service-text219"></br>
          <span className="terms-of-service-text220">
            These Terms shall be governed and construed in accordance with the
            laws of Illinois/United States of America, without regard to its
            conflict of law provisions. Any disputes arising under or in
            connection with these Terms shall be resolved exclusively in the
            state or federal courts located in
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Illinois</span>
          <span className="terms-of-service-text222">.</span>
          <br className="terms-of-service-text223"></br>
          <br className="terms-of-service-text224"></br>
          <span className="terms-of-service-text225">
            13. Contact Information
          </span>
          <br className="terms-of-service-text226"></br>
          <br className="terms-of-service-text227"></br>
          <span className="terms-of-service-text228">
            If you have any questions about these Terms, please contact us at
            contact@tryretailer.com.
          </span>
        </span>
      </div>
      <Footer
        link={
          <Fragment>
            <span className="terms-of-service-text229">Terms of Service</span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="terms-of-service-text230">Privacy Policy</span>
          </Fragment>
        }
        copyright={
          <Fragment>
            <span className="terms-of-service-text231">
              Retailer, LLC 20243
            </span>
          </Fragment>
        }
        rootClassName="footerroot-class-name1"
      ></Footer>
    </div>
  )
}

export default TermsOfService
