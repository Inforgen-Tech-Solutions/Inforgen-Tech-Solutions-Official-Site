import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-base border-b border-muted relative">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-heading font-bold text-primary">
            Inforgen Tech
          </span>
          <span className="text-xl font-heading font-bold text-accent">
            Solutions
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-sans text-sm text-dark">
          <li><a href="/#services" className="hover:text-primary transition">Services</a></li>
          <li><a href="/#products" className="hover:text-primary transition">Products</a></li>
          <li><a href="/about" className="hover:text-primary transition">About</a></li>
          <li><a href="/contact" className="hover:text-primary transition">Contact</a></li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="rounded-xl bg-accent px-5 py-2.5 font-sans text-sm font-semibold text-primary hover:opacity-90 transition"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-primary"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 top-full w-full bg-base border-t border-muted transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-6 font-sans text-sm text-dark">
          <li><a onClick={() => setIsOpen(false)} href="/#services" className="hover:text-primary">Services</a></li>
          <li><a onClick={() => setIsOpen(false)} href="/#products" className="hover:text-primary">Products</a></li>
          <li><a onClick={() => setIsOpen(false)} href="/about" className="hover:text-primary">About</a></li>
          <li><a onClick={() => setIsOpen(false)} href="/contact" className="hover:text-primary">Contact</a></li>

          <li>
            <a
              onClick={() => setIsOpen(false)}
              href="#contact"
              className="mt-2 inline-block rounded-xl bg-accent px-5 py-3 text-center font-semibold text-primary"
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
