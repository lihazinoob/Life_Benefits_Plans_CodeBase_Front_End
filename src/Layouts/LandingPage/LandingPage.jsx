import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/footer";
import StateCard from "../../Components/StateCard/StateCard";
import ExpertOpinion from "../../Components/ExpertOpinion/ExpertOpinion";
import FAQ from "../../Components/Faqs/Faqs";
import LandingCard from "../../Components/LandingCard/LandingCard";
import Option from "../../Components/Options/Option";
const LandingPage = () => {
  return (
    <div className="font-Montserrat">
      <div className="lg:px-24   py-1">
        <Header />
      </div>
      <div className="lg:px-24 2xl:px-96 py-1">
        <Option />
      </div>
      <div className="lg:px-24 2xl:px-96 py-1">
        <StateCard />
      </div>
      <div className="lg:px-24 2xl:px-96 py-1">
        <ExpertOpinion/>
      </div>
      <div className="lg:px-24 2xl:px-96 py-1">
        <FAQ/>
      </div>
      <div className="lg:px-24 2xl:px-96 py-1">
        <LandingCard/>
      </div>
      <div className="lg:px-24 2xl:px-96 py-1">
        <Footer />
      </div>
      <div className="lg:px-24 py-1"></div>
    </div>
  );
};

export default LandingPage;
