import React from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun, Home, Briefcase, Code, Mail, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Ana Sayfa', target: 'home', icon: <Home size={18} /> },
    { name: 'Hakkımda', target: 'about', icon: <User size={18} /> },
    { name: 'Projeler', target: 'projects', icon: <Briefcase size={18} /> },
    { name: 'Yetenekler', target: 'skills', icon: <Code size={18} /> },
    { name: 'İletişim', target: 'contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo / İsim */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Emin Aydın
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.target}
                smooth={true}
                duration={500}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

            {/* Tema Değiştirme Butonu (Desktop) */}
            {/* <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Tema Değiştirme Butonu (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Menü Aç/Kapa Butonu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu İçeriği */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0, height: menuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 pt-3 pb-4 space-y-2 bg-white dark:bg-gray-900 shadow-md rounded-b-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.target}
              smooth={true}
              duration={500}
              className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
