"use client";

import React, { useState } from "react";

const BLUE      = "#183e6d";
const BLUE_DARK = "#0c1f37";
const BLUE_HL   = "#1886d1";
const ORANGE    = "#f58026";
const YELLOW    = "#eda726";

const CALC_URL    = "https://solartechonline.com/solar-panel-cost-calculator/";
const CONTACT_URL = "https://solartechonline.com/contact-us/";
const FINANCING_URL = "https://solartechonline.com/financing/";

interface FAQ      { q: string; a: string; cta?: { label: string; href: string }; }
interface Resource { label: string; href: string; }

interface FinancingOption {
  name: string;
  badge: string;
  color: string;
  timeRange: string;
  highlights: string[];
}

interface ServicePackage {
  name: string;
  badge: string;
  color: string;
  href: string;
  highlights: string[];
}

interface StepContent {
  timeRange: string;
  description: React.ReactNode;
  weHandle: string[];
  youHandle: string[];
  note?: string;
  noteColor?: string;
  faqs: FAQ[];
  resources: Resource[];
  cta?: { label: string; href: string };
  financingOptions?: FinancingOption[];
  servicePackages?: ServicePackage[];
}

interface StepDef {
  number: number;
  shortLabel: string;
  title: string;
  phaseId: string;
  default: StepContent;
}

interface Phase { id: string; label: string; duration: string; bg: string; }

const PHASES: Phase[] = [
  { id: "consultation", label: "Consultation",      duration: "1–7 days",   bg: BLUE_DARK },
  { id: "pre-install",  label: "Pre-Installation",  duration: "2–7 weeks",  bg: BLUE      },
  { id: "installation", label: "Installation",      duration: "1–4 days",   bg: "#155fa0" },
  { id: "post-install", label: "Post-Installation", duration: "2–5 weeks",  bg: BLUE_HL   },
];

