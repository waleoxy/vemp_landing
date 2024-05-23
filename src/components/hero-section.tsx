import { cn } from '@/lib/utils';
import MaxWidthWrapper from './max-width-wrapper';
import { Button } from './ui/button';

const HeroSectionPage = () => {
  return (
    <div className="bg-primary h-[792.97px]">
      <MaxWidthWrapper>
        <div className="flex flex-col max-w-[1024px] mx-auto mt-36 items-center ">
          <h2 className="text-[56px] leading-[64px] text-center w-3/4 mx-auto text-white font-semibold">
            Goodbye admin headache. Hello smooth sailing.
          </h2>
          <p className="text-xl text-[#F5F5F5] mt-8 w-3/4 mx-auto text-center leading-[20px] tracking-wide">
            Streamline your school&apos;s operations with our intuitive and comprehensive management solution.
          </p>
          <Button
            size={'lg'}
            className={cn(
              'rounded-full h-[42px] text-base text-primary/10 w-[125px] bg-white hover:bg-white/90 font-semibold hover:bg-white hover:text-violet-900/80 mt-10 '
            )}
          >
            Get Demo
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSectionPage;
