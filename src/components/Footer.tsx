import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-base">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 py-14"
      >
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-heading font-bold">Inforgen</span>
              <span className="text-lg font-heading font-bold text-accent">
                Tech
              </span>
            </div>
            <p className="text-sm text-base/80 font-sans">
              Software, hardware, and connectivity solutions built for modern
              businesses and individuals.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold">
              Services
            </h4>
            <ul className="space-y-2 text-sm font-sans text-base/80">
              <li><a href="/#services" className="hover:text-accent">Software Solutions</a></li>
              <li><a href="/#services" className="hover:text-accent">Hardware Sales</a></li>
              <li><a href="/#services" className="hover:text-accent">Networking & WiFi</a></li>
              <li><a href="/#services" className="hover:text-accent">Starlink Installation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold">
              Company
            </h4>
            <ul className="space-y-2 text-sm font-sans text-base/80">
              <li><a href="/about" className="hover:text-accent">About Us</a></li>
              <li><a href="/services" className="hover:text-accent">Services</a></li>
              <li><a href="/products" className="hover:text-accent">Products</a></li>
              <li><a href="/contact" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-sans text-base/80">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>info@inforgentech.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <span>+260972292235</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Lusaka, Zambia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-base/20 pt-6 text-center text-xs font-sans text-base/70">
          © {new Date().getFullYear()} Inforgen Tech Solutions. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
