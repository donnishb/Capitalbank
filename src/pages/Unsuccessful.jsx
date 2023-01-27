import React from "react";
import NavBar1 from "components/Navbar1";
import { Img, Text, List,} from "components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CreditCardsPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <NavBar1 />
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start mx-[auto] pb-[30px] w-[100%]">
        <aside className="md:hidden sm:hidden md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[18%]">
          <div className="flex flex-col gap-[50px] items-center justify-start mb-[364px] mt-[30px] w-[100%]">
            <div className="flex flex-row items-center justify-center md:w-[100%] sm:w-[100%] w-[65%]">
              <Img
                src="images/img_logo_indigo_600.png"
                className="h-[40px] md:h-[auto] sm:h-[auto] object-cover w-[40px]"
                alt="LOGO"
              />
              <Text
               
                className="font-bold ml-[4px] text-indigo_600 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                 <Link to="/">
                CapitalBank
                </Link>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[100%]">
              
              
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                onClick={() => navigate("/tooManyAttempts")}
              >
                <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[56%]">
                  <Img
                    src="images/img_service1.svg"
                    className="h-[25px] w-[25px]"
                    alt="serviceOne"
                  />
                  <Text
                    style={{color:"red"}}
                    className="font-medium text-blue_400 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Error
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
              Try again after resolve
            </Text>
            
            
            
            
          </div>
          <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-center justify-between mt-[24px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[100%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Transaction unsuccessful
                </Text>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-[27px] sm:px-[20px] rounded-radius25 w-[100%]">
                  <Text
                    className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:ml-[0] ml-[3px] sm:mx-[0] not-italic text-bluegray_400 text-left sm:w-[100%] w-[94%]"
                    variant="body1"
                    style={{color:"red"}}
                  >
                    Hello, due to too many login attempts your account has been suspended from making transactions at the moment please contact customer support/visit the nearest branch for assistance
                  </Text>
                  
                  
                  
                </div>
              </div>
              
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-center justify-between mt-[25px] w-[100%]">

            
              <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[100%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Card Expense Statistics
                </Text>
                <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-end p-[28px] sm:px-[20px] rounded-radius25 w-[100%]">
                  <Img
                    src="images/img_group346chart.svg"
                    className="h-[186px] mt-[2px] w-[64%]"
                    alt="Group346Chart"
                  />
                  <List
                    className="flex-col gap-[14px] grid items-center w-[86%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[39%]">
                        <div className="bg-indigo_100 h-[15px] rounded-radius50 w-[15px]"></div>
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          DBL Bank
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[40%]">
                        <div className="bg-indigo_500 h-[15px] rounded-radius50 w-[15px]"></div>
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          BRC Bank
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[41%]">
                        <div className="bg-indigo_600 h-[15px] rounded-radius50 w-[15px]"></div>
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          ABM Bank
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-start justify-start w-[41%]">
                        <div className="bg-indigo_200 h-[15px] rounded-radius50 w-[15px]"></div>
                        <Text
                          className="font-medium text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          MCP Bank
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCardsPage;
