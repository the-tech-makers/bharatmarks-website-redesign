import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";

const steps = [
  {
    num: "01",
    title: "Trademark Search",
    chip: "Before you file",
    text: "We investigate whether similar trademarks already exist, minimising future issues before you invest in the brand.",
  },
  {
    num: "02",
    title: "Drafting & Filing",
    chip: "Official filing",
    text: "We handle the official process of submitting your application to the Trade Marks Registry, with the right classes selected.",
  },
  {
    num: "03",
    title: "Objection & Hearing",
    chip: "When concerns arise",
    text: "If the Registry raises concerns, we craft responses to address them and represent you at hearings along the way.",
  },
  {
    num: "04",
    title: "Registration & Renewal",
    chip: "Every 10 years",
    text: "Once registered, we track renewal deadlines for you so your protection never quietly lapses.",
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
          title="A clear path from idea to registered trademark"
          description="Everything happens online. You always know which stage your application is at — and what happens next."
        />
      </Reveal>

      <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.09} className="h-full">
            <li data-testid={`process-step-${i + 1}`} className="relative h-full">
              {i < steps.length - 1 && (
                <span
                  className="absolute left-full top-6 hidden h-px w-8 bg-gradient-to-r from-gold-500/60 to-transparent lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-700/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-gold-500/40">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl text-gold-400">{step.num}</span>
                  <span className="rounded-full border border-gold-500/30 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-gold-300">
                    {step.chip}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{step.text}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.2}>
        <p className="mt-10 text-sm text-slate-400">
          Timelines vary by application — trademark registration in India typically takes 12 to 18
          months, depending on objections or challenges that may arise. We keep you informed
          throughout.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Process;
