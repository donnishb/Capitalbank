import {Img} from "./Img"
import {Text} from "./Text"
import { Input } from "./Input";
function Card() {
    return ( <div className="flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-center justify-between w-[100%]">
                    
    <div className="bg-indigo_500 flex flex-col gap-[33px] items-center justify-end pt-[24px] rounded-radius25 md:w-[100%] sm:w-[100%] w-[70%]">
      <div className="flex flex-col gap-[29px] items-start justify-start md:w-[100%] sm:w-[100%] w-[87%]">
        <div className="flex flex-row items-start justify-around w-[100%]">
          <div className="flex flex-col items-start justify-start w-[23%]">
            <Text
              className="font-lato not-italic text-left text-white_A700 w-[auto]"
              variant="body5"
            >
              Balance
            </Text>
            <Text
              className="font-inter font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
              as="h4"
              variant="h4"
            >
             $346,201.00
            </Text>
          </div>
          <Img
            src="images/img_chipcard.png"
            className="h-[34px] md:h-[auto] sm:h-[auto] object-cover w-[34px]"
            onError={i=>i.target.style.display='none'}
            
          />
        </div>
        <div className="flex flex-row gap-[59px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[2px] md:w-[100%] sm:w-[100%] w-[76%]">
          <div className="flex flex-col items-center justify-start w-[44%]">
            <Text
              className="not-italic text-left text-white_A700_b2 w-[auto]"
              variant="body5"
            >
              CARD HOLDER
            </Text>
            <Text
              className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
              variant="body2"
            >
               Jennifer Harwell
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-[33%]">
            <Text
              className="not-italic text-left text-white_A700_b2 w-[auto]"
              variant="body5"
            >
              VALID THRU
            </Text>
            <Text
              className="font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
              variant="body2"
            >
              12/26
            </Text>
          </div>
        </div>
      </div>
      <Input
        className="font-normal leading-[normal] not-italic p-[0] sm:text-[18px] md:text-[20px] text-[22px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
        wrapClassName="flex w-[82%]"
        name="Group319 One"
        placeholder="3778 **** **** 1234"
        suffix={
          <Img
            src="images/img_contrast.svg"
            className="ml-[35px] my-[auto]"
            onError={i=>i.target.style.display='none'}
          />
        }
        
        size="lg"
        variant="GradientWhiteA70026WhiteA70026"
      ></Input>
    </div>
  </div> );
}

export default Card;