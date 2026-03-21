import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CTASection } from "@/components/sections/cta";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      <Navbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <CTASection />
      <Footer />
    </div>
  );
}
