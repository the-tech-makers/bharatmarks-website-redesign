import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/bharat-marks";

const serviceLinks = [
  { label: "Trademark Search", href: `${BASE_PATH}/services/trademark-search/` },
  { label: "Trademark Registration", href: `${BASE_PATH}/services/trademark-registration/` },
  { label: "Objection & Response", href: `${BASE_PATH}/services/trademark-objection/` },
  { label: "Trademark Hearing", href: `${BASE_PATH}/services/trademark-hearing/` },
  { label: "Trademark Renewal", href: `${BASE_PATH}/services/trademark-renewal/` },
  { label: "Trademark Assignment", href: `${BASE_PATH}/services/trademark-assignment/` },
  { label: "Copyright Registration", href: `${BASE_PATH}/services/copyright-registration/` },
  { label: "Patent Assistance", href: `${BASE_PATH}/services/patent-assistance/` },
];

const companyLinks = [
  { label: "Why Us", href: `${BASE_PATH}/#why-us` },
  { label: "Process", href: `${BASE_PATH}/#process` },
  { label: "Who We Serve", href: `${BASE_PATH}/#audience` },
  { label: "How We Support", href: `${BASE_PATH}/#support` },
  { label: "FAQ", href: `${BASE_PATH}/#faq` },
  { label: "Contact", href: `${BASE_PATH}/contact/` },
];

const Footer = () => (
  <footer className="border-t border-white/5 bg-navy-900 text-slate-400">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="inline-flex items-center self-start rounded-xl bg-white px-3 py-1.5">
            <Image src={`${BASE_PATH}/logo.png`} alt="Bharat Marks" width={180} height={38} className="h-9 w-auto" />
          </span>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Bharat Marks is your one-stop destination for trademark and intellectual-property
            services in India — helping businesses and individuals secure and protect the brands
            they&apos;ve worked hard to build.
          </p>
        </div>

        <nav aria-label="Services" className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-widest2 text-gold-400">Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <div className="grid gap-10 sm:grid-cols-2">
            <nav aria-label="Company">
              <h3 className="text-xs font-semibold uppercase tracking-widest2 text-gold-400">Company</h3>
              <ul className="mt-5 space-y-2.5 text-sm">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="transition-colors hover:text-gold-400">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest2 text-gold-400">Reach Us</h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a
                    href="tel:+919872236665"
                    data-testid="footer-phone-link"
                    className="flex items-center gap-2.5 transition-colors hover:text-gold-400"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                    +91 98722 36665
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919872236665"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="footer-whatsapp-link"
                    className="flex items-center gap-2.5 transition-colors hover:text-gold-400"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                    WhatsApp us
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@bharatmarks.com"
                    data-testid="footer-email-link"
                    className="flex items-center gap-2.5 transition-colors hover:text-gold-400"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                    info@bharatmarks.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                  <span>
                    SCO 31 &amp; 32, 1st Floor, U.E, Part-2, Patiala, Punjab 147002
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-white/5 pt-8">
        <p className="text-xs leading-relaxed text-slate-500">
          Bharat Marks provides professional intellectual-property services in India. Content on
          this site is for general information only and does not constitute legal advice.
          Registration timelines and outcomes are determined by the Trade Marks Registry and cannot
          be guaranteed.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">© 2026 Bharat Marks. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
            <a href={`${BASE_PATH}/privacy-policy/`} className="transition-colors hover:text-gold-400">Privacy Policy</a>
            <a href={`${BASE_PATH}/disclaimer/`} className="transition-colors hover:text-gold-400">Disclaimer</a>
          </nav>
          <p className="text-xs text-slate-500">Trademark · Copyright · Patent Assistance · India</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
