import { motion } from 'framer-motion';
import { 
  Brain, 
  Database, 
  Workflow,
  Code2,
  FileCode2,
  Server
} from 'lucide-react';
import { Card } from '../ui/card';

const technologies = [
  {
    name: 'LangFlow',
    icon: Workflow,
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-cyan-400'
  },
  {
    name: 'Astra DB',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    iconColor: 'text-emerald-400'
  },
  {
    name: 'Mistral AI',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    iconColor: 'text-pink-400'
  },
  {
    name: 'React + Vite',
    icon: Code2,
    color: 'from-blue-600 to-indigo-600',
    iconColor: 'text-indigo-400'
  },
  {
    name: 'TypeScript',
    icon: FileCode2,
    color: 'from-blue-400 to-blue-600',
    iconColor: 'text-blue-400'
  },
  {
    name: 'Node.js',
    icon: Server,
    color: 'from-green-600 to-emerald-600',
    iconColor: 'text-emerald-400'
  }
];

export function ContactSection() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full p-8 dark:bg-gray-800">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 text-gray-900 dark:text-white"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </Card>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 25px rgba(139, 92, 246, 0.3)"
                      }}
                      className={`bg-gradient-to-br ${tech.color} p-6 rounded-lg shadow-lg`}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4"
                      >
                        <Icon className={`w-10 h-10 ${tech.iconColor}`} />
                      </motion.div>
                      <h4 className="text-white font-medium text-lg">{tech.name}</h4>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}