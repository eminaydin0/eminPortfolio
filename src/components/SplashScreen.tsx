import React from 'react';
import { motion } from 'framer-motion';
import { Code, Laptop, Rocket, Star } from 'lucide-react';

function SplashScreen() {
  const [loadingProgress, setLoadingProgress] = React.useState(0);
  const [loadingText, setLoadingText] = React.useState('Initializing...');

  React.useEffect(() => {
    const loadingTexts = [
      'Initializing...',
      'Loading assets...',
      'Preparing UI...',
      'Almost there...',
      'Starting up...'
    ];

    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // Change loading text periodically
    const textInterval = setInterval(() => {
      setLoadingText(loadingTexts[Math.floor(Math.random() * loadingTexts.length)]);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  const icons = [
    { Icon: Code, color: 'text-blue-500' },
    { Icon: Laptop, color: 'text-purple-500' },
    { Icon: Rocket, color: 'text-pink-500' },
    { Icon: Star, color: 'text-yellow-500' }
  ];

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-80">
        {/* Main Logo Container */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Rotating Icons */}
          <div className="relative w-32 h-32 mb-8">
            {icons.map(({ Icon, color }, index) => (
              <motion.div
                key={index}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${color}`}
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "linear"
                }}
              >
                <Icon size={32} />
              </motion.div>
            ))}
          </div>

          {/* Logo Text */}
          <motion.div
            className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-8"
            animate={{ 
              scale: [1, 1.05, 1],
              textShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 10px rgba(59,130,246,0.5)", "0 0 0px rgba(0,0,0,0)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Emin Aydın
          </motion.div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Loading Text */}
          <motion.p
            className="text-gray-600 dark:text-gray-300 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={loadingText}
          >
            {loadingText}
          </motion.p>

          {/* Progress Percentage */}
          <motion.p
            className="text-xl font-semibold mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {loadingProgress}%
          </motion.p>

          {/* Decorative Particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full"
              initial={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                opacity: 0
              }}
              animate={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SplashScreen;