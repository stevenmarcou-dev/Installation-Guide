import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import ProcessTimeline from "../components/ProcessTimeline";

const CALC_URL    = "https://solartechonline.com/solar-panel-cost-calculator/";
const PHONE       = "(619) 743-9193";
const PHONE_LINK  = "tel:+16197439193";
const BLUE        = "#183e6d";
const BLUE_DARK   = "#0c1f37";
const ORANGE      = "#f58026";
const YELLOW      = "#eda726";

export const metadata: Metadata = {
  title: "How Solar Installation Works — 45–90 Day Guide | SolarTech",
  description:
    "Your complete step-by-step solar guide: from free consultation to first lower bill. Honest timelines, a clear 'we handle / you handle' breakdown, and answers to every common question — personalized by financing type.",
  alternates: {
    canonical: "https://solartech-landing-two.vercel.app/process",
  },
  openGraph: {
    title: "How Solar Installation Works — 45–90 Day Guide | SolarTech",
    description:
      "No surprises. No runaround. See every step of the SolarTech solar process — with real city permit timelines, per-step FAQs, and educational resources.",
    siteName: "SolarTech",
    type: "website",
  },
};

export default function ProcessPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      {/* ── Hero ── dark slide-inspired */}
      <section
        style={{ background: `linear-gradient(145deg, ${BLUE_DARK} 0%, #0f2d54 55%, ${BLUE} 100%)` }}
        className="relative overflow-hidden"
      >
        {/* Decorative arc — matches the Customer Journey slide */}
        <div
          className="absolute right-0 top-0 bottom-0 pointer-events-none"
          style={{ width: "40%", opacity: 0.08 }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="400" cy="200" r="300" stroke="white" strokeWidth="80" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-20">

          {/* Badge */}
          <div
            className="inline-block text-xs font-black px-4 py-1.5 rounded uppercase tracking-widest mb-5"
            style={{ backgroundColor: YELLOW, color: BLUE_DARK }}
          >
            45–90 Day Project Lifecycle Overview
          </div>

          <div className="md:flex md:items-end md:justify-between gap-10">
            <div className="mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                Your Solar Journey,<br />
                <span style={{ color: ORANGE }}>Step by Step</span>
              </h1>
              <p className="text-lg max-w-xl leading-relaxed" style={{ color: "#c8d9ef" }}>
                From free consultation to your first lower bill — here&rsquo;s exactly what
                happens, who handles what, and how long each step <em>actually</em> takes.
                Select your financing type to personalize the guide.
              </p>
            </div>

            {/* Stats column — mirrors slide design */}
            <div className="flex-shrink-0 grid grid-cols-2 gap-4 md:w-72">
              {[
                { val: "45–90", sub: "Day typical timeline" },
                { val: "9",     sub: "Steps, clearly explained" },
                { val: "1–2",   sub: "Days to install" },
                { val: "4.9★",  sub: "Google rating" },
              ].map(({ val, sub }) => (
                <div key={sub} className="rounded-xl px-4 py-4 text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <div className="text-2xl font-black" style={{ color: ORANGE }}>{val}</div>
                  <div className="text-xs mt-1 leading-tight" style={{ color: "rgba(255,255,255,0.6)" }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Phase overview strip — echoes the chevron bar below */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { phase: "Consultation",      steps: "Steps 1–2", time: "1–5 days" },
              { phase: "Pre-Installation",  steps: "Steps 3–5", time: "2–7 weeks" },
              { phase: "Installation",      steps: "Steps 6–7", time: "1–4 days" },
              { phase: "Post-Installation", steps: "Steps 8–9", time: "2–5 weeks" },
            ].map(({ phase, steps, time }) => (
              <div key={phase} className="flex items-center gap-2 rounded-lg px-4 py-2"
                style={{ backgroundColor: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <div>
                  <div className="text-white font-bold text-xs">{phase}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{steps} · {time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Timeline ── */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <ProcessTimeline />
        </div>
      </section>

      {/* ── Testimonial strip — process-specific quotes ── */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs font-black uppercase tracking-widest mb-8" style={{ color: "#9ca3af" }}>
            What Homeowners Say After Going Through the Process
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Maria T.", location: "Chula Vista, CA", type: "Lease / PPA",
                quote: "I was nervous the process would be complicated and take forever. It wasn't. SolarTech handled permits, HOA, everything. I showed up twice — once to sign, once for the install walkthrough." },
              { name: "Ryan G.", location: "El Cajon, CA", type: "Solar Loan",
                quote: "The step-by-step timeline they gave me upfront was exactly how it played out. The permit took 3 weeks in San Diego — exactly what they said. No surprises. That's rare in this industry." },
              { name: "Sandra & Mike L.", location: "Escondido, CA", type: "Prepaid Lease",
                quote: "From signing to activation was 7 weeks. Install was done in one day. The crew was gone before 4pm and our backyard looked exactly as they found it. Couldn't ask for more." },
            ].map(({ name, location, type, quote }) => (
              <div key={name} className="rounded-xl p-5 flex flex-col" style={{ border: "1px solid #e5e7eb" }}>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: YELLOW, fontSize: "1rem" }}>★</span>)}
                </div>
                <p className="italic text-sm leading-relaxed flex-1 mb-4" style={{ color: "#374151" }}>
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm" style={{ color: "#111827" }}>{name}</div>
                    <div className="text-xs" style={{ color: "#6b7280" }}>{location}</div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "#edf3fb", color: BLUE }}>
                    {type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ background: `linear-gradient(135deg, ${ORANGE} 0%, #ef8b22 100%)` }} className="py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
            Ready to Start Your 45–90 Day Journey?
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.9)" }}>
            Free estimate in 90 seconds. No credit check. No pressure.
          </p>
          <a href={CALC_URL}
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
            <span>✓ No credit check</span>
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
