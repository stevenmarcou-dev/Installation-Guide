"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Isn't solar too expensive without the federal tax credit?",
    a: "That's the biggest myth we hear. With our $0 down lease and PPA options, you pay nothing upfront, and your monthly payment is structured to be lower than your current utility bill from day one. The financing company captures the tax credit on your behalf and passes that savings to you through lower rates.",
  },
  {
    q: "How can payments be lower than my electric bill?",
    a: "Solar generates electricity at a locked-in rate far below what your utility charges, and that rate does not climb 6–10% every year like your bill does. On average, our customers see 30–50% lower energy costs immediately.",
  },
  {
    q: "What if electricity rates go up? Am I protected?",
    a: "Yes. With a fixed-payment solar loan or a capped-escalator lease, your rate is locked in. Utility rates across California and Arizona have increased an average of 7–9% annually for the past decade. Every year you delay, you're paying more.",
  },
  {
    q: "What happens if I sell my home?",
    a: "Solar adds roughly 4% to your home's value. Financed systems can typically be assumed by the buyer or paid off at closing. Our team walks you through every scenario before you sign.",
  },
  {
    q: "Who handles repairs and maintenance?",
    a: "With a lease or PPA, SolarTech handles all maintenance, cleaning, and repairs for the life of the agreement, including battery replacement. You pay nothing out of pocket.",
  },
  {
    q: "Do I need good credit?",
    a: "We have options starting at 650 FICO, and in some cases no-FICO-check programs. A quick soft-pull pre-qualification won't affect your credit score.",
  },
  {
    q: "How long does installation take?",
    a: "Most installations are completed in 1–2 days after permits are approved. From first appointment to flipping the switch typically takes 4–8 weeks.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex justify-between items-center py-5 text-left gap-4 cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-gray-900 text-lg">{faq.q}</span>
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: open === i ? "#f58026" : "#183e6d" }}
            >
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="pb-5 text-gray-600 leading-relaxed text-base">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
