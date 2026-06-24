"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function AnimatedCardGrid({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];

    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(28px)";
      card.style.transition = "opacity 0.55s ease, transform 0.55s ease";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, i * 180);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
