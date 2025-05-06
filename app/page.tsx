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
      <section className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6 max-w-5xl mx-auto">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
      {/* Left column - Text */}
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
            Reversing Screen Addiction in Indian Teenagers
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            A data-driven approach to understanding and addressing the growing crisis of digital dependence among India's youth.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link
            href="/dashboard"
            className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:focus-visible:ring-white"
          >
            Explore Data
          </Link>
          <Link
            href="/research"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          >
            View Research
          </Link>
        </div>
      </div>

      {/* Right column - Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            📱 Daily Screen Time
          </div>
          <div className="text-2xl font-bold">7.2 hrs</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Indian teenagers (avg.)</div>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            🧠 Addiction Rate
          </div>
          <div className="text-2xl font-bold">43%</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Of urban youth</div>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            ⏰ Social Media
          </div>
          <div className="text-2xl font-bold">3.5 hrs</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Daily average</div>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            🧬 Mental Health
          </div>
          <div className="text-2xl font-bold">67%</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Report anxiety</div>
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