import React from "react";
import { useState } from "react";
import { Img, Text, Line, Input, Button, List } from "components";
import NavBar from "components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Homes() {
  const navigate = useNavigate();
  const [inputvalue, setInputvalue] = React.useState("");
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
      {" "}
      {onLine ? (
        <>
          <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start mx-[auto] w-[100%]">
            <aside className="md:hidden sm:hidden md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[18%]">
              <div className="bg_A700 flex flex-col gap-[50px] items-center justify-start py-[30px] w-[100%]">
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
                    onClick={() => navigate("/")}
                  ></div>

                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                    onClick={() => navigate("/creditcards")}
                  ></div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                    onClick={() => navigate("/loan")}
                  ></div>
                  <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] sm:w-[100%] w-[64%]">
                    <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[75%]">
                      <Img
                        src="images/img_call.svg"
                        className="h-[25px] w-[25px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                      <Text
                        className="font-medium text-indigo_600 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Services
                      </Text>
                    </div>
                  </div>

                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[17px] w-[100%]"
                    onClick={() => navigate("/services")}
                  >
                    <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[23px] md:w-[100%] sm:w-[100%] w-[50%]">
                      <Img
                        src="images/img_signal.svg"
                        className="h-[25px] w-[25px]"
                        onError={(i) => (i.target.style.display = "none")}
                      />
                      <Text
                        className="font-medium text-bluegray_400 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Contact
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mb-[334px] w-[100%]"></div>
              </div>
            </aside>
            <div className="flex flex-col gap-[31px] items-center justify-start md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[83%]">
              <NavBar />
              <div
                className="bg-white_A700 border border-gray_300 border-solid flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[20px] w-[100%]"
                style={{ backgroundImage: "url(images/glass1.jpeg)" }}
              >
                <Text
                  className="md:ml-[0] sm:ml-[0] ml-[20px] text-gray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Welcome
                </Text>

                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                  wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[482px] my-[5px] sm:mt-[0] sm:mx-[0] sm:w-[100%] w-[23%]"
                  name="GroupEight"
                  style={{ display: "none" }}
                  shape="srcCircleBorder25"
                  size="smSrc"
                  variant="srcFillGray101"
                ></Input>
                <Button
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="flex h-[50px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[30px] md:mt-[0] sm:mt-[0] my-[5px] rounded-radius50 w-[50px]"
                  size="mdIcn"
                  variant="icbFillGray102"
                >
                  Register
                </Button>
                <Button
                  onClick={() => {
                    navigate("/signin");
                  }}
                  className="flex h-[50px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[30px] md:mt-[0] sm:mt-[0] my-[5px] rounded-radius50 w-[50px]"
                  size="mdIcn"
                  variant="icbFillGray102"
                >
                  Login
                </Button>
                <Img
                  src="images/img_user_70X70.svg"
                  className="h-[60px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[35px] rounded-radius50 w-[60px]"
                  onError={(i) => (i.target.style.display = "none")}
                />
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
                          src="images/img_location.svg"
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
                          Life Insurance
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          Bank with us for Insurance Benefits
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
                          Shopping
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          Online shopping and payments
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
                          src="images/img_checkmark.svg"
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
                          Secure
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body1"
                        >
                          CapitalOneBank provides safe banking
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-col gap-[28px] items-start justify-start w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Bank Services List
                  </Text>
                  <List
                    className="flex-col gap-[20px] grid sm:grid-cols-1 md:grid-cols-3 items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[15px] rounded-radius20 w-[100%]">
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="icbRoundedBorder20"
                        size="lgIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_bag.svg"
                          className="h-[25px] w-[25px]"
                          onError={(i) => (i.target.style.display = "none")}
                        />
                      </Button>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[20px] md:w-[100%] sm:w-[100%] w-[16%]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          variant="body1"
                        >
                          Checking accounts
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Allows you to easily deposit and withdraw money for
                          daily transactions.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[85px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Money can be deposited at banks through direct deposit
                          and via automated teller machines (ATMs) through
                          electronic transfer.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[82px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Account holders can withdraw funds via banks and ATMs,
                          by writing checks, or by using electronic debit or
                          credit cards paired with their accounts.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[82px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          It’s important to keep track of checking account fees,
                          which are assessed for overdrafts.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[15px] rounded-radius20 w-[100%]">
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="icbRoundedBorder20"
                        size="lgIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_graph1.svg"
                          className=""
                          onError={(i) => (i.target.style.display = "none")}
                        />
                      </Button>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[20px] md:w-[100%] sm:w-[100%] w-[16%]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          variant="body1"
                        >
                          Savings accounts
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Savings accounts have some limitations on how often
                          you can withdraw funds, but generally offer
                          exceptional flexibility that’s ideal for building an
                          emergency fund.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[85px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Beyond keeping your funds safe, savings accounts also
                          earn interest.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[82px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Savings accounts offer one of the simplest ways to
                          earn interest on the money you have.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[82px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          High interest rates than a regular checking account,
                          while still making it easy to spend and withdraw
                          money.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[15px] rounded-radius20 w-[100%]">
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="icbRoundedBorder20"
                        size="lgIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_user_70X70.svg"
                          className="h-[25px] w-[25px]"
                          onError={(i) => (i.target.style.display = "none")}
                        />
                      </Button>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[20px] md:w-[100%] sm:w-[100%] w-[17%]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          variant="body1"
                        >
                          Debit and credit cards
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Convenience to make online purchases and pay bills
                          with card.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[73px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Ease of use
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[82px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Safer than cash
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[82px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Good credit score makes you eligible for
                          lower-interest-rate loans.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[15px] rounded-radius20 w-[100%]">
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="icbRoundedBorder20"
                        size="lgIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_checkmark_60X60.svg"
                          className="h-[25px] w-[25px]"
                          onError={(i) => (i.target.style.display = "none")}
                        />
                      </Button>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[20px] md:w-[100%] sm:w-[100%] w-[16%]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          variant="body1"
                        >
                          Life Insurance
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Life Insurance Payouts Are Tax-Free
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[85px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Tax-free dividends
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[82px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Policies Can Supplement Your Retirement Savings
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[82px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Tax-deferred growth of cash value
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[15px] rounded-radius20 w-[100%]">
                      <Button
                        className="flex h-[60px] items-center justify-center w-[60px]"
                        shape="icbRoundedBorder20"
                        size="lgIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_question_60X60.svg"
                          className="h-[25px] w-[25px]"
                          onError={(i) => (i.target.style.display = "none")}
                        />
                      </Button>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[20px] md:w-[100%] sm:w-[100%] w-[16%]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          variant="body1"
                        >
                          Business loans
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Business cash advances and cash flow loans.
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[85px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Invoice financing
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[82px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          Microloans
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[82px] md:w-[100%] sm:w-[100%] w-[12%]">
                        <Text
                          className="font-medium text-bluegray_900 text-left w-[auto]"
                          variant="body1"
                        ></Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body2"
                        >
                          SBA loans
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>Offline</div>
        </>
      )}{" "}
    </>
  );
}

export default Homes;
