import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Moon, Sun, ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from './lib/theme';
import { PromptSection } from './components/prompt/PromptSection';
import { FeatureSection } from './components/feature/FeatureSection';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';

// Import images
import LightLogo from '../assets/1.png'; // Adjust the path
import DarkLogo from '../assets/2.png'; // Adjust the path

function App() {
  const { theme, toggleTheme } = useTheme();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Handle scroll event to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section with offset for fixed navbar
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const offset = 80; // Adjust for navbar height
      const top = ref.current.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', ref: homeRef },
    { name: 'Prompt', ref: promptRef },
    { name: 'Feature', ref: featureRef },
    { name: 'About', ref: aboutRef },
    { name: 'Contact', ref: contactRef },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <BarChart3 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </motion.div>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-8">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      onClick={() => scrollToSection(item.ref)}
                      whileHover={{
                        scale: 1.1,
                        textShadow: '0 0 8px rgb(139, 92, 246)',
                      }}
                      className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium cursor-pointer relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 dark:bg-purple-400 transform scale-x-0 transition-transform group-hover:scale-x-100" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700" />
              ) : (
                <Sun className="h-5 w-5 text-gray-200" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Social Media{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Analyser
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Transform your social media strategy with powerful analytics and insights. Make
                data-driven decisions to grow your online presence.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(promptRef)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Get Started
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square relative z-10">
                <img
                  src={theme === 'light' ? LightLogo : DarkLogo}
                  alt="Social Media Analyser"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prompt Section */}
      <section ref={promptRef}>
        <PromptSection />
      </section>

      {/* Features Section */}
      <section ref={featureRef}>
        <FeatureSection />
      </section>

      {/* About Section */}
      <section ref={aboutRef}>
        <AboutSection />
      </section>

      {/* Contact Section */}
      <section ref={contactRef}>
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Social Media Analyser. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll-to-Top Button */}
      {showScrollToTop && (
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
}

export default App;