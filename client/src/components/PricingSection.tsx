import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Básico",
    price: "997",
    description: "Perfeito para começar",
    features: [
      "Landing Page responsiva",
      "Design moderno",
      "Otimização SEO básica",
      "Formulário de contato",
      "1 mês de suporte",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "2.497",
    description: "Mais popular",
    features: [
      "Site institucional completo",
      "Até 10 páginas",
      "Blog integrado",
      "Otimização SEO avançada",
      "Integração com redes sociais",
      "3 meses de suporte",
      "Analytics e relatórios",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "4.997",
    description: "Solução completa",
    features: [
      "E-commerce ou site customizado",
      "Páginas ilimitadas",
      "Sistema de gestão de conteúdo",
      "Integração de pagamento",
      "Otimização SEO premium",
      "6 meses de suporte",
      "Treinamento de uso",
      "Backup automático",
    ],
    highlighted: false,
  },
  {
    name: "Personalizado",
    price: "Sob consulta",
    description: "Solução sob medida",
    features: [
      "Projeto totalmente customizado",
      "Funcionalidades específicas",
      "Integração com sistemas",
      "Suporte prioritário",
      "Manutenção contínua",
      "Consultoria estratégica",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
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
    <section id="pricing" className="py-20 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

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
            Tabela de Preços
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Escolha o plano que melhor se adequa ao seu projeto
          </motion.p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={plan.highlighted ? { y: -12 } : { y: -4 }}
              className="relative group"
            >
              {/* Highlighted badge */}
              {plan.highlighted && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-accent to-purple-400 text-white text-xs font-bold">
                    <Star className="w-3 h-3 fill-current" />
                    MAIS POPULAR
                  </div>
                </motion.div>
              )}

              {/* Glow effect for highlighted */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              )}

              {/* Card */}
              <motion.div
                className={`relative p-8 rounded-xl backdrop-blur-xl transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-card/90 to-card/50 border-2 border-accent/50 shadow-2xl shadow-accent/20"
                    : "bg-gradient-to-br from-card/80 to-card/40 border border-border/50 hover:border-accent/30"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  {plan.price === "Sob consulta" ? (
                    <div className="text-3xl font-bold text-accent">{plan.price}</div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">R$</span>
                        <span className="text-5xl font-bold">{plan.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-2">uma vez</p>
                    </>
                  )}
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-8"
                >
                  <Button
                    className={`w-full py-3 font-semibold rounded-lg transition-all ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-accent to-purple-500 hover:from-accent/90 hover:to-purple-500/90 text-accent-foreground shadow-lg shadow-accent/50"
                        : "bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30"
                    }`}
                  >
                    Solicitar Orçamento
                  </Button>
                </motion.div>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                    >
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          className="text-center text-muted-foreground mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Todos os planos incluem consultoria inicial gratuita. Fale conosco para discutir seu projeto!
        </motion.p>
      </div>
    </section>
  );
}
