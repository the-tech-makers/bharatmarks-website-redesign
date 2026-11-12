import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/base/SectionHeading";
import Reveal from "@/components/base/Reveal";

const testimonials = [
  {
    quote: "Fast trademark filing service with great support.",
    name: "Rahul Verma",
    city: "Mumbai",
  },
  {
    quote: "Best company for trademark registration in India.",
    name: "Tejinder",
    city: "Gurgaon",
  },
  {
    quote:
      "Affordable pricing and excellent customer support. They helped us secure our brand name smoothly and answered all our queries patiently.",
    name: "Sakshi Sharma",
    city: "Delhi",
  },
  {
    quote: "Smooth process, professional staff, and timely updates.",
    name: "Shubham Saini",
    city: "Delhi",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="scroll-mt-20 bg-white py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          align="center"
          eyebrow="Success Stories"
          title="What clients say about Bharat Marks"
          description="Business owners across India trust us with the names they've worked hard to build."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.07} className="h-full">
            <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-ivory p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-xl hover:shadow-navy-900/10">
              <Quote className="h-6 w-6 text-gold-500" aria-hidden="true" />
              <div className="mt-3 flex gap-1" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold-500 text-gold-500" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 font-display text-sm text-gold-400">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-800">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.city}, India</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
