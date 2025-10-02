import localFont from "next/font/local";
import "./globals.css";
import { Bodoni_Moda, Raleway, MonteCarlo } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["serif"],
  adjustFontFallback: false,
});

const tangerine = MonteCarlo({
  subsets: ["latin"],
  variable: "--font-leckerli-one",
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Black Mirror Singapore",
  description:
    "An exclusive and prestigious club in Singapore. Sophisticated experiences await.",
  alternates: {
    canonical: "/",
  },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Black Mirror Singapore",
    description:
      "An exclusive and prestigious club in Singapore. Sophisticated experiences await.",
    images: [
      {
        url: "https://blackmirror.sg/og_test.png",
        alt: "Black Mirror Club Singapore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Mirror Singapore",
    description:
      "An exclusive and prestigious club in Singapore. Sophisticated experiences await.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${bodoniModa.variable} ${tangerine.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
