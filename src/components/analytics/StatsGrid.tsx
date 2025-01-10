import { motion } from 'framer-motion';
import { TrendingUp, MessageCircle, Share2, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '../ui/card';

const stats = [
  { name: 'Total Engagement', value: '12,345', icon: TrendingUp, color: 'text-purple-500 dark:text-purple-400' },
  { name: 'Comments', value: '2,860', icon: MessageCircle, color: 'text-blue-500 dark:text-blue-400' },
  { name: 'Shares', value: '1,204', icon: Share2, color: 'text-pink-500 dark:text-pink-400' },
  { name: 'Likes', value: '8,281', icon: Heart, color: 'text-red-500 dark:text-red-400' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export function StatsGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.name}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="flex flex-col items-center p-6 text-center dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className={cn("w-8 h-8 mb-4", stat.color)} />
              </motion.div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{stat.name}</h3>
              <p className="text-3xl font-bold mt-2 dark:text-gray-200">{stat.value}</p>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}