import { preload } from "react-dom";
import FAQAccordion from "./components/FAQAccordion";
import NavBar from "./components/NavBar";
import AnimatedCardGrid from "./components/AnimatedCardGrid";

const HERO_IMAGE = "https://solartechonline.com/wp-content/uploads/2026/05/DJI_0005-scaled.jpg";

const CALC_URL = "https://solartechonline.com/solar-panel-cost-calculator/";
const FINANCING_URL = "https://solartechonline.com/financing/";
const PHONE = "(619) 743-9193";
const PHONE_LINK = "tel:+16197439193";

// Brand colors
const BLUE = "#183e6d";
const BLUE_DARK = "#0c1f37";
const BLUE_HIGHLIGHT = "#1886d1";
const ORANGE = "#f58026";
const ORANGE_SEC = "#ef8b22";
const YELLOW = "#eda726";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://solartechonline.com/#business",
  name: "SolarTech",
  url: "https://solartechonline.com",
  logo: "https://solartechonline.com/wp-content/uploads/2024/05/SolarTech-San-Diego-600w-1.png",
  image: "https://solartechonline.com/wp-content/uploads/2026/05/DJI_0005-scaled.jpg",
  description:
    "SolarTech has been installing solar panels in California and Arizona since 2001. We offer $0 down financing with payments below your current utility bill from day one, through solar loans, leases, and PPAs.",
  telephone: "+1-619-743-9193",
  foundingDate: "2001",
  areaServed: [
    { "@type": "State", name: "California" },
    { "@type": "State", name: "Arizona" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solar Financing Options",
    itemListElement: [
      { "@type": "Offer", name: "Solar Loan", description: "$0 down solar loan with payments below your current utility bill" },
      { "@type": "Offer", name: "Solar Lease / PPA", description: "$0 down, $0 maintenance solar lease with a fixed rate below utility rates" },
      { "@type": "Offer", name: "Prepaid Lease / PPA", description: "Prepaid solar lease with 35%+ savings and system ownership transfer after six years" },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "800",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Maria T." },
      reviewBody:
        "I thought solar was only for people with a lot of money. SolarTech showed me I could start for $0 and my payment is $60 less than my old utility bill.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Ryan G." },
      reviewBody:
        "When I heard the federal tax credit was gone I almost did not call. The SolarTech team explained that the lease option passes the savings through anyway. I have been saving since day one.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Sandra & Mike L." },
      reviewBody:
        "Our electric bill used to be $280 a month in summer. Now it is $140 with the lease payment included. The install crew was in and out in a day and a half.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Isn't solar too expensive without the federal tax credit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With $0 down lease and PPA options, you pay nothing upfront, and your monthly payment is structured to be lower than your current utility bill from day one. The financing company captures the tax credit on your behalf and passes that savings to you through lower rates.",
      },
    },
    {
      "@type": "Question",
      name: "How can solar payments be lower than my electric bill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solar generates electricity at a locked-in rate far below what your utility charges, and that rate does not climb 6–10% every year like your bill does. On average, SolarTech customers see 30–50% lower energy costs immediately.",
      },
    },
    {
      "@type": "Question",
      name: "What if electricity rates go up? Am I protected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With a fixed-payment solar loan or a capped-escalator lease, your rate is locked in. Utility rates across California and Arizona have increased an average of 7–9% annually for the past decade.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I sell my home after going solar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solar adds roughly 4% to your home's value. Financed systems can typically be assumed by the buyer or paid off at closing. Our team walks you through every scenario before you sign.",
      },
    },
    {
      "@type": "Question",
      name: "Who handles solar panel repairs and maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With a lease or PPA, SolarTech handles all maintenance, cleaning, and repairs for the life of the agreement, including battery replacement. You pay nothing out of pocket.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need good credit to go solar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have options starting at 650 FICO, and in some cases no-FICO-check programs. A quick soft-pull pre-qualification won't affect your credit score.",
      },
    },
    {
      "@type": "Question",
      name: "How long does solar installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most installations are completed in 1–2 days after permits are approved. From first appointment to flipping the switch typically takes 4–8 weeks.",
      },
    },
  ],
};

