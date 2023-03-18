import React from "react";
import { useState, useEffect } from "react";
import { Img, Text, Line, Button, List } from "components";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "components/Navbar.jsx";

const ServicesPage = () => {
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
  const navigate = useNavigate();
  return (
    <>
      {onLine ? (
        <>
          <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start mx-[auto] w-[100%]">
            <aside className="md:hidden sm:hidden md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[18%]">
              <div className="bg-white_A700 flex flex-col gap-[50px] items-center justify-start py-[30px] w-[100%]">
                <div className="flex flex-row items-center justify-center md:w-[100%] sm:w-[100%] w-[65%]">
                  <Img
                    src="images/img_logo_indigo_600.png"
                    className="h-[40px] md:h-[auto] sm:h-[auto] object-cover w-[40px]"
                    onError={(i) => (i.target.style.display = "none")}
                  />
                  <Text
                    className="font-bold ml-[4px] text-indigo_600 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    <Link to={"/"}>CapitalOneBank</Link>
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mb-[334px] w-[100%]">
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                    onClick={() => navigate("/")}
                  ></div>

                  <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] sm:w-[100%] w-[64%]">
                    <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[75%]">
                      <Img
                        src="images/img_signal.svg"
                        className="h-[25px] w-[25px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                      <Text
                        className="font-medium text-indigo_600 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Contact
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start p-[17px] w-[100%]"></div>
                </div>
              </div>
            </aside>
            <div className="flex flex-col gap-[31px] items-center justify-start md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[83%]">
              <NavBar />
              <div className="bg-white_A700 border border-gray_300 border-solid flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[20px] w-[100%]">
                <Text
                  className="md:ml-[0] sm:ml-[0] ml-[20px] text-gray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Contact Us
                </Text>

                <Button
                  className="flex h-[50px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[30px] md:mt-[0] sm:mt-[0] my-[5px] rounded-radius50 w-[50px]"
                  size="mdIcn"
                  variant="icbFillGray102"
                >
                  <Img
                    src="images/img_notification.svg"
                    className="h-[25px] w-[25px]"
                    onError={(i) => (i.target.style.display = "none")}
                  />
                </Button>
              </div>
              <div className="flex flex-col gap-[24px] items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                <List
                  className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col items-start justify-start mx-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                    <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] sm:w-[100%] w-[82%]">
                      <Button
                        className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                        size="xlIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[30px] w-[30px]"
                          onError={(i) => (i.target.style.display = "none")}
                        />
                      </Button>
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[64%]">
                        <Text
                          className="font-semibold text-indigo_600 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Contact
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          (484) 613 - 0037
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-start justify-start mx-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                    <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] sm:w-[100%] w-[75%]">
                      <Button
                        className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                        size="xlIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_bag_70X70.svg"
                          className="h-[30px] w-[30px]"
                          onError={(i) => (i.target.style.display = "none")}
                        />
                      </Button>
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[60%]">
                        <Text
                          className="font-semibold text-indigo_600 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Email
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          Cliffmayers0@gmail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-start justify-start mx-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                    <div className="flex flex-row gap-[22px] items-center justify-start md:w-[100%] sm:w-[100%] w-[75%]">
                      <Button
                        className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                        size="xlIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_bag_70X70.svg"
                          className="h-[30px] w-[30px]"
                          onError={(i) => (i.target.style.display = "none")}
                        />
                      </Button>
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[61%]">
                        <Text
                          className="font-semibold text-indigo_600 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Email
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          Chris.hudson1763@yahoo.com
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Offline</>
      )}
    </>
  );
};

export default ServicesPage;
