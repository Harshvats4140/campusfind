import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import {
  Brain,
  GitCompareArrows,
  GraduationCap,
  List,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { ComparisonBar } from "./components/ComparisonBar";

interface NavLink {
  label: string;
  to: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_LINKS: NavLink[] = [
  { label: "Browse Colleges", to: "/colleges", icon: List },
  { label: "Compare", to: "/compare", icon: GitCompareArrows },
  { label: "Predictor", to: "/predictor", icon: Brain },
];

function NavItem({
  link,
  mobile = false,
  onClick,
}: { link: NavLink; mobile?: boolean; onClick?: () => void }) {
  const location = useLocation();
  const isActive = location.pathname === link.to;

  return (
    <Link
      to={link.to}
      onClick={onClick}
      data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
      className={cn(
        "flex items-center gap-2 font-medium text-sm transition-smooth",
        mobile ? "text-base py-3 px-4 rounded-lg" : "px-1 py-0.5",
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground",
        mobile && isActive && "bg-primary/10",
        mobile && !isActive && "hover:bg-muted",
      )}
    >
      <link.icon className={cn("shrink-0", mobile ? "h-5 w-5" : "h-4 w-4")} />
      {link.label}
    </Link>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-xs">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0"
            data-ocid="nav.logo_link"
          >
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="h-4.5 w-4.5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              Campus<span className="text-primary">Find</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.to} link={link} />
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden h-9 w-9 p-0"
                aria-label="Open menu"
                data-ocid="nav.mobile_menu_button"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-display font-bold text-base">
                      Campus<span className="text-primary">Find</span>
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    data-ocid="nav.mobile_close_button"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-1 p-3">
                  {NAV_LINKS.map((link) => (
                    <NavItem
                      key={link.to}
                      link={link}
                      mobile
                      onClick={() => setMobileOpen(false)}
                    />
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer
        className="bg-card border-t border-border mt-auto"
        data-ocid="footer"
      >
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-3.5 w-3.5 text-primary" />
            </div>
            <span>
              © {new Date().getFullYear()} CampusFind. Built by Harshvardhan
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                className="text-primary hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Discover 500+ colleges across India</span>
          </div>
        </div>
      </footer>

      {/* Comparison floating bar */}
      <ComparisonBar />
    </div>
  );
}