const STEPS: StepDef[] = [
  /* ─── CONSULTATION ─── */
  {
    number: 1, shortLabel: "Get Started", title: "Share Your Information", phaseId: "consultation",
    default: {
      timeRange: "15–20 minutes",
      description: <>Before we build your custom proposal, we collect basic information about your home and energy usage. You can share this over the phone, by email, or through our short <a href="https://solartechonline.com/contact-us/" style={{ color: BLUE_HL, fontWeight: 700, textDecoration: "underline" }}>online form</a>.</>,
      weHandle: [
        "Connect you with a dedicated project consultant",
        "Pull property and roof data using your home address",
        "Review your usage to identify the right system size range",
        "Schedule your proposal meeting at a time that works for you",
      ],
      youHandle: [
        "Provide your home address",
        "Share your last few months of utility bills (or give us portal access)",
        "Let us know your goals for your system, such as lowering energy costs, backup power, or reducing grid reliance",
        "Let us know if you're interested in energy storage",
        "Flag any known roof issues or HOA requirements",
      ],
      faqs: [
        { q: "What information do you actually need from me?", a: "Just your address and a few recent utility bills. That's enough for us to size your system and run your savings numbers before the proposal meeting." },
        { q: "How long does this step take?", a: "Usually 15–20 minutes. You can fill out a form online or we'll gather it over a quick phone call, whichever is easier." },
        { q: "What if I don't have my utility bills handy?", a: "We can pull usage data directly from your utility account with your permission, or estimate from your home's square footage and local averages." },
        { q: "Do I need to know anything about solar before this step?", a: "No. We ask simple questions about your home and goals. Our team does all the technical analysis. Just describe what you're hoping to accomplish." },
      ],
      resources: [
        { label: "What is solar energy?", href: "https://solartechonline.com/blog/what-is-solar-energy-complete-guide/" },
        { label: "Solar panel cost in California 2025", href: "https://solartechonline.com/blog/solar-panel-cost-guide-2025/" },
        { label: "Best time to install solar panels", href: "https://solartechonline.com/blog/best-time-install-solar-panels-guide/" },
        { label: "Solar cost calculator", href: CALC_URL },
      ],
      cta: { label: "Get Started in 15 Minutes", href: CONTACT_URL },
    },
  },
  {
    number: 2, shortLabel: "Proposal", title: "Your Custom Solar Proposal", phaseId: "consultation",
    default: {
      timeRange: "60–90 minutes",
      description: "We present your custom system design and walk through your financing options. We can come to your home or meet virtually, whichever is most convenient. Zero obligation.",
      weHandle: [
        "Present a custom system layout based on your roof and usage",
        "Walk through every financing option with your real savings projections",
        "Leave you with a written proposal to review at your own pace",
      ],
      youHandle: [
        "Join a 60–90 min meeting, in-person at your home or virtually",
        "Review your proposal and provide any feedback or questions",
      ],
      financingOptions: [
        {
          name: "Solar Loan",
          badge: "Own Your System",
          color: BLUE,
          timeRange: "Own from day one",
          highlights: [
            "$0 down. Own the system from day one.",
            "Rates from 2.99% APR, 10–25 year terms",
            "Adds ~4% to home resale value",
            "Financing subject to credit approval",
            "Eligible for any applicable tax credits",
          ],
        },
        {
          name: "Lease / PPA",
          badge: "$0 Down · $0 Maintenance",
          color: BLUE_HL,
          timeRange: "Pay less than the utility",
          highlights: [
            "$0 upfront. Payments start after activation.",
            "Rate locked below your current utility rate",
            "SolarTech handles all repairs, cleaning, batteries",
            "Soft pull only for most programs",
            "Financing company captures incentives, passes savings to you",
          ],
        },
        {
          name: "Prepaid Lease",
          badge: "Lowest Cost · Highest ROI",
          color: ORANGE,
          timeRange: "Largest upfront discount",
          highlights: [
            "Upfront payment, deepest discount on power rate",
            "No monthly payment after prepaying",
            "System ownership transfers to you in year 6",
            "Prepayment held in escrow until system is live",
            "All maintenance covered through the agreement term",
          ],
        },
      ],
      faqs: [
        { q: "How do I decide which financing option is right for me?", a: "We run your numbers through every scenario and show you a side-by-side comparison. Key factors: how long you plan to stay in the home, whether you prefer ownership or zero maintenance responsibility, and your budget. We won't push you toward any option. All three paths produce day-one savings." },
        { q: "Is there any obligation after the proposal meeting?", a: "None. The proposal meeting is completely free. Most customers take a few days to review before moving forward. We never pressure a same-day decision." },
        { q: "Can I bring my spouse or partner to the proposal meeting?", a: "Yes, and we encourage it. This is a big decision and we want everyone involved to feel informed. We can schedule around both your calendars." },
      ],
      resources: [
        { label: "Affordable solar solutions guide", href: "https://solartechonline.com/blog/affordable-solar-solutions-complete-guide/" },
        { label: "Bad credit solar financing", href: "https://solartechonline.com/blog/bad-credit-solar-financing-guide/" },
        { label: "HELOC for solar panels", href: "https://solartechonline.com/blog/heloc-for-solar-panels-complete-guide/" },
        { label: "All financing options", href: FINANCING_URL },
        { label: "Solar cost calculator", href: CALC_URL },
      ],
    },
  },
  {
    number: 3, shortLabel: "Sign Contract", title: "Contract Signature", phaseId: "consultation",
    default: {
      timeRange: "1–5 days after proposal",
      description: "Once you're ready to move forward, we send all agreement documents and walk you through all of the details that you need to know.",
      weHandle: [
        "Prepare and send all installation and financing agreement documents",
        "Walk you through every term with no fine print surprises",
        "Submit your financing application to the lender or lessor",
        "Confirm your project start date and full timeline",
      ],
      youHandle: [
        "Review the agreement documents (we walk through them together)",
        "Sign the installation and financing agreements",
      ],
      faqs: [
        { q: "What happens right after I sign?", a: "We book your site survey and begin the permit intake process immediately. You'll receive a welcome email with your full project timeline and direct contact info for your project coordinator." },
        { q: "When does my first payment start?", a: "Regardless of financing type, your first payment does not begin until your system is activated and generating power. We confirm this with your financing partner before you sign." },
        { q: "How long does it take to get financing approved?", a: "Full approval typically comes within 24–48 hours of signing. We stay in contact with the lender so you don't have to chase anyone." },
      ],
      resources: [
        { label: "Sunlight Financial solar loan guide", href: "https://solartechonline.com/blog/sunlight-financial-complete-guide/" },
        { label: "All financing options", href: FINANCING_URL },
      ],
    },
  },

  /* ─── PRE-INSTALLATION ─── */
  {
    number: 4, shortLabel: "Site Survey", title: "Site Survey", phaseId: "pre-install",
    default: {
      timeRange: "1–3 business days",
      description: "A SolarTech technician visits your home to take precise roof measurements, evaluate your electrical panel, assess shading, and document everything our engineering team needs to finalize the system layout.",
      weHandle: [
        "Schedule the survey at a time that works for you",
        "Take precise roof measurements and document pitch and orientation",
        "Evaluate electrical panel capacity and upgrade needs (if any)",
        "Assess shading from trees, chimneys, and neighbors",
        "Photograph roof and attic access for engineering team",
      ],
      youHandle: [
        "Be home during the 1–2 hour survey window",
        "Provide access to electrical panel and attic (if applicable)",
        "Let us know about any existing roof issues",
      ],
      faqs: [
        { q: "Does the site survey cost anything?", a: "No. The site survey is included in your contract at no extra charge." },
        { q: "How long does the survey take?", a: "Typically 1–2 hours. Your technician will call 30 minutes before arriving." },
        { q: "What if my electrical panel needs an upgrade?", a: "We identify any needed upgrades at the survey and include them in your project plan and contract. No surprise add-ons after you've signed." },
      ],
      resources: [
        { label: "Complete solar site analysis guide", href: "https://solartechonline.com/blog/solar-site-analysis-guide/" },
        { label: "What is azimuth angle in solar?", href: "https://solartechonline.com/blog/what-is-azimuth-angle-solar-panels-guide/" },
        { label: "Energy storage options", href: "https://solartechonline.com/energy-storage/" },
        { label: "Roofing services", href: "https://solartechonline.com/roofing/" },
      ],
    },
  },
  {
    number: 5, shortLabel: "Design", title: "System Design", phaseId: "pre-install",
    default: {
      timeRange: "7–10 business days",
      description: "Our engineering team creates your layout from the survey data. A project manager QAs the design before sending it to you for review and approval. This is the only step before installation where your input is needed.",
      weHandle: [
        "Create engineer-stamped system layout from survey results",
        "Select optimal panel placement for maximum production",
        "Specify inverter or microinverter configuration",
        "Include battery storage layout if applicable",
        "QA review by your project manager before sending to you",
      ],
      youHandle: [
        "Review the design document (we walk you through it on a call)",
        "Approve or request adjustments before permitting begins",
      ],
      note: "Changes requested after permit submission add 2–4 weeks. This is the right time to ask about battery storage or aesthetics.",
      noteColor: YELLOW,
      faqs: [
        { q: "Can I request specific panel placement?", a: "Yes. We present the optimal layout and explain tradeoffs. If you have aesthetic preferences or structural concerns, we accommodate them within engineering constraints." },
        { q: "What panel brands do you install?", a: "We install Maxeon, REC, and QCells, all top-tier manufacturers. We recommend the best option for your specific roof and production goals." },
        { q: "Can I add a battery at this stage?", a: "Yes, and this is the ideal time. We install Tesla Powerwall 3, Enphase, and NeoVolta systems. Adding storage now is significantly easier than retrofitting later." },
      ],
      resources: [
        { label: "SolarEdge vs. Enphase: 2025 comparison", href: "https://solartechonline.com/blog/solaredge-vs-enphase-comparison-guide/" },
        { label: "Tier 1 solar panels guide", href: "https://solartechonline.com/blog/tier-1-solar-panels-complete-guide-2025/" },
        { label: "Tesla Powerwall review 2025", href: "https://solartechonline.com/blog/tesla-powerwall-review-2025/" },
        { label: "Bifacial vs. monocrystalline panels", href: "https://solartechonline.com/blog/bifacial-vs-monocrystalline-solar-panels-comparison-guide/" },
        { label: "Maxeon solar panels", href: "https://solartechonline.com/residential/maxeon-solar-panels/" },
        { label: "REC solar panels", href: "https://solartechonline.com/residential/rec-solar-panels/" },
      ],
    },
  },
  {
    number: 6, shortLabel: "Permits", title: "Permits & HOA", phaseId: "pre-install",
    default: {
      timeRange: "2–6 weeks",
      description: "We submit engineer-stamped plans to your city and, if applicable, your HOA. Permitting is the longest waiting period. We track every submission, follow up proactively, and send you milestone updates so you're never left wondering.",
      weHandle: [
        "Engineer-stamped drawings and system layout plans",
        "Permit application submitted to your city or county",
        "HOA packet preparation and submission (if applicable)",
        "All follow-up communication with the permitting office",
        "Plan revisions if the city requests changes",
      ],
      youHandle: [
        "Let us know if you have an HOA (before signing is ideal)",
        "Provide HOA contact info or CC&Rs if requested",
        "Respond to our requests within 1–2 business days",
      ],
      note: "Timelines vary by city and utility. We'll give you a realistic estimate for your municipality once we confirm your project address. We submit complete, stamped plans on the first attempt to minimize revision rounds.",
      noteColor: YELLOW,
      faqs: [
        { q: "What if my HOA says no?", a: "California Civil Code §714 and Arizona law both protect homeowners' right to install solar. HOAs cannot legally prohibit solar, only make reasonable aesthetic requests. We've navigated hundreds of HOA approvals and handle all pushback directly." },
        { q: "Can you speed up permitting?", a: "Submitting complete plans on the first attempt minimizes revision cycles. Some cities offer expedited review for a fee. We'll let you know if it's available in your area." },
        { q: "Do I need to do anything while we wait?", a: "No. We handle all city communication and send you email updates at each milestone. Your project coordinator is always reachable." },
      ],
      resources: [
        { label: "Solar installation process guide", href: "https://solartechonline.com/blog/solar-panel-installation-services-guide/" },
        { label: "Service areas", href: "https://solartechonline.com/service-areas/" },
        { label: "About our team", href: "https://solartechonline.com/about-us/" },
      ],
      cta: { label: "Questions? Contact Your Project Coordinator", href: CONTACT_URL },
    },
  },

  /* ─── INSTALLATION ─── */
  {
    number: 7, shortLabel: "Install", title: "Installation Day", phaseId: "installation",
    default: {
      timeRange: "1–2 days",
      description: "Our install crews handle everything from roof mounting to final wiring. Most homes are fully complete in a single day. We clean up completely before leaving.",
      weHandle: [
        "Roof mounting with manufacturer-approved, flashed hardware",
        "Panel placement per the engineered layout",
        "Inverter or microinverter installation and wiring",
        "Main electrical panel work and dedicated breaker",
        "Conduit runs and full weatherproofing at every penetration",
        "Complete site cleanup after installation",
        "Photo documentation for permit sign-off",
      ],
      youHandle: [
        "Be available for a 15-minute morning walkthrough",
        "Keep pets indoors during the day",
        "Ensure roof and attic access is clear",
        "You don't need to stay home all day",
      ],
      note: "Your power will be off for 1–4 hours during main panel work. We tell you exactly when at the morning walkthrough so you can plan ahead.",
      noteColor: BLUE,
      faqs: [
        { q: "Will installation damage my roof?", a: "Every penetration is sealed with flashed, code-compliant mounting hardware. We back this with a 10-year workmanship warranty on roof penetrations, separate from the 25-year panel and inverter warranties." },
        { q: "What if it rains on install day?", a: "We monitor weather closely. Rain alone doesn't always stop work, but we won't operate in lightning or high winds. Rescheduling is at no cost to you." },
        { q: "Will my power be out all day?", a: "No, just for 1–4 hours while we connect to your main panel. We tell you exactly when at the morning walkthrough." },
      ],
      resources: [
        { label: "Solar panel wiring guide", href: "https://solartechonline.com/blog/solar-panel-wiring-guide/" },
        { label: "How to tie solar into your house", href: "https://solartechonline.com/blog/how-to-tie-solar-into-your-house-complete-guide/" },
        { label: "Our team & certifications", href: "https://solartechonline.com/about-us/" },
        { label: "Maxeon & REC certified partner", href: "https://solartechonline.com/certified-solar-installation-partner/" },
      ],
    },
  },
  {
    number: 8, shortLabel: "Inspection", title: "City Inspection", phaseId: "installation",
    default: {
      timeRange: "1–2 weeks",
      description: "A city inspector (the Authority Having Jurisdiction, or AHJ) verifies our installation against the approved permit plans and local electrical code. Once we pass, we immediately submit your interconnection application to your utility.",
      weHandle: [
        "Schedule the city inspection on your behalf",
        "Be present or on-call to answer the inspector's questions",
        "Handle any reinspection if corrections are needed",
        "Submit interconnection application to your utility immediately after passing",
      ],
      youHandle: [
        "Nothing. We handle all scheduling, attendance, and follow-up",
        "Continue paying your normal utility bill until system activation",
      ],
      faqs: [
        { q: "What does the inspector actually check?", a: "The city inspector verifies the installation matches the approved permit plans, all electrical work meets code, and every penetration is properly sealed. Our in-house installs have a very high first-pass rate." },
        { q: "What if we fail inspection?", a: "It's rare. If a correction is needed, we address it immediately and schedule reinspection at no cost to you. Most corrections are minor and resolved within 1–2 days." },
        { q: "Do I need to be home for the inspection?", a: "No. We coordinate everything with the city. You don't need to do anything." },
      ],
      resources: [
        { label: "Complete solar panel set up guide", href: "https://solartechonline.com/blog/solar-panel-set-up-guide/" },
        { label: "Solar installation services guide", href: "https://solartechonline.com/blog/solar-panel-installation-services-guide/" },
        { label: "System health checks", href: "https://solartechonline.com/service-and-maintenance/solar-system-health-check-and-troubleshoot/" },
      ],
    },
  },

  /* ─── POST-INSTALLATION ─── */
  {
    number: 9, shortLabel: "PTO", title: "Permission to Operate", phaseId: "post-install",
    default: {
      timeRange: "1–3 weeks",
      description: "After passing inspection, we submit your interconnection application to your utility (i.e. LADWP, SDG&E, SCE, APS, or PG&E). Once the utility issues Permission to Operate (PTO), your system can legally turn on and export power to the grid.",
      weHandle: [
        "Submit interconnection application immediately after inspection",
        "Follow up with the utility proactively. We don't just wait.",
        "Handle any utility requests for additional documentation",
        "Notify you the moment PTO is received",
      ],
      youHandle: [
        "Nothing. All utility communication goes through us.",
        "Your solar payment does not begin until your system is activated",
      ],
      faqs: [
        { q: "What is Permission to Operate (PTO)?", a: "PTO is the formal authorization from your utility to turn on your solar system and connect it to the grid. You cannot legally operate without it. We track this daily and notify you the moment it arrives." },
        { q: "Do I start paying my solar payment during this wait?", a: "No. Regardless of your financing type, your first payment does not begin until your system is activated. We confirm this with your financing partner before you sign." },
        { q: "What is net metering?", a: "Net metering is a billing arrangement where excess solar power you export to the grid earns you credits on your utility bill. In California and Arizona, this significantly improves your effective savings rate." },
      ],
      resources: [
        { label: "What is a true-up bill?", href: "https://solartechonline.com/blog/what-is-true-up-bill-solar-guide/" },
        { label: "Time of use pricing guide", href: "https://solartechonline.com/blog/time-of-use-pricing-guide/" },
        { label: "SDG&E super off-peak hours 2026", href: "https://solartechonline.com/blog/sdge-super-off-peak-hours-2026-solar-guide/" },
        { label: "How to tie solar into your house", href: "https://solartechonline.com/blog/how-to-tie-solar-into-your-house-complete-guide/" },
      ],
    },
  },
  {
    number: 10, shortLabel: "Activation", title: "System Activated — You're Saving", phaseId: "post-install",
    default: {
      timeRange: "Day PTO arrives · Ongoing",
      description: "The moment your utility issues PTO, your system goes live. We notify you immediately, activate your monitoring app, and run a remote health check within 48 hours. Your first lower energy bill arrives within 30–60 days, regardless of which financing path you chose.",
      weHandle: [
        "Notify you the moment PTO arrives",
        "Activate your remote monitoring portal and app access",
        "Remote system health check within 48 hours of activation",
        "Send your plain-English 'How to read your first solar bill' guide",
      ],
      youHandle: [
        "Download the monitoring app (Enphase Enlighten or SolarEdge mySolarEdge)",
        "Watch your production and savings update in real time",
        "Call SolarTech anytime. We're here for the long term.",
      ],
      faqs: [
        { q: "When does my first payment start?", a: "Loan payments begin 30–60 days after activation. Lease and PPA payments begin with your first billing cycle after activation. In all cases, your combined energy cost will be lower than before, starting from your very first statement." },
        { q: "How do I read my new utility bill?", a: "Your bill looks very different. You'll see net metering credits for power sent to the grid. We send a plain-English guide explaining each line item the day your system activates." },
        { q: "What if my system underperforms?", a: "Every installation is backed by a 25-year production guarantee. If output falls short in any year, we service the system at no cost to bring it back to spec.", cta: { label: "Contact Our Service Department", href: "https://solartechonline.com/service-and-maintenance/" } },
        { q: "Who do I call if something breaks?", a: "Call SolarTech at (619) 743-9193. With a lease or PPA, all repairs are fully covered at no cost. With a loan, your 25-year equipment warranties cover all panels and inverters. We handle service calls on your behalf." },
        { q: "What happens when a prepaid lease customer reaches year six?", a: "Ownership transfers to you at no additional cost. We update the utility interconnection records and provide full ownership documentation. From that point, the electricity is essentially free (net metering minus any small utility connection fees)." },
      ],
      resources: [
        { label: "What is a true-up bill?", href: "https://solartechonline.com/blog/what-is-true-up-bill-solar-guide/" },
        { label: "Time of use pricing guide", href: "https://solartechonline.com/blog/time-of-use-pricing-guide/" },
        { label: "How to save energy at home", href: "https://solartechonline.com/blog/how-to-save-energy-at-home-guide/" },
        { label: "Solar care plans", href: "https://solartechonline.com/service-and-maintenance/solar-care-plans/" },
        { label: "System monitoring", href: "https://solartechonline.com/service-and-maintenance/solar-panel-monitoring/" },
        { label: "Customer hub & support", href: "https://solartechonline.com/customer-hub/" },
      ],
      cta: { label: "See What Solar Would Cost You", href: CALC_URL },
    },
  },
  {
    number: 11, shortLabel: "Monitoring", title: "Monitoring & Maintenance", phaseId: "post-install",
    default: {
      timeRange: "Ongoing · 25 years",
      description: "Your relationship with SolarTech doesn't end at activation. We monitor your system through native monitoring apps at no cost, and offer proactive care plans and on-call service from the same team that installed your system, for the life of your equipment.",
      servicePackages: [
        {
          name: "Solar Care Plans",
          badge: "Proactive Protection",
          color: BLUE,
          href: "https://solartechonline.com/service-and-maintenance/solar-care-plans/",
          highlights: [
            "Annual system inspection and performance review",
            "Professional panel cleaning included",
            "Priority scheduling for any service calls",
            "Peace of mind for the life of your system",
          ],
        },
        {
          name: "System Monitoring",
          badge: "Real-Time Visibility",
          color: BLUE_HL,
          href: "https://solartechonline.com/service-and-maintenance/solar-panel-monitoring/",
          highlights: [
            "Track production and savings from any device",
            "Instant alerts if output drops unexpectedly",
            "Monthly and annual performance reports",
            "Catch underperformance before it costs you",
          ],
        },
        {
          name: "On-Demand Services",
          badge: "When You Need Us",
          color: ORANGE,
          href: "https://solartechonline.com/service-and-maintenance/",
          highlights: [
            "Panel cleaning, critter guard, and roof penetration checks",
            "Battery upgrades and EV charger installation",
            "System removal & reinstall for roof replacements",
            "Warranty service handled start to finish",
          ],
        },
      ],
      weHandle: [
        "Annual system inspections and performance review",
        "Panel cleaning to maintain peak output",
        "Remote monitoring alerts for any underperformance",
        "Warranty service on all panels, inverters, and workmanship",
        "Critter guard installation to prevent nesting under panels",
        "Battery upgrades, EV charger installation, and system expansions",
        "Removal and reinstall if you're reroofing",
      ],
      youHandle: [
        "Download and check your monitoring app periodically",
        "Contact us any time something looks off. We respond fast.",
        "Let us know if you're planning a roof replacement or home addition",
      ],
      faqs: [
        { q: "What's covered under my 25-year warranty?", a: "Panels and inverters carry 25-year manufacturer warranties. Roof penetrations carry our 10-year workmanship warranty. With a lease or PPA, all equipment repairs are covered at no cost for the full term. With a loan, we handle warranty service calls on your behalf at no markup." },
        { q: "Is monitoring free?", a: "Yes. SolarTech monitors your system through native monitoring apps at no cost. A care plan adds proactive annual inspections, priority service scheduling, and panel cleaning, recommended to protect your production guarantee." },
        { q: "What if I need to remove panels for a roof replacement?", a: "We handle solar removal and reinstall. Schedule with us in advance. We coordinate directly with your roofing contractor to minimize downtime." },
        { q: "Can I add more panels or a battery later?", a: "Yes. We design systems with expansion in mind. Adding panels or a battery after activation is straightforward. Contact your project coordinator for an upgrade quote." },
      ],
      resources: [
        { label: "Solar care plans", href: "https://solartechonline.com/service-and-maintenance/solar-care-plans/" },
        { label: "System monitoring", href: "https://solartechonline.com/service-and-maintenance/solar-panel-monitoring/" },
        { label: "Panel cleaning", href: "https://solartechonline.com/service-and-maintenance/solar-panel-cleaning/" },
        { label: "Critter guard", href: "https://solartechonline.com/service-and-maintenance/solar-critter-guard/" },
        { label: "Removal & reinstall", href: "https://solartechonline.com/service-and-maintenance/remove-and-reinstall-solar/" },
        { label: "Upgrades & additions", href: "https://solartechonline.com/service-and-maintenance/solar-upgrade/" },
        { label: "Customer hub & support", href: "https://solartechonline.com/customer-hub/" },
      ],
      cta: { label: "Explore Service & Maintenance", href: "https://solartechonline.com/service-and-maintenance/" },
    },
  },
];



