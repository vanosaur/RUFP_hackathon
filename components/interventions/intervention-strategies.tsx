"use client";

import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import {
  School,
  Home,
  Users,
  Smartphone,
  FileBadge,
  Brain,
  Heart,
  Clock,
  ArrowRight,
  BookOpen
} from "lucide-react";

const interventionCategories = [
  {
    id: "individual",
    title: "Individual Interventions",
    icon: Brain,
    description: "Strategies focused on individual behavior change and awareness",
    strategies: [
      {
        id: "digital-detox",
        title: "Digital Detox Programs",
        description: "Structured programs to temporarily disconnect from devices",
        effectiveness: "Medium",
        timeframe: "Short-term",
        difficulty: "Medium",
        details: "Digital detox programs involve a planned period (typically 24-72 hours) of abstaining from digital devices. Research shows these can reset dopamine sensitivity and break automatic usage habits. For Indian teenagers, incorporating traditional activities during the detox period enhances effectiveness.",
        keyPoints: [
          "Start with shorter periods (12 hours) and gradually increase",
          "Replace screen time with physical activities, reading, or family interaction",
          "Document the experience through journaling to reinforce benefits",
          "Implement monthly detox days as a regular practice"
        ],
        evidenceStrength: "Moderate"
      },
      {
        id: "mindfulness",
        title: "Mindfulness & Awareness",
        description: "Techniques to build awareness of screen usage patterns",
        effectiveness: "High",
        timeframe: "Long-term",
        difficulty: "Medium",
        details: "Mindfulness approaches focus on building conscious awareness of device usage patterns and triggers. By recognizing the urge to check devices and understanding emotional drivers, teenagers can regain control over their technology use.",
        keyPoints: [
          "Usage tracking apps that provide insights into screen time patterns",
          "Mindfulness exercises specifically targeting technology use",
          "Emotional awareness training to identify triggers for excessive use",
          "Practicing the 'STOP' technique before picking up a device"
        ],
        evidenceStrength: "Strong"
      },
      {
        id: "hobbies",
        title: "Alternative Activities",
        description: "Developing engaging hobbies and offline interests",
        effectiveness: "High",
        timeframe: "Long-term",
        difficulty: "Low",
        details: "This approach focuses on developing compelling offline alternatives that compete with screen activities for a teenager's time and attention. This creates natural displacement of screen time rather than just restriction.",
        keyPoints: [
          "Identify activities that provide similar psychological rewards",
          "Develop skill-building hobbies that show measurable progress",
          "Engage in social offline activities to replace social media",
          "Connect with traditional Indian arts, crafts, and games"
        ],
        evidenceStrength: "Strong"
      }
    ]
  },
  {
    id: "family",
    title: "Family Interventions",
    icon: Home,
    description: "Approaches that engage the entire family system",
    strategies: [
      {
        id: "media-plans",
        title: "Family Media Plans",
        description: "Collaborative agreements about technology use at home",
        effectiveness: "High",
        timeframe: "Medium-term",
        difficulty: "Medium",
        details: "Family media plans are structured agreements created collaboratively between parents and children. They establish clear guidelines around when, where, and how devices can be used within the home environment.",
        keyPoints: [
          "Device-free zones (bedrooms, dining areas) and times (meals, bedtime)",
          "Screen time budgets that distinguish between types of content",
          "Regular family meetings to review and adjust the plan",
          "Modeling healthy screen habits by parents"
        ],
        evidenceStrength: "Strong"
      },
      {
        id: "parental-controls",
        title: "Parental Controls & Monitoring",
        description: "Technical solutions to manage access and content",
        effectiveness: "Medium",
        timeframe: "Short-term",
        difficulty: "Low",
        details: "Technical controls provide a structural framework for managing screen time, but work best when implemented with open communication rather than surveillance.",
        keyPoints: [
          "Age-appropriate content filtering and time limits",
          "Gradual transfer of control to teenagers as they demonstrate responsibility",
          "Focus on transparency rather than surveillance",
          "Use as a temporary support rather than a permanent solution"
        ],
        evidenceStrength: "Moderate"
      }
    ]
  },
  {
    id: "school",
    title: "School-Based Interventions",
    icon: School,
    description: "Programs implemented through educational institutions",
    strategies: [
      {
        id: "curriculum",
        title: "Digital Wellbeing Curriculum",
        description: "Educational programs on healthy technology use",
        effectiveness: "High",
        timeframe: "Long-term",
        difficulty: "Medium",
        details: "Integrating digital wellbeing education into the school curriculum provides students with critical knowledge and skills to navigate the digital world mindfully.",
        keyPoints: [
          "Age-appropriate content on digital citizenship and wellbeing",
          "Critical media literacy to evaluate online content",
          "Understanding of persuasive design and attention economy",
          "Peer-to-peer education models for greater buy-in"
        ],
        evidenceStrength: "Strong"
      },
      {
        id: "policy",
        title: "School Technology Policies",
        description: "Institutional guidelines for device use during school hours",
        effectiveness: "Medium",
        timeframe: "Medium-term",
        difficulty: "Medium",
        details: "School-wide policies create consistent environments that can reduce distraction and problematic use patterns during educational hours.",
        keyPoints: [
          "Clear rules about when devices can be used during school hours",
          "Designated phone-free periods or zones",
          "Graduated freedom based on age and demonstrated responsibility",
          "Consistent enforcement across all staff members"
        ],
        evidenceStrength: "Moderate"
      }
    ]
  },
  {
    id: "tech",
    title: "Technology Solutions",
    icon: Smartphone,
    description: "Using technology itself to encourage healthier usage",
    strategies: [
      {
        id: "design",
        title: "Ethical Design Modifications",
        description: "Changes to interface design to reduce addictive potential",
        effectiveness: "Medium",
        timeframe: "Long-term",
        difficulty: "High",
        details: "This approach focuses on modifying the design of digital platforms and devices to reduce their addictive potential while maintaining their utility and appeal.",
        keyPoints: [
          "Removal of infinite scroll and autoplay features",
          "Adjusting notification systems to be less intrusive",
          "Providing clear usage metrics and setting natural stopping points",
          "Empowering users with more granular control over their experience"
        ],
        evidenceStrength: "Emerging"
      },
      {
        id: "apps",
        title: "Digital Wellbeing Apps",
        description: "Applications designed to promote healthier device use",
        effectiveness: "Medium",
        timeframe: "Short-term",
        difficulty: "Low",
        details: "These specialized applications help users monitor and manage their screen time, providing insights, limits, and interventions at the point of use.",
        keyPoints: [
          "Screen time trackers with actionable insights",
          "Focus and productivity apps that limit distractions",
          "Gradual reduction techniques rather than cold-turkey approaches",
          "Customizable interventions based on personal goals"
        ],
        evidenceStrength: "Moderate"
      }
    ]
  },
  {
    id: "community",
    title: "Community & Social Approaches",
    icon: Users,
    description: "Leveraging social connections and community resources",
    strategies: [
      {
        id: "peer",
        title: "Peer Support Groups",
        description: "Groups of teenagers supporting each other's digital wellbeing",
        effectiveness: "High",
        timeframe: "Medium-term",
        difficulty: "Medium",
        details: "Peer support leverages the powerful influence of social norms among teenagers, creating communities where balanced technology use is valued and reinforced.",
        keyPoints: [
          "Teen-led discussion groups about technology challenges",
          "Accountability partnerships for digital wellbeing goals",
          "Group challenges and activities promoting offline engagement",
          "Social reinforcement of healthy digital norms"
        ],
        evidenceStrength: "Strong"
      },
      {
        id: "campaign",
        title: "Awareness Campaigns",
        description: "Public information initiatives about screen addiction",
        effectiveness: "Low",
        timeframe: "Long-term",
        difficulty: "Medium",
        details: "Broad-based awareness campaigns aim to shift social norms and knowledge around screen use at a population level, creating cultural support for healthier digital habits.",
        keyPoints: [
          "Youth-centered messaging that avoids fearmongering",
          "Positive framing around digital wellbeing rather than addiction",
          "Using popular influencers and celebrities as messengers",
          "Culturally relevant content specifically addressing Indian context"
        ],
        evidenceStrength: "Limited"
      }
    ]
  },
  {
    id: "policy",
    title: "Policy Interventions",
    icon: FileBadge,
    description: "Regulatory and governmental approaches",
    strategies: [
      {
        id: "regulation",
        title: "Content & Design Regulation",
        description: "Legal frameworks governing addictive design elements",
        effectiveness: "Medium",
        timeframe: "Long-term",
        difficulty: "High",
        details: "Regulatory approaches aim to reduce the addictive potential of digital platforms through legal requirements and standards, particularly for products used by minors.",
        keyPoints: [
          "Age-verification requirements for social platforms",
          "Regulations limiting manipulative design features",
          "Transparency requirements about algorithmic recommendations",
          "Special protections for teenage users"
        ],
        evidenceStrength: "Emerging"
      },
      {
        id: "education",
        title: "National Education Initiatives",
        description: "Country-wide programs on digital citizenship",
        effectiveness: "Medium",
        timeframe: "Long-term",
        difficulty: "High",
        details: "National initiatives integrate digital wellbeing education into formal educational frameworks, ensuring consistent messaging and approach across institutions.",
        keyPoints: [
          "Integration into national curriculum frameworks",
          "Teacher training programs on digital wellbeing",
          "Parent education components delivered through schools",
          "Age-appropriate progression of digital citizenship concepts"
        ],
        evidenceStrength: "Moderate"
      }
    ]
  }
];

