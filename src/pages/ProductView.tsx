import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ShoppingCart,
  MessageCircle,
  Facebook
} from "lucide-react"
import Swal from "sweetalert2"
import FullPage from "../layout/FullPage"
import { products } from "../utils/data/product"

const ProductView = () => {
  const { slug } = useParams()

  const product = products.find(p => p.slug === slug)

  const handleOrder = () => {
    if (!product) return

    Swal.fire({
      title: "Place Order",
      text: "Choose how you would like to order this product.",
      icon: "question",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: "Ecommerce",
      denyButtonText: "WhatsApp",
      cancelButtonText: "Facebook",
      confirmButtonColor: "#FCA311",
      denyButtonColor: "#25D366",
      cancelButtonColor: "#1877F2"
    }).then(result => {
      if (result.isConfirmed && product.ecommerceUrl) {
        window.open(product.ecommerceUrl, "_blank", "noopener,noreferrer")
      }

      if (result.isDenied && product.whatsappText) {
        window.open(
          `https://wa.me/260972292255?text=${encodeURIComponent(product.whatsappText)}`,
          "_blank"
        )
      }

      if (result.dismiss === Swal.DismissReason.cancel && product.facebookUrl) {
        window.open(product.facebookUrl, "_blank")
      }
    })
  }

  if (!product) {
    return (
      <FullPage>
        <main className="mx-auto max-w-7xl px-6 py-32 text-center">
          <h1 className="font-heading text-[clamp(1.8rem,5vw,2.4rem)] font-bold text-primary">
            Product Not Found
          </h1>
        </main>
      </FullPage>
    )
  }

  return (
    <FullPage>
      <main className="bg-base">
        <section className="mx-auto max-w-7xl px-6 py-8 md:py-14">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-muted shadow-lg"
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                <img
                  src={product.imageUrl || "https://placehold.co/300"}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <h1 className="font-heading font-bold text-primary text-[clamp(2rem,6vw,2rem)] leading-tight">
                {product.name}
              </h1>

              <p className="font-heading text-[clamp(1.1rem,4vw,1.4rem)] font-bold text-accent">
                K{product.amount}
              </p>

              <p className="font-sans text-dark/70 text-[clamp(0.95rem,2.8vw,1.05rem)] leading-relaxed">
                {product.longDescription || product.description}
              </p>

              {product.specs && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.specs.map(spec => (
                    <li
                      key={spec}
                      className="rounded-lg bg-muted px-4 py-2 font-sans text-sm text-primary"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleOrder}
                  className="flex items-center justify-center cursor-pointer gap-2 rounded-xl bg-accent px-8 py-4 font-sans text-[clamp(0.9rem,2.5vw,1rem)] font-semibold text-primary transition hover:brightness-95"
                >
                  <ShoppingCart size={18} />
                  Order Now
                </button>

                <a
                  href="/products"
                  className="flex items-center justify-center gap-2 rounded-xl border border-muted px-8 py-4 font-sans text-[clamp(0.9rem,2.5vw,1rem)] font-semibold text-primary transition hover:bg-muted"
                >
                  Back to Products
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </FullPage>
  )
}

export default ProductView
