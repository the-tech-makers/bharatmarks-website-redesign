import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import Reveal from "@/components/base/Reveal";
import EnquiryForm from "@/components/home/EnquiryForm";

const contactMethods = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 98722 36665",
    href: "tel:+919872236665",
    testid: "final-cta-phone-link",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Instant chat with our team",
    href: "https://wa.me/919872236665",
    testid: "final-cta-whatsapp-link",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@bharatmarks.com",
    href: "mailto:info@bharatmarks.com",
    testid: "final-cta-email-link",
  },
];

const FinalCTA = () => (
  <section id="contact" className="bg-noise relative scroll-mt-20 overflow-hidden bg-navy-800 py-24 text-white lg:py-28">
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(800px 450px at 90% 10%, rgba(212,175,55,0.13), transparent 60%), radial-gradient(700px 450px at 5% 95%, rgba(28,37,65,0.95), transparent 70%)",
      }}
    />
    <div className="relative mx-auto grid max-w-7xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
      <div>
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest2 text-gold-400">
            <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
            Let&apos;s Talk
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            Don&apos;t let your brand name become <em className="italic text-gold-400">someone else&apos;s</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Tell us about your brand or application. We can discuss the relevant process, documents and
            applicable charges so you can understand the next steps before deciding how to proceed.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <a
            href="https://wa.me/919872236665"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-cta-whatsapp-button"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-navy-800 transition-all duration-300 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
          >
            Start on WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>

      <div className="space-y-8">
        <EnquiryForm />
        <div className="grid gap-4 sm:grid-cols-2">
        {contactMethods.map(({ icon: Icon, label, value, href, testid }, i) => (
          <Reveal key={label} delay={i * 0.07} className={i === 0 ? "sm:row-span-1" : ""}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              data-testid={testid}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-700/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15">
                <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest2 text-slate-400">{label}</p>
              <p className="mt-1.5 font-medium text-white">{value}</p>
            </a>
          </Reveal>
        ))}
        <Reveal delay={0.28}>
          <div className="h-full rounded-2xl border border-white/10 bg-navy-700/60 p-6 backdrop-blur-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15">
              <MapPin className="h-5 w-5 text-gold-400" aria-hidden="true" />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest2 text-slate-400">Office</p>
            <p className="mt-1.5 text-sm leading-relaxed text-white">
              SCO 31 &amp; 32, 1st Floor, U.E, Part-2, Patiala, Punjab 147002
            </p>
          </div>
        </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
