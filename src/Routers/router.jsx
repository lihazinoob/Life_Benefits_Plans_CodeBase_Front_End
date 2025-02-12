import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Layouts/LandingPage/LandingPage";
import FunctionalPage from "../Layouts/FunctionalPage/FunctionalPage";
import TermsOfUse from "../Layouts/TermsOfUse/TermsOfUse";
import ContactUs from "../Layouts/ContactUs/ContactUs";
import UserFormPage from "../Layouts/UserFormPage/UserFormPage";
import PrivacyLayout from "../Layouts/PrivacyLayout/PrivacyLayout";
import CongoLayout from "../Layouts/CongoLayout/CongoLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  { 
    path: "/generateqoute",
    element:<FunctionalPage/>
   },
   {
    path:"/terms-of-use",
    element:<TermsOfUse/>
   },
   {
    path:"/privacy",
    element:<PrivacyLayout/>
   },
   {
    path:"/contact",
    element:<ContactUs/>
   },
   {
    path:"/form",
    element:<UserFormPage/>
   },
   {
    path:"/congratulations",
    element:<CongoLayout/>
   }

]);

export default router;