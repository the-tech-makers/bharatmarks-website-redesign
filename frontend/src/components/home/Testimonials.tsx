import { FileSearch, ClipboardCheck, MessagesSquare } from "lucide-react";
import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";

const supportAreas = [
  {
    icon: FileSearch,
    title: "Understand your starting point",
    text: "Discuss your brand, work or invention and the information available before choosing a next step.",
  },
  {
    icon: ClipboardCheck,
    title: "Get clear on requirements",
    text: "Understand the documents, application details and procedural stages that may apply to your matter.",
  },
  {
    icon: MessagesSquare,
    title: "Know what happens next",
    text: "Ask questions about Registry updates, possible responses and the next steps in the process.",
  },
];

const Testimonials = () => (
  <section id="support" className="scroll-mt-20 bg-white py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="How we support you"
          title="A clearer path through the process"
          description="Every application is different. Start with the facts of your matter and get a clearer understanding of the steps involved."
        />
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {supportAreas.map(({ icon: Icon, title, text }, index) => (
          <Reveal key={title} delay={index * 0.07} className="h-full">
            <article className="h-full rounded-2xl border border-slate-200 bg-ivory p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-xl hover:shadow-navy-900/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800">
                <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-navy-800">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
