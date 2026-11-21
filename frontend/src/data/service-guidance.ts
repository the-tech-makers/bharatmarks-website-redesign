export type ServiceGuidance = {
  scenario: string;
  deliverables: string[];
  note: string;
};

export const serviceGuidance: Record<string, ServiceGuidance> = {
  "trademark-search": {
    scenario: "You are preparing to launch a new brand name or logo and want to check whether earlier marks may present a conflict.",
    deliverables: ["Search scope based on the proposed mark and business activity", "Relevant identical or similar records identified for review", "Plain-language observations on potential conflicts", "Suggested points to consider before deciding whether to file"],
    note: "Search results are a snapshot of available records and do not guarantee that an application will be accepted or that no third-party rights exist."
  },
  "trademark-registration": {
    scenario: "You have chosen a brand name or logo and want to apply for protection for specific goods or services in India.",
    deliverables: ["Applicant and mark-detail checklist", "Discussion of relevant goods, services and classes", "Application particulars prepared for your review", "Filing acknowledgement and status guidance, where filing is within the agreed scope"],
    note: "The scope and filing route depend on the applicant, mark, class and supporting information. Registry examination and third-party proceedings remain outside anyone's control."
  },
  "trademark-objection": {
    scenario: "You have received an examination report and need to understand the objections and the response requirements.",
    deliverables: ["Review of the examination report and application record", "Issue-wise summary of the objections raised", "List of facts or supporting material that may be relevant", "Draft response for review and filing assistance, as agreed"],
    note: "The response must reflect the actual record and facts. A written response does not guarantee acceptance or rule out a later hearing."
  },
  "trademark-hearing": {
    scenario: "The Registry has issued a hearing notice and you need to prepare around the issues in the application record.",
    deliverables: ["Review of the hearing notice and prior submissions", "Summary of issues that may need to be addressed", "Organised supporting documents and proposed submissions", "Post-hearing status and next-step guidance"],
    note: "Hearing attendance or representation arrangements should be confirmed separately for each matter. The Registry makes the decision."
  },
  "trademark-renewal": {
    scenario: "A registered trademark is approaching its renewal date, or you need to understand the position of an overdue registration.",
    deliverables: ["Review of registration number and proprietor particulars", "Renewal date and status check", "Checklist of information needed for the renewal request", "Filing and subsequent status guidance, as agreed"],
    note: "If the registration has expired or proprietor details have changed, additional recordal or restoration questions may need to be assessed before proceeding."
  },
  "trademark-assignment": {
    scenario: "A business transaction or other arrangement transfers a trademark to a new owner and the register needs to be updated.",
    deliverables: ["Review checklist for the marks and parties involved", "List of assignment or transfer information to verify", "Recordal particulars prepared from approved documents", "Filing and status guidance, as agreed"],
    note: "The transfer instrument and supporting evidence depend on the transaction, including whether goodwill is involved. Obtain appropriate advice on the underlying agreement."
  },
  "copyright-registration": {
    scenario: "A creator or business wants to submit an application relating to an original work such as artwork, written material or software.",
    deliverables: ["Review of the work category and application particulars", "Author, applicant and ownership information checklist", "Checklist for the work copy and supporting documents", "Application preparation and status guidance, as agreed"],
    note: "Copyright generally protects original expression rather than ideas. Ownership and eligibility depend on the facts and applicable law."
  },
  "patent-assistance": {
    scenario: "An inventor or business has developed a technical solution and wants to understand the information needed to explore patent protection.",
    deliverables: ["Initial information checklist about the invention", "Summary of technical details and documents to assemble", "Discussion of search, drafting and filing stages that may be relevant", "Next-step coordination based on the invention and agreed scope"],
    note: "Do not publicly disclose an invention before taking appropriate advice. Patentability, filing strategy and professional drafting requirements need case-specific assessment."
  }
};
