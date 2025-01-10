import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../ui/card';

interface OutputWindowProps {
  output: string | null; // Output from the API
  isLoading: boolean; // Loading state
  error: string | null; // Error message
}

export function OutputWindow({ output, isLoading, error }: OutputWindowProps) {
  return (
    <AnimatePresence>
      {/* Loading State */}
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-8"
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white p-8 shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient" />
            <div className="relative z-10 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500" />
              <p className="ml-4 text-gray-300">Analyzing your request...</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none" />
          </Card>
        </motion.div>
      )}

      {/* Error State */}
      {error && (
        <motion.div
          key="error"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-8"
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white p-8 shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient" />
            <div className="relative z-10">
              <p className="text-red-400">{error}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none" />
          </Card>
        </motion.div>
      )}

      {/* Output State */}
      {!isLoading && !error && output && (
        <motion.div
          key="output"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-8"
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white p-8 shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient" />
            <div className="relative z-10">
              <pre className="font-mono text-sm whitespace-pre-wrap break-words">
                {output}
              </pre>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none" />
          </Card>
        </motion.div>
      )}

      {/* No Output State */}
      {!isLoading && !error && !output && (
        <motion.div
          key="no-output"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mt-8"
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white p-8 shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient" />
            <div className="relative z-10">
              <p className="text-gray-300">No output available.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none" />
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}