export default function LandingPage() {
  preload(HERO_IMAGE, { as: "image", fetchPriority: "high" });
  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <NavBar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://solartechonline.com/wp-content/uploads/2026/05/DJI_0005-scaled.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark gradient overlay keeps text legible */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(12,31,55,0.90) 0%, rgba(24,62,109,0.85) 55%, rgba(26,74,130,0.80) 100%)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <div
            className="inline-block text-sm font-bold px-4 py-1.5 rounded mb-6"
            style={{ backgroundColor: YELLOW, color: BLUE_DARK }}
          >
            $0 DOWN · SAVE FROM YOUR VERY FIRST BILL · NO TAX CREDIT NEEDED
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Think Solar Is Out of
            <br />
            <span style={{ color: ORANGE }}>Your Budget?</span>
            <br />
            Think Again.
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed" style={{ color: "#c8d9ef" }}>
            Homeowners across California and Arizona are going solar with{" "}
            <strong className="text-white">$0 down</strong> and combined payments{" "}
            <strong className="text-white">lower than their current utility bill, starting the very first month.</strong>
          </p>

          <p className="text-base max-w-2xl mx-auto mb-10" style={{ color: "#8faecf" }}>
            Our financing options deliver 35%+ savings without requiring the federal tax credit.
            In most cases, you are ahead on day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={CALC_URL} className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
              See If Your Home Qualifies
            </a>
            <a
              href={FINANCING_URL}
              className="text-white font-semibold text-sm underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Explore financing options
            </a>
          </div>

          <p className="text-sm mt-6" style={{ color: "#8faecf" }}>
            Free estimate · No credit check · No-pressure consultation
          </p>
        </div>
      </section>

      {/* ── Day-One Savings Callout ── */}
      <section style={{ backgroundColor: BLUE_HIGHLIGHT }} className="py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="text-white font-black text-2xl md:text-3xl leading-tight">
                Most customers pay{" "}
                <span
                  className="underline decoration-4"
                  style={{ textDecorationColor: YELLOW }}
                >
                  less
                </span>{" "}
                on their very first combined statement.
              </p>
              <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.8)" }}>
                Your solar payment plus any remaining utility balance is structured to come in below your old bill from month one.
              </p>
            </div>
            <a
              href={CALC_URL}
              className="flex-shrink-0 font-black text-base px-7 py-4 rounded transition-all hover:-translate-y-0.5 whitespace-nowrap"
              style={{ backgroundColor: "white", color: BLUE }}
            >
              See If Your Home Qualifies
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Now ── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: BLUE }}>
              Every Month You Wait, Your Utility Wins
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4b5563" }}>
              Utility rates across California and Arizona have climbed 7–9% every year for the past decade.
              The real question is whether you can afford to keep paying a utility bill that goes up every year.
            </p>
          </div>

          <AnimatedCardGrid className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Rising Utility Rates",
                body: "Homeowners across California and Arizona are paying 40–60% more in electricity now than five years ago. Without solar, that trend continues, year after year.",
                bg: "#fef2e8",
                border: "#f58026",
                iconBg: ORANGE,
                icon: "📈",
              },
              {
                title: "Tax Credit Is Gone for Owners",
                body: "The 30% federal ITC for homeowners who purchase a system outright is no longer available. Our financing options capture that value differently, passing the savings directly to you.",
                bg: "#fdf8ec",
                border: YELLOW,
                iconBg: "#d4920f",
                icon: "🏦",
              },
              {
                title: "Financing Changes Everything",
                body: "With a solar lease or PPA, the financing company owns the system, captures available incentives, and sells you power at a locked-in rate below what the utility charges.",
                bg: "#e8f1fb",
                border: BLUE_HIGHLIGHT,
                iconBg: BLUE_HIGHLIGHT,
                icon: "💡",
              },
            ].map(({ title, body, bg, border, iconBg, icon }) => (
              <div
                key={title}
                className="rounded-xl p-6 border-l-4"
                style={{ backgroundColor: bg, borderLeftColor: border }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xl mb-4"
                  style={{ backgroundColor: iconBg }}
                >
                  {icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: BLUE_DARK }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{body}</p>
              </div>
            ))}
          </AnimatedCardGrid>
        </div>
      </section>

      {/* ── Financing Options ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: BLUE }}>
              Your Path to $0 Down Solar
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4b5563" }}>
              We have helped 15,000+ homeowners find the financing structure that works for their situation.
              Here are the most popular options.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Solar Loan */}
            <div
              className="financing-card financing-card-navy rounded-xl overflow-hidden shadow-md border-2 flex flex-col"
              style={{ borderColor: BLUE }}
            >
              <div className="px-4 py-3 text-center" style={{ backgroundColor: BLUE }}>
                <span className="text-white font-bold text-xs uppercase tracking-widest">
                  Own Your System
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ backgroundColor: "#dbeafe" }}>
                    🏠
                  </div>
                  <h3 className="text-xl font-black" style={{ color: BLUE }}>Solar Loan</h3>
                </div>
                <p className="text-sm mb-5 leading-relaxed" style={{ color: "#4b5563" }}>
                  Own your system with $0 down. Payments are structured to be lower than your current
                  electric bill from the very first statement.
                </p>
                <ul className="space-y-2">
                  {[
                    "$0 down — own your system from day one",
                    "Savings start on your very first bill",
                    "Adds 4%+ to your home value",
                    "10–25 year terms, rates from 2.99%",
                    "Lock in your energy cost for good",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: ORANGE }}>✓</span>
                      <span style={{ color: "#374151" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Prepaid Lease / PPA */}
            <div
              className="financing-card financing-card-orange rounded-xl overflow-hidden shadow-md border-2 flex flex-col"
              style={{ borderColor: ORANGE }}
            >
              <div className="px-4 py-3 text-center" style={{ backgroundColor: ORANGE }}>
                <span className="text-white font-bold text-xs uppercase tracking-widest">
                  Most Popular · Best Value
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ backgroundColor: "#fef3c7" }}>
                    💰
                  </div>
                  <h3 className="text-xl font-black" style={{ color: ORANGE_SEC }}>Prepaid Lease / PPA</h3>
                </div>
                <p className="text-sm mb-5 leading-relaxed" style={{ color: "#4b5563" }}>
                  Make an upfront prepayment and receive solar power at a 35%+ discount for the life of
                  the agreement. The financing partner handles available incentives on your behalf — and you
                  own the system outright after six years.
                </p>
                <ul className="space-y-2">
                  {[
                    "35%+ savings off utility rates",
                    "Upfront payment or structured monthly option",
                    "Ownership transfers to you after six years",
                    "Third party captures and passes through incentives",
                    "$0 maintenance for the full agreement term",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: ORANGE }}>✓</span>
                      <span style={{ color: "#374151" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Lease / PPA */}
            <div
              className="financing-card financing-card-highlight rounded-xl overflow-hidden shadow-md border-2 flex flex-col"
              style={{ borderColor: BLUE_HIGHLIGHT }}
            >
              <div className="px-4 py-3 text-center" style={{ backgroundColor: BLUE_HIGHLIGHT }}>
                <span className="text-white font-bold text-xs uppercase tracking-widest">
                  $0 Down · $0 Maintenance
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ backgroundColor: "#dbeafe" }}>
                    ⚡
                  </div>
                  <h3 className="text-xl font-black" style={{ color: BLUE_HIGHLIGHT }}>Solar Lease / PPA</h3>
                </div>
                <p className="text-sm mb-5 leading-relaxed" style={{ color: "#4b5563" }}>
                  Pay nothing upfront and nothing for maintenance — ever. Buy power at a locked-in rate
                  below what your utility charges. The financing partner captures available incentives and
                  passes the savings directly to you.
                </p>
                <ul className="space-y-2">
                  {[
                    "$0 down — nothing out of pocket to start",
                    "Fixed rate below your current utility rate",
                    "SolarTech handles all repairs and cleaning",
                    "Battery replacement coverage included",
                    "25-year production guarantee",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: BLUE_HIGHLIGHT }}>✓</span>
                      <span style={{ color: "#374151" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA below financing cards */}
          <div
            className="mt-10 rounded-xl p-8 text-center"
            style={{ backgroundColor: "#edf3fb", border: `2px solid ${BLUE}` }}
          >
            <p className="font-medium mb-2" style={{ color: BLUE }}>
              Not sure which option fits your situation?
            </p>
            <p className="text-sm mb-6" style={{ color: "#4b5563" }}>
              Our free solar estimate walks you through a side-by-side comparison based on your home and usage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={CALC_URL} className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
                Get a Free Quote
              </a>
              <a href={FINANCING_URL} className="btn-navy-outline w-full sm:w-auto">
                Explore Solar Options
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-10 border-y" style={{ backgroundColor: "white", borderColor: "#e5e7eb" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: "800+", label: "5-Star Google Reviews" },
              { stat: "25+", label: "Years in Solar" },
              { stat: "15,000+", label: "Successful Installations" },
              { stat: "$0", label: "Down to Get Started" },
            ].map(({ stat, label }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-black" style={{ color: BLUE }}>
                  {stat}
                </div>
                <div className="text-sm font-medium mt-1" style={{ color: "#6b7280" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Calculator CTA Banner ── */}
      <section
        style={{ background: `linear-gradient(135deg, ${ORANGE} 0%, ${ORANGE_SEC} 100%)` }}
        className="py-14 md:py-20"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.85)" }}>
            Free · Takes 90 Seconds · No Credit Check
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Find Out What Solar
            <br />
            Would Cost You
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            Enter your address and monthly bill. Our calculator uses satellite imagery and real rate data
            to show projected savings, system size, and estimated monthly payment — instantly.
          </p>
          <a
            href={CALC_URL}
            className="inline-block font-black text-xl px-10 py-5 rounded shadow-2xl transition-all hover:-translate-y-1"
            style={{ backgroundColor: "white", color: ORANGE }}
          >
            Get a Free Quote
          </a>
          <p className="text-sm mt-4" style={{ color: "rgba(255,255,255,0.75)" }}>
            Join 15,000+ homeowners across California and Arizona who already made the switch
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-2" style={{ color: BLUE }}>
              Real Homeowners. Real Savings.
            </h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: YELLOW, fontSize: "1.5rem" }}>★</span>
              ))}
              <span className="ml-2 font-medium" style={{ color: "#6b7280" }}>
                800+ Google Reviews
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Maria T.",
                location: "Chula Vista, CA",
                quote:
                  "I thought solar was only for people with a lot of money. SolarTech showed me I could start for $0 and my payment is $60 less than my old utility bill. I wish I had done this three years ago.",
                saving: "Saves $72/mo",
              },
              {
                name: "Ryan G.",
                location: "El Cajon, CA",
                quote:
                  "When I heard the federal tax credit was gone I almost did not call. The SolarTech team explained that the lease option passes the savings through anyway. I have been saving since day one.",
                saving: "Saves $94/mo",
              },
              {
                name: "Sandra & Mike L.",
                location: "Escondido, CA",
                quote:
                  "Our electric bill used to be $280 a month in summer. Now it is $140 with the lease payment included. The install crew was in and out in a day and a half. Could not be happier.",
                saving: "Saves $140/mo",
              },
            ].map(({ name, location, quote, saving }) => (
              <div
                key={name}
                className="rounded-xl p-6 flex flex-col"
                style={{ border: `1px solid #e5e7eb` }}
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: YELLOW, fontSize: "1.1rem" }}>★</span>
                  ))}
                </div>
                <p className="italic leading-relaxed flex-1 mb-4 text-sm" style={{ color: "#374151" }}>
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold" style={{ color: "#111827" }}>{name}</div>
                    <div className="text-sm" style={{ color: "#6b7280" }}>{location}</div>
                  </div>
                  <div
                    className="font-bold text-sm px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: BLUE }}
                  >
                    {saving}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why SolarTech ── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: BLUE }}>
                A Solar Partner You Can Trust for the Long Term
              </h2>
              <p className="leading-relaxed mb-2" style={{ color: "#4b5563" }}>
                We have been installing solar in Southern California since 2001 — before most solar companies
                existed. Our crew is 100% in-house with no subcontractors, and we are here for service,
                repairs, and monitoring long after installation day.
              </p>
              <p className="font-semibold mb-6 text-sm" style={{ color: ORANGE }}>
                Solar That Works For You™
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "100% In-House Installation",
                  "25-Year Solar Warranties",
                  "No-Subcontractor Policy",
                  "Local California Team",
                  "Maxeon & REC Certified",
                  "BBB Accredited",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="font-bold flex-shrink-0" style={{ color: ORANGE }}>✓</span>
                    <span className="text-sm font-medium" style={{ color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href={CALC_URL} className="btn-primary inline-block">
                Get a Free Quote
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "2001", label: "Founded in Southern CA", icon: "📍" },
                  { val: "4.9★", label: "Average Google Rating", icon: "⭐" },
                  { val: "1–2 Days", label: "Typical Install Time", icon: "⚡" },
                  { val: "25 Yrs", label: "Production Guarantee", icon: "🛡️" },
                ].map(({ val, label, icon }) => (
                  <div
                    key={label}
                    className="bg-white rounded-xl p-6 text-center shadow-sm"
                    style={{ border: `1px solid #dbeafe` }}
                  >
                    <div className="text-3xl mb-2">{icon}</div>
                    <div className="text-2xl font-black" style={{ color: BLUE }}>{val}</div>
                    <div className="text-sm mt-1" style={{ color: "#6b7280" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: BLUE }}>
              Common Questions
            </h2>
            <p style={{ color: "#4b5563" }}>
              We have heard every concern. Here are straightforward answers.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        style={{ background: `linear-gradient(135deg, ${BLUE_DARK} 0%, ${BLUE} 100%)` }}
        className="py-16 md:py-24"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Stop Paying More.
            <br />
            <span style={{ color: ORANGE }}>Start Saving Today.</span>
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "#8faecf" }}>
            $0 down. Payments below your current bill. No tax credit required.
            See what solar would cost you in about 90 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={CALC_URL} className="btn-primary text-lg px-10 py-5 rounded w-full sm:w-auto">
              Get a Free Quote
            </a>
            <a
              href={FINANCING_URL}
              className="text-white font-bold text-base border-2 border-white px-8 py-4 rounded hover:bg-white transition-colors w-full sm:w-auto text-center"
              style={{ "--hover-color": BLUE } as React.CSSProperties}
            >
              Explore Solar Options
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm" style={{ color: "#8faecf" }}>
            <span>✓ Free estimate</span>
            <span>✓ No credit check</span>
            <span>✓ No-pressure consultation</span>
            <span>✓ Experienced local team</span>
          </div>
          <div className="mt-8">
            <a
              href={PHONE_LINK}
              className="font-bold text-xl hover:opacity-80 transition-opacity"
              style={{ color: ORANGE }}
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 text-center text-sm" style={{ backgroundColor: BLUE_DARK }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center mb-4">
            <div className="flex items-center" style={{ gap: "10px" }}>
              <svg width="30" height="37" viewBox="0 0 62 76" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="29" cy="6"  r="4.0" fill="#f58026" />
                <circle cx="42" cy="2"  r="3.0" fill="#f58026" />
                <circle cx="10" cy="20" r="5.5" fill="#f58026" />
                <circle cx="28" cy="16" r="4.5" fill="#f58026" />
                <circle cx="3"  cy="38" r="6.5" fill="#f58026" />
                <circle cx="8"  cy="55" r="7.5" fill="#f58026" />
                <circle cx="22" cy="67" r="8.5" fill="#f58026" />
                <circle cx="40" cy="73" r="9.5" fill="#f58026" />
                <circle cx="56" cy="63" r="8.0" fill="#f58026" />
              </svg>
              <div style={{ lineHeight: 1 }}>
                <span style={{ color: "#f58026", fontWeight: 900, letterSpacing: "0.03em", fontSize: "1.2rem", fontFamily: "var(--font-roboto)" }}>SOLAR</span><span style={{ color: "white", fontWeight: 900, letterSpacing: "0.03em", fontSize: "1.2rem", fontFamily: "var(--font-roboto)" }}>TECH</span>
              </div>
            </div>
          </div>
          <p className="mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>
            Solar That Works For You™ — Trusted since 2001.
          </p>
          <p className="mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            Serving California &amp; Arizona · CA &amp; AZ Licensed
          </p>
          <div className="flex flex-wrap justify-center gap-5 mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
            {[
              { label: "Main Site", href: "https://solartechonline.com" },
              { label: "Financing", href: FINANCING_URL },
              { label: "Solar Calculator", href: CALC_URL },
              { label: "About Us", href: "https://solartechonline.com/about/" },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="hover:text-white transition-colors">{label}</a>
            ))}
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} SolarTech. All rights reserved.
            Payment examples are estimates based on average system size and utility rates.
            Actual savings may vary. Subject to credit approval.
          </p>
        </div>
      </footer>
    </main>
  );
}
