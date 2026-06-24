"use client";

import { useState } from "react";

const BLUE = "#183e6d";
const BLUE_DARK = "#0c1f37";
const ORANGE = "#f58026";
const PHONE = "(619) 743-9193";
const PHONE_LINK = "tel:+16197439193";

type NavLink = { label: string; href: string };
type NavItem = {
  label: string;
  links: NavLink[];
  cta?: NavLink;
  secondaryCta?: NavLink;
};

const navItems: NavItem[] = [
  {
    label: "Residential",
    links: [
      { label: "Residential Solar", href: "https://solartechonline.com/residential/" },
      { label: "Maxeon Solar Panels", href: "https://solartechonline.com/residential/maxeon-solar-panels/" },
      { label: "REC Solar Panels", href: "https://solartechonline.com/residential/rec-solar-panels/" },
      { label: "QCells", href: "https://solartechonline.com/residential/qcells/" },
      { label: "Roofing", href: "https://solartechonline.com/roofing/" },
      { label: "Financing", href: "https://solartechonline.com/financing/" },
      { label: "Energy Storage", href: "https://solartechonline.com/energy-storage/" },
      { label: "Tesla Powerwall 3", href: "https://solartechonline.com/energy-storage/tesla-powerwall-3/" },
      { label: "Enphase", href: "https://solartechonline.com/energy-storage/enphase/" },
      { label: "NeoVolta", href: "https://solartechonline.com/energy-storage/neovolta/" },
      { label: "Solar Pool Heating", href: "https://solartechonline.com/solar-pool-heating/" },
    ],
    cta: { label: "Get a Quote", href: "https://solartechonline.com/contact-us/" },
  },
  {
    label: "Commercial",
    links: [
      { label: "Commercial Solar", href: "https://solartechonline.com/commercial/" },
      { label: "Commercial & Industrial", href: "https://solartechonline.com/commercial-and-industrial/" },
      { label: "Developers", href: "https://solartechonline.com/developers/" },
      { label: "Multifamily", href: "https://solartechonline.com/multifamily" },
      { label: "Non-Profits & Municipals", href: "https://solartechonline.com/nonprofits-and-municipals/" },
      { label: "Solar Energy", href: "https://solartechonline.com/commercial-solar-energy/" },
      { label: "Energy Storage & Microgrids", href: "https://solartechonline.com/energy-storage-and-microgrids/" },
      { label: "EV Charging", href: "https://solartechonline.com/ev-charging/" },
      { label: "Solar Tenant Billing", href: "https://solartechonline.com/solar-tenant-billing/" },
      { label: "Case Studies", href: "https://solartechonline.com/case-studies/" },
    ],
    cta: { label: "Talk to an Expert", href: "https://solartechonline.com/contact-us/" },
  },
  {
    label: "Service & Maintenance",
    links: [
      { label: "Solar Care Plans", href: "https://solartechonline.com/service-and-maintenance/solar-care-plans/" },
      { label: "Solar Panel Cleaning", href: "https://solartechonline.com/service-and-maintenance/solar-panel-cleaning/" },
      { label: "Removal and Reinstall", href: "https://solartechonline.com/service-and-maintenance/remove-and-reinstall-solar/" },
      { label: "Home EV Charger", href: "https://solartechonline.com/service-and-maintenance/ev-charger-installation/" },
      { label: "System Health Check", href: "https://solartechonline.com/service-and-maintenance/solar-system-health-check-and-troubleshoot/" },
      { label: "Solar Panel Monitoring", href: "https://solartechonline.com/service-and-maintenance/solar-panel-monitoring/" },
      { label: "Critter Guard", href: "https://solartechonline.com/service-and-maintenance/solar-critter-guard/" },
      { label: "Upgrades & Additions", href: "https://solartechonline.com/service-and-maintenance/solar-upgrade/" },
    ],
    cta: { label: "Explore Solar Services", href: "https://solartechonline.com/service-and-maintenance/" },
    secondaryCta: { label: "Visit Solar Support Center", href: "https://solartechonline.com/customer-hub/" },
  },
  {
    label: "Insights",
    links: [
      { label: "How It Works", href: "/solar-installation-process" },
      { label: "Why Solar", href: "https://solartechonline.com/why-solar/" },
      { label: "Testimonials", href: "https://solartechonline.com/testimonials/" },
      { label: "Solar Cost Calculator", href: "https://solartechonline.com/solar-panel-cost-calculator/" },
      { label: "Solar Blog", href: "https://solartechonline.com/blog/" },
    ],
    cta: { label: "Get a Quote", href: "https://solartechonline.com/contact-us/" },
  },
  {
    label: "About",
    links: [
      { label: "About Us", href: "https://solartechonline.com/about-us/" },
      { label: "Leadership", href: "https://solartechonline.com/leadership/" },
      { label: "Partnerships", href: "https://solartechonline.com/certified-solar-installation-partner/" },
      { label: "Read our Reviews", href: "https://client.housecallpro.com/reviews/SolarTech/d55b7ca9-8f0e-40b8-9cf9-fec59ac5db2c/" },
      { label: "Become a Solar Dealer", href: "https://solartechonline.com/solar-dealers-program/" },
      { label: "Service Areas", href: "https://solartechonline.com/service-areas/" },
    ],
  },
];

