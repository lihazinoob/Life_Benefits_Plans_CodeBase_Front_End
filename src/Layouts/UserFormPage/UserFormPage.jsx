import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/footer";
// import UserForm from "../../Components/UserForm/UserForm";
import MultiStepForm from "../../Components/UserForm/UserForm";
const UserFormPage = () => {
  return (
    <div className="font-Montserrat">
      <div className="lg:px-24 2xl:px-96  py-1">
        <Header />
      </div>
      <div className="lg:px-24 2xl:px-96 py-1">
        <MultiStepForm />
      </div>

      <div className="lg:px-24 2xl:px-96 py-1">
        <Footer />
      </div>
      <div className="lg:px-24 2xl:px-96 py-1"></div>
    </div>
  );
};

export default UserFormPage;
