import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, Tech Solutions",
    content: "O website transformou completamente meu negócio. Em 3 meses, as vendas cresceram 150%. Recomendo muito!",
    rating: 5,
  },
  {
    name: "Marina Costa",
    role: "Diretora, Agência Digital",
    content: "Profissionalismo impecável. Entregou antes do prazo e superou todas as expectativas. Parceria perfeita!",
    rating: 5,
  },
  {
    name: "Roberto Oliveira",
    role: "Gerente, E-commerce Premium",
    content: "O design é elegante e a performance é excelente. Nossos clientes adoraram a nova experiência.",
    rating: 5,
  },
  {
    name: "Juliana Martins",
    role: "Proprietária, Consultoria",
    content: "Muito atencioso com os detalhes. O site reflete perfeitamente a qualidade do meu trabalho. Obrigada!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
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
            O que Dizem Nossos Clientes
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Histórias de sucesso de empresas que transformaram seus negócios conosco
          </motion.p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="p-6 rounded-xl bg-background border border-border/50 hover:border-accent/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-4 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border/30">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
