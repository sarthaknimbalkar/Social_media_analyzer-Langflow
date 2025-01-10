import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSubmit: (prompt: string) => void;
}

export function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const prompt = formData.get('prompt') as string;
    if (prompt.trim()) {
      onSubmit(prompt);
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-2">
      <div className="relative group">
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          name="prompt"
          placeholder="Enter your custom prompt..."
          className="w-full px-5 py-4 pl-12 rounded-xl bg-white dark:bg-gray-800 border-2 border-purple-100 dark:border-purple-900/50 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 text-gray-900 dark:text-white shadow-lg transition-all duration-300 group-hover:shadow-purple-200 dark:group-hover:shadow-purple-900/20"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Analyze
        </motion.button>
      </div>
    </form>
  );
}