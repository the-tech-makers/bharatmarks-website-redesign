type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  dark = false,
  align = "left",
}: SectionHeadingProps) => (
  <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-widest2 text-gold-600 ${
        align === "center" ? "justify-center" : ""
      } ${dark ? "text-gold-400" : ""}`}
    >
      <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
      {eyebrow}
      {align === "center" && <span className="h-px w-8 bg-gold-500" aria-hidden="true" />}
    </p>
    <h2
      className={`mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${
        dark ? "text-white" : "text-navy-800"
      }`}
    >
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
