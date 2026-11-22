import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ClipboardList,
  SearchCheck,
  FilePenLine,
  ShieldCheck,
  Info,
} from "lucide-react";
import Reveal from "@/components/base/Reveal";

type ProcessStep = {
  title: string;
  description: string;
};

type Props = {
  serviceTitle: string;
  serviceSlug: string;
  steps: ProcessStep[];
};

const stepIcons = [ClipboardList, SearchCheck, FilePenLine, ShieldCheck];

export default function ServiceProcess({ serviceTitle, serviceSlug, steps }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-ivory/70 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-gold-500/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-navy-900/5 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-700">
              <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
              A clear path forward
              <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              How the process works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              A straightforward sequence helps you understand what is involved in {serviceTitle.toLowerCase()} at each stage.
            </p>
          </div>
        </Reveal>

        <ol className="relative mt-14 grid gap-7 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          <span className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[3.75rem] hidden h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent lg:block" aria-hidden="true" />
          {steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <Reveal key={step.title} delay={index * 0.07} className="h-full">
                <li data-testid={`service-process-step-${index + 1}`} className="relative h-full pt-5 lg:pt-0">
                  <div className="relative z-10 mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-[3px] border-white bg-navy-900 text-gold-400 shadow-[0_0_0_2px_rgba(194,145,45,0.85),0_10px_24px_rgba(15,35,70,0.16)] lg:mb-[-2.25rem]">
                    <Icon className="h-8 w-8" strokeWidth={1.65} aria-hidden="true" />
                  </div>
                  <div className="flex h-full min-h-[18rem] flex-col rounded-2xl border border-gold-700/10 bg-white px-6 pb-7 pt-10 text-center shadow-[0_12px_34px_rgba(15,35,70,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-[0_18px_40px_rgba(15,35,70,0.11)] sm:px-7 lg:pt-14">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">Step {index + 1}</p>
                    <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-navy-900 sm:text-[1.35rem]">{step.title}</h3>
                    <span className="mx-auto mt-4 h-0.5 w-14 bg-gold-500" aria-hidden="true" />
                    <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <span className="pointer-events-none absolute -right-4 top-14 z-20 hidden h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gold-500 text-white shadow-md lg:flex" aria-hidden="true">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  )}
                </li>
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-col gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5 sm:flex-row sm:items-center sm:p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white">
              <Info className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1 border-l-0 sm:border-l sm:border-navy-900/20 sm:pl-5">
              <h3 className="font-serif text-lg font-semibold text-navy-900">A note on the process</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                The exact sequence and any additional requirements can vary depending on the details of your matter and the Registry&apos;s examination. We will explain relevant next steps if further information, a response or a hearing is required.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <span className="hidden h-px flex-1 bg-gold-500/70 sm:block" aria-hidden="true" />
            <Link
              href={`/contact/?service=${serviceSlug}`}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-navy-900 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-navy-900/15 transition-all hover:bg-navy-800 hover:shadow-xl sm:w-auto sm:px-8"
            >
              Discuss your {serviceTitle.toLowerCase()} requirements
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <span className="hidden h-px flex-1 bg-gold-500/70 sm:block" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
