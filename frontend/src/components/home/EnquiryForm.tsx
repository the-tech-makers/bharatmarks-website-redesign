"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const services = [
  ["trademark-search", "Trademark Search"],
  ["trademark-registration", "Trademark Registration"],
  ["trademark-objection", "Trademark Objection"],
  ["trademark-hearing", "Trademark Hearing"],
  ["trademark-renewal", "Trademark Renewal"],
  ["trademark-assignment", "Trademark Assignment"],
  ["copyright-registration", "Copyright Registration"],
  ["patent-assistance", "Patent Assistance"],
  ["other", "Other IP-related enquiry"],
];

export default function EnquiryForm() {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service");
    if (requested && services.some(([value]) => value === requested)) setService(requested);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const selectedService = services.find(([value]) => value === service)?.[1] ?? "Not specified";
    const message = [
      "Hello Bharat Marks, I would like to make an enquiry.",
      "",
      `Name: ${name.trim()}`,
      `Phone / Email: ${contact.trim()}`,
      `Service: ${selectedService}`,
      `Requirement: ${details.trim()}`,
    ].join("\n");
    window.location.href = `https://wa.me/919872236665?text=${encodeURIComponent(message)}`;
  }

  const inputClass = "mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-navy-900/70 px-4 py-3 text-base text-white placeholder:text-slate-500 outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30 sm:text-sm";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-navy-700/70 p-6 shadow-2xl shadow-navy-950/20 backdrop-blur-sm sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Enquiry form</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-white">Tell us what you need</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">Share a few details and continue the conversation with us on WhatsApp.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-200">
          Your name <span className="text-gold-400">*</span>
          <input required maxLength={100} autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" className={inputClass} />
        </label>
        <label className="block text-sm font-medium text-slate-200">
          Phone or email <span className="text-gold-400">*</span>
          <input required maxLength={150} autoComplete="off" inputMode="text" value={contact} onChange={(event) => setContact(event.target.value)} placeholder="How can we reach you?" className={inputClass} />
        </label>
      </div>

      <label className="mt-4 block text-sm font-medium text-slate-200">
        Service you are interested in <span className="text-gold-400">*</span>
        <select required value={service} onChange={(event) => setService(event.target.value)} className={inputClass}>
          <option value="" disabled>Select a service</option>
          {services.map(([value, label]) => <option key={value} value={value} className="bg-navy-900">{label}</option>)}
        </select>
      </label>

      <label className="mt-4 block text-sm font-medium text-slate-200">
        Briefly describe your requirement <span className="text-gold-400">*</span>
        <textarea required maxLength={1500} rows={4} value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Tell us a little about your brand, application or query..." className={inputClass + " resize-y"} />
      </label>

      <button type="submit" className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-800">
        Continue to WhatsApp <MessageCircle className="h-4 w-4" aria-hidden="true" />
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </button>
      <p className="mt-4 text-xs leading-5 text-slate-400">This form opens WhatsApp with your message prepared. You can review it before sending. Please do not include passwords, payment details or sensitive personal documents.</p>
    </form>
  );
}
