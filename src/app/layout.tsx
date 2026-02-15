import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramisa | Civil Engineering Portfolio",
  description: "Portfolio of a Civil Engineering student - Designing the structures of tomorrow. Specializing in AutoCAD, Revit, MATLAB and Structural Design.",
  keywords: ["Civil Engineering", "Portfolio", "AutoCAD", "Revit", "Structural Design", "MATLAB"],
  authors: [{ name: "Ramisa" }],
  openGraph: {
    title: "Ramisa | Civil Engineering Portfolio",
    description: "Portfolio of a Civil Engineering student - Designing the structures of tomorrow.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramisa | Civil Engineering Portfolio",
    description: "Portfolio of a Civil Engineering student - Designing the structures of tomorrow.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
