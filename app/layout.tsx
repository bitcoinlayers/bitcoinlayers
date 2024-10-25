import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/analytics";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";

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
            <body className={`antialiased ${inter.className}`}>
                <Providers>
                    <div className="mx-auto min-h-screen bg-bg_primary">
                        <Navbar />
                        <main>{children}</main>
                        <Toaster />
                        <Footer />
                    </div>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
