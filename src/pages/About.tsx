import { motion } from "framer-motion"
import {
  Code2,
  Laptop,
  Wifi,
  SatelliteDish
} from "lucide-react"
import FullPage from "../layout/FullPage"

const About = () => {
  return (
    <FullPage>
      <main className="bg-base">
        <section className="mx-auto max-w-7xl px-6 py-8 md:py-18">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 space-y-6 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent bg-base px-4 py-2 text-accent text-[clamp(0.75rem,2.5vw,0.875rem)] font-medium">
              Who We Are
            </span>

            <h1 className="font-heading font-bold text-primary text-[clamp(1.5rem,6vw,2.5rem)] leading-tight">
              About Inforgen Tech <span className="block text-accent bg-clip-text">Solutions</span>
            </h1>

            <p className="mx-auto max-w-3xl font-sans text-dark/70 text-[clamp(0.8rem,3vw,1rem)] leading-relaxed">
              Inforgen Tech Solutions is a technology-driven company focused on
              delivering reliable software, hardware, and connectivity solutions
              that empower businesses and individuals to operate efficiently in
              a digital world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-heading font-bold text-primary text-[clamp(1.4rem,5vw,2.2rem)]">
                What We Do
              </h2>

              <p className="font-sans text-dark/70 text-[clamp(0.8rem,3vw,1rem)] leading-relaxed">
                We specialize in custom software development, hardware sales and
                setup, professional networking solutions, and Starlink
                installations. Our approach combines technical expertise with
                practical understanding to deliver solutions that work in real
                environments.
              </p>

              <p className="font-sans text-dark/70 text-[clamp(0.8rem,3vw,1rem)] leading-relaxed">
                From startups to growing enterprises, we support our clients
                with scalable systems, dependable infrastructure, and ongoing
                technical support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="rounded-2xl border border-muted bg-white p-6 shadow-md">
                <Code2 className="mb-4 text-accent" size={28} />
                <h3 className="font-heading font-semibold text-primary text-[clamp(1rem,2.8vw,1.2rem)]">
                  Software Engineering
                </h3>
                <p className="mt-2 font-sans text-dark/70 text-sm">
                  Scalable and maintainable applications built to solve real
                  business problems.
                </p>
              </div>

              <div className="rounded-2xl border border-muted bg-white p-6 shadow-md">
                <Laptop className="mb-4 text-accent" size={28} />
                <h3 className="font-heading font-semibold text-primary text-[clamp(1rem,2.8vw,1.2rem)]">
                  Hardware Solutions
                </h3>
                <p className="mt-2 font-sans text-dark/70 text-sm">
                  Reliable devices and components sourced, configured, and
                  supported professionally.
                </p>
              </div>

              <div className="rounded-2xl border border-muted bg-white p-6 shadow-md">
                <Wifi className="mb-4 text-accent" size={28} />
                <h3 className="font-heading font-semibold text-primary text-[clamp(1rem,2.8vw,1.2rem)]">
                  Networking
                </h3>
                <p className="mt-2 font-sans text-dark/70 text-sm">
                  Secure and efficient network setups for homes and businesses.
                </p>
              </div>

              <div className="rounded-2xl border border-muted bg-white p-6 shadow-md">
                <SatelliteDish className="mb-4 text-accent" size={28} />
                <h3 className="font-heading font-semibold text-primary text-[clamp(1rem,2.8vw,1.2rem)]">
                  Starlink Internet
                </h3>
                <p className="mt-2 font-sans text-dark/70 text-sm">
                  High-speed satellite internet installation for remote and
                  underserved areas.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-24 rounded-3xl bg-muted px-8 py-16 text-center"
          >
            <h2 className="font-heading font-bold text-primary text-[clamp(1.4rem,5vw,2.2rem)]">
              Our Mission
            </h2>

            <p className="mx-auto mt-2 max-w-3xl font-sans text-dark/70 text-[clamp(0.8rem,3vw,1rem)] leading-relaxed">
              To deliver dependable technology solutions that enable growth,
              connectivity, and innovation for businesses and individuals across
              Africa and beyond.
            </p>
          </motion.div>
        </section>
      </main>
    </FullPage>
  )
}

export default About
