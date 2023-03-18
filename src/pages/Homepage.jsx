import { useContext } from "react";
import { userContext } from "Routes";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Homepage() {
  const [onLine, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    console.log(onLine);
    const handleStatusChange = () => {
      setOnline(navigator.onLine);
      console.log(onLine);
    };
    window.addEventListener("online", handleStatusChange);
    window.addEventListener("offline", handleStatusChange);
  }, [onLine]);
  const [user] = useState({
    email: "Jerniferharwell@gmail.com",
    password: "jen54zh",
  });
  const [inputUser, setInputUser] = useState({
    email: "",
    password: "",
  });
  const { isSignedIn, setisSignedIn } = useContext(userContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputUser({ ...inputUser, [e.target.name]: e.target.value });
  };
  const handleLog = () => {
    if (
      user.email === inputUser.email &&
      user.password === inputUser.password
    ) {
      setisSignedIn(true);
      navigate("/dashboard");
    }
  };
  return (
    <>
      {onLine ? (
        <div>
          <section class="bg-gray-50 min-h-screen flex items-center justify-center">
            <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
              <div class="md:w-1/2 px-8 md:px-16">
                <h1 class="font-bold text-2xl text-[#002D74]">
                  {" "}
                  <Link to="/">CapitalOne Bank</Link>
                </h1>

                <h2 class="text-xs mt-4 text-[#002D74]">Login</h2>

                <form action="" class="flex flex-col gap-4">
                  <input
                    onChange={(e) => {
                      handleChange(e);
                      console.log(isSignedIn);
                      console.log(inputUser);
                    }}
                    class="p-2 mt-8 rounded-xl border"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={inputUser.email}
                  />
                  <div class="relative">
                    <input
                      onChange={(e) => {
                        handleChange(e);
                        console.log(isSignedIn);
                        console.log(inputUser);
                      }}
                      value={inputUser.password}
                      class="p-2 rounded-xl border w-full"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    onClick={() => {
                      handleLog();
                    }}
                    class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
                  >
                    Login
                  </button>
                </form>

                <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
                  <hr class="border-gray-400" />
                  <p class="text-center text-sm">OR</p>
                  <hr class="border-gray-400" />
                </div>

                <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                  <p>Don't have an account?</p>
                  <button
                    onClick={() => {
                      navigate("/register");
                    }}
                    class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <>Offline</>
      )}
    </>
  );
}

export default Homepage;
