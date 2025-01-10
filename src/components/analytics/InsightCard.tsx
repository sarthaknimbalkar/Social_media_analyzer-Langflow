import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Card } from '../ui/card';

interface InsightCardProps {
  insight: string;
  delay?: number;
}

export function InsightCard({ insight, delay = 0 }: InsightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card gradient className="flex items-start gap-4 dark:from-purple-900/20 dark:to-blue-900/20 dark:bg-gray-800">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-5 h-5 text-purple-500 dark:text-purple-400 mt-1" />
        </motion.div>
        <p className="text-gray-700 dark:text-gray-300">{insight}</p>
      </Card>
    </motion.div>
  );
}