import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  
  export function LeveragePoints() {
    const leveragePoints = [
      {
        id: 1,
        title: "Design Standards for Digital Products",
        description: "Mandate ethical design principles that reduce addictive features in apps and platforms.",
        impact: "High",
        feasibility: "Medium",
        timeframe: "Medium-term",
        examples: [
          "Removing autoplay features",
          "Limiting infinite scrolling",
          "Adding friction to notifications",
          "Time usage reminders and limits"
        ]
      },
      {
        id: 2,
        title: "Digital Literacy in Education",
        description: "Integrate comprehensive digital literacy curriculum focused on healthy usage patterns.",
        impact: "High",
        feasibility: "High",
        timeframe: "Long-term",
        examples: [
          "Critical media consumption skills",
          "Understanding algorithmic influence",
          "Managing digital wellbeing",
          "Recognizing manipulation tactics"
        ]
      },
      {
        id: 3,
        title: "Alternative Engagement Metrics",
        description: "Shift platform success metrics from time spent to meaningful engagement and wellbeing.",
        impact: "Very High",
        feasibility: "Low",
        timeframe: "Long-term",
        examples: [
          "Quality of interaction measurements",
          "Positive impact reporting",
          "User wellbeing indicators",
          "Learning or growth metrics"
        ]
      },
      {
        id: 4,
        title: "Parental Education Programs",
        description: "Equip parents with knowledge and tools to guide healthy digital habits.",
        impact: "Medium",
        feasibility: "High",
        timeframe: "Short-term",
        examples: [
          "Age-appropriate guidance workshops",
          "Digital parenting resources",
          "Family media agreements",
          "Role modeling healthy usage"
        ]
      },
      {
        id: 5,
        title: "Urban Recreation Infrastructure",
        description: "Increase availability of engaging offline activities in urban environments.",
        impact: "Medium",
        feasibility: "Medium",
        timeframe: "Long-term",
        examples: [
          "Community sports facilities",
          "Creative arts spaces",
          "Nature engagement opportunities",
          "Youth community centers"
        ]
      }
    ];
  
    const getBadgeColor = (value: string) => {
      switch (value) {
        case "High":
        case "Very High":
          return "bg-green-500 hover:bg-green-500/80";
        case "Medium":
          return "bg-yellow-500 hover:bg-yellow-500/80";
        case "Low":
          return "bg-red-500 hover:bg-red-500/80";
        case "Short-term":
          return "bg-blue-500 hover:bg-blue-500/80";
        case "Medium-term":
          return "bg-purple-500 hover:bg-purple-500/80";
        case "Long-term":
          return "bg-orange-500 hover:bg-orange-500/80";
        default:
          return "";
      }
    };
  
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Leverage Points</CardTitle>
          <CardDescription>
            High-impact intervention opportunities based on systems analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 ">
            {leveragePoints.map((point) => (
              <div key={point.id} className="pb-6 border-b last:border-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-lg font-medium">{point.title}</h3>
                  <div className="flex-1"></div>
                  <Badge className={getBadgeColor(point.impact)}>
                    Impact: {point.impact}
                  </Badge>
                  <Badge className={getBadgeColor(point.feasibility)}>
                    Feasibility: {point.feasibility}
                  </Badge>
                  <Badge className={getBadgeColor(point.timeframe)}>
                    {point.timeframe}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-3">{point.description}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium">Examples:</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                    {point.examples.map((example, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground">
                        • {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }