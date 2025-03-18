import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full px-2 md:px-4 lg:px-8">
      <div className="flex flex-col">
        <div className="font-bold text-2xl">
          Universe Coverage Privacy Policy
        </div>
        {/* Update Date and Time */}
        <div className="mt-6 mb-2 tracking-tighter">
          <i>Updated at : The Date will be shown here</i>
        </div>

        <hr className="my-4 w-full border-t border-black" />

        <div>
          {/* Introduction */}
          <div className="mb-8">
            <div className="font-bold text-lg">Introduction</div>
            <div className="mt-4">
              Universe Coverage Group LLC (“universe Coverage,” “we,” “us,”
              or “our”) respects the privacy of our users (“you” or “your”).
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website
              UniverseCoverage.com. Please read this privacy policy carefully.
              If you do not agree with the terms of this privacy policy, please
              do not access the site.
            </div>
          </div>

          {/* Information we collect */}
          <div className="mb-8">
            <div className="font-bold text-lg">Information We Collect</div>
            <div className="mt-4">
              We may collect information about you in a variety of ways.
              <br />
              <br />
              The information we may collect on the Site includes:
              <br />
              <br /> <span className="font-semibold">Personal Data: </span>
              Personally identifiable information, such as your name, shipping
              address, email address, and telephone number, and demographic
              information, such as your age, gender, hometown, and interests,
              that you voluntarily give to us when you choose to participate in
              various activities related to the site. <br />
              <br /> <span className="font-semibold">Derivative Data: </span>
              Information our servers automatically collect when you access the
              Site, such as your IP address, your browser type, your operating
              system, your access times, and the pages you have viewed directly
              before and after accessing the Site.
            </div>
          </div>
          {/* Use of tour info */}

          <div className="mb-8">
            <div className="font-bold text-lg">Use of Your Information</div>
            <div className="mt-4">
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the Site to: <br />
              <br />
              <ul>
                <li>1. Email you regarding your account or order.</li>
                <li>
                  2. Fulfill and manage purchases, orders, payments, and other
                  transactions related to the Site.
                </li>
                <li>
                  3. Generate a personal profile about you to make future visits
                  to the Site more personalized
                </li>
                <li>4. Increase the efficiency and operation of the Site.</li>
                <li>
                  5. Monitor and analyze usage and trends to improve your
                  experience with the Site
                </li>
                <li>6. Notify you of updates to the Site.</li>
                <li>
                  7. Offer new products, services, and/or recommendations to
                  you.
                </li>
                <li>8. Perform other business activities as needed.</li>
              </ul>
            </div>
          </div>

          {/* Disclosure of Info */}

          <div className="mb-8">
            <div className="font-bold text-lg">
              Disclosure of Your Information
            </div>
            <div className="mt-4">
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows
              <br />
              <br />
              <ul>
                <li>
                  <span className="font-semibold">
                    1. By Law or to Protect Rights:{" "}
                  </span>
                  If we believe the release of information about you is
                  necessary to respond to legal process, to investigate or
                  remedy potential violations of our policies, or to protect the
                  rights, property, and safety of others, we may share your
                  information as permitted or required by any applicable law,
                  rule, or regulation.
                </li>
                <br />
                <li>
                  <span className="font-semibold">
                    2. Marketing Communications
                  </span>
                  With your consent, or with an opportunity for you to withdraw
                  consent, we may share your information with third parties for
                  marketing purposes, as permitted by law.
                </li>
              </ul>
            </div>
          </div>

          {/* Cookies and Beacons */}

          <div className="mb-8">
            <div className="font-bold text-lg">Cookies and Web Beacons</div>
            <div className="mt-4">
              We may use cookies, web beacons, tracking pixels, and other
              tracking technologies on the Site to help customize the Site and
              improve your experience. By accessing the Site, you consent to the
              collection and use of your information by these technologies.
            </div>
          </div>

          {/* Security */}

          <div className="mb-8">
            <div className="font-bold text-lg">
              Security of Your Information
            </div>
            <div className="mt-4">
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </div>
          </div>

          {/* Policy for children */}

          <div className="mb-8">
            <div className="font-bold text-lg">Policy for Children</div>
            <div className="mt-4">
              We do not knowingly solicit information from or market to children
              under the age of 13. If you become aware of any data we have
              collected from children under age 13, please contact us using the
              contact information provided below.
            </div>
          </div>

          {/* Contact Us */}

          <div className="mb-8">
            <div className="font-bold text-lg">Contact Us</div>
            <div className="mt-4">
              If you have questions or comments about this Privacy Policy,
              please contact us at: Universe Coverage Group LLC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
