import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Layouts/LandingPage/LandingPage";
import FunctionalPage from "../Layouts/FunctionalPage/FunctionalPage";
import TermsOfUse from "../Layouts/TermsOfUse/TermsOfUse";
import ContactUs from "../Layouts/ContactUs/ContactUs";
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
    path:"/contact",
    element:<ContactUs/>
   }
]);

export default router;