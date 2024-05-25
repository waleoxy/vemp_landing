import MaxWidthWrapper from './max-width-wrapper';
import { coreFeatures } from '@/mock-data/core-features';
import FeatureComponent from './feature-component';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer } from '@/utils/framer-motion';

const DeliverablesPg = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className=" bg-red-50/25 md:h-[878px] h-full">
      <MaxWidthWrapper className="h-full">
        <section className="flex flex-col mt-28 items-center justify-center">
          <div className="flex flex-col items-center space-y-6">
            <h5 className="text-[20px] leading-[30px] font-semibold">Core Features</h5>
            <h3
              style={{
                transform: isInView ? 'none' : 'translateY(-200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
              }}
              className="text-clamp4xl leading-[60px] font-bold text-[#040815] text-center"
            >
              Efficiency Meets Education
            </h3>
            <p className="text-clampxl font-normal leading[25.2px] text-[#596780] text-center pl-4">
              From student enrollment to staff management, we&apos;ve got you covered.
            </p>
          </div>
        </section>
        <section className="w-full ">
          <motion.ul
            variants={staggerContainer(1, 1)}
            className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 h-full  gap-10 w-full "
          >
            {coreFeatures.map((feature, index) => (
              <FeatureComponent
                key={index}
                image={`${feature.image}`}
                title={feature.title}
                description={feature.description}
                isInView={isInView}
                index={index}
              />
            ))}
          </motion.ul>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default DeliverablesPg;
