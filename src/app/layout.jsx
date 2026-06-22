import "./globals.css";

const siteUrl = "https://candelakrieger.codeluxe.tech";

const title = "Candela Krieger | Diseño de interiores";
const description =
  "Portfolio de Candela Krieger, diseñadora de interiores en Coronel Suárez, Buenos Aires. Proyectos residenciales, renders, planos técnicos y propuestas personalizadas.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Candela Krieger",
  },
  description,
  keywords: [
    "diseño de interiores",
    "interiorismo",
    "Coronel Suárez",
    "Buenos Aires",
    "proyectos residenciales",
    "renders",
    "SketchUp",
    "AutoCAD",
  ],
  authors: [{ name: "Candela Krieger" }],
  creator: "Candela Krieger",
  publisher: "KC Interiorismo",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Candela Krieger",
    title,
    description,
    images: [
      {
        url: "/images/residencia-almagro.png",
        width: 1376,
        height: 768,
        alt: "Proyecto de diseño de interiores de Candela Krieger",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/residencia-almagro.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
