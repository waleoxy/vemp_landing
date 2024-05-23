import { ArrowLeft, ArrowRight } from 'lucide-react';
import MaxWidthWrapper from './max-width-wrapper';
import { Button } from './ui/button';
import testimonial1 from '../assets/images/testimonial1.png';
import testimonial2 from '../assets/images/testimonial2.png';
import testimonial3 from '../assets/images/testimonial3.png';

const Testimonials = () => {
  return (
    <div className="bg-white h-full md:h-[913px]">
      <MaxWidthWrapper>
        <div className="flex justify-center items-center h-full mt-6 md:mt-0 md:h-[913px]">
          <div className="flex flex-col my-auto space-y-10 ">
            <div className="flex flex-col items-center space-y-3">
              <h5 className="text-xl font-semibold leading-[30px] text-[#352CAB]">Satisfied clientele</h5>
              <h2 className="text-[40px] font-bold leading[60px] text-[#0D121F] ">Our Users' Kind Words</h2>
              <h5 className="text-xl font-normal leading-[30px] text-[#596780] pt-4">What our users have to say</h5>
            </div>
            <div className="flex flex-col items-center space-y-12 mt-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white max-w-[1200px] h-full md:h-[387px] px-5 gap-x-5">
                <article className="max-w-[384px] h-[387px]  bg-[#F5F4FB59] flex flex-col space-y-10 justify-center rounded-xl shadow-md px-5 ">
                  <div className=" max-w-[320px] max-h-[207px] flex flex-col space-y-3 items-start">
                    <h5 className="text-[18px] font-semibold leading-[27px] text-[#0D121F] ">Easy communication!</h5>
                    <p className="text-[16px] font-[500] leading-6 text-[#596780] ">
                      As a parent, staying connected with my child's school has never been easier, thanks to Velonze. I
                      can access real-time updates on grades, attendance, and upcoming events, keeping me informed and
                      involved in my child's education every step of the way.
                    </p>
                  </div>
                  <div className="flex space-x-6 items-center">
                    <img src={testimonial1} alt="" className="max-w-[70px] h-[70px] rounded-xl" />
                    <div className="flex flex-col ">
                      <h5 className="text-lg font-bold leading-[27px] text-[#0D121F] ">David L</h5>
                      <h6 className="text-sm font-normal leading-[21px] text-[#596780] ">Parent</h6>
                    </div>
                  </div>
                </article>
                <article className="max-w-[384px] h-[387px]  bg-[#F5F4FB59] flex flex-col space-y-10 justify-center rounded-xl shadow-md px-5 ">
                  <div className=" max-w-[320px] max-h-[207px] flex flex-col space-y-3 items-start">
                    <h5 className="text-[18px] font-semibold leading-[27px] text-[#0D121F] ">Satisfied User Here!!</h5>
                    <p className="text-[16px] font-[500] leading-6 text-[#596780] ">
                      I can't imagine managing our district without Velonze. The comprehensive analytics and reporting
                      tools provide invaluable insights into student performance and school operations, empowering us to
                      make data-driven decisions that positively impact our entire community.
                    </p>
                  </div>
                  <div className="flex space-x-6 items-center">
                    <img src={testimonial2} alt="" className="max-w-[70px] h-[70px] rounded-xl" />
                    <div className="flex flex-col ">
                      <h5 className="text-lg font-bold leading-[27px] text-[#0D121F] ">Jessica R</h5>
                      <h6 className="text-sm font-normal leading-[21px] text-[#596780] ">
                        Principal, Maple Elementary
                      </h6>
                    </div>
                  </div>
                </article>
                <article className="max-w-[384px] h-[387px]  bg-[#F5F4FB59] flex flex-col space-y-10 justify-center rounded-xl shadow-md px-5 ">
                  <div className=" max-w-[320px] max-h-[207px] flex flex-col space-y-3 items-start">
                    <h5 className="text-[18px] font-semibold leading-[27px] text-[#0D121F] ">Satisfied User Here!</h5>
                    <p className="text-[16px] font-[500] leading-6 text-[#596780] ">
                      Implementing Velonze has been a game-changer for Maple Elementary. The platform's intuitive
                      interface and robust features have simplified our administrative tasks and improved communication
                      between teachers, parents, and students. Highly recommended!
                    </p>
                  </div>
                  <div className="flex space-x-6 items-center">
                    <img src={testimonial3} alt="" className="max-w-[70px] h-[70px] rounded-xl" />
                    <div className="flex flex-col ">
                      <h5 className="text-lg font-bold leading-[27px] text-[#0D121F] ">Dr. Emily S</h5>
                      <h6 className="text-sm font-normal leading-[21px] text-[#596780] ">Superintendent</h6>
                    </div>
                  </div>
                </article>
              </div>
              <div className="flex space-x-3">
                <Button className="rounded-full h-[50px] bg-[#F5F4FB]">
                  <ArrowLeft className="h-5 w-5 text-[#352CAB] font-semibold" />
                </Button>
                <Button className="rounded-full h-[50px] bg-[#352CAB] hover:bg-primary hover:opacity-80">
                  <ArrowRight className="h-5 w-5 text-white font-semibold" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Testimonials;
