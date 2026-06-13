import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/ui/themes";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Path } from "@/components/Path";
import Navbar from "@/components/Navbar";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loony Wolfie",
  description: "Track and Crack Projects in a Single Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased scroll-smooth", raleway.variable)}
    >
      <body className="min-h-full w-full flex flex-col">
        <ClerkProvider
          appearance={{
            theme: shadcn,
            variables: {
              colorPrimary: "#92400e",
              colorPrimaryForeground: "#f5f0e6",
              colorForeground: "#451a03",
              colorMutedForeground: "#78350f",
              colorBackground: "#f5f0e6",
              colorInput: "#f0ece2",
              colorInputForeground: "#451a03",
              colorBorder: "#c4beb0",
              colorShadow: "#b8b2a4",
              colorDanger: "#d9534f",
              colorSuccess: "#5cb85c",
              colorWarning: "#f0ad4e",
              colorNeutral: "#451a03",
              fontFamily: "var(--font-raleway), ui-serif, Georgia, serif",
              borderRadius: "0.625rem",
            },
            elements: {
              card: {
                boxShadow: "3px 3px 8px #b8b2a4, -3px -3px 8px #ffffff",
                border: "1px solid #c4beb0",
              },
              headerTitle: {
                color: "#451a03",
              },
              headerSubtitle: {
                color: "#78350f",
              },
              socialButtonsIconButton: {
                border: "1px solid #c4beb0",
                background: "linear-gradient(145deg, #f5f0e6, #ddd8cc)",
                boxShadow: "2px 2px 4px #b8b2a4, -2px -2px 4px #ffffff, inset 0 1px 0 rgba(255,255,255,0.6)",
              },

              formFieldInput: {
                background: "#f0ece2",
                border: "1px solid #c4beb0",
                boxShadow: "inset 2px 2px 4px #b8b2a4, inset -1px -1px 3px #ffffff",
              },
              formFieldLabel: {
                color: "#451a03",
                fontWeight: "600",
              },
              footerActionText: {
                color: "#78350f",
              },
              footerActionLink: {
                color: "#92400e",
              },
              dividerLine: {
                background: "#c4beb0",
              },
              dividerText: {
                color: "#78350f",
              },
            },
          }}
        >
          <Path component={<Navbar />} />
          {children}
          <Path component={<Footer />} />
        </ClerkProvider>
      </body>
    </html>
  );
}