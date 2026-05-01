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
    <section className="py-20 md:py-32 bg-background">
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
                className="group p-8 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
