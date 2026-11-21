"use client";

import { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";

const faqs = [
  {
    q: "Why may I need help with a trademark application?",
    a: "The process involves choosing the relevant goods or services, preparing applicant and mark details, and responding to Registry communications if they arise. Guidance can help you understand the requirements and avoid common filing mistakes.",
  },
  {
    q: "What can be trademarked?",
    a: "Brand names, logos, slogans — and even sounds — can be trademarked. Our team can advise you on what qualifies for trademark protection in India.",
  },
  {
    q: "How long does the trademark registration process take?",
    a: "There is no single timeline for every application. The process can be affected by examination, objections, hearings, opposition proceedings and Registry workload. Any estimate should be considered in light of the status and circumstances of the particular application.",
  },
  {
    q: "What is a trademark search, and why is it important?",
    a: "A trademark search helps determine whether similar trademarks already exist that could conflict with yours. It avoids potential roadblocks and protects your investment in your brand.",
  },
  {
    q: "What happens if the Trademark Office raises objections to my application?",
    a: "An examination report should be reviewed carefully so that each issue and any response deadline can be understood. Depending on the case, a written response, supporting documents or a hearing may be relevant.",
  },
  {
    q: "How do I renew my trademark registration?",
    a: "A trademark registration is generally valid for ten years and may be renewed for further ten-year periods. The registration number, proprietor details and renewal due date should be checked before taking action.",
  },
  {
    q: "How much does trademark registration cost?",
    a: "Government filing charges and professional fees depend on the service, the number of trademark classes and the details of your case. Contact us with your requirements so we can explain the applicable charges before you proceed.",
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
                Still unsure about something? Tell us about your brand and we can explain the information
                needed to understand your options and possible next steps.
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
                      aria-controls={`faq-answer-${i}`}
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
                      <div id={`faq-answer-${i}`} aria-hidden={!open} className="overflow-hidden">
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
