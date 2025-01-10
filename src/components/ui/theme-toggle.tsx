import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg"
    >
      {theme === 'light' ? (
        <Moon className="w-6 h-6 text-gray-800 dark:text-white" />
      ) : (
        <Sun className="w-6 h-6 text-gray-800 dark:text-white" />
      )}
    </motion.button>
  );
}