import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';

const data = [
  { name: 'Week 1', carousel: 400, reels: 240, static: 200 },
  { name: 'Week 2', carousel: 300, reels: 398, static: 220 },
  { name: 'Week 3', carousel: 520, reels: 480, static: 260 },
  { name: 'Week 4', carousel: 400, reels: 380, static: 210 },
  { name: 'Week 5', carousel: 450, reels: 420, static: 190 },
];

export function EngagementChart() {
  return (
    <Card className="w-full h-[400px] p-6 dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Engagement Trends</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCarousel" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorReels" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorStatic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EC4899" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#EC4899" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-700" />
            <XAxis dataKey="name" className="dark:text-gray-400" />
            <YAxis className="dark:text-gray-400" />
            <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none', borderRadius: '8px' }} />
            <Area type="monotone" dataKey="carousel" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorCarousel)" />
            <Area type="monotone" dataKey="reels" stroke="#3B82F6" fillOpacity={1} fill="url(#colorReels)" />
            <Area type="monotone" dataKey="static" stroke="#EC4899" fillOpacity={1} fill="url(#colorStatic)" />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </Card>
  );
}