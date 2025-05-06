import DashboardStats from "@/components/dashboard/dashboard-stats";
import UsageTrendsChart from "@/components/dashboard/usage-trends-chart";
import ScreenTimeDistribution from "@/components/dashboard/screen-time-distribution";
import PlatformBreakdown from "@/components/dashboard/platform-breakdown";
import AgeGroupComparison from "@/components/dashboard/age-group-comparison";
import RegionalComparison from "@/components/dashboard/regional-comparison";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="bg-muted/50 border-b">
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
            <TabsTrigger value="social-media">Social Media</TabsTrigger>
            <TabsTrigger value="gaming">Gaming</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="health">Health Impact</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <DashboardStats />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-4">Screen Time Trends (2020-2023)</h3>
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
    </div>
  );
}