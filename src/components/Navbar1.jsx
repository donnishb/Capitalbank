import { useState } from "react";
import { useContext } from "react";
import { userContext } from "Routes";
import { useNavigate } from "react-router-dom";
export default function NavBar1() {
  const [navbar, setNavbar] = useState(false);
  const { setisSignedIn } = useContext(userContext);
  const navigate = useNavigate();
  return (
    <nav className="block md:hidden lg:hidden w-full bg-indigo_700 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h2 className="text-2xl font-bold text-white">CapitalOneBank</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <button
                  onClick={() => {
                    setisSignedIn(true);
                    navigate("/dashboard");
                  }}
                >
                  Dashboard
                </button>
              </li>

              <li className="text-white hover:text-indigo-200">
                <button
                  onClick={() => {
                    setisSignedIn(true);
                    navigate("/transaction");
                  }}
                >
                  Transactions
                </button>
              </li>
              <li className="text-white hover:text-indigo-200">
                <button
                  onClick={() => {
                    setisSignedIn(true);
                    navigate("/accounts");
                  }}
                >
                  Accounts
                </button>
              </li>
              <li className="text-white hover:text-indigo-200">
                <button
                  onClick={() => {
                    setisSignedIn(true);
                    navigate("/investments");
                  }}
                >
                  Investments
                </button>
              </li>
              <li className="text-white hover:text-indigo-200">
                <button
                  onClick={() => {
                    setisSignedIn(true);
                    navigate("/creditcards");
                  }}
                >
                  Withdrawals
                </button>
              </li>
              <li className="text-white hover:text-indigo-200">
                <button
                  onClick={() => {
                    setisSignedIn(true);
                    navigate("/loan");
                  }}
                >
                  Loans
                </button>
              </li>
              <li className="text-white hover:text-indigo-200">
                <button
                  onClick={() => {
                    setisSignedIn(true);
                    navigate("/profile");
                  }}
                >
                  Profile
                </button>
              </li>
              <li className="text-red_700 hover:text-gray-103">
                <button
                  onClick={() => {
                    setisSignedIn(false);
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
