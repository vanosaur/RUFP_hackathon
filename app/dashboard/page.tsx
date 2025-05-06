import DashboardStats from "@/components/dashboard/dashboard-stats";
import UsageTrendsChart from "@/components/dashboard/usage-trends-chart";
import ScreenTimeDistribution from "@/components/dashboard/screen-time-distribution";
import PlatformBreakdown from "@/components/dashboard/platform-breakdown";
import AgeGroupComparison from "@/components/dashboard/age-group-comparison";
import RegionalComparison from "@/components/dashboard/regional-comparison";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react"; 
import Link from "next/link";

export default function Dashboard() {
  const resources = [
    {
      title: "Average Screen Time Statistics",
      url: "https://www.demandsage.com/screen-time-statistics/",
    },
    {
      title: "Kids' Screen Time Trends (Parents.com)",
      url: "https://www.parents.com/what-are-kids-watching-on-tablets-11689876/",
    },
    {
      title: "Qustodio 2024 Kids' App Usage Report",
      url: "https://www.qustodio.com/en/research/qustodio-releases-2024-annual-report/",
    },
    {
      title: "Average Screen Time Stats by Age (Zippia)",
      url: "https://www.zippia.com/advice/average-screen-time-statistics/",
    },
    {
      title: "Global Screen Time by Country (Priori Data)",
      url: "https://prioridata.com/data/screen-time-statistics/",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center align-center" >
      <div className="border-b">
        <div className="container py-10">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Data Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time metrics and trends on screen usage patterns among Indian teenagers.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <DashboardStats />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-4">Screen Time Trends (2018-2023)</h3>
                <UsageTrendsChart />
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-4">Daily Screen Time Distribution</h3>
                <ScreenTimeDistribution />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-4">Platform Usage Breakdown</h3>
                <PlatformBreakdown />
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-4">Age Group Comparison</h3>
                <AgeGroupComparison />
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-4">Regional Comparison</h3>
                <RegionalComparison />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="social-media">
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-6">Social Media Usage Data</h2>
              <p className="text-muted-foreground">Detailed metrics on social media usage will be displayed here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="gaming">
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-6">Gaming Habits Data</h2>
              <p className="text-muted-foreground">Detailed metrics on gaming habits will be displayed here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-6">Educational Impact Data</h2>
              <p className="text-muted-foreground">Detailed metrics on educational impacts will be displayed here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="health">
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-6">Health Impact Data</h2>
              <p className="text-muted-foreground">Detailed metrics on health impacts will be displayed here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-md max-w-3xl mx-auto space-y-4c mb-8">
      <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
        📚 External Resources with links
      </h2>
      <ul className="list-disc list-inside space-y-2">
        {resources.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li>Chatgpt Data</li>
      </ul>
    </div>
    </div>
  );
}