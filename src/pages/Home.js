import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      
      <ul>
        <li to=""></li>
        <li>
          <Link to="/dashboard">MainDashboard</Link>
        </li>
        <li>
          <Link to="/transaction">Transaction</Link>
        </li>
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/investments">Investments</Link>
        </li>
        <li>
          <Link to="/creditcards">CreditCards</Link>
        </li>
        <li>
          <Link to="/loan">Loan</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/profile">SettingEditProfile</Link>
        </li>
        <li>
          <Link to="/settingpagepreferences">SettingPagePreferences</Link>
        </li>
        <li>
          <Link to="/settingpagesecurity">SettingPageSecurity</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
