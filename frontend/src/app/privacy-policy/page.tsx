import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Bharat Marks",
  description: "Read how Bharat Marks handles information shared through its website and enquiry channels.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white pt-16 lg:pt-20">
      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">Website information</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 text-sm text-slate-300">Last updated: 22 November 2026</p>
        </div>
      </section>
      <article className="mx-auto max-w-4xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-base leading-8 text-slate-600">This page explains, in general terms, how information may be handled when you visit the Bharat Marks website or contact the business through the details provided here. It is intended as a website privacy notice and should be read together with the privacy terms of any third-party service you choose to use.</p>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">Information you choose to share</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">If you use the enquiry form, it asks for your name, a phone number or email address, the service you are interested in and a short description of your requirement. You may also contact Bharat Marks by telephone, email or WhatsApp. Please share only information relevant to your enquiry. Do not submit passwords, payment-card details, identity credentials or sensitive personal documents through the website enquiry form.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">How the enquiry form works</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">The website enquiry form prepares a message and opens WhatsApp. It does not send the message automatically. You can review, edit or discard the message in WhatsApp before choosing whether to send it. If you send it, WhatsApp and its provider terms govern the handling of that message on their service.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">How information may be used</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Information you choose to provide may be used to understand and respond to your enquiry, communicate about a requested service, and follow up where appropriate. Please contact Bharat Marks if you want to understand how information relating to a specific enquiry is handled.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">Third-party services and website infrastructure</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Links to WhatsApp, email, telephone and map services may take you to services operated by other organisations. Their own privacy policies and terms apply when you use them. Like most websites, the hosting provider or technical infrastructure may process limited technical information when pages are requested. The specific logs, analytics tools and retention settings depend on the website's hosting and configuration.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">Data security and retention</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">No method of online transmission or storage can be guaranteed to be completely secure. Avoid sending confidential material until an appropriate communication method has been agreed. The retention period and access controls for enquiry records should be confirmed directly with Bharat Marks for the relevant matter.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-semibold text-navy-900">Your questions and requests</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">For questions about this notice or information you have shared, contact <a className="font-semibold text-gold-700 underline underline-offset-4" href="mailto:info@bharatmarks.com">info@bharatmarks.com</a> or call <a className="font-semibold text-gold-700 underline underline-offset-4" href="tel:+919872236665">+91 98722 36665</a>.</p>
        </section>
        <p className="border-l-2 border-gold-500 bg-ivory p-5 text-xs leading-6 text-slate-600">Business review required: before publication on the live domain, Bharat Marks should confirm this notice against its actual hosting logs, analytics or cookie tools, enquiry-handling practices, retention periods and applicable legal obligations.</p>
      </article>
    </main>
  );
}
