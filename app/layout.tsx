import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const HERO_IMAGE = "https://solartechonline.com/wp-content/uploads/2026/05/DJI_0005-scaled.jpg";
const CANONICAL = "https://solartech-landing-two.vercel.app/";

export const metadata: Metadata = {
  title: "Solar That Works For You™ — $0 Down, Lower Bills | SolarTech",
  description:
    "California and Arizona homeowners are going solar with $0 down and payments below their current utility bill, starting the first month. Creative financing means the federal tax credit is no longer a barrier.",
  alternates: {
    canonical: CANONICAL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Solar That Works For You™ — $0 Down, Lower Bills | SolarTech",
    description:
      "Trusted since 2001. 15,000+ installations. Solar financing options with $0 down and day-one savings. No federal tax credit required.",
    siteName: "SolarTech",
    type: "website",
    url: CANONICAL,
    images: [
      {
        url: HERO_IMAGE,
        width: 1920,
        height: 1080,
        alt: "SolarTech solar panel installation — California and Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar That Works For You™ — $0 Down, Lower Bills | SolarTech",
    description:
      "Go solar with $0 down. Payments structured below your current utility bill from month one. Serving California and Arizona since 2001.",
    images: [HERO_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <head>
        <link rel="preconnect" href="https://solartechonline.com" />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
