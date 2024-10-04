import "./globals.css";
import { getLocale, getMessages, getTimeZone } from "next-intl/server";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/analytics";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Bitcoin Layers",
    description: "Documenting Bitcoin Layers",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
    const locale = await getLocale();
    const messages = await getMessages();
    const timeZone = await getTimeZone();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`antialiased ${inter.className}`}>
                <Providers
                    messages={messages}
                    locale={locale}
                    timeZone={timeZone}
                >
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
