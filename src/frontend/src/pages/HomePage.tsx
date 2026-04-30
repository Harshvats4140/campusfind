import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Building2,
  GitCompareArrows,
  MapPin,
  Search,
} from "lucide-react";

const STATS = [
  { label: "Top Colleges", value: "500+", icon: Building2 },
  { label: "States Covered", value: "28", icon: MapPin },
  { label: "Courses Available", value: "200+", icon: BookOpen },
];

const QUICK_LINKS = [
  { label: "Engineering", href: "/colleges" },
  { label: "Medical (MBBS)", href: "/colleges" },
  { label: "MBA / Management", href: "/colleges" },
  { label: "IITs", href: "/colleges" },
  { label: "NITs", href: "/colleges" },
  { label: "AIIMS", href: "/colleges" },
];

const FEATURES = [
  {
    icon: Search,
    title: "Discover Colleges",
    desc: "Search 500+ colleges with detailed profiles, fee structures, and placement data.",
    cta: "Browse Colleges",
    href: "/colleges",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: GitCompareArrows,
    title: "Compare Side-by-Side",
    desc: "Compare up to 3 colleges across fees, placements, ratings, and more.",
    cta: "Start Comparing",
    href: "/compare",
    color: "text-chart-2",
    bg: "bg-chart-2/10",
  },
  {
    icon: Brain,
    title: "Predict Your College",
    desc: "Enter your JEE/NEET rank and discover colleges where you stand a chance.",
    cta: "Try Predictor",
    href: "/predictor",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col" data-ocid="home.page">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-card border-b border-border"
        data-ocid="home.hero_section"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-campus.dim_1200x600.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-card/60" />

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <Badge
              variant="secondary"
              className="mb-4 text-xs font-medium bg-primary/10 text-primary border-0"
            >
              India's Trusted College Discovery Platform
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Find Your <span className="text-primary">Dream College</span> in
              India
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Search, compare, and get admitted to the best engineering,
              medical, and management colleges with real data on fees,
              placements, and cutoff ranks.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/colleges" data-ocid="home.browse_colleges_button">
                <Button
                  size="lg"
                  className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  <Search className="h-4 w-4" />
                  Browse Colleges
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/predictor" data-ocid="home.predictor_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-border hover:bg-muted font-semibold"
                >
                  <Brain className="h-4 w-4 text-accent" />
                  College Predictor
                </Button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground self-center">
                Popular:
              </span>
              {QUICK_LINKS.map(({ label, href }) => (
                <Link key={label} to={href}>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer bg-muted hover:bg-muted/70 text-muted-foreground hover:text-foreground transition-smooth text-xs"
                    data-ocid="home.quick_link"
                  >
                    {label}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        className="bg-primary border-b border-primary/20"
        data-ocid="home.stats_section"
      >
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-3 gap-4">
            {STATS.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0 hidden sm:flex">
                  <Icon className="h-4.5 w-4.5 text-primary-foreground/80" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-display font-bold text-primary-foreground leading-none">
                    {value}
                  </div>
                  <div className="text-xs text-primary-foreground/70 mt-0.5">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="bg-background py-14 md:py-20"
        data-ocid="home.features_section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Everything You Need to Choose Right
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Make informed decisions with our comprehensive tools built for
              Indian students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map(
              ({ icon: Icon, title, desc, cta, href, color, bg }) => (
                <div
                  key={title}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-elevated transition-smooth group"
                  data-ocid="home.feature_card"
                >
                  <div
                    className={`h-11 w-11 rounded-xl ${bg} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`h-5.5 w-5.5 ${color}`} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {desc}
                  </p>
                  <Link to={href} data-ocid="home.feature_cta">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`gap-1.5 p-0 h-auto font-medium text-sm ${color} hover:opacity-80`}
                    >
                      {cta}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="bg-muted/40 border-t border-border py-14"
        data-ocid="home.cta_section"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Find Your College?
          </h2>
          <p className="text-muted-foreground mb-7 max-w-md mx-auto">
            Join thousands of students making smarter college decisions with
            CampusFind.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/colleges" data-ocid="home.final_browse_button">
              <Button
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Search className="h-4 w-4" />
                Browse All Colleges
              </Button>
            </Link>
            <Link to="/predictor" data-ocid="home.final_predictor_button">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-border"
              >
                <Brain className="h-4 w-4 text-accent" />
                Try Predictor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
