import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container py-16 md:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* About */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold">Sado/Oja</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Web Designer & Desenvolvedor especializado em criar experiências digitais incríveis que convertem.
            </p>
            <p className="text-xs text-muted-foreground">
              Transformando ideias em websites que fazem diferença.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Sites Institucionais
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Redesign
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-accent transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-accent transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:ja4690241@gmail.com">ja4690241@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Fortaleza, Ceará - Brasil</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>Disponível para projetos</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border/30 py-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants} className="text-sm text-muted-foreground">
              © {currentYear} Sado/Oja. Todos os direitos reservados.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors group"
                title="LinkedIn"
              >
                <ExternalLink className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors group"
                title="Instagram"
              >
                <ExternalLink className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors group"
                title="GitHub"
              >
                <ExternalLink className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
