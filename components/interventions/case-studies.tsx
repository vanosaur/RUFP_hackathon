"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, ArrowRight, MapPin } from "lucide-react";

const caseStudies = [
  {
    id: "delhi-schools",
    title: "Delhi School Digital Wellbeing Initiative",
    location: "Delhi, India",
    category: "School",
    timeline: "2020-2022",
    impact: "High",
    participants: "5,000+ students",
    description: "A comprehensive program implemented across 15 schools in Delhi that combined curriculum changes, policy modifications, and parent engagement.",
    key_outcomes: [
      "42% reduction in problematic smartphone use among participants",
      "Improved academic performance metrics in 68% of students",
      "Enhanced student-reported sleep quality and duration",
      "Reduced anxiety levels as measured by standardized assessments"
    ],
    approach: "The initiative adopted a three-pronged approach targeting the school environment, home practices, and individual behaviors. Key components included a 'digital citizenship' curriculum, mandatory phone-free zones and times, parent workshops, and peer mentorship programs.",
    challenges: "Initial resistance from students, inconsistent parental support, and technical limitations in monitoring progress were significant challenges. Teacher training requirements were also substantial.",
    lessons: "The most successful elements were peer-led activities and the integration of digital wellbeing into regular curriculum rather than treating it as a separate topic. Flexible implementation tailored to each school's context proved more effective than a rigid standardized approach.",
    location_type: "Urban"
  },
  {
    id: "bangalore-tech",
    title: "Mindful Tech Bangalore",
    location: "Bangalore, India",
    category: "Technology",
    timeline: "2021-Present",
    impact: "Medium",
    participants: "10,000+ teenagers",
    description: "A technology-based intervention using a custom app to help teenagers monitor and manage their screen time with AI-driven personalized recommendations.",
    key_outcomes: [
      "Average 36% reduction in social media usage time",
      "Improved self-reported focus and productivity in 61% of users",
      "Increased awareness of usage patterns in 88% of participants",
      "Sustained behavior change in 42% after six months"
    ],
    approach: "The project developed a specialized app that combined screen time monitoring, personalized insights, gradual reduction goals, and alternative activity suggestions. The app incorporated gamification elements to maintain engagement and used machine learning to identify individual usage patterns.",
    challenges: "User retention beyond the first month was a significant challenge. Technical difficulties with tracking across multiple devices and platforms limited effectiveness for some users. Privacy concerns required careful communication and transparent data practices.",
    lessons: "The most effective elements were the personalized nature of recommendations and the positive framing around digital balance rather than restriction. Social features that allowed friends to challenge each other showed particularly strong engagement and effectiveness.",
    location_type: "Urban"
  },
  {
    id: "kerala-community",
    title: "Kerala Digital Harmony Project",
    location: "Kerala, India",
    category: "Community",
    timeline: "2019-2022",
    impact: "High",
    participants: "12 communities, 8,000+ teenagers",
    description: "A community-based initiative that mobilized local resources and cultural practices to develop alternatives to screen-based activities while promoting balanced technology use.",
    key_outcomes: [
      "47% reduction in gaming addiction prevalence",
      "Increased participation in traditional arts and sports",
      "Improved family communication reported by 72% of families",
      "Sustainable community programs continuing beyond project timeline"
    ],
    approach: "The project established community digital wellbeing committees in each location, revitalized traditional games and cultural activities, created technology-free community spaces, and implemented a 'digital elder' mentorship program connecting teenagers with tech-savvy yet balanced adults.",
    challenges: "Varying resource availability across communities created implementation inconsistencies. Economic pressures on families limited participation for some. Cultural attitudes regarding technology as purely beneficial required careful navigation.",
    lessons: "Contextualizing the intervention within the cultural heritage of Kerala created strong buy-in. The community-owned approach ensured sustainability beyond the initial project period. Intergenerational components were particularly successful in changing norms around technology use.",
    location_type: "Mixed"
  },
  {
    id: "punjab-rural",
    title: "Punjab Rural Digital Balance Initiative",
    location: "Punjab, India",
    category: "Family",
    timeline: "2020-2021",
    impact: "Medium",
    participants: "3,500 families",
    description: "A family-focused intervention in rural Punjab that worked with parents, extended family members, and local community leaders to establish healthier technology norms.",
    key_outcomes: [
      "Average 28% reduction in teen screen time",
      "Improved parent-teen communication about technology",
      "Increased physical activity levels in participating teenagers",
      "Greater parental confidence in managing technology issues"
    ],
    approach: "The initiative trained local 'digital wellbeing coordinators' in each village, conducted family workshops on technology management, established family media agreements, and created family activity alternatives to screen time. The project explicitly honored parental authority while providing modern methods.",
    challenges: "Limited technological literacy among some parents created implementation barriers. Gender differences in screen access and usage required tailored approaches. Economic considerations around device sharing in families needed careful navigation.",
    lessons: "Respecting traditional family structures while introducing new concepts was essential to success. Agricultural seasonal variations significantly impacted participation and required flexible scheduling. The most sustainable elements were simple family routines rather than complex intervention components.",
    location_type: "Rural"
  },
  {
    id: "mumbai-policy",
    title: "Mumbai School District Policy Reform",
    location: "Mumbai, India",
    category: "Policy",
    timeline: "2021-2023",
    impact: "Medium",
    participants: "50+ schools, 75,000+ students",
    description: "A district-wide policy intervention that established consistent standards for technology use across all schools in the district, supported by teacher training and resources.",
    key_outcomes: [
      "Standardized approach across diverse school environments",
      "Reduced classroom disruptions due to technology",
      "Improved student attention metrics during instruction",
      "Increased teacher confidence in addressing technology issues"
    ],
    approach: "The initiative created a district technology policy committee with diverse stakeholder representation, developed graduated guidelines appropriate to different age groups, implemented teacher training on digital wellbeing, and established monitoring and enforcement procedures.",
    challenges: "Wide variation in school resources created implementation disparities. Policy enforcement consistency across schools was difficult to maintain. Balancing educational technology benefits with addiction concerns required careful policy crafting.",
    lessons: "Clear policy communication to all stakeholders was essential to success. The most effective policies were those with built-in flexibility for different contexts while maintaining core principles. Regular policy review and adjustment based on feedback improved outcomes over time.",
    location_type: "Urban"
  }
];

