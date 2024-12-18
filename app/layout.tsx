import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import PlausibleProvider from "next-plausible";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Bitcoin Layers",
    description: "Documenting Bitcoin Layers",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <PlausibleProvider
                    domain="bitcoinlayers.org"
                    trackOutboundLinks
                />
            </head>
            <body className={`antialiased bg-background ${inter.className}`}>
                <Providers>
                    <div className="mx-auto min-h-screen">
                        <Navbar />
                        <main className="mx-auto max-w-5xl px-4">
                            <NuqsAdapter>{children}</NuqsAdapter>
                        </main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
