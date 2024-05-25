import { Variants, motion } from 'framer-motion';

interface IFeatureComponent {
  image: string;
  title: string;
  description: string;
  isInView?: boolean;
  index: number;
}

const variants: object = {
  visible: (index: number) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: index * 0.9,
      duration: 3,
      ease: 'easeIn'
    }
  }),
  hidden: {
    x: -1000,
    opacity: 0
  }
};

const FeatureComponent = ({ image, description, title, index, isInView }: IFeatureComponent) => {
  return (
    <>
      <motion.li
        custom={index}
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants as Variants}
        // style={{
        //   transform: isInView ? 'none' : 'translateY(-200px)',
        //   opacity: isInView ? 1 : 0,
        //   transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s'
        // }}
        className="flex items-start space-x-5 w-full "
      >
        <span className="bg-primary py-2 px-3 rounded-xl mt-2">
          <img src={`${image}`} className="object-contain h-[24px] w-{26px}" />
        </span>
        <div className="flex flex-col items-start w-full max-w-[415px]:">
          <h5 className="text-clamp2xl font-semibold leading-[36px] tracking-tight">{title}</h5>
          <p className="text-base leading-6 mt-2 font-normal">{description}</p>
        </div>
      </motion.li>
    </>
  );
};

export default FeatureComponent;
