import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Preços", href: "#pricing" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Contato", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent"
        >
          Sado/Oja
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              variants={itemVariants}
              className="relative text-muted-foreground hover:text-accent transition-colors group"
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-purple-400"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={itemVariants}
          className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="block px-4 py-2 rounded-lg text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
