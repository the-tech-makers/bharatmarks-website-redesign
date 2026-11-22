import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/bharat-marks";
const SITE_URL = "https://bharatmarks.com";
const LOGO_URL = "https://bharatmarks.com/wp-content/uploads/2024/04/Bharatmarsk_logoforweb_bluewithGANDO.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bharat Marks | Trademark & Intellectual Property Services in India",
    template: "%s | Bharat Marks",
  },
  description:
    "Explore trademark registration, searches, objections, renewals, copyright registration and patent assistance in India with Bharat Marks.",
  alternates: { canonical: "/" },
  icons: { icon: `${BASE_PATH}/favicon.svg`, shortcut: `${BASE_PATH}/favicon.svg` },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Bharat Marks",
    title: "Bharat Marks | Trademark & Intellectual Property Services in India",
    description:
      "Guidance and process support for trademark and intellectual property matters in India.",
    images: [{ url: LOGO_URL, alt: "Bharat Marks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Marks | Trademark & Intellectual Property Services in India",
    description:
      "Guidance and process support for trademark and intellectual property matters in India.",
    images: [LOGO_URL],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bharat Marks",
  url: SITE_URL,
  logo: LOGO_URL,
  description:
    "Trademark and intellectual property service support in India, including trademark registration, searches, objections, renewals, copyright registration and patent assistance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
