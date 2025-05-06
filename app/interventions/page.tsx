import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InterventionStrategies from "@/components/interventions/intervention-strategies";
import CaseStudies from "@/components/interventions/case-studies";
import EffectivenessMetrics from "@/components/interventions/effectiveness-metrics";

export default function InterventionsPage() {
  return (
    <div className="flex flex-col justify-center items-center align-center">
      <div className="bg-muted/50 border-b">
        <div className="container py-10">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Intervention Strategies</h1>
          <p className="text-muted-foreground">
            Evidence-based approaches to reduce screen addiction and promote digital wellbeing.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <Tabs defaultValue="strategies" className="space-y-6">
          <TabsList>
            <TabsTrigger value="strategies">Intervention Strategies</TabsTrigger>
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            <TabsTrigger value="metrics">Effectiveness Metrics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="strategies" className="space-y-6">
            <InterventionStrategies />
          </TabsContent>
          
          <TabsContent value="case-studies" className="space-y-6">
            <CaseStudies />
          </TabsContent>
          
          <TabsContent value="metrics" className="space-y-6">
            <EffectivenessMetrics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}