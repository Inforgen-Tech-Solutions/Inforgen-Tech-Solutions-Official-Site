import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { products } from "../../utils/types/product";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, name, imageUrl, description, amount, slug }: products) => {
const navigate = useNavigate()

  const navigateToProduct = () => {
    navigate(`/products/${slug}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl bg-white border border-muted shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative flex h-full flex-col p-6">
        <div className="mb-6">
          <div className="h-48 w-full overflow-hidden rounded-xl bg-muted transition-transform duration-300 group-hover:scale-105">
            <img
              src={imageUrl}
              alt={name}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="flex-1 space-y-3">
          <h3 className="font-heading font-bold text-[clamp(1.1rem,2.5vw,1.25rem)] text-primary transition-colors group-hover:text-accent">
            {name}
          </h3>

          <p className="font-sans text-[clamp(0.85rem,2vw,0.95rem)] leading-relaxed text-dark/70">
            {description}
          </p>
        </div>

        <div className="mt-6 border-t border-muted pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-sans text-xs uppercase tracking-wide text-dark/50">
                Price
              </p>
              <p className="font-heading text-[clamp(1.25rem,3vw,1.5rem)] font-bold text-accent">
                K{amount}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateToProduct()}
              className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 font-sans text-sm font-semibold text-primary opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hover:brightness-95"
            >
              View
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
