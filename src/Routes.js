import React, { useState } from "react";
import SettingPageSecurity from "pages/SettingPageSecurity";
import SettingPagePreferences from "pages/SettingPagePreferences";
import SettingEditProfile from "pages/SettingEditProfile";
import Services from "pages/Services";
import Loan from "pages/Loan";
import CreditCards from "pages/CreditCards";
import Investments from "pages/Investments";
import Accounts from "pages/Accounts";
import Transaction from "pages/Transaction";
import MainDashboard from "pages/MainDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import Protected from "components/Protected";
import Unsuccesful from "pages/Unsuccessful"
import { createContext } from "react";
import Register from "pages/Register"
import ThankYou from "pages/Thankyou";
import Homes from "pages/Home/Homes";
import Trypage from "pages/TryPage";
export const userContext = createContext();
const ProjectRoutes = () => {
  const [isSignedIn,setisSignedIn] = useState(false)
  
  return (
    <Router>
      <userContext.Provider value={{isSignedIn,setisSignedIn}}>
      <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Homepage />} />
      <Route path="/submitted" element={<ThankYou />} />
      <Route path="/" element={<Homes />} />
      <Route path="/services" element={<Services />} />
      <Route path="/try" element={<Trypage />} />
       <Route element={<Protected isSignedIn={isSignedIn} />} >
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/profile" element={<SettingEditProfile />} />
        <Route path="/settingpagepreferences" element={<SettingPagePreferences />}/>
        <Route path="/settingpagesecurity" element={<SettingPageSecurity />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
        <Route path="/tooManyAttempts" element={<Unsuccesful />} />
        <Route path="/creditcards" element={<CreditCards />} />
        
        </Route>
      </Routes>
      </userContext.Provider>
    </Router>
  );
};
export default ProjectRoutes;