export default function InterventionStrategies() {
  const [selectedCategory, setSelectedCategory] = useState("individual");
  
  const selectedCategoryData = interventionCategories.find(cat => cat.id === selectedCategory);
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {interventionCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`flex flex-col h-auto px-2 py-3 ${selectedCategory === category.id ? "" : "border-dashed"}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{category.title}</span>
            </Button>
          );
        })}
      </div>
      
      {selectedCategoryData && (
        <div className="space-y-6">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h2 className="text-xl font-medium mb-1 flex items-center gap-2">
              {React.createElement(selectedCategoryData.icon, { className: "h-5 w-5" })}
              {selectedCategoryData.title}
            </h2>
            <p className="text-muted-foreground">
              {selectedCategoryData.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {selectedCategoryData.strategies.map((strategy) => (
              <Card key={strategy.id} className="border-l-4" style={{ borderLeftColor: 'hsl(var(--primary))' }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{strategy.title}</CardTitle>
                    <Badge variant={
                      strategy.effectiveness === "High" ? "default" :
                      strategy.effectiveness === "Medium" ? "secondary" : "outline"
                    }>
                      {strategy.effectiveness} Effectiveness
                    </Badge>
                  </div>
                  <CardDescription>{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{strategy.timeframe}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{strategy.evidenceStrength} Evidence</span>
                      </div>
                    </div>
                    
                    <Accordion type="single" collapsible>
                      <AccordionItem value="details">
                        <AccordionTrigger className="text-sm font-medium">
                          Strategy Details
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 text-sm">
                            <p>{strategy.details}</p>
                            <h4 className="font-medium mt-2">Key Implementation Points:</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {strategy.keyPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto">
                    <span className="mr-1">View Resources</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}