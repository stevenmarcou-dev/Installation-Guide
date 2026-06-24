import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import ProcessTimeline from "../components/ProcessTimeline";

const CALC_URL    = "https://solartechonline.com/solar-panel-cost-calculator/";
const CONTACT_URL = "https://solartechonline.com/contact-us/";
const PHONE       = "(619) 743-9193";
const PHONE_LINK  = "tel:+16197439193";
const BLUE       = "#183e6d";
const BLUE_DARK  = "#0c1f37";
const ORANGE     = "#f58026";
const YELLOW     = "#eda726";
const CANONICAL  = "https://solartech-landing-two.vercel.app/solar-installation-process";

export const metadata: Metadata = {
  title: "Solar Installation Process: Step-by-Step Guide | SolarTech",
  description:
    "The complete solar installation process explained step by step, from free consultation to Permission to Operate. Honest timelines by city, who handles what, all financing options compared, and answers to every common question.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Solar Installation Process: Step-by-Step Guide | SolarTech",
    description:
      "11 steps. Real timelines. No surprises. SolarTech's complete solar installation process guide, from first call to first lower bill.",
    siteName: "SolarTech",
    type: "website",
    url: CANONICAL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Installation Process: Step-by-Step Guide | SolarTech",
    description:
      "From free consultation to Permission to Operate: the complete SolarTech solar installation process, step by step.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "name": "Solar Installation Process: Step-by-Step Guide",
      "description": "The complete solar installation process from free consultation to monitoring and maintenance, in 11 steps. Covers consultation, permitting, installation, utility approval, and long-term monitoring.",
      "totalTime": "P90D",
      "step": [
        {
          "@type": "HowToStep", "position": 1,
          "name": "Share Your Information",
          "text": "Before we build your custom proposal, we collect basic information about your home and energy usage. You can share this over the phone, by email, or through our short online form.",
          "timeRequired": "PT20M",
          "url": `${CANONICAL}`,
        },
        {
          "@type": "HowToStep", "position": 2,
          "name": "Your Custom Solar Proposal",
          "text": "We present your custom system design and walk through your financing options — solar loan, lease/PPA, or prepaid lease. We can come to your home or meet virtually, whichever is most convenient. Zero obligation.",
          "timeRequired": "PT90M",
          "url": `${CANONICAL}`,
        },
        {
          "@type": "HowToStep", "position": 3,
          "name": "Contract Signature",
          "text": "Once you're ready to move forward, we send all agreement documents and walk you through all of the details that you need to know.",
          "timeRequired": "P5D",
          "url": `${CANONICAL}`,
        },
        {
          "@type": "HowToStep", "position": 4,
          "name": "Site Survey",
          "text": "A SolarTech technician visits your home to take precise roof measurements, evaluate your electrical panel, assess shading, and document everything our engineering team needs to finalize the system layout.",
          "timeRequired": "P3D",
          "url": `${CANONICAL}`,
        },
        {
          "@type": "HowToStep", "position": 5,
          "name": "System Design",
          "text": "Our engineering team creates your layout from the survey data. A project manager QAs the design before sending it to you for review and approval. This is the only step before installation where your input is needed.",
          "timeRequired": "P10D",
          "url": `${CANONICAL}`,
        },
        {
          "@type": "HowToStep", "position": 6,
          "name": "Permits & HOA",
          "text": "We submit engineer-stamped plans to your city and, if applicable, your HOA. Permitting is the longest waiting period. We track every submission, follow up proactively, and send you milestone updates so you're never left wondering.",
          "timeRequired": "P6W",
          "url": `${CANONICAL}`,
        },
        {
          "@type": "HowToStep", "position": 7,
          "name": "Installation Day",
          "text": "Our install crews handle everything from roof mounting to final wiring. Most homes are fully complete in a single day. We clean up completely before leaving.",
          "timeRequired": "P2D",
          "url": `${CANONICAL}`,
        },
        {
          "@type": "HowToStep", "position": 8,
          "name": "City Inspection",
          "text": "A city inspector verifies our installation against the approved permit plans and local electrical code. Once we pass, we immediately submit your interconnection application to your utility.",
          "timeRequired": "P2W",
          "url": `${CANONICAL}`,
        },
        {
          "@type": "HowToStep", "position": 9,
          "name": "Permission to Operate",
          "text": "After passing inspection, we submit your interconnection application to your utility (i.e. LADWP, SDG&E, SCE, APS, or PG&E). Once the utility issues Permission to Operate (PTO), your system can legally turn on and export power to the grid.",
          "timeRequired": "P3W",
          "url": `${CANONICAL}`,
        },
        {
          "@type": "HowToStep", "position": 10,
          "name": "System Activated — You're Saving",
          "text": "The moment your utility issues PTO, your system goes live. We notify you immediately, activate your monitoring app, and run a remote health check within 48 hours. Your first lower energy bill arrives within 30–60 days.",
          "timeRequired": "P1D",
          "url": `${CANONICAL}`,
        },
        {
          "@type": "HowToStep", "position": 11,
          "name": "Monitoring & Maintenance",
          "text": "Your relationship with SolarTech doesn't end at activation. We monitor your system through native monitoring apps at no cost, and offer proactive care plans and on-call service from the same team that installed your system, for the life of your equipment.",
          "url": `${CANONICAL}`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What information do you actually need from me?", "acceptedAnswer": { "@type": "Answer", "text": "Just your address and a few recent utility bills. That's enough for us to size your system and run your savings numbers before the proposal meeting." } },
        { "@type": "Question", "name": "How long does the solar installation process take?", "acceptedAnswer": { "@type": "Answer", "text": "From signing your contract to turning on your system typically takes 45–90 days. The longest part is permitting, which varies by city and utility (usually 2–6 weeks)." } },
        { "@type": "Question", "name": "What if I don't have my utility bills handy?", "acceptedAnswer": { "@type": "Answer", "text": "We can pull usage data directly from your utility account with your permission, or estimate from your home's square footage and local averages." } },
        { "@type": "Question", "name": "Do I need to know anything about solar before getting started?", "acceptedAnswer": { "@type": "Answer", "text": "No. We ask simple questions about your home and goals. Our team does all the technical analysis. Just describe what you're hoping to accomplish." } },
        { "@type": "Question", "name": "How do I decide which solar financing option is right for me?", "acceptedAnswer": { "@type": "Answer", "text": "We run your numbers through every scenario and show you a side-by-side comparison. Key factors: how long you plan to stay in the home, whether you prefer ownership or zero maintenance responsibility, and your budget. All three paths — solar loan, lease/PPA, and prepaid lease — produce day-one savings." } },
        { "@type": "Question", "name": "Is there any obligation after the proposal meeting?", "acceptedAnswer": { "@type": "Answer", "text": "None. The proposal meeting is completely free. Most customers take a few days to review before moving forward. We never pressure a same-day decision." } },
        { "@type": "Question", "name": "When does my first solar payment start?", "acceptedAnswer": { "@type": "Answer", "text": "Regardless of financing type, your first payment does not begin until your system is activated and generating power. Loan payments begin 30–60 days after activation. Lease and PPA payments begin with your first billing cycle after activation." } },
        { "@type": "Question", "name": "How long does it take to get solar financing approved?", "acceptedAnswer": { "@type": "Answer", "text": "Full approval typically comes within 24–48 hours of signing. We stay in contact with the lender so you don't have to chase anyone." } },
        { "@type": "Question", "name": "Does the site survey cost anything?", "acceptedAnswer": { "@type": "Answer", "text": "No. The site survey is included in your contract at no extra charge." } },
        { "@type": "Question", "name": "What if my electrical panel needs an upgrade?", "acceptedAnswer": { "@type": "Answer", "text": "We identify any needed upgrades at the survey and include them in your project plan and contract. No surprise add-ons after you've signed." } },
        { "@type": "Question", "name": "Can I add a battery to my solar system?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, and the design phase is the ideal time. We install Tesla Powerwall 3, Enphase, and NeoVolta systems. Adding storage now is significantly easier than retrofitting later." } },
        { "@type": "Question", "name": "What if my HOA says no to solar?", "acceptedAnswer": { "@type": "Answer", "text": "California Civil Code §714 and Arizona law both protect homeowners' right to install solar. HOAs cannot legally prohibit solar, only make reasonable aesthetic requests. We've navigated hundreds of HOA approvals and handle all pushback directly." } },
        { "@type": "Question", "name": "How long does solar permitting take?", "acceptedAnswer": { "@type": "Answer", "text": "Permitting typically takes 2–6 weeks depending on your city and utility. We submit complete, engineer-stamped plans on the first attempt to minimize revision rounds and give you a realistic estimate for your specific municipality." } },
        { "@type": "Question", "name": "Will solar installation damage my roof?", "acceptedAnswer": { "@type": "Answer", "text": "Every penetration is sealed with flashed, code-compliant mounting hardware. We back this with a 10-year workmanship warranty on roof penetrations, separate from the 25-year panel and inverter warranties." } },
        { "@type": "Question", "name": "Will my power be out all day during installation?", "acceptedAnswer": { "@type": "Answer", "text": "No, just for 1–4 hours while we connect to your main panel. We tell you exactly when at the morning walkthrough so you can plan ahead." } },
        { "@type": "Question", "name": "Do I need to be home for the city inspection?", "acceptedAnswer": { "@type": "Answer", "text": "No. We coordinate everything with the city. You don't need to do anything." } },
        { "@type": "Question", "name": "What is Permission to Operate (PTO) for solar?", "acceptedAnswer": { "@type": "Answer", "text": "PTO is the formal authorization from your utility to turn on your solar system and connect it to the grid. You cannot legally operate without it. We track this daily and notify you the moment it arrives." } },
        { "@type": "Question", "name": "What is net metering?", "acceptedAnswer": { "@type": "Answer", "text": "Net metering is a billing arrangement where excess solar power you export to the grid earns you credits on your utility bill. In California and Arizona, this significantly improves your effective savings rate." } },
        { "@type": "Question", "name": "What if my solar system underperforms?", "acceptedAnswer": { "@type": "Answer", "text": "Every installation is backed by a 25-year production guarantee. If output falls short in any year, we service the system at no cost to bring it back to spec." } },
        { "@type": "Question", "name": "How do I read my new utility bill after going solar?", "acceptedAnswer": { "@type": "Answer", "text": "Your bill looks very different after going solar. You'll see net metering credits for power sent to the grid. We send a plain-English guide explaining each line item the day your system activates." } },
        { "@type": "Question", "name": "Is solar system monitoring free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. SolarTech monitors your system through native monitoring apps at no cost. A care plan adds proactive annual inspections, priority service scheduling, and panel cleaning, recommended to protect your production guarantee." } },
        { "@type": "Question", "name": "What is covered under my solar warranty?", "acceptedAnswer": { "@type": "Answer", "text": "Panels and inverters carry 25-year manufacturer warranties. Roof penetrations carry our 10-year workmanship warranty. With a lease or PPA, all equipment repairs are covered at no cost for the full term. With a loan, we handle warranty service calls on your behalf at no markup." } },
        { "@type": "Question", "name": "Can I add more solar panels or a battery after installation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We design systems with expansion in mind. Adding panels or a battery after activation is straightforward. Contact your project coordinator for an upgrade quote." } },
        { "@type": "Question", "name": "What happens if I need to remove solar panels for a roof replacement?", "acceptedAnswer": { "@type": "Answer", "text": "We handle solar removal and reinstall. Schedule with us in advance. We coordinate directly with your roofing contractor to minimize downtime." } },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://solartechonline.com/#business",
      "name": "SolarTech",
      "url": "https://solartechonline.com",
      "telephone": "+16197439193",
      "foundingDate": "2001",
      "description": "Solar installation company serving California and Arizona since 2001. Over 15,000 residential and commercial solar installations.",
      "image": "https://solartechonline.com/wp-content/uploads/2024/05/SolarTech-San-Diego-600w-1.png",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "16:30",
        },
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9410 Bond Avenue",
        "addressLocality": "El Cajon",
        "addressRegion": "CA",
        "postalCode": "92021",
        "addressCountry": "US",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.849395723706,
        "longitude": -116.870407151072,
      },
      "priceRange": "$$$$",
      "areaServed": [
        { "@type": "State", "name": "California" },
        { "@type": "State", "name": "Arizona" },
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "800",
        "bestRating": "5",
        "worstRating": "1",
      },
      "sameAs": ["https://solartechonline.com"],
    },
  ],
};

