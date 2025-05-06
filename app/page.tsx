import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  LineChart,
  BookOpen,
  Share2,
  Lightbulb,
  Smartphone,
  Users,
  Clock,
  Brain
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Reversing Screen Addiction in Indian Teenagers
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A data-driven approach to understanding and addressing the growing crisis of digital dependence among India's youth.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <Button asChild size="lg" className="gap-1">
                  <Link href="/dashboard">
                    Explore Data <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/research">View Research</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] bg-muted rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="grid grid-cols-2 gap-4 p-6">
                    <div className="relative bg-card p-4 rounded-lg shadow-sm border">
                      <h3 className="font-medium flex items-center gap-2">
                        <Smartphone className="h-4 w-4" /> Daily Screen Time
                      </h3>
                      <p className="text-3xl font-bold mt-2">7.2 hrs</p>
                      <p className="text-xs text-muted-foreground mt-1">Indian teenagers (avg.)</p>
                    </div>
                    <div className="relative bg-card p-4 rounded-lg shadow-sm border">
                      <h3 className="font-medium flex items-center gap-2">
                        <Users className="h-4 w-4" /> Addiction Rate
                      </h3>
                      <p className="text-3xl font-bold mt-2">43%</p>
                      <p className="text-xs text-muted-foreground mt-1">Of urban youth</p>
                    </div>
                    <div className="relative bg-card p-4 rounded-lg shadow-sm border">
                      <h3 className="font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4" /> Social Media
                      </h3>
                      <p className="text-3xl font-bold mt-2">3.5 hrs</p>
                      <p className="text-xs text-muted-foreground mt-1">Daily average</p>
                    </div>
                    <div className="relative bg-card p-4 rounded-lg shadow-sm border">
                      <h3 className="font-medium flex items-center gap-2">
                        <Brain className="h-4 w-4" /> Mental Health
                      </h3>
                      <p className="text-3xl font-bold mt-2">67%</p>
                      <p className="text-xs text-muted-foreground mt-1">Report anxiety</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Our Approach</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              We combine real-time data, systems thinking, and evidence-based interventions to address screen addiction among Indian teenagers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            <div className="flex flex-col items-start p-6 bg-card rounded-lg border transition-all hover:shadow-md">
              <div className="p-2 bg-primary/10 rounded-full mb-4">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data Dashboard</h3>
              <p className="text-muted-foreground mb-4">Real-time metrics and trends on screen usage patterns among Indian teenagers.</p>
              <Button asChild variant="link" className="mt-auto p-0">
                <Link href="/dashboard" className="inline-flex items-center">
                  View Dashboard <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-start p-6 bg-card rounded-lg border transition-all hover:shadow-md">
              <div className="p-2 bg-primary/10 rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Research Repository</h3>
              <p className="text-muted-foreground mb-4">Curated studies and articles on screen addiction causes and impacts.</p>
              <Button asChild variant="link" className="mt-auto p-0">
                <Link href="/research" className="inline-flex items-center">
                  Browse Research <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-start p-6 bg-card rounded-lg border transition-all hover:shadow-md">
              <div className="p-2 bg-primary/10 rounded-full mb-4">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">CLD Analysis</h3>
              <p className="text-muted-foreground mb-4">Interactive causal loop diagrams to visualize addiction factors and relationships.</p>
              <Button asChild variant="link" className="mt-auto p-0">
                <Link href="/cld" className="inline-flex items-center">
                  Explore CLD <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-start p-6 bg-card rounded-lg border transition-all hover:shadow-md">
              <div className="p-2 bg-primary/10 rounded-full mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Intervention Strategies</h3>
              <p className="text-muted-foreground mb-4">Evidence-based approaches to reduce screen addiction and promote digital wellbeing.</p>
              <Button asChild variant="link" className="mt-auto p-0">
                <Link href="/interventions" className="inline-flex items-center">
                  View Strategies <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">The Scale of the Problem</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              Screen addiction among Indian teenagers has reached concerning levels, with significant impacts on health, education, and social development.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-card p-4 md:p-6 rounded-lg border text-center">
              <p className="text-3xl md:text-4xl font-bold">89%</p>
              <p className="text-sm text-muted-foreground mt-2">Own a smartphone</p>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-lg border text-center">
              <p className="text-3xl md:text-4xl font-bold">4.8hrs</p>
              <p className="text-sm text-muted-foreground mt-2">Daily gaming average</p>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-lg border text-center">
              <p className="text-3xl md:text-4xl font-bold">73%</p>
              <p className="text-sm text-muted-foreground mt-2">Sleep disruption</p>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-lg border text-center">
              <p className="text-3xl md:text-4xl font-bold">58%</p>
              <p className="text-sm text-muted-foreground mt-2">Decline in grades</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Join Our Initiative</h2>
          <p className="md:text-lg mb-8 max-w-2xl mx-auto">
            Help us create a healthier digital future for Indian teenagers. Access our resources, contribute to research, or implement intervention strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/dashboard">Explore Data</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}