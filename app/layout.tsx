import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ApolloProvider } from "@/lib/apollo-provider";
import { AuthProvider } from "@/lib/auth-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Face Me - AI-Powered Virtual Try-On Platform",
  description:
    "See how you'd actually look wearing eyeglasses, lipstick, hats, or earrings before you buy. Create stunning AI-generated looks, share them with the community, and monetize your style with Face Me.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuthProvider>
          <ApolloProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </ApolloProvider>
        </AuthProvider>
      </body>
    </html>
  );
}