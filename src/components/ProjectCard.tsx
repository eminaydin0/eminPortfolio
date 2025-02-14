import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tech }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;