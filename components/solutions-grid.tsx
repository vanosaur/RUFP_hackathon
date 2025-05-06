"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { 
  School, 
  Home, 
  Users, 
  Building2, 
  Gavel, 
  ExternalLink
} from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Digital Wellbeing Curriculum",
    description: "Comprehensive school-based education on healthy technology use",
    category: "education",
    impact: "High",
    implementation: "Medium",
    icon: School,
    details: [
      "Age-appropriate content for grades 6-12",
      "Focus on critical thinking about technology use",
      "Practical skills for managing screen time",
      "Integration with existing subjects"
    ],
    
  },
  {
    id: 2,
    title: "Family Media Agreements",
    description: "Structured framework for families to set healthy boundaries",
    category: "family",
    impact: "Medium",
    implementation: "High",
    icon: Home,
    details: [
      "Customizable templates for different age groups",
      "Collaborative rule-setting process",
      "Regular review and adaptation mechanisms",
      "Tech-free zones and times guidance"
    ],
    
  },
  {
    id: 3,
    title: "Peer Support Networks",
    description: "Teen-led initiatives promoting balanced technology use",
    category: "social",
    impact: "Medium",
    implementation: "Medium",
    icon: Users,
    details: [
      "Training program for peer mentors",
      "School-based support groups",
      "Offline activity organization",
      "Digital wellbeing challenges"
    ],
    
  },
  {
    id: 4,
    title: "Ethical Design Standards",
    description: "Guidelines for reducing addictive features in digital products",
    category: "industry",
    impact: "Very High",
    implementation: "Low",
    icon: Building2,
    details: [
      "Removal of infinite scroll by default",
      "Transparent algorithms and engagement metrics",
      "Automatic break reminders",
      "Age-appropriate default settings"
    ],
    
  },
  {
    id: 5,
    title: "Urban Recreation Initiative",
    description: "Expanding accessible offline engagement opportunities",
    category: "community",
    impact: "Medium",
    implementation: "Medium",
    icon: Users,
    details: [
      "Neighborhood sports facilities",
      "Creative arts programs",
      "Youth community centers",
      "Safe outdoor spaces"
    ],
    
  },
  {
    id: 6,
    title: "Digital Wellbeing Policy",
    description: "Regulatory framework to protect teenage digital health",
    category: "policy",
    impact: "High",
    implementation: "Low",
    icon: Gavel,
    details: [
      "Age verification requirements",
      "Engagement limit guidelines",
      "Transparency in algorithms",
      "Health warning systems"
    ],
    
  }
];

export function SolutionsGrid() {
  const [filter, setFilter] = useState("all");
  
  const filteredSolutions = filter === "all" 
    ? solutions 
    : solutions.filter(solution => solution.category === filter);

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
      case "Very High":
        return "bg-green-500 hover:bg-green-500/80";
      case "Medium":
        return "bg-yellow-500 hover:bg-yellow-500/80";
      case "Low":
        return "bg-red-500 hover:bg-red-500/80";
      default:
        return "";
    }
  };

  const getImplementationColor = (implementation: string) => {
    switch (implementation) {
      case "High":
        return "bg-green-500 hover:bg-green-500/80";
      case "Medium":
        return "bg-yellow-500 hover:bg-yellow-500/80";
      case "Low":
        return "bg-red-500 hover:bg-red-500/80";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" value={filter} onValueChange={setFilter} className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-7 w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="family">Family</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="industry">Industry</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="policy">Policy</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSolutions.map((solution) => {
          const Icon = solution.icon;
          
          return (
            <Card key={solution.id} className="flex flex-col h-full transition-all duration-200 hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Icon className="h-8 w-8 text-primary mb-2" />
                  <div className="flex gap-2">
                    <Badge className={getImpactColor(solution.impact)}>
                      Impact: {solution.impact}
                    </Badge>
                    <Badge className={getImplementationColor(solution.implementation)}>
                      Ease: {solution.implementation}
                    </Badge>
                  </div>
                </div>
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {solution.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
            </Card>
          );
        })}
      </div>
    </div>
  );
}