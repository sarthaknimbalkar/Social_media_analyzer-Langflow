import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: boolean;
}

export function Card({ className, gradient, children, ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg transition-colors duration-300",
        gradient && "bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}