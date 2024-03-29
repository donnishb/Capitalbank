import React from "react";
import { useEffect, useState } from "react";
import { Img, Text, Line, Button, List } from "components";
import { useNavigate } from "react-router-dom";
import NavBar1 from "components/Navbar1.jsx";
import Card from "components/Card.jsx";

const AccountsPage = () => {
  const navigate = useNavigate();
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
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                    onClick={() => navigate("/transaction")}
                  >
                    <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[73%]">
                      <Img
                        src="images/img_glyph.svg"
                        className="h-[25px] w-[25px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Transactions
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] sm:w-[100%] w-[67%]">
                    <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                    <div className="flex flex-row gap-[20px] items-start justify-start w-[77%]">
                      <Img
                        src="images/img_user_25X25.svg"
                        className="h-[25px] w-[25px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                      <Text
                        className="font-medium text-indigo_600 text-left w-[auto]"
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
            <div className="flex flex-col gap-[31px] items-center justify-start md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[83%]">
              <div className="bg-white_A700 border border-gray_300 border-solid flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[20px] w-[100%]">
                <Text
                  className="md:ml-[0] sm:ml-[0] ml-[20px] text-gray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Account
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-center justify-between w-[100%]">
                  <List
                    className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 w-[49%]"
                    orientation="horizontal"
                  ></List>
                  <div className="bg-white_A700 flex flex-row gap-[15px] items-center justify-center p-[25px] sm:px-[20px] rounded-radius25 md:w-[100%] sm:w-[100%] w-[23%]">
                    <Button
                      className="flex h-[70px] items-center justify-center ml-[16px] rounded-radius50 w-[70px]"
                      size="xlIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_clock_70X70.svg"
                        className="h-[30px] w-[30px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start mr-[15px] w-[45%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        My Balance
                      </Text>
                      <Text
                        className="font-semibold text-indigo_600 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        $346,201
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-row gap-[15px] items-center justify-center p-[25px] sm:px-[20px] rounded-radius25 md:w-[100%] sm:w-[100%] w-[23%]">
                    <Button
                      className="flex h-[70px] items-center justify-center ml-[16px] rounded-radius50 w-[70px]"
                      size="xlIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_clock_70X70.svg"
                        className="h-[30px] w-[30px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start mr-[15px] w-[45%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Income
                      </Text>
                      <Text
                        className="font-semibold text-indigo_600 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        $392,000
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-row gap-[15px] items-center justify-center p-[25px] sm:px-[20px] rounded-radius25 md:w-[100%] sm:w-[100%] w-[23%]">
                    <Button
                      className="flex h-[70px] items-center justify-center ml-[16px] rounded-radius50 w-[70px]"
                      size="xlIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_clock_70X70.svg"
                        className="h-[30px] w-[30px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start mr-[15px] w-[45%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Expense
                      </Text>
                      <Text
                        className="font-semibold text-indigo_600 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        $45,799
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-center justify-between mt-[23px] w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[66%]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Last Transaction
                    </Text>
                    <List
                      className="bg-white_A700 flex-col gap-[10px] grid sm:grid-cols-1 md:grid-cols-2 items-center p-[25px] sm:px-[20px] rounded-radius25 w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                        <Button
                          className="flex h-[55px] items-center justify-center w-[55px]"
                          shape="icbRoundedBorder20"
                          size="mdIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_alarm.svg"
                            className="h-[27px] w-[27px]"
                            onError={(i) => (i.target.style.display = "none")}
                          />
                        </Button>
                        <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[25px] md:w-[100%] sm:w-[100%] w-[24%]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body1"
                          >
                            Spotify Subscription
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body2"
                          >
                            14 Mar 2023
                          </Text>
                        </div>
                        <Text
                          className="font-normal md:ml-[0] sm:ml-[0] ml-[31px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          Shopping
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] sm:ml-[0] ml-[43px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          3778 ****
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] sm:ml-[0] ml-[45px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          Pending
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[70px] text-left text-red_700 w-[auto]"
                          variant="body1"
                        >
                          -$150
                        </Text>
                      </div>
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                        <Button
                          className="flex h-[55px] items-center justify-center w-[55px]"
                          shape="icbRoundedBorder20"
                          size="mdIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_group327.svg"
                            className="h-[25px] w-[25px]"
                            onError={(i) => (i.target.style.display = "none")}
                          />
                        </Button>
                        <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[25px] md:w-[100%] sm:w-[100%] w-[18%]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body1"
                          >
                            Mobile Service
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body2"
                          >
                            07 Mar 2023
                          </Text>
                        </div>
                        <Text
                          className="font-normal md:ml-[0] sm:ml-[0] ml-[73px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          Service
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] sm:ml-[0] ml-[58px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          3778 ****
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] sm:ml-[0] ml-[45px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          Completed
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[46px] text-left text-red_700 w-[auto]"
                          variant="body1"
                        >
                          -$340
                        </Text>
                      </div>
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                        <Button
                          className="flex h-[55px] items-center justify-center w-[55px]"
                          shape="icbRoundedBorder20"
                          size="mdIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_group326.svg"
                            className="h-[25px] w-[25px]"
                            onError={(i) => (i.target.style.display = "none")}
                          />
                        </Button>
                        <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[25px] md:w-[100%] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body1"
                          >
                            Emilly Wilson
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body2"
                          >
                            5 Mar 2023
                          </Text>
                        </div>
                        <Text
                          className="font-normal md:ml-[0] sm:ml-[0] ml-[86px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          Transfer
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] sm:ml-[0] ml-[52px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          3778 ****
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] sm:ml-[0] ml-[45px] not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          Completed
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[44px] text-green_600 text-left w-[auto]"
                          variant="body1"
                        >
                          +$780
                        </Text>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[32%]">
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <Text
                          className="text-bluegray_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          My Card
                        </Text>
                        <Text
                          className="common-pointer font-semibold mt-[5px] text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                          onClick={() => navigate("/investments")}
                        >
                          See All
                        </Text>
                      </div>
                      <Card />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-center justify-between mt-[24px] w-[100%]">
                  <div className="block sm:hidden flex flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[66%]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Debit & Credit Overview
                    </Text>
                    <div className="bg-white_A700 flex flex-col items-center justify-end p-[27px] sm:px-[20px] rounded-radius25 w-[100%]">
                      <div className=" flex flex-col gap-[27px] items-center justify-start w-[100%]">
                        <div className=" flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between rounded-radius5 w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body1"
                          >
                            <span className="text-bluegray_801 text-[16px] font-inter">
                              $7,560
                            </span>
                            <span className="text-bluegray_400 text-[16px] font-inter">
                              {" "}
                              Debited &{" "}
                            </span>
                            <span className="text-bluegray_801 text-[16px] font-inter">
                              $5,420
                            </span>
                            <span className="text-bluegray_400 text-[16px] font-inter">
                              {" "}
                              Credited in this Week
                            </span>
                          </Text>
                          <div className="block md:hidden flex flex-row items-center justify-between rounded-radius5 md:w-[100%] sm:w-[100%] w-[25%]">
                            <div className="flex flex-row gap-[10px] items-center justify-start rounded-radius5 w-[41%]">
                              <div className="bg-indigo_600 h-[15px] my-[2px] rounded-radius5 w-[15px]"></div>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Debit
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[10px] items-center justify-start rounded-radius5 w-[45%]">
                              <div className="bg-indigo_200 h-[15px] my-[2px] rounded-radius5 w-[15px]"></div>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Credit
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start rounded-radius10 w-[100%]">
                          <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between w-[100%]">
                              <div className="bg-indigo_600 h-[135px] sm:mt-[0] mt-[99px] rounded-radius10 w-[5%]"></div>
                              <div className="bg-indigo_200 h-[234px] rounded-radius10 w-[5%]"></div>
                              <div className="bg-indigo_600 h-[106px] sm:mt-[0] mt-[128px] rounded-radius10 w-[5%]"></div>
                              <div className="bg-indigo_200 h-[186px] sm:mt-[0] mt-[48px] rounded-radius10 w-[5%]"></div>
                              <div className="bg-indigo_600 h-[102px] sm:mt-[0] mt-[132px] rounded-radius10 w-[5%]"></div>
                              <div className="bg-indigo_200 h-[139px] sm:mt-[0] mt-[95px] rounded-radius10 w-[5%]"></div>
                              <div className="bg-indigo_600 h-[212px] sm:mt-[0] mt-[22px] rounded-radius10 w-[5%]"></div>
                              <div className="bg-indigo_200 h-[123px] sm:mt-[0] mt-[111px] rounded-radius10 w-[5%]"></div>
                              <div className="bg-indigo_600 h-[150px] sm:mt-[0] mt-[84px] rounded-radius10 w-[5%]"></div>
                              <div className="bg-indigo_200 h-[214px] sm:mt-[0] mt-[20px] rounded-radius10 w-[5%]"></div>
                              <div className="bg-indigo_600 h-[158px] sm:mt-[0] mt-[76px] rounded-radius10 w-[5%]"></div>
                              <div className="bg-indigo_200 h-[105px] sm:mt-[0] mt-[129px] rounded-radius10 w-[5%]"></div>
                              <div className="bg-indigo_600 h-[179px] sm:mt-[0] mt-[55px] rounded-radius10 w-[5%]"></div>
                              <div className="bg-indigo_200 h-[216px] sm:mt-[0] mt-[18px] rounded-radius10 w-[5%]"></div>
                            </div>
                            <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[93%]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body3"
                              >
                                Sat
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body3"
                              >
                                Sun
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body3"
                              >
                                Mon
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body3"
                              >
                                Tue
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body3"
                              >
                                Wed
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body3"
                              >
                                Thu
                              </Text>
                              <Text
                                className="font-normal h-[17px] not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body3"
                              >
                                Fri
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[32%]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Invoices Sent
                    </Text>
                    <List
                      className="bg-white_A700 flex-col gap-[21px] grid items-center p-[25px] sm:px-[20px] rounded-radius25 w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-row items-center justify-start w-[100%]">
                        <Button
                          className="flex h-[60px] items-center justify-center w-[60px]"
                          shape="icbRoundedBorder20"
                          size="lgIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_refresh.svg"
                            className="h-[25px] w-[25px]"
                            onError={(i) => (i.target.style.display = "none")}
                          />
                        </Button>
                        <div className="flex flex-col gap-[7px] items-start justify-start ml-[20px] w-[31%]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body1"
                          >
                            Apple Store
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body2"
                          >
                            5h ago
                          </Text>
                        </div>
                        <Text
                          className="font-bold ml-[87px] text-indigo_600 text-left w-[auto]"
                          variant="body1"
                        >
                          $450
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start w-[100%]">
                        <Button
                          className="flex h-[60px] items-center justify-center w-[60px]"
                          shape="icbRoundedBorder20"
                          size="lgIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_group326.svg"
                            className="h-[25px] w-[25px]"
                            onError={(i) => (i.target.style.display = "none")}
                          />
                        </Button>
                        <div className="flex flex-col gap-[7px] items-start justify-start ml-[20px] w-[27%]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body1"
                          >
                            Michael
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body2"
                          >
                            2 days ago
                          </Text>
                        </div>
                        <Text
                          className="font-bold ml-[102px] text-indigo_600 text-left w-[auto]"
                          variant="body1"
                        >
                          $160
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start w-[100%]">
                        <Button
                          className="flex h-[60px] items-center justify-center w-[60px]"
                          shape="icbRoundedBorder20"
                          size="lgIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_volume.svg"
                            className="h-[25px] w-[25px]"
                            onError={(i) => (i.target.style.display = "none")}
                          />
                        </Button>
                        <div className="flex flex-col gap-[7px] items-start justify-start ml-[20px] w-[30%]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body1"
                          >
                            Playstation
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body2"
                          >
                            5 days ago
                          </Text>
                        </div>
                        <Text
                          className="font-bold ml-[84px] text-indigo_600 text-left w-[auto]"
                          variant="body1"
                        >
                          $1085
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start w-[100%]">
                        <Button
                          className="flex h-[60px] items-center justify-center w-[60px]"
                          shape="icbRoundedBorder20"
                          size="lgIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_group326.svg"
                            className="h-[25px] w-[25px]"
                            onError={(i) => (i.target.style.display = "none")}
                          />
                        </Button>
                        <div className="flex flex-col gap-[7px] items-start justify-start ml-[20px] w-[30%]">
                          <Text
                            className="font-medium text-bluegray_900 text-left w-[auto]"
                            variant="body1"
                          >
                            William
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body2"
                          >
                            10 days ago
                          </Text>
                        </div>
                        <Text
                          className="font-bold ml-[102px] text-indigo_600 text-left w-[auto]"
                          variant="body1"
                        >
                          $90
                        </Text>
                      </div>
                    </List>
                  </div>
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

export default AccountsPage;
