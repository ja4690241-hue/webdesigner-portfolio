import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse" />

      <motion.div
        className="container relative z-10 text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
            ✨ Web Design & Desenvolvimento
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Transforme sua{" "}
          <span className="bg-gradient-to-r from-accent via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            visão em realidade
          </span>
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
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/50"
          >
            Solicitar Orçamento
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg font-semibold border-accent/50 hover:bg-accent/10 rounded-lg"
          >
            Ver Portfólio
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={scrollVariants}
          animate="animate"
          className="flex justify-center"
        >
          <ChevronDown className="w-6 h-6 text-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
