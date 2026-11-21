import { Rocket, Store, Building2, Lightbulb, Check, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";

type Segment = {
  icon: LucideIcon;
  title: string;
  lead: string;
  points: string[];
};

const segments: Segment[] = [
  {
    icon: Rocket,
    title: "Startups & D2C Brands",
    lead: "Secure the name before it's famous.",
    points: ["Search before you invest", "The right classes from day one", "Understand applicable fees before proceeding"],
  },
  {
    icon: Store,
    title: "MSMEs & Local Businesses",
    lead: "Your name is your goodwill.",
    points: ["Protect your shop and brand identity", "Simple, fully guided process", "Online coordination where suitable"],
  },
  {
    icon: Building2,
    title: "Growing Enterprises",
    lead: "Portfolio-grade protection.",
    points: ["Multi-class filings", "Assignments & recordals", "Renewal tracking across marks"],
  },
  {
    icon: Lightbulb,
    title: "Creators & Inventors",
    lead: "Ideas deserve credit — and cover.",
    points: ["Copyright for creative works", "Patent documentation support", "Careful document preparation"],
  },
];

const Audience = () => (
  <section id="audience" className="scroll-mt-20 bg-ivory py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Tailored to every stage of business"
          description="Whether you are naming a startup or managing a portfolio of marks, the process is shaped around you."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {segments.map(({ icon: Icon, title, lead, points }, i) => (
          <Reveal key={title} delay={i * 0.07} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-xl hover:shadow-navy-900/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800">
                <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy-800">{title}</h3>
              <p className="mt-1 text-sm font-medium text-gold-700">{lead}</p>
              <ul className="mt-4 flex-1 space-y-2.5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Audience;