function SolarTechLogo() {
  return (
    <a href="https://solartechonline.com" className="flex-shrink-0">
      <img
        src="https://solartechonline.com/wp-content/uploads/2024/05/SolarTech-San-Diego-600w-1.png"
        alt="SolarTech — Solar That Works For You"
        width={192}
        height={61}
        style={{ height: "48px", width: "auto", display: "block" }}
        fetchPriority="high"
      />
    </a>
  );
}

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);

  return (
    <div className="sticky top-0 z-50">

      {/* ── Blue announcement / utility bar ── */}
      <div style={{ backgroundColor: BLUE }} className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4">
          <a
            href="https://solartechonline.com/contact-us/"
            className="text-sm font-semibold text-white hover:opacity-80 transition-opacity"
          >
            Save 35% or more on your solar system. <span style={{ color: "#fbbf24" }}>$0 Down &amp; Day-1 Savings →</span>
          </a>
          <a
            href={PHONE_LINK}
            className="text-sm font-bold whitespace-nowrap hover:opacity-80 transition-opacity flex-shrink-0"
            style={{ color: "white" }}
          >
            {PHONE}
          </a>
        </div>
      </div>

      {/* ── White main nav ── */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">

          <SolarTechLogo />

          {/* Desktop nav items */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 mx-4">
            {navItems.map((item, i) => (
              <div key={i} className="group relative">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-default whitespace-nowrap"
                  style={{ color: "#111827" }}
                >
                  {item.label}
                  <svg
                    width="12" height="8" viewBox="0 0 12 8" fill="none"
                    className="opacity-50 transition-transform duration-200 group-hover:rotate-180 flex-shrink-0"
                  >
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Dropdown panel */}
                <div
                  className="absolute top-full left-0 pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 z-50"
                  style={{ minWidth: "230px" }}
                >
                  <div className="bg-white rounded-lg shadow-2xl border border-gray-100 py-2 overflow-hidden">
                    {item.links.map((link, j) => (
                      <a
                        key={j}
                        href={link.href}
                        className="block px-4 py-2 text-sm transition-colors"
                        style={{ color: "#374151" }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = "#eff6ff";
                          (e.currentTarget as HTMLElement).style.color = BLUE;
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = "";
                          (e.currentTarget as HTMLElement).style.color = "#374151";
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                    {(item.cta || item.secondaryCta) && (
                      <div className="mt-2 pt-2 border-t border-gray-100 px-3 pb-1 flex flex-col gap-2">
                        {item.cta && (
                          <a
                            href={item.cta.href}
                            className="block text-sm font-bold text-center py-2 px-3 rounded-full text-white"
                            style={{ backgroundColor: ORANGE }}
                          >
                            {item.cta.label}
                          </a>
                        )}
                        {item.secondaryCta && (
                          <a
                            href={item.secondaryCta.href}
                            className="block text-sm font-medium text-center py-1.5 px-3 rounded-full border"
                            style={{ color: BLUE, borderColor: BLUE }}
                          >
                            {item.secondaryCta.label}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Support */}
            <a
              href="https://solartechonline.com/customer-hub/"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: BLUE }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="8" stroke={BLUE} strokeWidth="1.5"/>
                <path d="M9 13v-1" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6.5 6.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Support
            </a>

            {/* Refer & Earn */}
            <a
              href="https://solartechonline.com/solar-referral-program/"
              className="text-sm font-bold px-5 py-2 rounded-full text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              Refer &amp; Earn
            </a>

            {/* Go Solar */}
            <a
              href="https://solartechonline.com/contact-us"
              className="text-sm font-bold px-5 py-2 rounded-full text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: ORANGE }}
            >
              Go Solar
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors"
            style={{ color: BLUE }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-3">
              {navItems.map((item, i) => (
                <div key={i} className="border-b border-gray-100 last:border-0">
                  <button
                    className="w-full flex justify-between items-center px-2 py-3 text-sm font-medium transition-colors"
                    style={{ color: "#111827" }}
                    onClick={() => setMobileExpanded(mobileExpanded === i ? null : i)}
                  >
                    {item.label}
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className={`transition-transform duration-200 opacity-50 ${mobileExpanded === i ? "rotate-180" : ""}`}
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {mobileExpanded === i && (
                    <div className="pb-3 pl-3 space-y-0.5">
                      {item.links.map((link, j) => (
                        <a
                          key={j}
                          href={link.href}
                          className="block px-3 py-2 text-sm rounded-md transition-colors"
                          style={{ color: "#4b5563" }}
                        >
                          {link.label}
                        </a>
                      ))}
                      {item.cta && (
                        <a
                          href={item.cta.href}
                          className="block mt-2 px-3 py-2 text-sm font-bold text-white text-center rounded-full"
                          style={{ backgroundColor: ORANGE }}
                        >
                          {item.cta.label}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-3 pb-2 mt-1 flex flex-col gap-3">
                <a
                  href="https://solartechonline.com/contact-us"
                  className="block text-center py-3 px-4 text-white font-bold rounded-full"
                  style={{ backgroundColor: ORANGE }}
                >
                  Go Solar
                </a>
                <a
                  href="https://solartechonline.com/solar-referral-program/"
                  className="block text-center py-2.5 px-4 text-white font-bold rounded-full"
                  style={{ backgroundColor: BLUE }}
                >
                  Refer &amp; Earn
                </a>
                <div className="flex justify-center gap-6 mt-1">
                  <a href="https://solartechonline.com/customer-hub/" className="text-sm" style={{ color: BLUE }}>Support</a>
                  <a href={PHONE_LINK} className="text-sm font-semibold" style={{ color: BLUE }}>{PHONE}</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
