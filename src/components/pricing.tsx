import { Check } from 'lucide-react';
import MaxWidthWrapper from './max-width-wrapper';
import { Button } from './ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { pricingData } from '@/mock-data/pricing-data';
import { useModal } from '@/hook/useModal';

const Pricing = () => {
  const [current, setCurrent] = useState('basic');
  const { setOpen } = useModal();

  const pricingFeatures = pricingData.find((pricing) => pricing.title === current);

  return (
    <div className="w-full h-full py-4 md:py-8 md:min-h-[880px] bg-[#F5F4FB] ">
      <MaxWidthWrapper className="flex items-center justify-center h-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12 ml-3">
          <div className="h-full flex flex-col w-full space-y-10 items-start">
            <div className=" flex flex-col items-start h-[162px]">
              <h5 className="text-xl font-semibold text-[#352CAB] leading-[30px]">Pricing you can trust</h5>
              <h2 className="text-clamp4xl font-bold leading-[60px] text-[#0D121F] my-2  w-4/6">
                Transparent pricing All day, everyday
              </h2>
            </div>
            <div className="flex flex-col gap-9  max-w-[560px] w-full">
              <div className="border w-full h-12 mt-9 md:mt-0 md:h-14 bg-[#DCDBEE] outline-none rounded-full flex">
                <Button
                  onClick={() => setCurrent('basic')}
                  className={cn(
                    'h-full w-[33.7%] bg-transparent ring-0 hover:text-violet-500 text-[#352CAB] text-base cursor-pointer',
                    {
                      'bg-primary rounded-full text-white pointer-events-none': current === 'basic'
                    }
                  )}
                >
                  Basic
                </Button>
                <Button
                  onClick={() => setCurrent('standard')}
                  className={cn(
                    'h-full   w-[33.7%] bg-transparent ring-0 hover:text-violet-500 text-[#352CAB] text-base cursor-pointer',
                    {
                      'bg-primary rounded-full text-white pointer-events-none': current === 'standard'
                    }
                  )}
                >
                  Standard
                </Button>
                <Button
                  onClick={() => setCurrent('premium')}
                  className={cn(
                    'h-full  w-[33.7%] bg-transparent ring-0 hover:text-violet-500 text-[#352CAB] text-base cursor-pointer',
                    {
                      'bg-primary rounded-full text-white pointer-events-none': current === 'premium'
                    }
                  )}
                >
                  Premium
                </Button>
              </div>
              <p className="text-2xl font-bold leading-9 text-[#0D121F]">
                Tailored for large schools or institutions with complex needs.
              </p>
              <div className="flex flex-col mt-0 gap-6 ">
                {pricingFeatures?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-5 w-full">
                    <span className="h-7 w-7 rounded-[14px] bg-[#352CAB] justify-center items-center">
                      <Check className="h-4 w-4 text-white mx-auto mt-1 font-semibold" />
                    </span>
                    <p className="text-lg w-[540px] text-wrap font-[500] leading-[27px] text-[#596780]">{feature}</p>
                  </div>
                ))}
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
                    <h1 className="text-6xl font-semibold leading-[72px] text-[#0D121F] pt-3">
                      {pricingFeatures?.price}
                      <span className="text-base font-[500] leading-6 text-[#596780]"> per month</span>
                    </h1>
                  </div>
                </div>

                <div className="flex flex-col w-full space-y-3">
                  <Button
                    onClick={setOpen}
                    className="h-12 max-w-[422px] text-base font-semibold rounded-md leading-6 text-white bg-[#352CAB] hover:border hover:border-primary  hover:text-[#352CAB]"
                  >
                    Get started
                  </Button>
                  <Button
                    onClick={setOpen}
                    className="h-12 max-w-[422px] text-base font-semibold rounded-md leading-6 text-[#352CAB] bg-[#DCDBEE] hover:border hover:border-primary"
                  >
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
