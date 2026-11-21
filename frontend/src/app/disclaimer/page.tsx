import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Bharat Marks",
  description: "Important information about the general nature and limitations of content on the Bharat Marks website.",
  alternates: { canonical: "/disclaimer/" },
};

export default function DisclaimerPage() {
  return (
    <main className="bg-white pt-16 lg:pt-20">
      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">Important information</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Website Disclaimer</h1>
          <p className="mt-5 text-sm text-slate-300">Last updated: 22 November 2026</p>
        </div>
      </section>
      <article className="mx-auto max-w-4xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-base leading-8 text-slate-600">The information on this website is provided for general informational purposes about trademarks, copyright, patents and related processes in India. It is not a substitute for advice based on the facts and documents of a particular matter.</p>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">No guarantee of outcomes</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">A search, application, response or other procedural step cannot guarantee registration, grant, acceptance or a particular result. Decisions are made by the relevant authorities under applicable law. Timelines may vary depending on the matter, examination, objections, hearings, third-party actions and Registry processes.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">Information may change</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Laws, rules, forms, official fees, procedures and administrative practices may change. Although care is taken when preparing website content, Bharat Marks does not represent that every page is complete, current or applicable to every situation. Confirm current requirements with the relevant official source before acting.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">No professional relationship from browsing</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Reading this website or sending a general enquiry does not, by itself, establish an attorney-client relationship or any other formal professional engagement. The scope of any work should be confirmed separately before instructions are acted upon.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">Third-party links and external services</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">This website may link to external websites or services for convenience. Bharat Marks does not control their content, availability, privacy practices or terms. Following an external link is at your discretion.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">Contact</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">For questions about website content, contact <a className="font-semibold text-gold-700 underline underline-offset-4" href="mailto:info@bharatmarks.com">info@bharatmarks.com</a> or call <a className="font-semibold text-gold-700 underline underline-offset-4" href="tel:+919872236665">+91 98722 36665</a>.</p>
        </section>
      </article>
    </main>
  );
}
