import {
  Search,
  FileSignature,
  ShieldAlert,
  Gavel,
  RefreshCcw,
  ArrowLeftRight,
  Copyright,
  Lightbulb,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/bharat-marks";

type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  text: string;
};

const services: Service[] = [
  {
    slug: "trademark-search",
    icon: Search,
    title: "Trademark Search",
    text: "A thorough investigation to see if similar trademarks already exist — minimising future issues before you invest.",
  },
  {
    slug: "trademark-registration",
    icon: FileSignature,
    title: "Trademark Registration",
    text: "We handle the official process of submitting your trademark application to the Trade Marks Registry in India.",
  },
  {
    slug: "trademark-objection",
    icon: ShieldAlert,
    title: "Objection & Response",
    text: "If the Registry raises concerns, we craft a considered response to address them and keep your application moving.",
  },
  {
    slug: "trademark-hearing",
    icon: Gavel,
    title: "Trademark Hearing",
    text: "Professional preparation and representation for trademark hearings before the Registry.",
  },
  {
    slug: "trademark-renewal",
    icon: RefreshCcw,
    title: "Trademark Renewal",
    text: "Trademarks need to be renewed periodically to maintain protection — we manage the process for you.",
  },
  {
    slug: "trademark-assignment",
    icon: ArrowLeftRight,
    title: "Trademark Assignment",
    text: "Transferring ownership of a mark? We handle the paperwork and recordals, properly and on time.",
  },
  {
    slug: "copyright-registration",
    icon: Copyright,
    title: "Copyright Registration",
    text: "Protection for original works — literary, artistic, software and sound recordings — under Indian copyright law.",
  },
  {
    slug: "patent-assistance",
    icon: Lightbulb,
    title: "Patent Assistance",
    text: "Guidance and documentation support for inventors seeking to protect novel inventions in India.",
  },
];

const Services = () => (
  <section id="services" className="scroll-mt-20 bg-ivory py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="What We Do"
          title="Every step of your trademark journey, covered"
          description="Six specialised trademark services, plus copyright and patent support — so your brand, your creations and your inventions stay yours."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ slug, icon: Icon, title, text }, i) => (
          <Reveal key={slug} delay={(i % 4) * 0.07} className="h-full">
            <article
              id={`service-${slug}`}
              data-testid={`service-card-${slug}`}
              className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-xl hover:shadow-navy-900/10"
            >
              <span
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 transition-colors duration-300 group-hover:bg-gold-500">
                <Icon className="h-5 w-5 text-gold-400 transition-colors duration-300 group-hover:text-navy-800" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy-800">{title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">{text}</p>
              <a
                href={`${BASE_PATH}/services/${slug}/`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 transition-colors hover:text-navy-800"
              >
                Explore service
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
