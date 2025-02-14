// components/ScrollToTopButton.jsx

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scroll-to-top-button"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-50 
            p-3 rounded-full 
            bg-gradient-to-r from-blue-500 to-purple-500
            hover:from-blue-600 hover:to-purple-600 
            text-white shadow-xl 
            ring-0 ring-offset-0 focus:outline-none 
            focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
            transition-transform
          "
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
