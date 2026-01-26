import { motion } from "framer-motion"
import FullPage from "../layout/FullPage"
import { services } from "../utils/data/service"
import ServiceCard from "../components/cards/ServiceCard"

const Services = () => {
  return (
    <FullPage>
      <main className="bg-base">
        <section className="mx-auto max-w-7xl px-6 pt-14 pb-14 md:pt-18">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-16 space-y-6 text-center"
          >
            <span className="inline-block rounded-full bg-muted px-4 py-1.5 font-sans text-[clamp(0.75rem,2vw,0.85rem)] font-semibold text-primary">
              What We Do
            </span>

            <h1 className="font-heading font-bold text-primary text-[clamp(1.5rem,6vw,2.5rem)] leading-tight">
              Professional IT Services
            </h1>

            <p className="mx-auto max-w-2xl font-sans text-dark/70 text-[clamp(0.8rem,3vw,1rem)] leading-relaxed">
              Inforgen Tech Solutions delivers reliable software, hardware,
              networking, and satellite internet services designed to support
              modern businesses and individuals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  name={service.name}
                  description={service.description}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-muted">
          <div className="mx-auto max-w-7xl px-6 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-heading font-bold text-primary text-[clamp(1.5rem,6vw,2.5rem)]">
                Need a Custom Solution?
              </h2>

              <p className="mx-auto max-w-xl font-sans text-dark/70 text-[clamp(0.8rem,3vw,1rem)]">
                Tell us your requirements and we’ll design a tailored technology
                solution that fits your needs and budget.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 font-sans text-[clamp(0.9rem,2.5vw,1rem)] font-semibold text-primary transition hover:opacity-90"
              >
                Request a Consultation
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </FullPage>
  )
}

export default Services
