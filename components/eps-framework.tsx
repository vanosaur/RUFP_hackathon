import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function EPSFramework() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>EPS Framework Analysis</CardTitle>
        <CardDescription>
          Environmental Policy Solutions applied to screen addiction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="environmental" className="space-y-4">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="environmental">Environment</TabsTrigger>
            <TabsTrigger value="policy">Policy</TabsTrigger>
            <TabsTrigger value="solutions">Solutions</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
          </TabsList>
          
          <TabsContent value="environmental" className="space-y-4">
            <h3 className="font-medium text-lg">Environmental Analysis</h3>
            <p className="text-muted-foreground">
              The digital environment surrounding Indian teenagers is characterized by:
            </p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Technological saturation:</span> 92% of urban and 76% of 
                  rural Indian teenagers have smartphone access, with affordable data (₹6.7/GB average)
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Attention economy:</span> Platforms are designed to maximize 
                  engagement through psychological triggers (variable rewards, social validation)
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Social ecosystem:</span> Peer connections increasingly mediated 
                  through digital platforms, creating social pressure for continuous engagement
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Limited offline alternatives:</span> Urban density, academic pressure, 
                  and safety concerns limit attractive offline engagement options
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Regulatory vacuum:</span> Limited legislation on digital wellbeing, 
                  data protection, and age-appropriate design standards
                </span>
              </li>
            </ul>
          </TabsContent>
          
          <TabsContent value="policy" className="space-y-4">
            <h3 className="font-medium text-lg">Policy Considerations</h3>
            <p className="text-muted-foreground">
              Effective policy approaches must balance multiple priorities:
            </p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Digital inclusion vs. wellbeing:</span> Policies must promote digital 
                  access while preventing harmful usage patterns
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Industry innovation vs. regulation:</span> Balancing technology sector 
                  growth with consumer protection
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Parental oversight vs. teen autonomy:</span> Ensuring appropriate 
                  guidance without infringing on developmental needs for independence
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Educational integration:</span> Leveraging digital tools for learning 
                  while preventing distraction and addiction
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Cultural considerations:</span> Developing contextually appropriate 
                  solutions that respect Indian family dynamics and social norms
                </span>
              </li>
            </ul>
          </TabsContent>
          
          <TabsContent value="solutions" className="space-y-4">
            <h3 className="font-medium text-lg">Solution Framework</h3>
            <p className="text-muted-foreground">
              Multi-level approaches required for effective intervention:
            </p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Individual level:</span> Digital literacy, self-regulation skills, 
                  mindfulness practices, alternative activities
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Family level:</span> Parental education, family media plans, 
                  communication strategies, tech-free zones and times
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">School level:</span> Curriculum integration, usage policies, 
                  peer support programs, tech-balanced environments
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Industry level:</span> Ethical design standards, wellbeing 
                  features, meaningful metrics, age-appropriate experiences
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Regulatory level:</span> Age verification, data protection, 
                  transparent algorithms, addiction prevention requirements
                </span>
              </li>
            </ul>
          </TabsContent>
          
          <TabsContent value="integration" className="space-y-4">
            <h3 className="font-medium text-lg">Systems Integration</h3>
            <p className="text-muted-foreground">
              Connecting interventions across multiple dimensions:
            </p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Vertical integration:</span> Aligning efforts from individual 
                  behaviors to national policy to create coherent support structures
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Horizontal integration:</span> Coordinating across health, 
                  education, technology, and urban planning sectors
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Feedback mechanisms:</span> Establishing monitoring systems to 
                  measure intervention effectiveness and adapt approaches
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Temporal considerations:</span> Implementing quick wins while 
                  building long-term systemic changes
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">•</span>
                <span>
                  <span className="font-medium">Stakeholder engagement:</span> Involving teens, parents, educators, 
                  industry, and policymakers in collaborative solution development
                </span>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}