import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { DataProvider } from "@/contexts/DataContext";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Retropricer",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <DataProvider>
          <main className="min-h-screen flex flex-col items-center">
            {children}
          </main>
        </DataProvider>
      </body>
    </html>
  );
}
