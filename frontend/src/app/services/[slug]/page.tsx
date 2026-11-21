import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ChevronRight, FileText, MessageCircle, ShieldCheck } from "lucide-react";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { getService, services } from "@/data/services";
import { serviceGuidance } from "@/data/service-guidance";

const SITE_URL = "https://bharatmarks.com";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found | Bharat Marks" };
  return {
    title: `${service.title} in India | Bharat Marks`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}/` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const canonicalUrl = `${SITE_URL}/services/${service.slug}/`;
  const guidance = serviceGuidance[service.slug];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    url: canonicalUrl,
    areaServed: { "@type": "Country", name: "India" },
    provider: { "@type": "Organization", name: "Bharat Marks", url: SITE_URL },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
      { "@type": "ListItem", position: 3, name: service.title, item: canonicalUrl },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const relatedServices = service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <main className="overflow-hidden bg-white pt-16 lg:pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema]) }} />
      <section className="relative isolate overflow-hidden bg-navy-900 py-16 text-white sm:py-20 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-noise" />
        <div className="absolute -right-32 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full border border-gold-500/15" />
        <div className="absolute -right-16 -top-24 -z-10 h-[20rem] w-[20rem] rounded-full border border-gold-500/20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
            <Link href="/" className="transition-colors hover:text-gold-400">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <Link href="/#services" className="transition-colors hover:text-gold-400">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-gold-400">{service.title}</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">{service.eyebrow}</p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{service.summary}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={`/?service=${service.slug}#contact`} className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20">
                Discuss your requirement <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="https://wa.me/919872236665" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold-400/60 hover:text-gold-400">
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
          </div>
          <div className="mt-14 grid max-w-3xl gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
            {["Clear guidance", "Process-led support", "India-focused services"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-300"><ShieldCheck className="h-4 w-4 text-gold-400" />{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.7fr] lg:gap-20 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">Understanding the service</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">{service.title}, explained</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">{service.intro}</p>
            <div className="mt-9 border-l-2 border-gold-500 pl-6">
              <h3 className="font-serif text-xl font-semibold text-navy-900">{service.whyTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.why}</p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-slate-200 bg-ivory p-7 sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-gold-400"><FileText className="h-5 w-5" /></span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-navy-900">How we can help</h3>
              <ul className="mt-6 space-y-4">
                {service.benefits.map((benefit) => <li key={benefit} className="flex gap-3 text-sm leading-6 text-slate-600"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-700" />{benefit}</li>)}
              </ul>
              <Link href={`/contact/?service=${service.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 transition-colors hover:text-navy-900">Talk to our team <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal><SectionHeading eyebrow="Our scope" title="What the service can include" description="The exact scope depends on your circumstances. We begin by understanding your requirement and the documents available." /></Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.includes.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-lg">
                  <span className="font-serif text-2xl text-gold-600">0{index + 1}</span>
                  <p className="mt-5 text-sm font-medium leading-6 text-navy-900">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {guidance && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">A practical example</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">When this service may be useful</h2>
              <p className="mt-6 text-base leading-8 text-slate-600">{guidance.scenario}</p>
              <p className="mt-5 text-sm leading-7 text-slate-500">{guidance.note}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-ivory p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">Possible work outputs</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-navy-900">What you can expect to prepare</h3>
                <ul className="mt-7 space-y-4">
                  {guidance.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-700" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal><SectionHeading eyebrow="A clear path forward" title="How the process works" description="A straightforward sequence helps you understand what is needed at each stage." /></Reveal>
          <div className="mt-12 space-y-0">
            {service.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.07}>
                <div className="relative grid gap-4 border-l border-gold-500/40 pb-9 pl-8 last:border-transparent last:pb-0 sm:grid-cols-[3rem_1fr] sm:gap-7">
                  <span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-gold-500 bg-white font-serif text-sm font-semibold text-navy-900">{index + 1}</span>
                  <div className="sm:col-start-2">
                    <h3 className="font-serif text-xl font-semibold text-navy-900">{step.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">Getting started</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">What you may need to share</h2>
            <p className="mt-5 text-sm leading-7 text-slate-300">Every matter is different. This checklist is a helpful starting point; we can confirm any additional information after reviewing your requirement.</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.documents.map((document) => <div key={document} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-200"><Check className="mt-1 h-4 w-4 shrink-0 text-gold-400" />{document}</div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal><SectionHeading eyebrow="Helpful answers" title="Frequently asked questions" description={`A few things people commonly ask about ${service.title.toLowerCase()}.`} /></Reveal>
          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {service.faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-navy-900 marker:hidden">
                    <span>{faq.question}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-gold-700 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 pr-10 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-navy-800 px-7 py-10 text-white sm:px-12 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">Your next step</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Let&apos;s talk about your {service.title.toLowerCase()} needs.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">Share a few details with our team. We&apos;ll help you understand the process and what may be required.</p>
            </div>
            <Link href={`/contact/?service=${service.slug}`} className="group mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400 lg:mt-0">Enquire now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <div className="mt-9 flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="inline-flex items-center gap-2 font-medium text-slate-500 transition-colors hover:text-navy-900"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {relatedServices.map((related) => <Link key={related.slug} href={`/services/${related.slug}/`} className="font-medium text-gold-700 transition-colors hover:text-navy-900">{related.title} <span aria-hidden="true">→</span></Link>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
