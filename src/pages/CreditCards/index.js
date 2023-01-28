import React from "react";
import { useState,useEffect } from "react";
import { Img, Text, Line, Input, Button } from "components";
import { useNavigate } from "react-router-dom";
import NavBar1 from "components/Navbar1.jsx";

const CreditCardsPage = () => {
  const [onLine,setOnline] = useState(navigator.onLine) 
  useEffect(()=>{
   console.log(onLine)
   const handleStatusChange = () =>{
     setOnline(navigator.onLine)
     console.log(onLine)
   }
   window.addEventListener('online',handleStatusChange)
   window.addEventListener('offline',handleStatusChange)
  },[onLine])
  const navigate = useNavigate();

  const [vall,setVall] = useState({
    name: null,
    bank: null,
    number: null,
    amount: null,
    purpose: null
  })
  const [fillall,setFillall] = useState(null)
 
  
  const handleSend = (e)=>{
    if (vall.amount!==null && vall.bank!==null && vall.name!==null && vall.number!==null &&
     vall.purpose!==null ){
   navigate("/tooManyAttempts")}
   else{ e.preventDefault();
    setFillall(true);}
 }

 const handleChange = (e)=>{
   setVall({...vall,[e.target.name]:e.target.value})
   console.log(vall)
 }
   


  return (   <>{onLine?(<>
    <NavBar1 />
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start mx-[auto] pb-[30px] w-[100%]">
        <aside className="md:hidden sm:hidden md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[18%]">
          <div className="flex flex-col gap-[50px] items-center justify-start mb-[364px] mt-[30px] w-[100%]">
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
            <div className="flex flex-col items-start justify-start w-[100%]">
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
              <div className="flex flex-row gap-[34px] items-center justify-start md:w-[100%] sm:w-[100%] w-[78%]">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[6px]" />
                <div className="flex flex-row gap-[20px] items-center justify-start w-[80%]">
                  <Img
                    src="images/img_file_1.svg"
                    className="h-[25px] w-[25px]"
                    onError={i=>i.target.style.display='none'}
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-[auto]"
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
                    onError={i=>i.target.style.display='none'}
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

        <div className="flex flex-col gap-[25px] items-center justify-start md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[83%]">
          <div className="bg-white_A700 border border-gray_300 border-solid flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[20px] w-[100%]">
            <Text
              className="md:ml-[0] sm:ml-[0] ml-[20px] text-gray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Transfer
            </Text>
            
            
            
            
          </div>
          <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
            
            
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-center justify-between mt-[24px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[66%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Send to Recipient's Account
                </Text>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-[27px] sm:px-[20px] rounded-radius25 w-[100%]">
                {fillall?(<div class="inline-flex text-sm text-red-700">Complete all fields !</div>):""}
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-center justify-between md:ml-[0] sm:ml-[0] ml-[3px] mt-[29px] rounded-radius15 w-[100%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start rounded-radius15 md:w-[100%] sm:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                       Recipient's FullName:
                      </Text>
                      <Input
                        onChange={(e)=>{handleChange(e)}}
                        value={vall.name}
                        className="font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-bluegray_900 text-bluegray_900 text-left w-[100%]"
                        wrapClassName="w-[100%]"
                        name="name"
                        required
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-[11px] items-start justify-start rounded-radius15 md:w-[100%] sm:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                       Recipient's Bank:
                      </Text>
                      <Input
                        onChange={(e)=>{handleChange(e)}}
                      value={vall.bank}
                        className="font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-bluegray_900 text-bluegray_900 text-left w-[100%]"
                        wrapClassName="w-[100%]"
                        name="bank"
                        required

                      ></Input>
                    </div>
                  </div>
                  <div className="flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-center justify-between md:ml-[0] sm:ml-[0] ml-[3px] mt-[22px] md:w-[100%] sm:w-[100%] w-[98%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start rounded-radius15 md:w-[100%] sm:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                      Recipient's Account No:
                      </Text>
                      <Input
                        onChange={(e)=>{handleChange(e)}}
                        value={vall.number}
                        className="font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-bluegray_900 text-bluegray_900 text-left w-[100%]"
                        wrapClassName="w-[100%]"
                        type="number"
                        name="number"
                        placeholder="**** **** **** ****"
                        size="md"
                        required
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-[11px] items-start justify-start md:w-[100%] sm:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                   Amount($)
                      </Text>
                      <Input
                        onChange={(e)=>{handleChange(e)}}
                      value={vall.amount}
                       required
                        className="font-normal leading-[normal] not-italic text-[15px] text-bluegray_900 text-left w-[100%]"
                        placeholderClassName="text-bluegray_900"
                        name="amount"
                        type="number"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="h-[24px] mr-[19px] w-[24px]"
                            onError={i=>i.target.style.display='none'}
                          />
                        }
                      />
                    </div>

                    <div className="flex flex-col gap-[11px] items-start justify-start rounded-radius15 md:w-[100%] sm:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body1"
                      >
                       Purpose
                      </Text>
                      <Input
                        onChange={(e)=>{handleChange(e)}}
                       value={vall.purpose}
                        className="font-normal leading-[normal] not-italic p-[0] text-[15px] placeholder:text-bluegray_900 text-bluegray_900 text-left w-[100%]"
                        wrapClassName="w-[100%]"
                        name="purpose"
                        required
                      ></Input>
                    </div>

                  </div>
                  <Button
                    onClick={(e)=>{handleSend(e)}}
                    className="cursor-pointer font-medium leading-[normal] mb-[11px] min-w-[24%] md:ml-[0] sm:ml-[0] ml-[3px] mt-[30px] text-[18px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillIndigo600"
                  >
                    Send
                  </Button>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </>):(<>Offline</>)}</>
    
  );
};

export default CreditCardsPage;
