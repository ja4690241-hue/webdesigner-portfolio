import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "E-commerce Luxo",
    category: "E-commerce",
    description: "Plataforma de vendas premium com design sofisticado",
  },
  {
    title: "Tech Startup",
    category: "Landing Page",
    description: "Landing page de conversão para startup de tecnologia",
  },
  {
    title: "Consultoria Empresarial",
    category: "Site Institucional",
    description: "Website corporativo com design elegante e profissional",
  },
  {
    title: "Agência Criativa",
    category: "Portfolio",
    description: "Site de portfólio com galeria interativa de projetos",
  },
  {
    title: "Clínica Médica",
    category: "Site Institucional",
    description: "Website para clínica com agendamento online integrado",
  },
  {
    title: "Loja de Moda",
    category: "E-commerce",
    description: "E-commerce de moda com filtros avançados e checkout otimizado",
  },
];

export default function PortfolioSection() {
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
            Portfólio
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Conheça alguns dos projetos que transformaram negócios
          </motion.p>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              {/* Image placeholder with gradient */}
              <div className="relative aspect-video bg-gradient-to-br from-accent/30 via-purple-500/20 to-cyan-400/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    🎨
                  </div>
                </div>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <ExternalLink className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-sm text-gray-300">{item.category}</p>
                  <p className="text-sm text-gray-400 pt-2">{item.description}</p>
                </div>
              </div>

              {/* Static content (visible without hover on mobile) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end md:hidden">
                <div className="space-y-2 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <ExternalLink className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-xs text-gray-300">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
