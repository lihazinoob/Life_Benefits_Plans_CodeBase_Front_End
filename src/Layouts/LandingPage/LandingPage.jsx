import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/footer";
import StateCard from "../../Components/StateCard/StateCard";
import ExpertOpinion from "../../Components/ExpertOpinion/ExpertOpinion";
const LandingPage = () => {
  return (
    <div className="font-Montserrat">
      <div className="lg:px-24  py-1">
        <Header />
      </div>
      <div className="lg:px-24 py-1">
        <StateCard />
      </div>
      <div className="lg:px-24 py-1">
        <ExpertOpinion/>
      </div>

      <div className="lg:px-24 py-1">
        <Footer />
      </div>
      <div className="lg:px-24 py-1"></div>
    </div>
  );
};

export default LandingPage;
