"use client";

import { useState } from "react";
import { ResultCard, ChoiceButton } from "./SolarFaxUI";

const BLUE      = "#183e6d";
const BLUE_DARK = "#0c1f37";
const BLUE_HL   = "#1886d1";
const ORANGE    = "#f58026";

const CONTACT_URL = "https://solartechonline.com/contact-us/";

type PlatformId = "enphase" | "sma" | "tesla" | "qcells" | "solaredge";

type Brand = { id: PlatformId; name: string; portal: string; portalUrl?: string };

const SIMPLE_BRANDS: Brand[] = [
  { id: "enphase", name: "Enphase", portal: "Enlighten Portal", portalUrl: "https://enlighten.enphaseenergy.com/" },
  { id: "sma", name: "SMA", portal: "Sunny Portal", portalUrl: "https://www.sunnyportal.com/" },
  { id: "tesla", name: "Tesla", portal: "Tesla App" },
  { id: "qcells", name: "QCells", portal: "QCells Portal" },
];

const ALL_TABS: { id: PlatformId; name: string }[] = [
  ...SIMPLE_BRANDS.map(({ id, name }) => ({ id, name })),
  { id: "solaredge", name: "SolarEdge" },
];

export default function MonitoringPlatformGuide() {
  const [activeTab, setActiveTab] = useState<PlatformId>("enphase");
  const [knowsLogin, setKnowsLogin] = useState<boolean | null>(null);

  const [seStep, setSeStep] = useState<1 | 2 | 3>(1);
  const [seInstalled, setSeInstalled] = useState<"solartech" | "third-party" | null>(null);
  const [seInBusiness, setSeInBusiness] = useState<boolean | null>(null);

  function selectTab(id: PlatformId) {
    setActiveTab(id);
    setKnowsLogin(null);
    setSeStep(1);
    setSeInstalled(null);
    setSeInBusiness(null);
  }

  function resetWizard() {
    setSeStep(1);
    setSeInstalled(null);
    setSeInBusiness(null);
  }

  const brand = SIMPLE_BRANDS.find((b) => b.id === activeTab);
  const isSolarEdge = activeTab === "solaredge";

  return (
    <div className="rounded-2xl overflow-hidden bg-white" style={{ border: `2px solid ${BLUE}30`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>

      {/* Header */}
      <div className="px-6 py-5" style={{ backgroundColor: BLUE }}>
        <div className="flex items-center gap-3 mb-1.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
            style={{ backgroundColor: "white", color: BLUE }}
          >
            1
          </div>
          <h3 className="text-white font-black text-xl">Solar Monitoring Account</h3>
        </div>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
          Pick your system&rsquo;s brand below. SolarEdge works differently than the rest.
        </p>
      </div>

      <div className="p-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {ALL_TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => selectTab(t.id)}
              className="px-3.5 py-2 rounded-full text-sm font-bold transition-all cursor-pointer"
              style={{
                backgroundColor: activeTab === t.id ? BLUE : "#f4f7fb",
                color: activeTab === t.id ? "white" : BLUE,
                border: `2px solid ${activeTab === t.id ? BLUE : "#e5e7eb"}`,
              }}
            >
              {t.name}
            </button>
          ))}
        </div>

        {/* Simple login flow */}
        {brand && (
          <div>
            <p className="text-sm mb-5" style={{ color: "#374151" }}>
              {brand.name} connects to SolarFax using your normal <strong>{brand.portal}</strong> login.
            </p>

            <p className="font-bold mb-3 text-sm" style={{ color: BLUE_DARK }}>Do you know your login?</p>
            <div className="flex gap-3 mb-5">
              <ChoiceButton active={knowsLogin === true} onClick={() => setKnowsLogin(true)}>Yes, I know it</ChoiceButton>
              <ChoiceButton active={knowsLogin === false} onClick={() => setKnowsLogin(false)}>No / not sure</ChoiceButton>
            </div>

            {knowsLogin === true && (
              <ResultCard color={BLUE_HL} bg="#e8f1fb">
                You&rsquo;re all set, no further action needed. Log in{" "}
                {brand.portalUrl ? (
                  <>
                    at the{" "}
                    <a href={brand.portalUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: BLUE_HL }}>
                      {brand.portal}
                    </a>
                  </>
                ) : (
                  `via the ${brand.portal}`
                )}{" "}
                and connect to SolarFax.
              </ResultCard>
            )}

            {knowsLogin === false && (
              <ResultCard color={ORANGE} bg="#fef2e8">
                <p className="mb-3">
                  You&rsquo;ll need to reset your password or register for an account on the {brand.portal} before the
                  SolarFax connection can be made.
                </p>
                {brand.portalUrl && (
                  <a
                    href={brand.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-bold text-sm px-5 py-2.5 rounded-lg text-white"
                    style={{ backgroundColor: ORANGE }}
                  >
                    Go to {brand.portal} →
                  </a>
                )}
              </ResultCard>
            )}
          </div>
        )}

        {/* SolarEdge wizard flow */}
        {isSolarEdge && (
          <div>
            <p className="text-sm mb-5" style={{ color: "#374151" }}>
              SolarEdge requires a <strong>Site ID</strong> and <strong>API Key</strong> instead of a normal login.
              Answer the questions below.
            </p>

            <div className="flex items-center gap-2 mb-5">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-1.5 flex-1 rounded-full" style={{ backgroundColor: seStep >= n ? ORANGE : "#e5e7eb" }} />
              ))}
            </div>

            {seStep === 1 && (
              <div>
                <p className="font-bold mb-2" style={{ color: BLUE_DARK }}>Is this a SolarTech-installed system?</p>
                <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
                  SolarTech-installed means SolarTech is the listed contractor with access to your SolarEdge account.
                </p>
                <div className="flex flex-col gap-3">
                  <ChoiceButton active={false} onClick={() => { setSeInstalled("solartech"); setSeStep(3); }}>
                    Yes, SolarTech installed it
                  </ChoiceButton>
                  <ChoiceButton active={false} onClick={() => { setSeInstalled("third-party"); setSeStep(2); }}>
                    No, a different company installed it
                  </ChoiceButton>
                </div>
              </div>
            )}

            {seStep === 2 && (
              <div>
                <button onClick={() => setSeStep(1)} className="text-xs font-bold mb-4 cursor-pointer" style={{ color: BLUE_HL }}>
                  ← Back
                </button>
                <p className="font-bold mb-2" style={{ color: BLUE_DARK }}>
                  Is your original installer/contractor still in business?
                </p>
                <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
                  You&rsquo;ll need Admin access on your own SolarEdge account to retrieve your Site ID and API Key.
                </p>
                <div className="flex flex-col gap-3">
                  <ChoiceButton active={false} onClick={() => { setSeInBusiness(true); setSeStep(3); }}>
                    Yes, still in business
                  </ChoiceButton>
                  <ChoiceButton active={false} onClick={() => { setSeInBusiness(false); setSeStep(3); }}>
                    No, out of business
                  </ChoiceButton>
                </div>
              </div>
            )}

            {seStep === 3 && (
              <div>
                <button onClick={resetWizard} className="text-xs font-bold mb-4 cursor-pointer" style={{ color: BLUE_HL }}>
                  ← Start over
                </button>

                {seInstalled === "solartech" && (
                  <ResultCard color={BLUE_HL} bg="#e8f1fb">
                    <p className="mb-3">
                      No homeowner action is required. Our internal team retrieves your Site ID and API Key directly
                      from our SolarEdge portal access and completes the connection on your behalf.
                    </p>
                    <a
                      href={CONTACT_URL}
                      className="inline-block font-bold text-sm px-5 py-2.5 rounded-lg text-white"
                      style={{ backgroundColor: BLUE_HL }}
                    >
                      Contact Support for an Update →
                    </a>
                  </ResultCard>
                )}

                {seInstalled === "third-party" && seInBusiness === true && (
                  <ResultCard color={ORANGE} bg="#fef2e8">
                    <p className="mb-2">Contact your original installer and ask them to either:</p>
                    <ul className="space-y-1 mb-2 list-disc list-inside">
                      <li>Grant you Admin access on your SolarEdge account, or</li>
                      <li>Provide the Site ID and API Key directly</li>
                    </ul>
                    <p>Once you have either, continue to the final step below.</p>
                  </ResultCard>
                )}

                {seInstalled === "third-party" && seInBusiness === false && (
                  <ResultCard color={ORANGE} bg="#fef2e8">
                    <p className="mb-2">Since your original installer is out of business, complete one or both of the following:</p>
                    <ul className="space-y-1 mb-3 list-disc list-inside">
                      <li>
                        Submit the{" "}
                        <a href="https://solared.ge/blank-site-transfer-form" target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: ORANGE }}>
                          SolarEdge Site Transfer Form
                        </a>{" "}
                        to reassign the site to a new contractor (e.g., SolarTech)
                      </li>
                      <li>
                        Submit a case via{" "}
                        <a href="https://www.solaredge.com/us/support/system-owner" target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: ORANGE }}>
                          SolarEdge System Owner Support
                        </a>{" "}
                        requesting Admin access directly on the account
                      </li>
                    </ul>
                    <a href={CONTACT_URL} className="font-bold underline" style={{ color: ORANGE }}>
                      Still need help? Contact SolarTech Support →
                    </a>
                  </ResultCard>
                )}

                {seInstalled === "third-party" && (
                  <div className="mt-5 rounded-lg p-4" style={{ backgroundColor: "#f4f7fb", border: "1px solid #dbeafe" }}>
                    <p className="font-bold text-sm mb-2" style={{ color: BLUE_DARK }}>Once you have Admin access:</p>
                    <p className="text-sm" style={{ color: "#374151" }}>
                      Log into the{" "}
                      <a href="https://monitoring.solaredge.com/" target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: BLUE_HL }}>
                        SolarEdge monitoring portal
                      </a>
                      , retrieve your <strong>Site ID</strong>, and generate or retrieve your <strong>API Key</strong>. Then
                      enter both into SolarFax to complete the connection.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
