import { cn } from '@/lib/utils';
import MaxWidthWrapper from './max-width-wrapper';
import { Button } from './ui/button';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useModal } from '@/hook/useModal';

const HeroSectionPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { setOpen } = useModal();

  return (
    <div ref={ref} className=" bg-primary h-[792.97px]">
      <MaxWidthWrapper>
        <div className="flex flex-col max-w-[1024px] mx-auto mt-36 items-center ">
          <h2
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s'
            }}
            className="text-clamp6xl leading-[48px] md:leading-[64px] text-center w-3/4 mx-auto text-white font-semibold"
          >
            Goodbye admin headache.{' '}
            <p
              style={{
                transform: isInView ? 'none' : 'translateX(400px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s'
              }}
            >
              Hello smooth sailing.
            </p>
          </h2>
          <p className="text-xl text-[#F5F5F5] mt-8 w-3/4 mx-auto text-center leading-[20px] tracking-wide">
            Streamline your school&apos;s operations with our intuitive and comprehensive management solution.
          </p>
          <Button
            onClick={() => setOpen()}
            size={'lg'}
            className={cn(
              'rounded-full h-[42px] text-base text-primary/10 w-[125px] bg-white hover:bg-white/90 font-semibold hover:bg-white hover:text-violet-900/80 mt-10 '
            )}
          >
            Get A Quote
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSectionPage;
