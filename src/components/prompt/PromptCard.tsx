import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface PromptCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  isActive: boolean;
}

export function PromptCard({ icon: Icon, title, description, onClick, isActive }: PromptCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <Card 
        className={cn(
          "cursor-pointer transition-all duration-300 border-2 h-full backdrop-blur-sm hover:shadow-xl",
          isActive 
            ? "border-purple-500 dark:border-purple-400 shadow-lg shadow-purple-500/20 bg-white/80 dark:bg-gray-800/80" 
            : "border-transparent hover:border-purple-300 dark:hover:border-purple-600 bg-white/50 dark:bg-gray-800/50"
        )}
      >
        <div className="flex flex-col items-center text-center gap-4 p-6">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30"
          >
            <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </motion.div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}