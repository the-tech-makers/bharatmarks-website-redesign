"use client";

import { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";

const faqs = [
  {
    q: "What is a trademark attorney, and why do I need one?",
    a: "A trademark attorney specialises in trademark law. They help you navigate the Indian registration process, ensuring your application is complete and well prepared — saving you time and helping you avoid common pitfalls.",
  },
  {
    q: "What can be trademarked?",
    a: "Brand names, logos, slogans — and even sounds — can be trademarked. Our team can advise you on what qualifies for trademark protection in India.",
  },
  {
    q: "How long does the trademark registration process take?",
    a: "In India, registration typically takes anywhere from 12 to 18 months, depending on any challenges that arise. We keep you informed at every stage of the process.",
  },
  {
    q: "What is a trademark search, and why is it important?",
    a: "A trademark search helps determine whether similar trademarks already exist that could conflict with yours. It avoids potential roadblocks and protects your investment in your brand.",
  },
  {
    q: "What happens if the Trademark Office raises objections to my application?",
    a: "If the Registry raises concerns, we help you understand the issues and craft a response to address them — and represent you at hearings if required.",
  },
  {
    q: "How do I renew my trademark registration?",
    a: "Trademarks must be renewed every 10 years to maintain protection. We can manage the renewal process for you, ensuring your brand stays protected.",
  },
  {
    q: "How much does trademark registration cost?",
    a: "The total depends on the service required, the number of trademark classes and the details of your application. Contact us with your requirements so we can discuss the applicable government filing charges and professional fees before you proceed. We do not publish a one-size-fits-all fee list.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-ivory py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions, answered plainly"
              description="The things founders and business owners ask us most before starting their trademark journey."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm leading-relaxed text-slate-600">
                Still unsure about something? Tell us about your brand and we&apos;ll point you in
                the right direction — the first consultation is free.
              </p>
              <a
                href="#contact"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 transition-colors hover:text-navy-800"
              >
                Talk to us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openIndex === i;
              return (
                <Reveal key={f.q} delay={i * 0.04}>
                  <div
                    data-testid={`faq-accordion-item-${i + 1}`}
                    className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
                      open ? "border-gold-500/50" : "border-slate-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-sm font-semibold text-navy-800 sm:text-base">{f.q}</span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          open ? "rotate-45 bg-gold-500 text-navy-800" : "bg-navy-800 text-gold-400"
                        }`}
                      >
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
