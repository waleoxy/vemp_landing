import MaxWidthWrapper from './max-width-wrapper';
import launchimg from '../assets/images/launchimg.png';
import { Button } from './ui/button';

const Launch = () => {
  return (
    <div className="bg-white h-full py-6 md:py-0 md:h-[570px]">
      <MaxWidthWrapper className="h-full flex items-end ">
        <section className=" grid grid-cols-1 mt-6 md:mt-0 md:grid-cols-7 h-full md:h-[413px] gap-10 w-full">
          <div className="flex flex-col w-full ml-6 col-span-4 my-auto">
            <div className="flex flex-col items-start">
              <h5 className="text-xl font-semibold text-[#352CAB] leading-[30px]">What are you waiting for?</h5>
              <h2 className="text-[40px] font-bold leading-[60px] text-[#0D121F] my-4">
                Ready to transform your <br />
                school's management experience?
              </h2>
              <p className="text-xl leading-[30px] font-normal text-[#596780] max-w-[80%] mt-4">
                Join the hundreds of schools already benefiting from Velonze. Elevate your school management to the next
                level!
              </p>
            </div>
            <Button className="text-white font-semibold leading-6 h-[52px] w-[187px] bg-[#352CAB] rounded-full mt-6 ">
              Get Demo
            </Button>
          </div>
          <div className=" h-[450px] rounded-2xl-300 col-span-3 md:w-[654px] ">
            <img src={launchimg} className=" bottom-0 right-0 h-fit md:w-full rounded-2xl object-contain" />
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Launch;
