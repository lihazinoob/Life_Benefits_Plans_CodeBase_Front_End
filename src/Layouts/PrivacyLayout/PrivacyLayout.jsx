import React from 'react'
import Header from '../../Components/Header/Header'
import PrivacyPolicy from '../../Components/PrivacyPolicy/PrivacyPolicy'
import Footer from '../../Components/Footer/footer'
const PrivacyLayout = () => {
  return (
    <div>
      <div className="font-Montserrat">
        <div className="lg:px-24  py-1">
          <Header />
        </div>
        <div className="lg:px-24 pt-8">
          <PrivacyPolicy/>
        </div>
        <div className="lg:px-24 py-1">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default PrivacyLayout
