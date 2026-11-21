import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import EnquiryForm from "@/components/home/EnquiryForm";

const SITE_URL = "https://bharatmarks.com";
const ADDRESS = "SCO 31 & 32, 1st Floor, U.E, Part-2, Patiala, Punjab 147002";
const MAP_QUERY = encodeURIComponent(ADDRESS);

export const metadata: Metadata = {
  title: "Contact Bharat Marks | Trademark & IP Enquiries",
  description: "Contact Bharat Marks in Patiala, Punjab for enquiries about trademark, copyright and patent assistance in India.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Bharat Marks",
    description: "Speak with Bharat Marks about your trademark and intellectual-property requirements.",
    url: `${SITE_URL}/contact/`,
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Bharat Marks",
    url: `${SITE_URL}/contact/`,
    mainEntity: {
      "@type": "Organization",
      name: "Bharat Marks",
      url: SITE_URL,
      telephone: "+91-98722-36665",
      email: "info@bharatmarks.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "SCO 31 & 32, 1st Floor, U.E, Part-2",
        addressLocality: "Patiala",
        addressRegion: "Punjab",
        postalCode: "147002",
        addressCountry: "IN",
      },
    },
  };

  return (
    <main className="bg-white pt-16 lg:pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <section className="relative isolate overflow-hidden bg-navy-900 py-16 text-white sm:py-20 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-noise" />
        <div className="absolute -right-32 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full border border-gold-500/15" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">Contact Bharat Marks</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Let&apos;s understand what you need.</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Tell us a little about your trademark or intellectual-property requirement. We can discuss the relevant process, information and possible next steps.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">Reach our team</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-900">We&apos;re here to help you take the next step.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Choose the contact method that works best for you, or send an enquiry using the form.</p>

            <div className="mt-8 space-y-4">
              <a href="tel:+919872236665" className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-5 transition-colors hover:border-gold-500/60 hover:bg-ivory">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-gold-400"><Phone className="h-5 w-5" aria-hidden="true" /></span>
                <span><span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Call us</span><span className="mt-1 block font-semibold text-navy-900">+91 98722 36665</span></span>
              </a>
              <a href="https://wa.me/919872236665" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-5 transition-colors hover:border-gold-500/60 hover:bg-ivory">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-gold-400"><MessageCircle className="h-5 w-5" aria-hidden="true" /></span>
                <span className="min-w-0 flex-1"><span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">WhatsApp</span><span className="mt-1 block font-semibold text-navy-900">Chat with Bharat Marks</span></span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-gold-700" aria-hidden="true" />
              </a>
              <a href="mailto:info@bharatmarks.com" className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-5 transition-colors hover:border-gold-500/60 hover:bg-ivory">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-gold-400"><Mail className="h-5 w-5" aria-hidden="true" /></span>
                <span><span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Email</span><span className="mt-1 block break-all font-semibold text-navy-900">info@bharatmarks.com</span></span>
              </a>
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-gold-400"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
                <span><span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Office address</span><span className="mt-1 block text-sm font-medium leading-6 text-navy-900">{ADDRESS}</span></span>
              </div>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-slate-500"><Clock3 className="h-4 w-4 shrink-0" aria-hidden="true" /> Please call or message to confirm current office hours before visiting.</p>
          </div>

          <div id="enquiry" className="scroll-mt-28 rounded-3xl bg-navy-800 p-4 sm:p-7">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">Find our office</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-navy-900">Visit us in Patiala</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{ADDRESS}</p>
            </div>
            <a href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 self-start rounded-full border border-navy-800/15 px-5 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-gold-600 hover:bg-white">
              Open directions <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <iframe
              title="Map showing Bharat Marks office in Patiala, Punjab"
              src={`https://maps.google.com/maps?q=${MAP_QUERY}&output=embed`}
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">Map location is based on the office address listed by Bharat Marks. Please confirm the location before travelling.</p>
        </div>
      </section>
    </main>
  );
}
