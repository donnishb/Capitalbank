import React from "react";
import NavBar1 from "components/Navbar1.jsx";
import { Img, Text, Line, Input, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const LoanPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
    <NavBar1 />
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start mx-[auto] w-[100%]">
        <aside className="md:hidden sm:hidden md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[18%]">
          <div className="bg-white_A700 flex flex-col gap-[50px] items-center justify-start py-[30px] w-[100%]">
            <div className="flex flex-row items-center justify-center md:w-[100%] sm:w-[100%] w-[65%]">
              <Img
                src="images/img_logo_indigo_600.png"
                className="h-[40px] md:h-[auto] sm:h-[auto] object-cover w-[40px]"
                onError={i=>i.target.style.display='none'}
              />
              <Text
                className="font-bold ml-[4px] text-indigo_600 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                CapitalBank
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
                    onError={i=>i.target.style.display='none'}
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
                    onError={i=>i.target.style.display='none'}
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
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/accounts")}
              >
                <div className="flex flex-row gap-[20px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[59%]">
                  <Img
                    src="images/img_user.svg"
                    className="h-[25px] w-[25px]"
                    onError={i=>i.target.style.display='none'}
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
                    onError={i=>i.target.style.display='none'}
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
                    onError={i=>i.target.style.display='none'}
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

              <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] sm:w-[100%] w-[55%]">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <div className="flex flex-row gap-[20px] items-start justify-start w-[71%]">
                  <Img
                    src="images/img_question_25X25.svg"
                    className="h-[25px] w-[25px]"
                    onError={i=>i.target.style.display='none'}
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-[auto]"
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
                    onError={i=>i.target.style.display='none'}
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
              Loan
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
              wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[533px] my-[5px] sm:mt-[0] sm:mx-[0] sm:w-[100%] w-[23%]"
              name="GroupEight"
             style={{display:"none"}}
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#888ea2"
                    className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              shape="srcCircleBorder25"
              size="smSrc"
              variant="srcFillGray101"
            ></Input>
            <Button
              className="flex h-[50px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[30px] md:mt-[0] sm:mt-[0] my-[5px] rounded-radius50 w-[50px]"
              size="mdIcn"
              variant="icbFillGray102"
            >
              
            </Button>
            <Button
              style={{color:"red"}}
              className="flex h-[50px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[30px] md:mt-[0] sm:mt-[0] my-[5px] rounded-radius50 w-[50px]"
              size="mdIcn"
              variant="icbFillGray102"
              onClick={()=>{navigate("/")}}
            >
              
             Logout
            </Button>
            
          </div>
          <div className="flex flex-col gap-[24px] items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-col items-center justify-start mx-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[99%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_user_70X70.svg"
                      className="h-[30px] w-[30px]"
                      onError={i=>i.target.style.display='none'}
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[59%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Personal Loans
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $50,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-start mx-[0] p-[21px] sm:px-[20px] rounded-radius25 w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start my-[4px] w-[100%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_bag.svg"
                      className="h-[30px] w-[30px]"
                      onError={i=>i.target.style.display='none'}
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[61%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Corporate Loans
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $100,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-start mx-[0] p-[25px] sm:px-[20px] rounded-radius25 w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start w-[100%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_graph1.svg"
                      className="h-[30px] w-[30px]"
                      onError={i=>i.target.style.display='none'}
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[60%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Business Loans
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      $500,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-start mx-[0] p-[21px] sm:px-[20px] rounded-radius25 w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-start my-[4px] w-[100%]">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-radius50 w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_airplane.svg"
                      className="h-[30px] w-[30px]"
                      onError={i=>i.target.style.display='none'}
                    />
                  </Button>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[63%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body1"
                    >
                      Custom Loans
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Choose Money
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
              <Text
                className="text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                  Loans Overview
              </Text>
              <div className="bg-white_A700 flex flex-col gap-[12px] items-start justify-end p-[21px] sm:px-[20px] rounded-radius25 w-[100%]">
                <List
                  className="flex-col gap-[15px] grid sm:grid-cols-1 md:grid-cols-5 items-center md:ml-[0] sm:ml-[0] ml-[9px] w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        SL No
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[54px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Loan Money
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[74px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Income
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[76px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Duration
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[105px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Interest rate
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] sm:ml-[0] ml-[53px] text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                        Installment
                      </Text>
                      
                    </div>
                    <Line className="bg-gray_103 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        01.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[78px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $100,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[96px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[109px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        8 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[99px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        12%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[117px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $2,000 / month
                      </Text>
                      
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        02.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[76px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $500,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[94px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $250,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[100px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        36 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[89px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        10%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[116px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $8,000 / month
                      </Text>
                      
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        03.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[75px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $900,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[94px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[109px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        12 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[92px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        12%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[117px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $5,000 / month
                      </Text>
                      
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        04.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[75px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $50,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[104px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[109px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        25 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[90px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        5%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[124px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $2,000 / month
                      </Text>
                     
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        05.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[76px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $50,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[104px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[109px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        5 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[99px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        16%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[116px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $10,000 / month
                      </Text>
                      
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        06.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[76px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $80,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[104px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $25,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[110px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        14 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[91px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        8%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[124px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $2,000 / month
                      </Text>
                      
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        07.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[78px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $12,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[106px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $5,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[120px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        9 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[99px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        13%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[116px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $500 / month
                      </Text>
                      
                    </div>
                    <Line className="bg-gray_105 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start rounded-radius175 md:w-[100%] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        08.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[76px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $160,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[96px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $100,800
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[102px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        3 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[99px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        12%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] sm:ml-[0] ml-[117px] not-italic text-bluegray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        $900 / month
                      </Text>
                      
                    </div>
                    <Line className="bg-gray_103 h-[1px] w-[100%]" />
                  </div>
                </List>
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[9px] mr-[auto] md:w-[100%] sm:w-[100%] w-[84%]">
                  <Text
                    className="font-medium text-left text-red_700 w-[auto]"
                    variant="body1"
                  >
                    Total
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] sm:ml-[0] ml-[62px] text-left text-red_700 w-[auto]"
                    variant="body1"
                  >
                    $125,0000
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] sm:ml-[0] ml-[85px] text-left text-green_700 w-[auto]"
                    variant="body1"
                  >
                    $350,000
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] sm:ml-[0] ml-[417px] text-left text-red_700 w-[auto]"
                    variant="body1"
                  >
                    $50,000 / month
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanPage;
