import { ShieldCheck, BadgeIndianRupee, UserCheck, Globe } from "lucide-react";
import Reveal from "@/components/base/Reveal";

const items = [
  {
    icon: ShieldCheck,
    title: "End-to-End Handling",
    text: "Search, filing, objection and renewal — all under one roof",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Fees",
    text: "Know your exact cost before we begin",
  },
  {
    icon: UserCheck,
    title: "Dedicated Experts",
    text: "Qualified trademark professionals on your side",
  },
  {
    icon: Globe,
    title: "Pan-India Service",
    text: "Assisting clients across India, fully online",
  },
];

const TrustStrip = () => (
  <section aria-label="Why clients trust Bharat Marks" className="relative z-10">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal y={20}>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl shadow-navy-900/10 sm:grid-cols-2 lg:grid-cols-4 lg:-mt-16">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white p-6 transition-colors duration-300 hover:bg-ivory lg:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800">
                <Icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy-800">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default TrustStrip;
