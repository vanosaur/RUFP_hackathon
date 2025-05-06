"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Factor data
const factors = [
  {
    id: 1,
    name: "Affordable Data Plans",
    percentage: 86,
    description: "Access to cheap mobile data has made constant connectivity possible",
  },
  {
    id: 2,
    name: "Smartphone Penetration",
    percentage: 92,
    description: "Low-cost smartphones have become accessible to most economic segments",
  },
  {
    id: 3,
    name: "Social Validation",
    percentage: 78,
    description: "Teens seek validation through likes, shares and comments",
  },
  {
    id: 4,
    name: "FOMO",
    percentage: 74,
    description: "Fear of missing out drives compulsive checking of social media",
  },
  {
    id: 5,
    name: "Algorithmic Content",
    percentage: 82,
    description: "Content algorithms optimize for engagement and screen time",
  },
  {
    id: 6,
    name: "Limited Regulations",
    percentage: 68,
    description: "Lack of age-appropriate controls and usage limits",
  },
];

export function KeyFactors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Contributing Factors</CardTitle>
        <CardDescription>
          Primary drivers behind screen addiction among Indian teenagers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {factors.map((factor) => (
            <TooltipProvider key={factor.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{factor.name}</span>
                      <span className="text-sm font-medium">{factor.percentage}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${factor.percentage}%`, transition: "width 1s ease-in-out" }}
                      />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-[200px]">
                  <p>{factor.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}