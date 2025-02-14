import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level }) => {
  return (
    <div className="bg-white dark:bg-gray-700/50 rounded-lg p-6 shadow-lg">
      <h3 className="text-lg font-semibold mb-4">{name}</h3>
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
        />
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-300 mt-2 block">{level}%</span>
    </div>
  );
};

export default SkillCard;