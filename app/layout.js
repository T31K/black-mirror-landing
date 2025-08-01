import localFont from "next/font/local";
import "./globals.css";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
