import { Check } from 'lucide-react';
import MaxWidthWrapper from './max-width-wrapper';
import { Button } from './ui/button';

const Pricing = () => {
  return (
    <div className="w-full h-full py-4 md:py-0 md:h-[880px] bg-[#F5F4FB] ">
      <MaxWidthWrapper className="flex items-center justify-center h-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12 ml-7">
          <div className="h-[640px] flex flex-col w-full justify-between items-start">
            <div className=" flex flex-col items-start h-[162px]">
              <h5 className="text-xl font-semibold text-[#352CAB] leading-[30px]">Pricing you can trust</h5>
              <h2 className="text-[40px] font-bold leading-[60px] text-[#0D121F] my-2  w-4/6">
                Transparent pricing All day, everyday
              </h2>
            </div>
            <div className="flex flex-col gap-9 h-[414px] max-w-[540px]">
              <div className="w-full h-12 mt-2 md:mt-0 md:h-14 bg-[#DCDBEE] rounded-full flex">
                <Button className="h-full w-[33.7%] bg-transparent text-[#352CAB] text-base pointer-events-none">
                  Basic
                </Button>
                <Button className="h-full w-[33.7%] bg-transparent text-[#352CAB] text-base pointer-events-none">
                  Standard
                </Button>
                <Button className="h-full w-[33.7%] rounded-full text-white text-base pointer-events-none font-semibold leading-6">
                  Premium
                </Button>
              </div>
              <p className="text-2xl font-bold leading-9 text-[#0D121F]">
                Tailored for large schools or institutions with complex needs.
              </p>
              <div className="flex flex-col mt-0 gap-9 ">
                <div className="flex items-center space-x-3">
                  <span className="h-6 w-6 rounded-full bg-[#352CAB] justify-center items-center">
                    <Check className="h-4 w-4 text-white mx-auto mt-1 font-semibold" />
                  </span>
                  <p className="text-lg font-[500] leading-[27px] text-[#596780]">
                    All features of the Standard Plan, plus:
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="h-6 w-6 rounded-full bg-[#352CAB] justify-center items-center">
                    <Check className="h-4 w-4 text-white mx-auto mt-1 font-semibold" />
                  </span>
                  <p className="text-lg font-[500] leading-[27px] text-[#596780]">Customizable solutions</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="h-6 w-6 rounded-full bg-[#352CAB] justify-center items-center">
                    <Check className="h-4 w-4 text-white mx-auto mt-1 font-semibold" />
                  </span>
                  <p className="text-lg font-[500] leading-[27px] text-[#596780]">Priority support</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="h-6 w-6 rounded-full bg-[#352CAB] justify-center items-center">
                    <Check className="h-4 w-4 text-white mx-auto mt-1 font-semibold" />
                  </span>
                  <p className="text-lg font-[500] leading-[27px] text-[#596780]">Dedicated account manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[380px] max-w-[486px] w-full ml-0 md:ml-6 my-auto ">
            <div className="h-full  flex items-center  bg-white rounded-2xl">
              <div className="flex flex-col px-8 items-start w-full h-full justify-evenly">
                <div className=" flex flex-col space-y-3 pt-2">
                  <Button className="h-7 w-[76px] bg-[#DCDBEE] pointer-events-none text-sm font-[500] leading-5 text-[#352CAB]">
                    Popular
                  </Button>
                  <div>
                    <h1 className="text-6xl font-semibold leading-[72px] text-[#0D121F]">
                      $499
                      <span className="text-base font-[500] leading-6 text-[#596780]"> per month</span>
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col w-full space-y-3">
                  <Button className="h-12 max-w-[422px] text-base font-semibold rounded-md leading-6 text-white bg-[#352CAB]">
                    Get started
                  </Button>
                  <Button className="h-12 max-w-[422px] text-base font-semibold rounded-md leading-6 text-[#352CAB] bg-[#DCDBEE]">
                    Chat to sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Pricing;
