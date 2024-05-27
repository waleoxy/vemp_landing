import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/framer-motion';
import { FC } from 'react';

const HocScroll = (Component: FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={``}
      >
        <span id={idName} className=""></span>
        <Component />
      </motion.section>
    );
  };

export default HocScroll;
