import { ArrowLeft, ArrowRight } from 'lucide-react';
import MaxWidthWrapper from './max-width-wrapper';
import { Button } from './ui/button';
import TestimonialComponent from './testimonial-component';
import { testimonialsData } from '@/mock-data/testimonials-data';

const Testimonials = () => {
  return (
    <div className="bg-white h-full md:h-[913px]">
      <MaxWidthWrapper>
        <div className="flex justify-center items-center h-full mt-6 md:mt-0 md:h-[913px]">
          <div className="flex flex-col my-auto space-y-10 ">
            <div className="flex flex-col items-center space-y-3">
              <h5 className="text-xl font-semibold leading-[30px] text-[#352CAB]">Satisfied clientele</h5>
              <h2 className="text-[40px] font-bold leading[60px] text-[#0D121F] ">Our Users&apos; Kind Words</h2>
              <h5 className="text-xl font-normal leading-[30px] text-[#596780] pt-4">What our users have to say</h5>
            </div>
            <div className="flex flex-col items-center space-y-12 mt-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white max-w-[1200px] h-full md:h-[387px] px-5 gap-x-5">
                {testimonialsData.map((testimonial, index) => (
                  <TestimonialComponent
                    key={index}
                    title={testimonial.title}
                    description={testimonial.descritpion}
                    name={testimonial.name}
                    designation={testimonial.designation}
                    image={testimonial.image}
                  />
                ))}
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
