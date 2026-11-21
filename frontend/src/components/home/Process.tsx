import {
  MessageSquareText,
  SearchCheck,
  FileCheck2,
  Activity,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";

const steps = [
  {
    num: "01",
    title: "Tell us about your brand",
    label: "Start with an enquiry",
    text: "Share your brand name, logo (if applicable), business details and the market where you want protection.",
    detail: "Your requirements",
    icon: MessageSquareText,
  },
  {
    num: "02",
    title: "Search & assess",
    label: "Before filing",
    text: "Review similar marks, identify relevant trademark classes and understand considerations that may affect the application.",
    detail: "Search and classification",
    icon: SearchCheck,
  },
  {
    num: "03",
    title: "Prepare & file",
    label: "Application stage",
    text: "Finalise the application details and supporting information, then proceed with filing through the appropriate process.",
    detail: "Documentation and filing",
    icon: FileCheck2,
  },
  {
    num: "04",
    title: "Monitor & maintain",
    label: "After filing",
    text: "Follow application updates and understand the next steps. If the Registry raises an objection, a response or hearing may be needed.",
    detail: "Updates and next steps",
    icon: Activity,
  },
];

const Process = () => (
  <section id="process" className="bg-noise relative scroll-mt-20 overflow-hidden bg-navy-800 py-24 text-white lg:py-28">
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(700px 400px at 10% 0%, rgba(212,175,55,0.1), transparent 60%), radial-gradient(800px 500px at 95% 100%, rgba(28,37,65,0.95), transparent 70%)",
      }}
    />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          dark
          eyebrow="How It Works"
          title="A clearer journey to protecting your brand"
          description="From the first conversation to filing and follow-up, understand what happens at each stage of the trademark process."
        />
      </Reveal>

      <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
        <span
          className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-gold-500/10 via-gold-400/70 to-gold-500/10 lg:block"
          aria-hidden="true"
        />
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.num} delay={i * 0.08} className="h-full">
              <li data-testid={`process-step-${i + 1}`} className="relative h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-700/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-navy-700/90 sm:p-7">
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold-500/35 bg-navy-800 text-gold-400 shadow-lg shadow-navy-950/20">
                      <Icon className="h-7 w-7" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="font-display text-4xl text-white/15">{step.num}</span>
                  </div>
                  <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400">{step.label}</p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug text-white">{step.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{step.text}</p>
                  <div className="mt-6 border-t border-white/10 pt-4 text-xs font-medium text-slate-400">
                    {step.detail}
                  </div>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ol>

      <Reveal delay={0.18}>
        <div className="mt-8 grid gap-5 rounded-2xl border border-gold-500/20 bg-navy-900/55 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
          <div className="flex gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400">
              <RefreshCw className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-semibold text-white">Some steps depend on the Registry</h3>
              <p className="mt-1 max-w-3xl text-sm leading-relaxed text-slate-300">
                Examination objections or hearings are not part of every application. If one arises, the appropriate response depends on the Registry&apos;s notice and the facts of the case. Registered trademarks also need to be renewed periodically, generally every ten years.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/919872236665?text=Hello%2C%20I%27d%20like%20to%20discuss%20my%20trademark%20requirements."
            target="_blank"
            rel="noopener noreferrer"
            data-testid="process-enquiry-link"
            className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors duration-300 hover:bg-gold-400"
          >
            Discuss your requirements
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Process;