export default function SolarInstallationProcessPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NavBar />

      {/* ── Hero — slide-inspired dark navy ── */}
      <section
        style={{ background: `linear-gradient(145deg, ${BLUE_DARK} 0%, #0f2d54 55%, ${BLUE} 100%)` }}
        className="relative overflow-hidden"
      >
        {/* Decorative arc */}
        <div
          className="absolute right-0 top-0 bottom-0 pointer-events-none"
          style={{ width: "40%", opacity: 0.07 }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="400" cy="200" r="300" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div
            className="inline-block text-xs font-black px-4 py-1.5 rounded uppercase tracking-widest mb-5"
            style={{ backgroundColor: YELLOW, color: BLUE_DARK }}
          >
            45–90 Day Project Lifecycle Overview
          </div>

          <div className="md:flex md:items-end gap-10">
            <div className="mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                The Complete Solar<br />
                <span style={{ color: ORANGE }}>Installation Process</span>
              </h1>
              <p className="text-lg max-w-xl leading-relaxed" style={{ color: "#c8d9ef" }}>
                We&rsquo;ve completed over 15,000 solar projects across California and Arizona. Here&rsquo;s what to expect at every step.
              </p>
            </div>

            <div className="flex-shrink-0 grid grid-cols-2 gap-4 md:w-80 md:ml-auto md:mr-12">
              {[
                { val: "45–90",   sub: "Day typical timeline" },
                { val: "11",      sub: "Steps, clearly explained" },
                { val: "15,000+", sub: "Completed installs" },
                { val: "4.9★",    sub: "800+ Google reviews" },
              ].map(({ val, sub }) => (
                <div key={sub} className="rounded-xl px-4 py-4 text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <div className="text-3xl font-black" style={{ color: "white" }}>{val}</div>
                  <div className="text-xs mt-1 leading-tight" style={{ color: "rgba(255,255,255,0.85)" }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* ── Main Timeline ── */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <ProcessTimeline />
        </div>
      </section>

      {/* ── Reviews carousel ── */}
      <section className="py-16 overflow-hidden" style={{ backgroundColor: BLUE_DARK }}>
        <div className="text-center mb-10 px-6">
          <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: `${ORANGE}cc` }}>
            What Our Customers Say
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white">What Homeowners Are Saying</h2>
        </div>

        {(() => {
          const reviews = [
            { quote: "We got bids from several companies for our solar and battery project. Solartech had the best combination of price and system design.", author: "L.A.", location: "Rancho Mirage, CA", date: "Mar 2026" },
            { quote: "SolarTech installed a new tile roof and a new Solar Water Heating System three years ago. We have been very happy with the results.", author: "Richard M.", location: "Santee, CA", date: "Feb 2026" },
            { quote: "Our rep Sam Johnson was great to work with. He was there every step of the way. The crews were very polite, clean, and hard working.", author: "Fred M.", location: "San Francisco, CA", date: "Mar 2026" },
            { quote: "Drew and Alberto were excellent! Both were professional and friendly. They took the time to explain what needed to be fixed.", author: "Dee B.", location: "Santa Clarita, CA", date: "Dec 2025" },
            { quote: "I strongly recommend SolarTech for their personable approach and responsiveness to customer service.", author: "Chris R.", location: "Lone Pine, CA", date: "Nov 2025" },
            { quote: "I have used Solartech for my house, a rental property, and have referred friends and family. Great communication and experience.", author: "Linde H.", location: "Los Angeles, CA", date: "Oct 2025" },
            { quote: "Did a wonderful job. Were very efficient, did everything in one day. Very impressed. Thank you.", author: "Alice P.", location: "Spring Valley, CA", date: "Feb 2026" },
          ];
          const allCards = [...reviews, ...reviews];
          return (
            <div className="reviews-track-outer">
              <div className="reviews-track">
                {allCards.map((r, i) => (
                  <div key={i} className="rounded-xl flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", padding: "1.75rem", width: "300px" }}>
                    <span style={{ color: ORANGE, fontSize: "1rem", letterSpacing: "2px", display: "block", marginBottom: "0.875rem" }}>★★★★★</span>
                    <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.68, marginBottom: "1.25rem",
                      display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      &ldquo;{r.quote}&rdquo;
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                      <span style={{ fontSize: "0.84rem", fontWeight: 700, color: "white" }}>{r.author}</span>
                      <span style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.35)" }}>{r.location} &nbsp;·&nbsp; {r.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        <p className="text-center mt-10" style={{ fontSize: "0.77rem", color: "rgba(255,255,255,0.28)" }}>
          Reviews from Yelp
        </p>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ background: `linear-gradient(135deg, ${ORANGE} 0%, #ef8b22 100%)` }} className="py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
            Ready to Start Your Solar Installation?
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.9)" }}>
            Free estimate in 90 seconds. No obligation. No pressure.
          </p>
          <a href={CONTACT_URL}
            className="inline-block font-black text-lg px-10 py-4 rounded shadow-xl transition-all hover:-translate-y-1"
            style={{ backgroundColor: "white", color: ORANGE }}>
            See If Your Home Qualifies
          </a>
          <div className="mt-5">
            <a href={PHONE_LINK} className="font-bold text-white hover:opacity-80 transition-opacity">
              Or call: {PHONE}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-7 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
            <span>✓ Free estimate</span>
            <span>✓ No obligation</span>
            <span>✓ No-pressure consultation</span>
            <span>✓ Local CA &amp; AZ team since 2001</span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-6 text-center text-sm" style={{ backgroundColor: BLUE_DARK }}>
        <div className="max-w-6xl mx-auto px-6">
          <p style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} SolarTech. Solar That Works For You™ — California &amp; Arizona since 2001.
          </p>
          <div className="flex justify-center gap-5 mt-2 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            <a href="https://solartechonline.com" className="hover:text-white transition-colors">Main Site</a>
            <a href="https://solartechonline.com/financing/" className="hover:text-white transition-colors">Financing</a>
            <a href="/" className="hover:text-white transition-colors">← Landing Page</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
