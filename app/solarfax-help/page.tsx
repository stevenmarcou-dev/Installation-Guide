import type { Metadata } from "next";
import NavBar from "../components/NavBar";
import MonitoringPlatformGuide from "../components/MonitoringPlatformGuide";
import UtilityAccountGuide from "../components/UtilityAccountGuide";

const CONTACT_URL = "https://solartechonline.com/contact-us/";
const FAQ_URL     = "https://solardatapros.crunch.help/en";
const PHONE       = "(619) 485-5521";
const PHONE_LINK  = "tel:+16194855521";
const BLUE        = "#183e6d";
const BLUE_DARK   = "#0c1f37";
const BLUE_HL     = "#1886d1";
const ORANGE      = "#f58026";
const YELLOW      = "#eda726";

export const metadata: Metadata = {
  title: "Connect Your Account to SolarFax — Help Guide | SolarTech",
  description:
    "Having trouble connecting your solar monitoring or utility account to SolarFax? Find your platform below for step-by-step help, including the special process for SolarEdge.",
  robots: { index: false, follow: true },
};

export default function SolarFaxHelpPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      {/* ── Hero ── */}
      <section
        style={{ background: `linear-gradient(145deg, ${BLUE_DARK} 0%, #0f2d54 55%, ${BLUE} 100%)` }}
        className="relative overflow-hidden"
      >
        <div
          className="absolute right-0 top-0 bottom-0 pointer-events-none"
          style={{ width: "40%", opacity: 0.07 }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="400" cy="200" r="300" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-14 md:py-16 text-center">
          <div
            className="inline-block text-xs font-black px-4 py-1.5 rounded uppercase tracking-widest mb-5"
            style={{ backgroundColor: YELLOW, color: BLUE_DARK }}
          >
            Account Connection Help
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Trouble Connecting to <span style={{ color: ORANGE }}>SolarFax?</span>
          </h1>
        </div>
      </section>

      {/* ── Two-connections intro ── */}
      <section className="pt-10 pb-2" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg md:text-xl" style={{ color: "#4b5563" }}>
            SolarFax needs access to <strong>two separate accounts</strong> before it can start tracking your
            savings: your solar monitoring account and your utility account. <strong>Complete both steps below.</strong>
          </p>
        </div>
      </section>

      {/* ── Step 1 & 2: Monitoring + Utility, side by side ── */}
      <section className="py-10 pb-14" style={{ backgroundColor: "#f4f7fb" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <MonitoringPlatformGuide />
            <UtilityAccountGuide />
          </div>
        </div>
      </section>

      {/* ── Resources / still stuck ── */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6" style={{ border: "1px solid #e5e7eb" }}>
              <h3 className="font-black text-lg mb-2" style={{ color: BLUE_DARK }}>SolarFax FAQs</h3>
              <p className="text-sm mb-4" style={{ color: "#4b5563" }}>
                Browse SolarFax&rsquo;s own help center for general questions about the platform.
              </p>
              <a
                href={FAQ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm underline"
                style={{ color: BLUE_HL }}
              >
                Visit SolarFax FAQs →
              </a>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: BLUE_DARK }}>
              <h3 className="font-black text-lg mb-2 text-white">Still Stuck?</h3>
              <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
                If you&rsquo;ve tried the steps above and the connection still isn&rsquo;t working, our support team can
                finish it with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CONTACT_URL}
                  className="inline-block text-center font-bold text-sm px-5 py-2.5 rounded-lg text-white"
                  style={{ backgroundColor: ORANGE }}
                >
                  Contact Support
                </a>
                <a
                  href={PHONE_LINK}
                  className="inline-block text-center font-bold text-sm px-5 py-2.5 rounded-lg border-2 border-white text-white"
                >
                  Call {PHONE}
                </a>
              </div>
            </div>
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
            <a href={CONTACT_URL} className="hover:text-white transition-colors">Contact Support</a>
            <a href="/" className="hover:text-white transition-colors">← Landing Page</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
