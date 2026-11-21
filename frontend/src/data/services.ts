export type ServiceContent = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  whyTitle: string;
  why: string;
  benefits: string[];
  includes: string[];
  steps: { title: string; description: string }[];
  documents: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const services: ServiceContent[] = [
  {
    slug: "trademark-search",
    title: "Trademark Search",
    eyebrow: "Start with clarity",
    summary: "Make informed brand decisions with a considered search for identical and similar trademarks before you apply.",
    intro: "A trademark search is an important first step when choosing a name, logo or brand identity. We help you review relevant trademark records and understand potential conflicts before investing further in your brand.",
    whyTitle: "Know what may stand in your way",
    why: "A mark that appears unique in everyday use may still be similar to an earlier application or registration. An early search can help you spot risks, consider alternatives and approach an application with better information.",
    benefits: ["Review of identical and similar marks", "A clearer view of possible objections or conflicts", "Practical guidance on next steps", "Support before you commit to a brand launch"],
    includes: ["Search based on your proposed word, logo or mark", "Review of relevant classes and goods or services", "Assessment of potentially similar records", "A plain-language discussion of findings and options"],
    steps: [
      { title: "Share your proposed mark", description: "Tell us the name, logo or combination you want to use, along with a short description of your business." },
      { title: "Identify relevant classes", description: "We help determine the goods or services and trademark classes relevant to your intended use." },
      { title: "Review search findings", description: "We examine relevant records and flag marks that may deserve closer consideration." },
      { title: "Discuss your options", description: "You receive practical next-step guidance, which may include refining the mark or proceeding to an application." }
    ],
    documents: ["Proposed brand name or logo", "Brief description of your products or services", "Your intended or current business activity", "Any existing application or registration details, if applicable"],
    faqs: [
      { question: "Does a trademark search guarantee registration?", answer: "No. A search is a risk-assessment step, not a guarantee. The Registry examines each application and other parties may raise issues." },
      { question: "Can I search a logo as well as a name?", answer: "Yes. A search can be tailored to a word mark, device or logo, or a combination, depending on the information provided." },
      { question: "When should I conduct a search?", answer: "Ideally before you invest significantly in branding, packaging, marketing or a trademark application." }
    ],
    related: ["trademark-registration", "trademark-objection"]
  },
  {
    slug: "trademark-registration",
    title: "Trademark Registration",
    eyebrow: "Protect your brand identity",
    summary: "Get guided support through the Indian trademark application process, from preparing your details to tracking Registry updates.",
    intro: "Your brand name, logo or tagline can become one of your most valuable business assets. Trademark registration helps you seek legal protection for that identity in relation to the goods or services you offer. Bharat Marks supports applicants through the process with clear guidance and careful documentation.",
    whyTitle: "Build your brand on a stronger foundation",
    why: "A registered trademark can help distinguish your offerings, support brand recognition and give you statutory rights in the registered mark for the covered goods or services. Choosing the right mark, class and applicant details is an important part of the application.",
    benefits: ["Guidance on selecting the appropriate trademark class", "Careful preparation of application information", "Support with filing and application tracking", "Help understanding Registry updates and next steps"],
    includes: ["Initial discussion of the proposed mark and its use", "Class and applicant-detail review", "Application documentation and filing support", "Status monitoring and guidance on subsequent Registry communication"],
    steps: [
      { title: "Understand your brand", description: "We collect the proposed mark, applicant details and information about the goods or services." },
      { title: "Review the application approach", description: "We discuss the relevant class, mark type and available search information before filing." },
      { title: "Prepare and submit", description: "The application details are organised and submitted through the appropriate filing process after your review." },
      { title: "Track the application", description: "We help you follow Registry status updates and understand any examination or publication-stage communication." }
    ],
    documents: ["Applicant name and address", "Brand name, logo or other mark representation", "Description of goods or services", "Date of first use, if already in use, or proposed-use details", "Authorisation or supporting documents, where applicable"],
    faqs: [
      { question: "Can I apply before launching my business?", answer: "An application may be filed on a proposed-to-be-used basis, subject to the applicable requirements. Share your plans so the correct details can be considered." },
      { question: "How long does registration take?", answer: "Timelines vary depending on examination, objections, opposition and Registry workload. No fixed completion date or outcome can be guaranteed." },
      { question: "Can one application cover every product or service?", answer: "Trademark protection is linked to specified goods or services and their classes. Multiple classes may be relevant depending on your business." },
      { question: "Can I register a logo and a brand name?", answer: "They may be filed as separate marks where appropriate. The best filing approach depends on how you use and want to protect each element." }
    ],
    related: ["trademark-search", "trademark-objection", "trademark-hearing"]
  },
  {
    slug: "trademark-objection",
    title: "Trademark Objection & Response",
    eyebrow: "Respond with a clear strategy",
    summary: "Understand an examination objection and prepare a considered response addressing the points raised by the Trade Marks Registry.",
    intro: "A trademark examination report may raise questions about distinctiveness, similarity with an earlier mark or other application requirements. An objection is a stage in the process that calls for a timely, reasoned response based on the facts and the Registry's observations.",
    whyTitle: "A thoughtful response matters",
    why: "The response should address the actual grounds in the examination report and be supported by relevant facts, documents and legal reasoning where appropriate. Generic or incomplete replies may fail to deal with the examiner's concerns.",
    benefits: ["Review of the examination report and cited grounds", "Identification of information and evidence that may help", "Structured drafting support for the response", "Guidance on filing and possible next stages"],
    includes: ["Review of the application and examination report", "Assessment of objections and cited marks, where relevant", "Drafting support based on the applicant's facts", "Assistance with response submission and status follow-up"],
    steps: [
      { title: "Share the report", description: "Provide the examination report and application details so the objections can be reviewed." },
      { title: "Assess the grounds", description: "We identify the issues raised and discuss the facts, use evidence or clarifications that may be relevant." },
      { title: "Prepare the response", description: "A structured draft is prepared for your review, addressing the points raised in the report." },
      { title: "Submit and monitor", description: "After approval, the response is filed and the application is monitored for further Registry action." }
    ],
    documents: ["Trademark application number", "Examination report", "Copy of the applied-for mark", "Evidence of use, invoices or promotional material, if relevant", "Any explanation or background about the mark"],
    faqs: [
      { question: "Does an objection mean my application is rejected?", answer: "No. An examination objection is not the same as a final refusal. The applicant is generally given an opportunity to respond within the applicable period." },
      { question: "What if I have already received an examination report?", answer: "Share the complete report and application details promptly so the response requirements and applicable deadline can be reviewed." },
      { question: "Will every objection be resolved through a written reply?", answer: "Not always. Depending on the examiner's consideration, a hearing or further action may follow." }
    ],
    related: ["trademark-registration", "trademark-hearing", "trademark-search"]
  },
  {
    slug: "trademark-hearing",
    title: "Trademark Hearing",
    eyebrow: "Prepare for the next stage",
    summary: "Get organised support for a trademark hearing, including review of the case, preparation of submissions and hearing-related follow-up.",
    intro: "In some applications, the Trade Marks Registry may schedule a hearing after considering the examination response or other case developments. Preparation involves understanding the issues on record and presenting the applicant's position clearly.",
    whyTitle: "Be prepared, not caught off guard",
    why: "A hearing is an opportunity to address the issues identified by the Registry. Reviewing the file, supporting material and previous submissions in advance helps keep the presentation focused and relevant.",
    benefits: ["Review of application history and Registry communications", "Preparation around the issues listed for hearing", "Organisation of supporting documents and submissions", "Guidance on post-hearing updates and next steps"],
    includes: ["Review of the examination report and response", "Assessment of hearing notice and case status", "Preparation of points and supporting material", "Assistance with hearing coordination and follow-up"],
    steps: [
      { title: "Review the case file", description: "We examine the application, examination report, response and hearing notice." },
      { title: "Identify key issues", description: "The matters requiring clarification or submissions are prioritised." },
      { title: "Prepare for the hearing", description: "Relevant documents and supporting points are organised for the scheduled hearing." },
      { title: "Follow up", description: "We review subsequent Registry updates and explain the next procedural step." }
    ],
    documents: ["Trademark application number", "Hearing notice and date details", "Examination report and filed response", "Supporting evidence and documents previously submitted", "Any new relevant evidence or factual clarification"],
    faqs: [
      { question: "Will every trademark application have a hearing?", answer: "No. A hearing may be scheduled depending on the examination and subsequent proceedings." },
      { question: "What should I do after receiving a hearing notice?", answer: "Review the notice and case status promptly, note the scheduled details and organise the full application record." },
      { question: "Can a hearing guarantee acceptance?", answer: "No. The decision rests with the Registry after considering the record and submissions." }
    ],
    related: ["trademark-objection", "trademark-registration", "trademark-search"]
  },
  {
    slug: "trademark-renewal",
    title: "Trademark Renewal",
    eyebrow: "Keep your registration current",
    summary: "Get assistance reviewing renewal details and preparing the required filing to maintain an eligible trademark registration.",
    intro: "Trademark registrations in India are generally valid for ten years and may be renewed for successive ten-year periods. Keeping track of renewal dates and ensuring the registration details are correct can help avoid an unintended lapse.",
    whyTitle: "Make renewal part of your brand-care routine",
    why: "A trademark can remain an important business asset long after its initial registration. Planning ahead gives you time to verify ownership and registration details and address renewal requirements within the prescribed period.",
    benefits: ["Review of registration and renewal particulars", "Guidance on the applicable renewal window", "Preparation and filing support", "Follow-up on Registry status"],
    includes: ["Verification of registration number and proprietor details", "Review of the renewal due date", "Preparation of renewal information and filing support", "Guidance if the registration is already overdue"],
    steps: [
      { title: "Share registration details", description: "Provide the registration certificate or number and current proprietor information." },
      { title: "Check renewal status", description: "We review the record and discuss the applicable renewal timing and requirements." },
      { title: "Prepare the filing", description: "The required particulars are checked and the renewal filing is prepared for approval." },
      { title: "Track the update", description: "We help monitor the filing and explain the resulting Registry status." }
    ],
    documents: ["Trademark registration number or certificate", "Current proprietor name and address", "Any change in ownership or contact details", "Authorisation or supporting documents, if required"],
    faqs: [
      { question: "How long is a trademark registration valid?", answer: "A registration is generally valid for ten years from its date of registration and can be renewed for further ten-year periods." },
      { question: "Can a lapsed trademark be restored?", answer: "The law provides a restoration process in specified circumstances and within prescribed timelines. Eligibility depends on the registration record and dates." },
      { question: "Can I renew a trademark if the owner details have changed?", answer: "Changes in proprietor details may require separate recordal steps. The registration history should be reviewed before filing." }
    ],
    related: ["trademark-assignment", "trademark-registration", "trademark-search"]
  },
  {
    slug: "trademark-assignment",
    title: "Trademark Assignment",
    eyebrow: "Record a change in ownership",
    summary: "Navigate the documentation and recordal process when trademark ownership is transferred or assigned.",
    intro: "A trademark may be transferred as part of a business sale, restructuring, succession or another commercial arrangement. A properly documented assignment and an appropriate request to record the change help keep the public register aligned with ownership.",
    whyTitle: "Keep ownership records in order",
    why: "The assignment instrument, the marks involved and the parties' details need to be reviewed carefully. The nature of the transfer and whether goodwill is included can affect the documents and filing requirements.",
    benefits: ["Review of the proposed ownership change", "Guidance on assignment documentation", "Support preparing recordal particulars", "Assistance tracking the Registry update"],
    includes: ["Review of registration and application details", "Checklist of assignor and assignee information", "Documentation and filing support", "Follow-up on recordal status and queries"],
    steps: [
      { title: "Explain the transfer", description: "Share the marks involved, the parties and the proposed nature of the transaction." },
      { title: "Review supporting documents", description: "We review the assignment instrument and identify information needed for the recordal." },
      { title: "Prepare the recordal request", description: "The relevant particulars are organised for submission to the Registry." },
      { title: "Monitor the record", description: "We follow the request and help address any further information sought." }
    ],
    documents: ["Trademark registration or application numbers", "Details of current proprietor and proposed owner", "Executed assignment deed or relevant transfer document", "Business transfer or supporting documents, where applicable", "Authorisations and identity or address particulars, as required"],
    faqs: [
      { question: "Can a trademark be transferred to another business?", answer: "Yes, trademark rights may be assigned subject to applicable legal requirements and restrictions." },
      { question: "Is an assignment deed always needed?", answer: "The appropriate instrument and supporting evidence depend on the transaction. The documents should be reviewed before filing." },
      { question: "Can multiple trademarks be assigned together?", answer: "A transaction may cover multiple marks. The relevant registrations, ownership details and filing requirements should be checked." }
    ],
    related: ["trademark-renewal", "trademark-registration", "trademark-search"]
  },
  {
    slug: "copyright-registration",
    title: "Copyright Registration",
    eyebrow: "Support for original works",
    summary: "Get help preparing a copyright application for eligible literary, artistic, musical, software and other original works.",
    intro: "Copyright protects original expression in qualifying works, rather than ideas themselves. Registration can provide a formal record of a claim and its particulars. We help creators and businesses understand the application information and documentation involved.",
    whyTitle: "Document the work you have created",
    why: "Creative assets can be central to a business or an individual's work. Keeping clear records of authorship, ownership and the work itself can support the registration process and help with future administration or licensing.",
    benefits: ["Guidance on the relevant work category", "Review of author and owner particulars", "Application preparation and filing support", "Help understanding status updates and formalities"],
    includes: ["Initial review of the work and category", "Author, claimant and ownership detail checklist", "Preparation of application particulars", "Filing assistance and status follow-up"],
    steps: [
      { title: "Tell us about the work", description: "Share the type of work, its title and how it was created or acquired." },
      { title: "Confirm ownership details", description: "We identify the author, applicant or claimant information and any supporting documents needed." },
      { title: "Prepare the application", description: "The work details and required particulars are organised for your review and filing." },
      { title: "Follow the application", description: "We help track the application and explain any formalities or communication received." }
    ],
    documents: ["Copy or representation of the work in the required format", "Title and category of the work", "Author and applicant details", "Ownership or assignment documents, if applicable", "Authorisation and declarations, where required"],
    faqs: [
      { question: "What kinds of works can be protected by copyright?", answer: "Copyright may subsist in original literary, dramatic, musical and artistic works, cinematograph films and sound recordings, subject to the law." },
      { question: "Does copyright protect an idea?", answer: "Copyright protects the original expression of an idea, not the underlying idea, concept, method or principle." },
      { question: "Is registration compulsory for copyright to exist?", answer: "Copyright generally arises when the qualifying work is created. Registration is not what creates the right, but it can serve as a formal record of particulars." }
    ],
    related: ["trademark-registration", "patent-assistance", "trademark-search"]
  },
  {
    slug: "patent-assistance",
    title: "Patent Assistance",
    eyebrow: "For ideas with inventive potential",
    summary: "Get practical guidance on patent documentation and the application journey for inventions intended to be protected in India.",
    intro: "A patent may be available for an invention that meets the applicable requirements, including novelty, inventive step and industrial applicability, and is not excluded by law. The process is technical and document-intensive, so early assessment and careful preparation are important.",
    whyTitle: "Take a considered route from idea to application",
    why: "Public disclosure, incomplete technical details or an unsuitable filing strategy can affect patent prospects. Discussing the invention and its development history early can help identify the appropriate next steps.",
    benefits: ["Initial discussion of the invention and its technical field", "Guidance on information needed for assessment", "Support organising technical and application documents", "Assistance navigating filing-related steps"],
    includes: ["Collection of invention details and inventor information", "Preliminary discussion of patentability considerations", "Coordination around technical description and drawings", "Application documentation and procedural support"],
    steps: [
      { title: "Describe the invention", description: "Share the technical problem, how the invention works and what you believe is new about it." },
      { title: "Review the information", description: "We discuss the available technical material and what further assessment or search may be appropriate." },
      { title: "Prepare documentation", description: "The technical description, drawings and inventor or applicant details are organised with the relevant specialists." },
      { title: "Proceed with filing support", description: "We assist with the agreed filing steps and help track procedural updates." }
    ],
    documents: ["Invention summary and technical description", "Drawings, diagrams, prototypes or photographs, if available", "Inventor and applicant details", "Details of any public disclosure, sale, presentation or earlier filing", "Assignment or employment-related documents, if applicable"],
    faqs: [
      { question: "Can every new idea be patented?", answer: "No. An invention must meet the legal requirements and must not fall within excluded subject matter. An assessment is needed." },
      { question: "Should I disclose my invention publicly before filing?", answer: "Avoid public disclosure before obtaining appropriate advice. Disclosure can affect novelty and patent options, depending on the circumstances." },
      { question: "Do I need drawings for a patent application?", answer: "Drawings are useful and may be required depending on the invention and the application. The necessary format should be assessed for the subject matter." }
    ],
    related: ["copyright-registration", "trademark-registration", "trademark-search"]
  }
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
