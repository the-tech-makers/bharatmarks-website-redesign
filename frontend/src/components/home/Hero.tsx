import { ArrowRight, MessageCircle, Check, ShieldCheck, CalendarClock } from "lucide-react";
import Reveal from "@/components/base/Reveal";

const trustChips = ["Transparent flat fees", "Dedicated attorneys", "Pan-India service"];

const Hero = () => (
  <section id="top" className="bg-noise relative overflow-hidden bg-navy-800 text-white">
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(700px 420px at 85% 8%, rgba(212,175,55,0.14), transparent 65%), radial-gradient(900px 500px at 8% 95%, rgba(28,37,65,0.9), transparent 70%)",
      }}
    />

    <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-28 pt-32 sm:px-6 lg:min-h-[100vh] lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-36 lg:pt-44">
      <div className="lg:col-span-6">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest2 text-gold-400">
            <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
            Trademark &amp; IP Services in India
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1
            data-testid="hero-headline"
            className="mt-6 font-display text-4xl leading-[1.12] sm:text-5xl lg:text-6xl"
          >
            Protect your brand with <em className="italic text-gold-400">confidence</em>, not complexity.
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            From trademark search to registration, objection and renewal — Bharat Marks handles the
            paperwork while you build the business. Clear guidance, honest fees and a team that
            speaks plain English.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              data-testid="hero-consultation-button"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-navy-800 transition-all duration-300 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/25"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://wa.me/919872236665"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors duration-300 hover:border-gold-400/60 hover:bg-white/5"
            >
              <MessageCircle className="h-4 w-4 text-gold-400" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {trustChips.map((chip) => (
              <li key={chip} className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="h-4 w-4 text-gold-400" aria-hidden="true" />
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="lg:col-span-6">
        <Reveal delay={0.2} y={36}>
          <div className="relative mx-auto max-w-xl lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] border border-gold-500/20" aria-hidden="true" />
            <img
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
              alt="IP strategists and founders discussing trademark protection"
              className="aspect-[4/3] w-full rounded-3xl border border-white/10 object-cover shadow-2xl shadow-navy-900/60"
              loading="eager"
            />
            <div className="absolute -right-3 top-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-700/90 p-4 shadow-xl backdrop-blur-md sm:-right-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15">
                <CalendarClock className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg text-white">12–18 months</p>
                <p className="text-xs text-slate-300">Typical registration timeline in India</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-700/90 p-4 shadow-xl backdrop-blur-md sm:-left-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15">
                <ShieldCheck className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg text-white">Renew every 10 years</p>
                <p className="text-xs text-slate-300">We track it, so you never lapse</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Hero;
