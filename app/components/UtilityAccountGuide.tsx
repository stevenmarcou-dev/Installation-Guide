"use client";

import { useState } from "react";
import { ResultCard, ChoiceButton } from "./SolarFaxUI";

const BLUE_DARK = "#0c1f37";
const BLUE_HL   = "#1886d1";
const ORANGE    = "#f58026";

export default function UtilityAccountGuide() {
  const [knowsLogin, setKnowsLogin] = useState<boolean | null>(null);

  return (
    <div className="rounded-2xl overflow-hidden bg-white" style={{ border: `2px solid ${BLUE_HL}30`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
      <div className="px-6 py-5" style={{ backgroundColor: BLUE_HL }}>
        <div className="flex items-center gap-3 mb-1.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
            style={{ backgroundColor: "white", color: BLUE_HL }}
          >
            2
          </div>
          <h3 className="text-white font-black text-xl">Utility Account</h3>
        </div>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
          A separate login from your monitoring account, required either way.
        </p>
      </div>
      <div className="p-6">
        <p className="mb-5" style={{ color: "#374151" }}>
          SolarFax also needs access to your utility account, separately from your solar monitoring account, to
          track your energy usage alongside your solar production. This is the same login you use to pay your bill
          or check usage online.
        </p>

        <p className="font-bold mb-3 text-sm" style={{ color: BLUE_DARK }}>Do you know your utility account login?</p>
        <div className="flex gap-3 mb-5">
          <ChoiceButton active={knowsLogin === true} onClick={() => setKnowsLogin(true)}>Yes, I know it</ChoiceButton>
          <ChoiceButton active={knowsLogin === false} onClick={() => setKnowsLogin(false)}>No / not sure</ChoiceButton>
        </div>

        {knowsLogin === true && (
          <ResultCard color={BLUE_HL} bg="#e8f1fb">
            You&rsquo;re all set, no further action needed. Log in to your utility company&rsquo;s website and connect
            to SolarFax.
          </ResultCard>
        )}

        {knowsLogin === false && (
          <ResultCard color={ORANGE} bg="#fef2e8">
            You&rsquo;ll need to reset your password or register for an account on your utility&rsquo;s website before
            the SolarFax connection can be made.
          </ResultCard>
        )}
      </div>
    </div>
  );
}
