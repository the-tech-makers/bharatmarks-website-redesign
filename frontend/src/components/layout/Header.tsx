"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";

const serviceLinks = [
  { label: "Trademark Search", href: "#service-trademark-search" },
  { label: "Trademark Registration", href: "#service-trademark-registration" },
  { label: "Objection & Response", href: "#service-trademark-objection" },
  { label: "Trademark Hearing", href: "#service-trademark-hearing" },
  { label: "Trademark Renewal", href: "#service-trademark-renewal" },
  { label: "Trademark Assignment", href: "#service-trademark-assignment" },
  { label: "Copyright Registration", href: "#service-copyright-registration" },
  { label: "Patent Assistance", href: "#service-patent-assistance" },
];

const navLinks = [
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Who We Serve", href: "#audience" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy-800/95 shadow-lg shadow-navy-900/30 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a
          href="#top"
          data-testid="header-logo"
          aria-label="Bharat Marks — home"
          className="inline-flex items-center rounded-xl bg-white px-3 py-1.5 shadow-md shadow-navy-900/40"
        >
          <Image
            src="/bharat-marks/logo.png"
            alt="Bharat Marks"
            width={216}
            height={46}
            priority
            className="h-8 w-auto lg:h-9"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              data-testid="header-services-dropdown"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className="flex items-center gap-1.5 py-2 transition-colors hover:text-gold-400"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                <div className="grid w-[560px] grid-cols-2 gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-navy-900/25">
                  {serviceLinks.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="rounded-xl px-4 py-3 text-sm font-medium text-navy-800 transition-colors hover:bg-gold-300/20 hover:text-navy-900"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="py-2 transition-colors hover:text-gold-400">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+919872236665"
            data-testid="header-phone-link"
            className="flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-gold-400"
          >
            <Phone className="h-4 w-4 text-gold-400" />
            +91 98722 36665
          </a>
          <a
            href="#contact"
            data-testid="header-enquire-button"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-navy-800 transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
          >
            Enquire Now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          data-testid="mobile-menu-button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-navy-800 lg:hidden">
          <div className="space-y-1 px-4 py-6 sm:px-6">
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-white transition-colors hover:bg-white/10"
              aria-expanded={mobileServicesOpen}
            >
              Services
              <ChevronDown className={`h-4 w-4 text-gold-400 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-4 space-y-1 border-l border-white/10 pl-4">
                {serviceLinks.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <div className="space-y-3 pt-4">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-full bg-gold-500 px-6 py-3 text-center text-sm font-semibold text-navy-800 transition-colors hover:bg-gold-400"
              >
                Enquire Now
              </a>
              <a
                href="https://wa.me/919872236665"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4 text-gold-400" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
