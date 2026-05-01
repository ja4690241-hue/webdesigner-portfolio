import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    "10+ anos de experiência em web design",
    "100+ projetos entregues com sucesso",
    "Especialista em UX/UI moderno",
    "Certificado em desenvolvimento web",
  ];

  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left side - Image placeholder */}
          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-accent/10 via-transparent to-purple-500/10 flex items-center justify-center">
                <div className="text-6xl">💻</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sobre Mim
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sou um web designer e desenvolvedor apaixonado por criar experiências digitais incríveis. Com mais de uma década de experiência, ajudei centenas de empresas a transformar suas ideias em websites que realmente convertem.
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Meu diferencial é combinar design elegante com funcionalidade robusta, garantindo que cada projeto não seja apenas bonito, mas também eficaz em atingir seus objetivos de negócio.
            </motion.p>

            {/* Highlights */}
            <motion.div variants={containerVariants} className="space-y-3 pt-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
