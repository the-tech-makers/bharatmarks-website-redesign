import { Route, GraduationCap, BadgeIndianRupee, MapPin, Check } from "lucide-react";
import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";

const features = [
  {
    icon: Route,
    title: "Understand the Process",
    text: "Get guidance on the stages of a trademark application, from an initial search through examination and later updates.",
  },
  {
    icon: GraduationCap,
    title: "Considered Guidance",
    text: "Discuss your mark, business activity and available information to understand possible filing approaches and next steps.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Understand the Costs",
    text: "Ask about the government charges and professional fees that may apply to your particular requirement before proceeding.",
  },
  {
    icon: MapPin,
    title: "India-Focused Services",
    text: "Explore trademark and intellectual property assistance for business owners and creators in India.",
  },
];

const outcomes = ["Understand your options", "Make informed filing decisions", "Keep records organised"];

const WhyChooseUs = () => (
  <section id="why-us" className="scroll-mt-20 bg-white py-24 lg:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
      <div>
        <Reveal>
          <SectionHeading
            eyebrow="Why Bharat Marks"
            title="Brand protection, without the runaround"
            description="A trademark is a valuable asset that identifies your brand in the marketplace. We make registering and keeping it simple, honest and predictable."
          />
        </Reveal>

        <div className="mt-10 space-y-7">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="flex gap-5">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800">
                  <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy-800">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <ul className="mt-10 flex flex-wrap gap-3">
            {outcomes.map((o) => (
              <li
                key={o}
                className="flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-300/20 px-4 py-2 text-sm font-medium text-navy-800"
              >
                <Check className="h-4 w-4 text-gold-700" aria-hidden="true" />
                {o}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.15} y={36}>
        <div className="relative mx-auto max-w-xl lg:max-w-none">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-gold-300/40" aria-hidden="true" />
          <img
            src="https://images.unsplash.com/photo-1630265927428-a62b061a5270?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
            alt="A professional law office representing legal expertise"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-navy-900/20 sm:aspect-[5/4] lg:aspect-[4/5]"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-navy-800/90 p-5 text-white shadow-xl backdrop-blur-md">
            <p className="font-display text-lg">“Don't let your brand name become someone else's.”</p>
            <p className="mt-1 text-xs uppercase tracking-widest2 text-gold-400">Bharat Marks</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default WhyChooseUs;
