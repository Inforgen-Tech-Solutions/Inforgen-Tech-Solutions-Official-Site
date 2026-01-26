import { motion } from "framer-motion"
import FullPage from "../layout/FullPage"
import ProductCard from "../components/cards/ProductCard"
import { products } from "../utils/data/product"
import { Sparkles, LogOut } from "lucide-react"
import Swal from "sweetalert2"

const Products = () => {
  const navigateToEcommerce = () => {
    try {
      Swal.fire({
        title: "Leave this site?",
        text: "You are about to visit our online store.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Continue",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#FCA311",
        cancelButtonColor: "#64748b",
      }).then((result) => {
        if (result.isConfirmed) {
          window.open("https://google.com", "_blank", "noopener,noreferrer")
        }
      })
    } catch (error) {
      Swal.fire("Oops", "Could not redirect successfully", "error")
    }
  }

  return (
    <FullPage>
      <main className="bg-gradient-to-b from-slate-50 to-white">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6 pt-14 pb-14 md:pt-18"
        >
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent bg-slate-50 px-4 py-2 text-accent text-[clamp(0.75rem,2.5vw,0.875rem)] font-medium">
              <Sparkles className="h-4 w-4" />
              Our Products
            </div>

            <h1 className="font-heading font-bold text-slate-900 leading-tight text-[clamp(1.5rem,6vw,2.5rem)]">
              Powerful Digital & Hardware
              <span className="block text-accent bg-clip-text">
                Solutions Built for You
              </span>
            </h1>

            <p className="font-sans text-slate-600 leading-relaxed text-[clamp(0.8rem,3vw,1rem)]">
              Explore our range of carefully crafted software and hardware products
              designed to boost productivity, connectivity, and innovation.
            </p>
          </div>
        </motion.section>

        {/* PRODUCTS GRID */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="mx-auto max-w-7xl px-6 pb-6"
        >
          {products?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-slate-500 text-[clamp(1rem,3vw,1.2rem)]">
                No products available at the moment.
              </p>
            </div>
          )}
        </motion.section>

        <div className="text-center">
          <button
            onClick={() => navigateToEcommerce()}
            className="inline-flex items-center gap-2 px-8 py-4 font-sans font-semibold text-accent text-[clamp(0.95rem,2.5vw,1rem)] transition hover:opacity-90"
          >
            See More
            <LogOut size={18} />
          </button>
        </div>
      </main>
    </FullPage>
  )
}

export default Products
