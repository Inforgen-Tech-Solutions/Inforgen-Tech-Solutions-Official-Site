import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import FullPage from "../layout/FullPage";
import Swal from "sweetalert2";
import type { ContactFormData } from "../utils/types/contact";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState, 
      [name as keyof ContactFormData]: value
    })
  )}

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement >) => {
    e.preventDefault();
    Swal.fire("Ooops", "Feature is coming soon. Use other contact means Instead", 'info')
  }

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
            <span className="inline-flex items-center gap-2 rounded-full border border-accent bg-base px-4 py-2 text-accent text-[clamp(0.75rem,2.5vw,0.875rem)] font-medium">
              Get In Touch
            </span>

            <h1 className="font-heading font-bold text-primary text-[clamp(1.5rem,6vw,2.5rem)] leading-tight">
              Let Us Talk About Your <span className="block text-accent bg-clip-text">Project</span>
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
                    <a href="tel:+260972292235">+260972292235</a>
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
                    Katima Mulilo Rd, lusaka Zambia
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
              onSubmit={handleFormSubmit}
            >
              <div className="space-y-6">
                <div>
                  <label className="block font-sans text-sm font-medium text-primary">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-muted px-4 py-3 font-sans text-sm focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-primary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-muted px-4 py-3 font-sans text-sm focus:border-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-primary">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
