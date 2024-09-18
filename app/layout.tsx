import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/util/tanstack";
import Providers from "@/components/providers";

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
                        <Footer />
                    </div>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