export default function CaseStudies() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Case Studies</TabsTrigger>
          <TabsTrigger value="school">School-Based</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="family">Family-Focused</TabsTrigger>
          <TabsTrigger value="technology">Technology</TabsTrigger>
          <TabsTrigger value="policy">Policy</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="school" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies
              .filter(study => study.category.toLowerCase() === "school")
              .map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="community" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies
              .filter(study => study.category.toLowerCase() === "community")
              .map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="family" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies
              .filter(study => study.category.toLowerCase() === "family")
              .map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="technology" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies
              .filter(study => study.category.toLowerCase() === "technology")
              .map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="policy" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies
              .filter(study => study.category.toLowerCase() === "policy")
              .map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function CaseStudyCard({ study }: { study: any }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{study.title}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              {study.location} ({study.location_type})
            </CardDescription>
          </div>
          <Badge>{study.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm">{study.description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <p className="text-muted-foreground">Timeline</p>
            <p className="font-medium">{study.timeline}</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground">Impact</p>
            <p className="font-medium">{study.impact}</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground">Participants</p>
            <p className="font-medium">{study.participants}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Key Outcomes</h4>
          <ul className="text-sm list-disc list-inside space-y-1">
            {study.key_outcomes.map((outcome: string, index: number) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="ml-auto">
          <FileText className="h-4 w-4 mr-2" />
          Full Case Study
        </Button>
      </CardFooter>
    </Card>
  );
}