export default function ProcessTimeline() {
  const [selectedIdx, setSelectedIdx]   = useState(0);
  const [openFaqs, setOpenFaqs]         = useState<Record<string, boolean>>({});
  const [hoveredBubble, setHoveredBubble] = useState<number | null>(null);
  const [hoveredPhase, setHoveredPhase]   = useState<string | null>(null);

  const step  = STEPS[selectedIdx];
  const data  = step.default;
  const phase = PHASES.find(p => p.id === step.phaseId)!;

  function toggleFaq(i: number) {
    const k = `${selectedIdx}-${i}`;
    setOpenFaqs(p => ({ ...p, [k]: !p[k] }));
  }
  function isFaqOpen(i: number) { return !!openFaqs[`${selectedIdx}-${i}`]; }
  function goTo(idx: number) { setSelectedIdx(idx); }

  return (
    <div>

      {/* ─── Phase Chevron Bar ─── */}
      <div className="flex overflow-hidden rounded-xl mb-2" style={{ minHeight: "64px" }}>
        {PHASES.map((ph, i) => {
          const isFirst  = i === 0;
          const isLast   = i === PHASES.length - 1;
          const isActive = ph.id === step.phaseId;
          const clip = isFirst
            ? "polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%)"
            : isLast
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 22px 50%)"
            : "polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%)";

          const isHovered = hoveredPhase === ph.id && !isActive;
          return (
            <button key={ph.id}
              onClick={() => { const fi = STEPS.findIndex(s => s.phaseId === ph.id); if (fi >= 0) goTo(fi); }}
              onMouseEnter={() => setHoveredPhase(ph.id)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="flex-1 flex flex-col items-center justify-center cursor-pointer"
              style={{
                backgroundColor: isActive ? ph.bg : isHovered ? `${ph.bg}cc` : `${ph.bg}88`,
                clipPath: clip,
                marginLeft:   i > 0 ? "-22px" : "0",
                paddingLeft:  i > 0 ? "34px" : "14px",
                paddingRight: "24px",
                paddingTop:   "10px",
                paddingBottom:"10px",
                zIndex: PHASES.length - i,
                transition: "background-color 0.15s ease",
                transform: isHovered ? "scaleY(1.04)" : "scaleY(1)",
              }}>
              <span className="text-white font-black text-xs md:text-sm leading-tight text-center" style={{ transition: "opacity 0.15s", opacity: isHovered || isActive ? 1 : 0.85 }}>{ph.label}</span>
              <span className="text-xs mt-0.5 text-center" style={{ color: isHovered || isActive ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)", transition: "color 0.15s" }}>{ph.duration}</span>
            </button>
          );
        })}
      </div>

      {/* ─── Step Dots Timeline — Desktop (all steps) ─── */}
      <div className="relative overflow-x-auto mb-8 py-2 hidden md:block">
        <div className="relative" style={{ minWidth: "560px" }}>
          <div className="absolute" style={{ top: "20px", left: "5.5%", right: "5.5%", height: "3px", backgroundColor: "#dbeafe" }} />

          {(() => {
            const segments: React.ReactNode[] = [];
            let cursor = 0;
            PHASES.forEach(ph => {
              const phSteps = STEPS.filter(s => s.phaseId === ph.id);
              const startPct = (cursor / STEPS.length) * 89 + 5.5;
              const endPct   = ((cursor + phSteps.length) / STEPS.length) * 89 + 5.5;
              segments.push(
                <div key={ph.id} className="absolute" style={{ top: "20px", left: `${startPct}%`, width: `${endPct - startPct}%`, height: "3px", backgroundColor: ph.bg }} />
              );
              cursor += phSteps.length;
            });
            return segments;
          })()}

          <div className="flex">
            {STEPS.map((s, idx) => {
              const ph       = PHASES.find(p => p.id === s.phaseId)!;
              const isActive = idx === selectedIdx;
              const isPast   = idx < selectedIdx;
              return (
                <div key={s.number} className="flex-1 flex flex-col items-center" style={{ minWidth: 0 }}>
                  <button
                    onClick={() => goTo(idx)}
                    onMouseEnter={() => setHoveredBubble(idx)}
                    onMouseLeave={() => setHoveredBubble(null)}
                    aria-pressed={isActive}
                    className="relative z-10 w-10 h-10 rounded-full font-black text-sm flex items-center justify-center cursor-pointer"
                    style={{
                      backgroundColor: isActive ? ORANGE : (isPast || hoveredBubble === idx) ? ph.bg : "white",
                      color:           isActive || isPast || hoveredBubble === idx ? "white" : ph.bg,
                      border: `3px solid ${isActive ? ORANGE : ph.bg}`,
                      boxShadow: isActive
                        ? `0 0 0 4px ${ORANGE}33, 0 4px 12px rgba(0,0,0,0.15)`
                        : hoveredBubble === idx
                        ? `0 0 0 3px ${ph.bg}44, 0 4px 10px rgba(0,0,0,0.18)`
                        : "0 1px 4px rgba(0,0,0,0.1)",
                      transform: isActive ? "scale(1.18)" : hoveredBubble === idx ? "scale(1.12)" : "scale(1)",
                      transition: "transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease",
                    }}>
                    {s.number}
                  </button>
                  <span className="text-center text-xs mt-2 leading-tight px-0.5"
                    style={{ color: isActive ? ORANGE : isPast ? ph.bg : "#6b7280", fontWeight: isActive ? 700 : 400, maxWidth: "68px" }}>
                    {s.shortLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── Step Dots Timeline — Mobile (current phase only) ─── */}
      <div className="md:hidden mb-6 py-2">
        <div className="text-center text-xs mb-4" style={{ color: "#9ca3af" }}>
          Step {step.number} of {STEPS.length} &nbsp;·&nbsp;
          <span className="font-bold" style={{ color: phase.bg }}>{phase.label}</span>
        </div>
        {(() => {
          const phaseSteps = STEPS.filter(s => s.phaseId === step.phaseId);
          return (
            <div className="relative">
              <div className="absolute" style={{ top: "22px", left: `${100 / phaseSteps.length / 2}%`, right: `${100 / phaseSteps.length / 2}%`, height: "3px", backgroundColor: phase.bg }} />
              <div className="flex">
                {phaseSteps.map((s) => {
                  const idx      = STEPS.findIndex(st => st.number === s.number);
                  const isActive = idx === selectedIdx;
                  const isPast   = idx < selectedIdx;
                  return (
                    <div key={s.number} className="flex-1 flex flex-col items-center">
                      <button
                        onClick={() => goTo(idx)}
                        onMouseEnter={() => setHoveredBubble(idx)}
                        onMouseLeave={() => setHoveredBubble(null)}
                        aria-pressed={isActive}
                        className="relative z-10 w-11 h-11 rounded-full font-black text-sm flex items-center justify-center cursor-pointer"
                        style={{
                          backgroundColor: isActive ? ORANGE : (isPast || hoveredBubble === idx) ? phase.bg : "white",
                          color:           isActive || isPast || hoveredBubble === idx ? "white" : phase.bg,
                          border: `3px solid ${isActive ? ORANGE : phase.bg}`,
                          boxShadow: isActive
                            ? `0 0 0 4px ${ORANGE}33, 0 4px 12px rgba(0,0,0,0.15)`
                            : hoveredBubble === idx
                            ? `0 0 0 3px ${phase.bg}44, 0 4px 10px rgba(0,0,0,0.18)`
                            : "0 1px 4px rgba(0,0,0,0.1)",
                          transform: isActive ? "scale(1.15)" : hoveredBubble === idx ? "scale(1.1)" : "scale(1)",
                          transition: "transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease",
                        }}>
                        {s.number}
                      </button>
                      <span className="text-center text-xs mt-2 leading-tight px-1"
                        style={{ color: isActive ? ORANGE : isPast ? phase.bg : "#6b7280", fontWeight: isActive ? 700 : 400 }}>
                        {s.shortLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })()}
      </div>

      {/* ─── Step Detail Card ─── */}
      <div className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${phase.bg}40`, boxShadow: "0 4px 24px rgba(0,0,0,0.09)" }}>

        {/* Header */}
        <div className="px-6 py-5" style={{ backgroundColor: phase.bg }}>
          <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                Step {step.number} of {STEPS.length} &nbsp;·&nbsp; {phase.label} Phase
              </div>
              <h3 className="text-white font-black text-xl md:text-2xl leading-tight">{step.title}</h3>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap" style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "white" }}>
              ⏱ {data.timeRange}
            </span>
          </div>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>{data.description}</p>
        </div>

        {/* We Handle / Where We Need Your Help */}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-white border-b border-gray-100">
          <div className="p-5 md:p-6">
            <div className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: BLUE }}>SolarTech Handles</div>
            <ul className="space-y-2">
              {data.weHandle.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: BLUE }}>✓</span>
                  <span style={{ color: "#374151" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 md:p-6">
            <div className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Where We Need Your Help</div>
            <ul className="space-y-2">
              {data.youHandle.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: ORANGE }}>✓</span>
                  <span style={{ color: "#374151" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Financing options breakdown (Step 2 only) */}
        {data.financingOptions && (
          <div className="px-6 py-5 bg-white border-b border-gray-100">
            <div className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#9ca3af" }}>
              💰 Your Financing Options
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {data.financingOptions.map((opt) => (
                <div key={opt.name} className="rounded-xl overflow-hidden" style={{ border: `2px solid ${opt.color}` }}>
                  <div className="px-4 py-2.5" style={{ backgroundColor: opt.color }}>
                    <div className="text-white font-black text-sm">{opt.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.75)" }}>{opt.badge}</div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-semibold mb-3" style={{ color: "#6b7280" }}>⏱ {opt.timeRange}</div>
                    <ul className="space-y-1.5">
                      {opt.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs">
                          <span className="flex-shrink-0 font-bold mt-0.5" style={{ color: opt.color }}>✓</span>
                          <span style={{ color: "#374151" }}>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs mt-3" style={{ color: "#9ca3af" }}>
              Not sure which fits? We run your real numbers through all three on the consultation call —{" "}
              <a href={FINANCING_URL} className="font-semibold underline" style={{ color: BLUE }}>explore financing options →</a>
            </p>
          </div>
        )}

        {/* Service package cards (Step 11) */}
        {data.servicePackages && (
          <div className="px-6 py-5 bg-white border-b border-gray-100">
            <div className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#9ca3af" }}>
              🛡 Service & Care Options
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {data.servicePackages.map((pkg) => (
                <a key={pkg.name} href={pkg.href} target="_blank" rel="noopener noreferrer"
                  className="rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  style={{ border: `2px solid ${pkg.color}` }}>
                  <div className="px-4 py-2.5" style={{ backgroundColor: pkg.color }}>
                    <div className="text-white font-black text-sm">{pkg.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.75)" }}>{pkg.badge}</div>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-1.5">
                      {pkg.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs">
                          <span className="flex-shrink-0 font-bold mt-0.5" style={{ color: pkg.color }}>✓</span>
                          <span style={{ color: "#374151" }}>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-xs font-bold" style={{ color: pkg.color }}>Learn more →</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Note callout */}
        {data.note && (
          <div className="px-6 py-4 bg-white border-b border-gray-100">
            <div className="px-4 py-3 rounded-lg text-sm" style={{ backgroundColor: `${data.noteColor}15`, borderLeft: `3px solid ${data.noteColor}` }}>
              {data.note.split("\n\n").map((p, i) => <p key={i} className={i > 0 ? "mt-2" : ""} style={{ color: "#374151" }}>{p}</p>)}
            </div>
          </div>
        )}

        {/* Educational resources */}
        {data.resources.length > 0 && (
          <div className="px-6 py-4 bg-white border-b border-gray-100">
            <div className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#9ca3af" }}>Learn More</div>
            <div className="flex flex-wrap gap-2">
              {data.resources.map((r, i) => (
                <a key={i} href={r.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors hover:opacity-80"
                  style={{ borderColor: phase.bg, color: phase.bg, backgroundColor: `${phase.bg}10` }}>
                  {r.label} →
                </a>
              ))}
            </div>
          </div>
        )}

        {/* FAQ accordion */}
        {data.faqs.length > 0 && (
          <div className="bg-white border-b border-gray-100">
            <div className="px-6 pt-4 pb-2">
              <div className="text-xs font-black uppercase tracking-widest" style={{ color: "#9ca3af" }}>Frequently Asked Questions</div>
            </div>
            <div className="divide-y divide-gray-100">
              {data.faqs.map((faq, fi) => (
                <div key={fi}>
                  <button onClick={() => toggleFaq(fi)}
                    className="w-full flex justify-between items-center px-6 py-3 text-left gap-4 cursor-pointer"
                    aria-expanded={isFaqOpen(fi)}>
                    <span className="text-sm font-semibold" style={{ color: "#111827" }}>{faq.q}</span>
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: isFaqOpen(fi) ? ORANGE : phase.bg }}>
                      {isFaqOpen(fi) ? "−" : "+"}
                    </span>
                  </button>
                  {isFaqOpen(fi) && (
                    <div className="px-6 pb-4">
                      <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>{faq.a}</p>
                      {faq.cta && (
                        <a href={faq.cta.href} target="_blank" rel="noopener noreferrer"
                          className="inline-block mt-3 text-xs font-bold px-4 py-2 rounded-lg text-white"
                          style={{ backgroundColor: ORANGE }}>
                          {faq.cta.label} →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step CTA */}
        {data.cta && (
          <div className="px-6 py-5 bg-white border-b border-gray-100">
            <a href={data.cta.href}
              className="inline-block font-black text-sm px-6 py-3 rounded-lg text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: ORANGE }}>
              {data.cta.label} →
            </a>
          </div>
        )}

        {/* Navigation footer */}
        <div className="px-6 py-4 flex items-center justify-between" style={{ backgroundColor: "#f4f7fb" }}>
          <button onClick={() => selectedIdx > 0 && goTo(selectedIdx - 1)} disabled={selectedIdx === 0}
            className="flex items-center gap-1.5 text-sm font-bold transition-opacity disabled:opacity-30 hover:opacity-70"
            style={{ color: BLUE }}>
            ← {selectedIdx > 0 ? STEPS[selectedIdx - 1].shortLabel : "Start"}
          </button>
          <span className="text-xs font-medium" style={{ color: "#9ca3af" }}>{selectedIdx + 1} / {STEPS.length}</span>
          <button onClick={() => selectedIdx < STEPS.length - 1 && goTo(selectedIdx + 1)} disabled={selectedIdx === STEPS.length - 1}
            className="flex items-center gap-1.5 text-sm font-bold transition-opacity disabled:opacity-30 hover:opacity-70"
            style={{ color: BLUE }}>
            {selectedIdx < STEPS.length - 1 ? STEPS[selectedIdx + 1].shortLabel : "Done"} →
          </button>
        </div>
      </div>


      {/* ─── Mid-page CTA ─── */}
      <div className="mt-8 rounded-xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ background: `linear-gradient(135deg, ${BLUE_DARK} 0%, ${BLUE} 100%)` }}>
        <div>
          <p className="text-white font-black text-lg">Ready to see your numbers?</p>
          <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.7)" }}>
            Free estimate · No obligation · 90 seconds
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a href={CALC_URL}
            className="font-black text-sm px-6 py-3 rounded-lg text-white text-center transition-opacity hover:opacity-90"
            style={{ backgroundColor: ORANGE }}>
            Solar Cost Calculator →
          </a>
          <a href={CONTACT_URL}
            className="font-bold text-sm px-6 py-3 rounded-lg text-center border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors">
            Talk to an Expert
          </a>
        </div>
      </div>

    </div>
  );
}
