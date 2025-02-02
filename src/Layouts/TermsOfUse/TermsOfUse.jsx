import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/footer";
import Termsinfo from "../../Components/TermsOfUse/termsinfo";
const TermsOfUse = () => {
  return (
    <div>
      <div className="font-Montserrat">
        <div className="lg:px-24  py-1">
          <Header />
        </div>
        <div className="lg:px-24 pt-8">
          <Termsinfo />
        </div>
        <div className="lg:px-24 py-1">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
