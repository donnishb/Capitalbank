import React from "react";
import NavBar1 from "components/Navbar1.jsx";
import { Img, Text, Line, Button, Slider, List } from "components";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "components/Card.jsx";
const TransactionPage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
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
  return (
    <>
      {onLine ? (
        <>
          <NavBar1 />
          <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
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
                    CapitalOneBank
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mb-[334px] w-[100%]">
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                    onClick={() => navigate("/dashboard")}
                  >
                    <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[65%]">
                      <Img
                        src="images/img_home_25X25.svg"
                        className="h-[25px] w-[25px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] sm:w-[100%] w-[79%]">
                    <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[80%]">
                      <Img
                        src="images/img_file_25X25.svg"
                        className="h-[25px] w-[25px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                      <Text
                        className="font-medium text-indigo_600 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Transactions
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                    onClick={() => navigate("/accounts")}
                  >
                    <div className="flex flex-row gap-[20px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[59%]">
                      <Img
                        src="images/img_user.svg"
                        className="h-[25px] w-[25px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Accounts
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                    onClick={() => navigate("/investments")}
                  >
                    <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[70%]">
                      <Img
                        src="images/img_map.svg"
                        className="h-[25px] w-[25px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Investments
                      </Text>
                    </div>
                  </div>

                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                    onClick={() => navigate("/creditcards")}
                  >
                    <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[72%]">
                      <Img
                        src="images/img_file.svg"
                        className="h-[25px] w-[25px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Withdrawal
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                    onClick={() => navigate("/loan")}
                  >
                    <div className="flex flex-row gap-[20px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[45%]">
                      <Img
                        src="images/img_question.svg"
                        className="h-[25px] w-[25px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Loans
                      </Text>
                    </div>
                  </div>

                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                    onClick={() => navigate("/profile")}
                  >
                    <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[50%]">
                      <Img
                        src="images/img_settings.svg"
                        className="h-[25px] w-[25px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Profile
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex flex-col gap-[25px] items-center justify-start md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[83%]">
              <div className="bg-white_A700 border border-gray_300 border-solid flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[20px] w-[100%]">
                <Text
                  className="md:ml-[0] sm:ml-[0] ml-[20px] text-gray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Transactions
                </Text>
              </div>
              <div className="flex flex-col gap-[24px] items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-center justify-between w-[100%]">
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[66%]">
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="text-bluegray_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          My Cards
                        </Text>
                      </div>
                      <Card />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[32%]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      My Expense
                    </Text>
                    <div className="bg-white_A700 flex flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius25 w-[100%]">
                      <div className="flex flex-row items-start justify-start rounded-radius10 md:w-[100%] sm:w-[100%] w-[99%]">
                        <div className="flex flex-col gap-[9px] items-center justify-start mt-[69px] rounded-radius10 w-[13%]">
                          <div className="bg-gray_102 h-[93px] rounded-radius10 w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body4"
                          >
                            Aug
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[9px] items-center justify-start ml-[15px] mt-[20px] rounded-radius10 w-[13%]">
                          <div className="bg-gray_102 h-[142px] rounded-radius10 w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body4"
                          >
                            Sep
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[9px] items-center justify-start ml-[15px] mt-[66px] rounded-radius10 w-[13%]">
                          <div className="bg-gray_102 h-[96px] rounded-radius10 w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body4"
                          >
                            Oct
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[9px] items-center justify-start ml-[15px] mt-[113px] rounded-radius10 w-[13%]">
                          <div className="bg-gray_102 h-[49px] rounded-radius10 w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body4"
                          >
                            Nov
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-[6px] rounded-radius10 w-[19%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            variant="body3"
                          >
                            $12,500
                          </Text>
                          <div className="bg-indigo_600 h-[137px] mt-[8px] rounded-radius10 w-[68%]"></div>
                          <Text
                            className="font-normal mt-[9px] not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body4"
                          >
                            Dec
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[9px] items-center justify-start ml-[6px] mt-[74px] rounded-radius10 w-[13%]">
                          <div className="bg-gray_102 h-[88px] rounded-radius10 w-[100%]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body4"
                          >
                            Jan
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-end justify-start w-[100%]">
                  <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[38%]">
                        <div className="flex flex-col gap-[8px] items-center justify-start md:w-[100%] sm:w-[100%] w-[35%]">
                          <Text
                            className="font-medium text-blue_A700 text-left w-[auto]"
                            variant="body1"
                          >
                            Recent Transactions
                          </Text>
                          <Line className="bg-blue_A700 h-[3px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]" />
                        </div>
                      </div>
                      <Line className="bg-gray_300 h-[1px] w-[100%]" />
                    </div>
                  </div>

                  <Slider
                    activeIndex={sliderState}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 2 },
                      1050: { items: 3 },
                    }}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    activeSlideCSS="scale-[1.00]"
                    ref={sliderRef}
                    className="w-[100%]"
                    items={[...Array(1)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="bg-white_A700 flex flex-col gap-[15px] items-center justify-end ml-[10px] mr-[10px] p-[17px] rounded-radius25">
                          <div className="flex flex-col gap-[11px] items-center justify-start mt-[5px] md:w-[100%] sm:w-[100%] w-[98%]">
                            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[97%]">
                              <Text
                                className="font-medium text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Description
                              </Text>
                              <Text
                                className="font-medium md:ml-[0] sm:ml-[0] ml-[143px] text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Transaction ID
                              </Text>
                              <Text
                                className="font-medium md:ml-[0] sm:ml-[0] ml-[43px] text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Type
                              </Text>
                              <Text
                                className="font-medium md:ml-[0] sm:ml-[0] ml-[87px] text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Card
                              </Text>
                              <Text
                                className="font-medium md:ml-[0] sm:ml-[0] ml-[97px] text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Date
                              </Text>
                              <Text
                                className="font-medium md:ml-[0] sm:ml-[0] ml-[162px] text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Amount
                              </Text>
                            </div>
                            <Line className="bg-gray_300 h-[1px] w-[100%]" />
                          </div>
                          <List
                            className="flex-col gap-[15px] grid sm:grid-cols-1 md:grid-cols-3 items-center w-[98%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                                <Button
                                  className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                  size="smIcn"
                                  variant="icbOutlineRed700"
                                >
                                  <Img
                                    src="images/img_arrow.svg"
                                    className=""
                                    onError={(i) =>
                                      (i.target.style.display = "none")
                                    }
                                  />
                                </Button>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[14px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Spotify Subscription
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[32px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  #25138790
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[67px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Shopping
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[53px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  3778 ****
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[59px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  25 Jan, 12:30 AM
                                </Text>
                                <Text
                                  className="font-medium md:ml-[0] sm:ml-[0] ml-[67px] text-left text-red_700 w-[auto]"
                                  variant="body1"
                                >
                                  -$2,500
                                </Text>
                              </div>
                              <Line className="bg-gray_105 h-[1px] w-[100%]" />
                            </div>
                            <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                                <Button
                                  className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                  size="smIcn"
                                  variant="icbOutlineGreen600"
                                >
                                  <Img
                                    src="images/img_arrow_green_600.svg"
                                    className=""
                                    onError={(i) =>
                                      (i.target.style.display = "none")
                                    }
                                  />
                                </Button>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[14px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Freepik Sales
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[83px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  #79128654
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[67px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Transfer
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[62px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  3778 ****
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[59px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  22 Jan, 10:40 PM
                                </Text>
                                <Text
                                  className="font-medium md:ml-[0] sm:ml-[0] ml-[67px] text-green_600 text-left w-[auto]"
                                  variant="body1"
                                >
                                  +$750
                                </Text>
                              </div>
                              <Line className="bg-gray_105 h-[1px] w-[100%]" />
                            </div>
                            <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                                <Button
                                  className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                  size="smIcn"
                                  variant="icbOutlineRed700"
                                >
                                  <Img
                                    src="images/img_arrow.svg"
                                    className=""
                                    onError={(i) =>
                                      (i.target.style.display = "none")
                                    }
                                  />
                                </Button>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[14px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Mobile Service
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[73px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  #96125487
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[67px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Service
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[68px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  3778 ****
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[59px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  20 Jan, 12:26 PM
                                </Text>
                                <Text
                                  className="font-medium md:ml-[0] sm:ml-[0] ml-[67px] text-left text-red_700 w-[auto]"
                                  variant="body1"
                                >
                                  -$150
                                </Text>
                              </div>
                              <Line className="bg-gray_105 h-[1px] w-[100%]" />
                            </div>
                            <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                                <Button
                                  className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                  size="smIcn"
                                  variant="icbOutlineRed700"
                                >
                                  <Img
                                    src="images/img_arrow.svg"
                                    className=""
                                    onError={(i) =>
                                      (i.target.style.display = "none")
                                    }
                                  />
                                </Button>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[14px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Wilson
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[135px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  #48712596
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[67px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Transfer
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[62px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  3778 ****
                                </Text>
                                <Text
                                  className="font-normal md:ml-[0] sm:ml-[0] ml-[59px] not-italic text-bluegray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  15 Jan, 03:29 PM
                                </Text>
                                <Text
                                  className="font-medium md:ml-[0] sm:ml-[0] ml-[67px] text-left text-red_700 w-[auto]"
                                  variant="body1"
                                >
                                  -$1050
                                </Text>
                              </div>
                              <Line className="bg-gray_105 h-[1px] w-[100%]" />
                            </div>
                            <div className="flex flex-col items-center justify-start w-[100%]">
                              <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                                  <Button
                                    className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                    size="smIcn"
                                    variant="icbOutlineGreen600"
                                  >
                                    <Img
                                      src="images/img_arrow_green_600.svg"
                                      className=""
                                      onError={(i) =>
                                        (i.target.style.display = "none")
                                      }
                                    />
                                  </Button>
                                  <Text
                                    className="font-normal md:ml-[0] sm:ml-[0] ml-[14px] not-italic text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    Emilly
                                  </Text>
                                  <Text
                                    className="font-normal md:ml-[0] sm:ml-[0] ml-[141px] not-italic text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    #12548796
                                  </Text>
                                  <Text
                                    className="font-normal md:ml-[0] sm:ml-[0] ml-[67px] not-italic text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    Transfer
                                  </Text>
                                  <Text
                                    className="font-normal md:ml-[0] sm:ml-[0] ml-[62px] not-italic text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    3778 ****
                                  </Text>
                                  <Text
                                    className="font-normal md:ml-[0] sm:ml-[0] ml-[59px] not-italic text-bluegray_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    14 Jan, 10:40 PM
                                  </Text>
                                  <Text
                                    className="font-medium md:ml-[0] sm:ml-[0] ml-[69px] text-green_600 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    +$840
                                  </Text>
                                </div>
                                <Line className="bg-gray_105 h-[1px] w-[100%]" />
                              </div>
                            </div>
                          </List>
                        </div>
                      </React.Fragment>
                    ))}
                    Indicator={({ isActive }) => {
                      if (isActive) {
                        return <div className="" />;
                      }
                      return <div className="" role="button" tabIndex={0} />;
                    }}
                  />
                </div>
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

export default TransactionPage;
