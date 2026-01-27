import { motion } from "framer-motion";
import FullPage from "../layout/FullPage";

import { products } from "../utils/data/product";
import { services } from "../utils/data/service";

import ProductCard from "../components/cards/ProductCard";
import ServiceCard from "../components/cards/ServiceCard";

import {
  ArrowRight,
  Sparkles
} from "lucide-react";

const Home = () => {
  return (
    <FullPage>
      <main className="bg-base">
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-6 py-10 md:py-24"
        >
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-muted bg-base px-4 py-2 font-sans text-[clamp(0.75rem,2.5vw,0.875rem)] text-primary">
              <Sparkles size={16} />
              Reliable IT & Connectivity Solutions
            </div>

            <div className="max-w-4xl space-y-6">
              <h1 className="font-heading font-bold leading-tight text-primary text-[clamp(1.5rem,6vw,3.5rem)]">
                Powering Businesses With
                <span className="text-accent"> Smart Technology</span>
              </h1>

              <p className="mx-auto max-w-3xl font-sans leading-relaxed text-dark text-[clamp(0.9rem,3vw,1.15rem)]">
                Inforgen Tech Solutions delivers software development, hardware
                solutions, networking, and Starlink installations designed to
                keep individuals and businesses connected and productive.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-sans font-semibold text-primary text-[clamp(0.8rem,2.5vw,1rem)] transition hover:opacity-90"
              >
                Request a Quote
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
              </a>

              <a
                href="#services"
                className="rounded-xl border border-muted px-8 py-4 font-sans font-semibold text-dark text-[clamp(0.8rem,2.5vw,1rem)] transition hover:border-primary hover:text-primary"
              >
                View Services
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="services"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-6 py-16 md:py-24"
        >
          <div className="mb-16 space-y-4 text-center">
            <span className="inline-block rounded-full border border-muted px-4 py-1.5 font-sans text-[clamp(0.75rem,2.5vw,0.875rem)] text-primary">
              What We Do
            </span>
            <h2 className="font-heading font-bold text-primary text-[clamp(1.4rem,5vw,2.2rem)]">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl font-sans text-dark text-[clamp(0.9rem,3vw,1rem)]">
              End-to-end IT solutions covering software, hardware, networking,
              and internet connectivity.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.name}
                icon={service.icon}
                description={service.description}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="products"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-6 py-10 md:py-18"
        >
          <div className="mb-16 space-y-4 text-center">
            <span className="inline-block rounded-full border border-muted px-4 py-1.5 font-sans text-[clamp(0.75rem,2.5vw,0.875rem)] text-primary">
              Products
            </span>
            <h2 className="font-heading font-bold text-primary text-[clamp(1.4rem,5vw,2.2rem)]">
              Hardware & Devices
            </h2>
            <p className="mx-auto max-w-2xl font-sans text-dark text-[clamp(0.9rem,3vw,1rem)]">
              Quality laptops, networking devices, Arduino kits, and internet
              equipment you can rely on.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                description={product.description}
                amount={product.amount}
                slug={product.slug}
                category={product.category}
              />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 font-sans font-semibold text-accent text-[clamp(0.95rem,2.5vw,1rem)] transition hover:opacity-90"
            >
              See More
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4"
        >
          <div className="py-12 text-center md:py-16">
            <div className="space-y-3">
              <h2 className="font-heading font-bold text-primary text-[clamp(1.4rem,5vw,2.2rem)]">
                Let’s Build the Right Solution
              </h2>
              <p className="font-sans text-primary/80 text-[clamp(0.9rem,3vw,1rem)]">
                Whether you need software, devices, networking, or Starlink
                installation, our team is ready to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-sans font-semibold text-primary text-[clamp(0.95rem,2.5vw,1rem)] transition hover:opacity-90"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </FullPage>
  );
};

export default Home;
