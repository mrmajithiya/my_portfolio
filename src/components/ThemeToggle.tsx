'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    );
  }

  const isDark = theme === 'light';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'light')}
      aria-label="Toggle theme"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative w-12 h-6 rounded-full transition-all duration-300
        ${isDark 
          ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
          : 'bg-gradient-to-r from-yellow-400 to-orange-400'
        }
        shadow-lg hover:shadow-xl
      `}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`
          absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-lg
          ${isDark ? 'left-6' : 'left-0.5'}
        `}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center w-full h-full"
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-purple-600" />
          ) : (
            <Sun className="w-3 h-3 text-orange-400" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
