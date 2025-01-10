import { motion } from 'framer-motion';
import { BarChart, MessageSquare, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Get deep insights into your social media performance with our advanced analytics tools.'
  },
  {
    icon: MessageSquare,
    title: 'Engagement Tracking',
    description: 'Track and analyze user engagement across all your social media platforms.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Insights',
    description: 'Understand your growth patterns and optimize your social media strategy.'
  }
];

export function FeatureSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to analyze and grow your social media presence
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  <Icon className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}