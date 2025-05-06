"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart, 
  Pie,
  Cell
} from "recharts";
import { useTheme } from "next-themes";
import {
  Brain,
  Heart,
  BookOpen,
  Users,
  Home,
  Phone,
  Clock,
  Calendar
} from "lucide-react";

const effectivenessData = [
  {
    id: 1,
    category: "Individual",
    shortTerm: 40,
    mediumTerm: 60,
    longTerm: 70,
    icon: Brain
  },
  {
    id: 2,
    category: "Family",
    shortTerm: 75,
    mediumTerm: 65,
    longTerm: 60,
    icon: Home
  },
  {
    id: 3,
    category: "School",
    shortTerm: 60,
    mediumTerm: 70,
    longTerm: 80,
    icon: BookOpen
  },
  {
    id: 4,
    category: "Technology",
    shortTerm: 80,
    mediumTerm: 50,
    longTerm: 35,
    icon: Phone
  },
  {
    id: 5,
    category: "Community",
    shortTerm: 30,
    mediumTerm: 55,
    longTerm: 75,
    icon: Users
  },
  {
    id: 6,
    category: "Policy",
    shortTerm: 15,
    mediumTerm: 40,
    longTerm: 85,
    icon: Calendar
  }
];

const sustainabilityData = [
  { name: "High Sustainability", value: 35 },
  { name: "Medium Sustainability", value: 45 },
  { name: "Low Sustainability", value: 20 }
];

const impactDomainData = [
  { domain: "Screen Time Reduction", value: 75 },
  { domain: "Sleep Improvement", value: 65 },
  { domain: "Academic Performance", value: 55 },
  { domain: "Mental Wellbeing", value: 70 },
  { domain: "Physical Activity", value: 60 },
  { domain: "Social Relationships", value: 50 }
];

const targetGroupData = [
  { group: "13-14", male: 60, female: 70 },
  { group: "15-16", male: 55, female: 65 },
  { group: "17-18", male: 45, female: 60 },
  { group: "19-20", male: 40, female: 50 }
];

export default function EffectivenessMetrics() {
  const [timeframe, setTimeframe] = useState<"shortTerm" | "mediumTerm" | "longTerm">("mediumTerm");
  const { theme } = useTheme();
  
  // Define colors for charts
  const COLORS = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))'
  ];
  
  // Set colors based on theme
  const textColor = theme === "dark" ? "#f8fafc" : "#1e293b";
  const gridColor = theme === "dark" ? "#334155" : "#e2e8f0";
  
  return (
    <div className="space-y-6">
      <div className="bg-muted/30 p-4 rounded-lg">
        <h2 className="text-lg font-medium mb-2">Intervention Effectiveness Analysis</h2>
        <p className="text-sm text-muted-foreground">
          This dashboard provides comparative metrics on the effectiveness of different intervention strategies
          across various timeframes, impact domains, and demographic groups.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" /> Effectiveness by Timeframe
            </CardTitle>
            <CardDescription>
              Comparative effectiveness of different intervention categories across time horizons
            </CardDescription>
            <div className="flex gap-2 mt-2">
              <Button 
                variant={timeframe === "shortTerm" ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeframe("shortTerm")}
              >
                Short-Term
              </Button>
              <Button 
                variant={timeframe === "mediumTerm" ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeframe("mediumTerm")}
              >
                Medium-Term
              </Button>
              <Button 
                variant={timeframe === "longTerm" ? "default" : "outline"} 
                size="sm"
                onClick={() => setTimeframe("longTerm")}
              >
                Long-Term
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={effectivenessData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis 
                    dataKey="category" 
                    tick={{ fill: textColor }}
                    stroke={gridColor}
                  />
                  <YAxis
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fill: textColor }}
                    stroke={gridColor}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, "Effectiveness"]}
                    contentStyle={{ 
                      backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
                      borderColor: gridColor,
                      color: textColor
                    }}
                  />
                  <Legend />
                  <Bar 
                    dataKey={timeframe} 
                    name={
                      timeframe === "shortTerm" ? "Short-Term (0-3 months)" :
                      timeframe === "mediumTerm" ? "Medium-Term (3-12 months)" :
                      "Long-Term (1+ years)"
                    }
                    fill="hsl(var(--chart-1))" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" /> Intervention Sustainability
            </CardTitle>
            <CardDescription>
              Long-term sustainability of intervention effects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sustainabilityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {sustainabilityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, "Portion of Interventions"]}
                    contentStyle={{ 
                      backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
                      borderColor: gridColor,
                      color: textColor
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" /> Impact by Domain
            </CardTitle>
            <CardDescription>
              Effectiveness across different wellbeing domains
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={impactDomainData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis 
                    type="number"
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fill: textColor }}
                    stroke={gridColor}
                  />
                  <YAxis 
                    dataKey="domain" 
                    type="category"
                    tick={{ fill: textColor }}
                    stroke={gridColor}
                    width={120}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, "Effectiveness"]}
                    contentStyle={{ 
                      backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
                      borderColor: gridColor,
                      color: textColor
                    }}
                  />
                  <Bar 
                    dataKey="value" 
                    name="Impact" 
                    fill="hsl(var(--chart-2))" 
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" /> Effectiveness by Target Group
            </CardTitle>
            <CardDescription>
              Comparative effectiveness across age groups and genders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={targetGroupData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                  <XAxis 
                    dataKey="group" 
                    tick={{ fill: textColor }}
                    stroke={gridColor}
                  />
                  <YAxis
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fill: textColor }}
                    stroke={gridColor}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, "Effectiveness"]}
                    contentStyle={{ 
                      backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
                      borderColor: gridColor,
                      color: textColor
                    }}
                  />
                  <Legend />
                  <Bar dataKey="male" name="Male" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="female" name="Female" fill="hsl(var(--chart-4))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-muted/30 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Key Insights</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Family-based interventions show the strongest short-term effects but diminish over time</li>
          <li>• School and policy interventions have the most durable long-term impacts</li>
          <li>• Technology-based interventions show high initial effectiveness but the poorest sustainability</li>
          <li>• Interventions targeting mental wellbeing and screen time reduction show higher success rates than those focused on academic performance</li>
          <li>• Effectiveness is consistently higher among female teenagers across all age groups</li>
          <li>• Multi-component interventions that address multiple domains simultaneously show 30% higher effectiveness than single-focus approaches</li>
        </ul>
      </div>
    </div>
  );
}