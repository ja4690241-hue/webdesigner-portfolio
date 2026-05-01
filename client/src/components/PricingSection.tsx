import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "997",
    description: "Perfeito para começar",
    features: [
      "Landing Page responsiva",
      "Design moderno",
      "Até 5 seções",
      "Formulário de contato",
      "Otimização básica",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "2.497",
    description: "Para empresas em crescimento",
    features: [
      "Site institucional completo",
      "Até 10 páginas",
      "Design customizado",
      "Blog integrado",
      "SEO otimizado",
      "Suporte técnico 30 dias",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "4.997",
    description: "Solução completa",
    features: [
      "E-commerce ou site complexo",
      "Páginas ilimitadas",
      "Integração de pagamento",
      "Gestão de produtos",
      "Analytics avançado",
      "Suporte técnico 90 dias",
      "Treinamento incluído",
    ],
    highlighted: false,
  },
  {
    name: "Personalizado",
    price: "Sob consulta",
    description: "Projetos especiais",
    features: [
      "Escopo customizado",
      "Tecnologias específicas",
      "Integrações complexas",
      "Suporte dedicado",
      "Manutenção contínua",
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
    <section className="py-20 md:py-32 bg-card/50">
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
            Escolha o plano ideal para seu projeto. Todos incluem suporte e revisões.
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
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative p-8 rounded-xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-accent/20 to-purple-500/10 border-accent/50 shadow-lg shadow-accent/20 lg:scale-105"
                  : "bg-background border-border/50 hover:border-accent/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">R$ {plan.price}</span>
                {plan.price !== "Sob consulta" && (
                  <span className="text-muted-foreground ml-2">uma vez</span>
                )}
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "bg-accent hover:bg-accent/90"
                    : "bg-accent/20 hover:bg-accent/30 text-accent"
                }`}
              >
                Solicitar Orçamento
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
