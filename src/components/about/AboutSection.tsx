import { motion } from 'framer-motion';
import { Card } from '../ui/card';

// const teamMembers = [
//   {
//     name: 'Harsh Bansal',
//     // role: 'Lead Developer',
//     description: 'Sarah specializes in building scalable applications with a focus on user experience and performance.',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
//   },
//   {
//     name: 'Rohit Sharma',
//     // role: 'AI Specialist',
//     description: 'Michael brings expertise in machine learning and natural language processing to our analytics platform.',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
//   },
//   {
//     name: 'Sarthak Nimbalker',
//     // role: 'Data Scientist',
//     description: 'Emily excels at transforming complex data into actionable insights for social media optimization.',
//     image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200'
//   }
// ];
const teamMembers = [
  {
    name: 'Harsh Bansal',
    // role: 'Lead Developer',
    description: 'Sarah specializes in building scalable applications with a focus on user experience and performance.',
    image: 'dist/assets/harsh.jpg' // Updated local image path
  },
  {
    name: 'Rohit Sharma',
    // role: 'AI Specialist',
    description: 'Michael brings expertise in machine learning and natural language processing to our analytics platform.',
    image: 'dist/assets/rohit.jpg' // Updated local image path
  },
  {
    name: 'Sarthak Nimbalker',
    // role: 'Data Scientist',
    description: 'Emily excels at transforming complex data into actionable insights for social media optimization.',
    image: 'dist/assets/sarthak.webp' // Updated local image path
  }
];


export function AboutSection() {
  return (
    <div className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Social Media Analyzer leverages advanced technologies to provide actionable insights into social media engagement. 
            With seamless integration of AI, databases, and workflows, this platform empowers users to maximize their online 
            presence and optimize their strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-t-lg"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}