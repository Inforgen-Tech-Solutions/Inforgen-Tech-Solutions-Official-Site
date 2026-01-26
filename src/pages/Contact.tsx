import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react"
import FullPage from "../layout/FullPage"

const Contact = () => {
  return (
    <FullPage>
      <main className="bg-base">
        <section className="mx-auto max-w-7xl px-6 py-8 md:py-18">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-16 space-y-6 text-center"
          >
            <span className="inline-block rounded-full bg-muted px-4 py-1.5 font-sans text-[clamp(0.75rem,2vw,0.85rem)] font-semibold text-primary">
              Get In Touch
            </span>

            <h1 className="font-heading font-bold text-primary text-[clamp(1.5rem,6vw,2.5rem)] leading-tight">
              Let’s Talk About Your Project
            </h1>

            <p className="mx-auto max-w-2xl font-sans text-dark/70 text-[clamp(0.8rem,3vw,1rem)] leading-relaxed">
              Whether you need software development, hardware solutions,
              networking, or Starlink installation, our team is ready to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary text-[clamp(1rem,2.8vw,1.2rem)]">
                    Email
                  </h3>
                  <p className="font-sans text-dark/70 text-[clamp(0.9rem,2.5vw,1rem)]">
                    info@inforgentech.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary text-[clamp(1rem,2.8vw,1.2rem)]">
                    Phone
                  </h3>
                  <p className="font-sans text-dark/70 text-[clamp(0.9rem,2.5vw,1rem)]">
                    +260972292235
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary text-[clamp(1rem,2.8vw,1.2rem)]">
                    Location
                  </h3>
                  <p className="font-sans text-dark/70 text-[clamp(0.9rem,2.5vw,1rem)]">
                    Zambia — Serving Nationwide
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-muted bg-white p-8 shadow-lg"
            >
              <div className="space-y-6">
                <div>
                  <label className="block font-sans text-sm font-medium text-primary">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-muted px-4 py-3 font-sans text-sm focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-primary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-xl border border-muted px-4 py-3 font-sans text-sm focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-primary">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-muted px-4 py-3 font-sans text-sm focus:border-accent focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-sans text-[clamp(0.9rem,2.5vw,1rem)] font-semibold text-primary transition hover:opacity-90"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>
    </FullPage>
  )
}

export default Contact
