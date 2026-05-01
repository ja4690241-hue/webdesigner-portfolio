import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card pt-20"
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Parallax background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-5"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="container relative z-10 text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-purple-500/10 border border-accent/30 text-accent text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            ✨ Web Design & Desenvolvimento Premium
          </motion.span>
        </motion.div>

        {/* Main title with gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Transforme sua{" "}
          <motion.span
            className="bg-gradient-to-r from-accent via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          >
            visão em realidade
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Criamos websites incríveis que convertem visitantes em clientes. Design moderno, performance otimizada e experiência excepcional.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-purple-500 hover:from-accent/90 hover:to-purple-500/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-lg shadow-lg shadow-accent/50 transition-all"
            >
              Solicitar Orçamento
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-accent/50 hover:bg-accent/10 rounded-lg backdrop-blur-sm"
            >
              Ver Portfólio
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={scrollVariants}
          animate="animate"
          className="flex justify-center"
        >
          <motion.div
            className="p-2 rounded-full bg-accent/10 border border-accent/30"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="w-6 h-6 text-accent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
