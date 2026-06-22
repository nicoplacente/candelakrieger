import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://estudio-interior.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "KC Interiorismo | Diseño de interiores", template: "%s | KC Interiorismo" },
  description: "Portfolio profesional de diseño de interiores: proyectos residenciales, renders, planos técnicos y espacios creados con intención.",
  keywords: ["diseño de interiores", "interiorismo", "Coronel Suárez", "Buenos Aires", "proyectos residenciales", "renders", "SketchUp", "AutoCAD"],
  authors: [{ name: "Candela Krieger" }],
  creator: "KC Interiorismo",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "KC Interiorismo",
    title: "KC Interiorismo | Diseño de interiores",
    description: "Espacios funcionales, estéticos y personalizados, creados con intención y alma.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "KC Interiorismo" }],
  },
  twitter: { card: "summary_large_image", title: "KC Interiorismo", description: "Diseño de interiores con intención y alma.", images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return <html lang="es"><body>{children}</body></html>;
}
