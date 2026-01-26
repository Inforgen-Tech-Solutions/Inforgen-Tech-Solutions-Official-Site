import { motion } from "framer-motion";
import type { services } from "../../utils/types/service";

const ServiceCard = ({ name, icon: Icon, description }: services) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-muted bg-white p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-accent/10" />

      <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent text-primary shadow-lg"
        >
          <span className="scale-110"><Icon size={28} /></span>
        </motion.div>

        <div className="flex-1 space-y-2">
          <h3 className="font-heading font-bold text-[clamp(1.2rem,3vw,1.5rem)] text-primary transition-colors group-hover:text-accent">
            {name}
          </h3>

          <p className="font-sans text-[clamp(0.9rem,2.5vw,1rem)] leading-relaxed text-dark/70">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
