import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para entregar um website?",
    answer: "O prazo varia conforme a complexidade do projeto. Uma landing page leva 2-3 semanas, um site institucional 3-4 semanas, e um e-commerce 4-6 semanas. Projetos personalizados são discutidos individualmente.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Todos os planos incluem suporte técnico. O plano Básico inclui 30 dias, Profissional 30 dias, Premium 90 dias, e Personalizado tem suporte contínuo conforme acordado.",
  },
  {
    question: "O site será responsivo (mobile-friendly)?",
    answer: "Absolutamente! Todos os nossos projetos são desenvolvidos com abordagem mobile-first, garantindo perfeita visualização em smartphones, tablets e desktops.",
  },
  {
    question: "Posso fazer alterações depois que o site for entregue?",
    answer: "Sim, durante o período de suporte incluído no seu plano. Após isso, oferecemos pacotes de manutenção com preços acessíveis para atualizações e melhorias.",
  },
  {
    question: "Como funciona o processo de pagamento?",
    answer: "Oferecemos parcelamento em até 3x sem juros para projetos acima de R$ 1.000. Aceitamos cartão de crédito, transferência bancária e PIX. 50% de entrada e 50% na entrega.",
  },
  {
    question: "Vocês fazem otimização SEO?",
    answer: "Sim! Todos os nossos projetos incluem otimização SEO básica. Oferecemos também serviços de SEO avançado como parte do plano Premium ou como serviço adicional.",
  },
];

export default function FAQSection() {
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
            Perguntas Frequentes
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Respostas para as dúvidas mais comuns sobre nossos serviços
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border-border/50 hover:border-accent/50 transition-colors"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-accent transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
