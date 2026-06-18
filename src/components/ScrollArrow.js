import { motion } from 'framer-motion';
import '../assets/ScrollArrow.scss';

const ScrollArrow = ({ show = true, targetElement = null }) => {
  const arrowVariants = {
    bounce: {
      y: [0, -15, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    },
    fadeIn: {
      opacity: [0, 1],
      transition: {
        duration: 0.5
      }
    }
  };

  if (!show) return null;

  return (
    <motion.div
      className="scroll-arrow-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="scroll-arrow"
        variants={arrowVariants}
        animate="bounce"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2L16 24M16 24L6 14M16 24L26 14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ScrollArrow;
