import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      transition: {
        delay: 2,
        duration: 0.8,
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: [0, -20, 0],
      transition: {
        delay: i * 0.1,
        duration: 1.5,
        repeat: Infinity,
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-background via-background to-card flex items-center justify-center z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated dots */}
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-purple-400"
              custom={i}
              variants={dotVariants}
              initial="hidden"
              animate="visible"
            />
          ))}
        </div>

        {/* Text */}
        <motion.div
          className="text-center"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Sado/Oja
          </h2>
          <p className="text-muted-foreground">Web Designer & Developer</p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-48 h-1 bg-border/30 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-purple-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
