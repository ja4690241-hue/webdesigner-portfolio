import { motion } from "framer-motion";
import { Zap, Globe, ShoppingCart, Palette, Smartphone, Rocket } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Landing Pages",
    description: "Páginas de alta conversão otimizadas para capturar leads e gerar vendas",
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Websites profissionais que apresentam sua empresa com credibilidade",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Lojas online completas com integração de pagamento e gestão de produtos",
  },
  {
    icon: Palette,
    title: "Redesign",
    description: "Modernização de websites antigos com design e performance atualizados",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Designs responsivos otimizados para dispositivos móveis",
  },
  {
    icon: Rocket,
    title: "Otimização SEO",
    description: "Implementação de técnicas para melhorar ranking nos buscadores",
  },
];

export default function ServicesSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Serviços que Oferecemos
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Soluções completas de web design e desenvolvimento para impulsionar seu negócio
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Glassmorphism card */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                
                <motion.div
                  className="relative p-8 rounded-xl bg-gradient-to-br from-card/80 to-card/40 border border-accent/20 backdrop-blur-xl hover:border-accent/50 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 20px 60px rgba(59, 130, 246, 0.15)",
                  }}
                >
                  <motion.div
                    className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-accent/20 to-purple-500/20 group-hover:from-accent/30 group-hover:to-purple-500/30 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-accent to-purple-400 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
