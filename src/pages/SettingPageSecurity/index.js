import React from "react";

import {  Text, Input, Img, Button, Line, Switch } from "components";
import Sidebar from "components/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const SettingPageSecurityPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="md:hidden sm:hidden md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[18%]">
          <div className="bg-white_A700 flex flex-col gap-[50px] items-center justify-start py-[30px] w-[100%]">
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
                    alt="home"
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
                    alt="Glyph"
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
                    alt="user"
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
              <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <div className="flex flex-row gap-[20px] items-center justify-start w-[80%]">
                  <Img
                    src="images/img_upload.svg"
                    className="h-[25px] w-[25px]"
                    alt="upload"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-[auto]"
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
                    alt="file"
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
                    alt="question"
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
                    alt="settings"
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
                Security
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[482px] my-[5px] sm:mt-[0] sm:mx-[0] sm:w-[100%] w-[23%]"
                name="GroupEight"
                placeholder="Search for something"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer mr-[15px] my-[auto]"
                    alt="search"
                  />
                }
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
                <Img
                  src="images/img_settings_50X50.svg"
                  className="h-[25px] w-[25px]"
                  alt="settings One"
                />
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
              <Img
                src="images/img_ellipse1.png"
                className="h-[60px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[35px] rounded-radius50 w-[60px]"
                alt="EllipseOne"
              />
            </div>
            <div className="bg-white_A700 flex flex-col items-start justify-end p-[30px] sm:px-[20px] rounded-radius25 md:w-[100%] sm:w-[100%] w-[94%]">
              <div className="flex flex-col justify-start mt-[7px] w-[100%]">
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[16px] md:w-[100%] sm:w-[100%] w-[40%]">
                  <Text
                    className="common-pointer font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body1"
                    onClick={() => navigate("/profile")}
                  >
                    Edit Profile
                  </Text>
                  <Text
                    className="common-pointer font-medium sm:ml-[0] ml-[72px] text-bluegray_400 text-left w-[auto]"
                    variant="body1"
                    onClick={() => navigate("/settingpagepreferences")}
                  >
                    Preferences
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start sm:ml-[0] ml-[51px] md:w-[100%] sm:w-[100%] w-[28%]">
                    <Text
                      className="font-medium text-indigo_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Security
                    </Text>
                    <Line className="bg-indigo_600 h-[3px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]" />
                  </div>
                </div>
                <Line className="bg-gray_300 h-[1px] w-[100%]" />
              </div>
              <div className="flex flex-col gap-[19px] items-start justify-start mt-[37px] md:w-[100%] sm:w-[100%] w-[39%]">
                <Text
                  className="font-medium text-bluegray_900 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Two-factor Authentication
                </Text>
                <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start w-[100%]">
                  <Switch value={false} className="w-[14%]" />
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    variant="body1"
                  >
                    Enable or disable two factor authentication
                  </Text>
                </div>
                
              </div>
              
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[19%] md:ml-[0] sm:ml-[0] ml-[860px] mt-[30px] text-[18px] text-center text-white_A700 w-[max-content]"
                shape="RoundedBorder15"
                size="lg"
                variant="FillIndigo600"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingPageSecurityPage;
