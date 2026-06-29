import type { ReactNode } from "react";

const ORANGE = "#f58026";
const BLUE_DARK = "#0c1f37";

export function ResultCard({ color, bg, children }: { color: string; bg: string; children: ReactNode }) {
  return (
    <div className="rounded-lg p-4" style={{ backgroundColor: bg, borderLeft: `3px solid ${color}` }}>
      <div className="text-sm leading-relaxed" style={{ color: "#374151" }}>{children}</div>
    </div>
  );
}

export function ChoiceButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 px-5 py-3 rounded-lg font-bold text-sm text-center transition-colors cursor-pointer"
      style={{
        backgroundColor: active ? ORANGE : "#f4f7fb",
        color: active ? "white" : BLUE_DARK,
        border: `2px solid ${active ? ORANGE : "#e5e7eb"}`,
        minWidth: 0,
      }}
    >
      {children}
    </button>
  );
}
