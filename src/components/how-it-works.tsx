import MaxWidthWrapper from './max-width-wrapper';
import howItWorksImg from '../assets/images/howItWorks.png';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const HowItWorksPg = () => {
  const ref = useRef(null);

  const isInView = useInView(ref);

  return (
    <div ref={ref} className="overflow-x-hidden w-full h-full md:h-[788px] bg-[#F5F4FB] ">
      <MaxWidthWrapper className="flex mt-3 md:mt-0 md:items-center md:justify-center h-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-12">
          <div
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s'
            }}
            className="h-[68%]"
          >
            <img src={howItWorksImg} alt="" className="object-contain" />
          </div>
          <div
            style={{
              transform: isInView ? 'none' : 'translateX(400px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s'
            }}
            className=" h-full md:h-[538px] flex flex-col w-full ml-6"
          >
            <div className="flex-1 flex flex-col items-start h-[228px]">
              <h5 className="text-xl font-semibold text-[#0B7077] leading-[30px]">How it works</h5>
              <h2 className="text-clamp4xl font-bold leading-tight md:leading-[60px] text-[#0D121F] my-4">
                Few Easy Steps and Done
              </h2>
              <p className="text-clampxl leading-[30px] font-normal text-[#596780] max-w-[80%] mt-0 md:mt-4">
                In just few easy step, you are all set to manage school operations. Manage all processes with Velonze
                all in one place.
              </p>
            </div>
            <div className="flex-1 flex items-center  bg-[#FAFAFA] h-[288px]]">
              <div className="flex flex-col px-2 md:px-7 mt-6 md:mt-0  ">
                <div className="h-12 flex items-center space-x-5">
                  <p className="h-12 w-12 rounded-full bg-[#352CAB] text-white flex items-center justify-center text-xl">
                    1
                  </p>
                  <p className="text-xl font-[500] leading-[30px] text-[#596780]">Sign up and customize</p>
                </div>
                <div className="h-[32px] bg-[#0B7077] w-0.5 ml-[22px] " />
                <div className="h-12 flex items-center space-x-5">
                  <p className="h-12 w-12 rounded-full bg-[#352CAB] text-white flex items-center justify-center text-xl">
                    2
                  </p>
                  <p className="text-xl font-[500] leading-[30px] text-[#596780]">Manage students and staff</p>
                </div>
                <div className="h-[32px] bg-[#D2E6E4] w-0.5 ml-[22px] mt-0 " />
                <div className="h-12 flex items-center space-x-5">
                  <p className="h-12 w-12 rounded-full bg-[#352CAB26] text-[#352CAB] flex items-center justify-center text-xl">
                    3
                  </p>
                  <p className="text-xl font-[500] leading-[30px] text-[#596780]">
                    Streamline communication and operation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HowItWorksPg;
