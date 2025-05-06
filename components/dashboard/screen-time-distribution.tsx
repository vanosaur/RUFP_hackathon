"use client";

import { useEffect, useState } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { useTheme } from "next-themes";

// This would be replaced with real API data
const fetchDistributionData = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  return [
    { range: "0-2 hrs", percentage: 5, count: 125 },
    { range: "2-4 hrs", percentage: 15, count: 375 },
    { range: "4-6 hrs", percentage: 25, count: 625 },
    { range: "6-8 hrs", percentage: 30, count: 750 },
    { range: "8-10 hrs", percentage: 18, count: 450 },
    { range: ">10 hrs", percentage: 7, count: 175 },
  ];
};

export default function ScreenTimeDistribution() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  
  useEffect(() => {
    const getData = async () => {
      try {
        const distributionData = await fetchDistributionData();
        setData(distributionData);
      } catch (error) {
        console.error("Error fetching distribution data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    getData();
  }, []);

  // Set colors based on theme
  const textColor = theme === "dark" ? "#f8fafc" : "#1e293b";
  const gridColor = theme === "dark" ? "#334155" : "#e2e8f0";
  
  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <span className="text-muted-foreground">Loading data...</span>
      </div>
    );
  }
  
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis 
            dataKey="range" 
            tick={{ fill: textColor }}
            tickMargin={10}
            stroke={gridColor}
          />
          <YAxis 
            yAxisId="left"
            tickFormatter={(value) => `${value}%`}
            tick={{ fill: textColor }}
            stroke={gridColor}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            tickFormatter={(value) => `${value}`}
            tick={{ fill: textColor }}
            stroke={gridColor}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
              borderColor: gridColor,
              color: textColor
            }}
            formatter={(value, name) => {
              if (name === "Percentage") return [`${value}%`, "Percentage"];
              return [`${value} teenagers`, "Count"];
            }}
          />
          <Legend />
          <Bar 
            yAxisId="left"
            dataKey="percentage" 
            fill="hsl(var(--chart-1))" 
            name="Percentage" 
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            yAxisId="right"
            dataKey="count" 
            fill="hsl(var(--chart-2))" 
            name="Count" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}