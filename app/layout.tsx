import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: 'Vipin Kiroula',
  authors: {
    name: "chensokheng",
  },

  description:
    "Based in New Delhi,India. I'm a Fullstack developer passionate about building a modern web application that users love.",
  openGraph: {
    title: "Vipin Kiroula",
    description:
      "Based in New Delhi,India. I'm a Fullstack developer passionate about building a modern web application that users love.",
    url: "http://localhost:3000",
    siteName: "Vipin Kiroula",
    images: "/og.png",
    type: "website",
  },
  keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
