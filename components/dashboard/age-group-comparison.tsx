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
const fetchAgeGroupData = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    { age: "13-14", screenTime: 6.2, addiction: 38 },
    { age: "15-16", screenTime: 7.4, addiction: 45 },
    { age: "17-18", screenTime: 7.8, addiction: 41 },
    { age: "19-20", screenTime: 8.1, addiction: 47 },
  ];
};

export default function AgeGroupComparison() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  
  useEffect(() => {
    const getData = async () => {
      try {
        const ageData = await fetchAgeGroupData();
        setData(ageData);
      } catch (error) {
        console.error("Error fetching age group data:", error);
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
            dataKey="age" 
            tick={{ fill: textColor }}
            tickMargin={10}
            stroke={gridColor}
          />
          <YAxis 
            yAxisId="left"
            tickFormatter={(value) => `${value}h`}
            tick={{ fill: textColor }}
            stroke={gridColor}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            tickFormatter={(value) => `${value}%`}
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
              if (name === "Screen Time") return [`${value} hours`, name];
              return [`${value}%`, name];
            }}
          />
          <Legend />
          <Bar 
            yAxisId="left"
            dataKey="screenTime" 
            fill="hsl(var(--chart-1))" 
            name="Screen Time" 
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            yAxisId="right"
            dataKey="addiction" 
            fill="hsl(var(--chart-3))" 
            name="Addiction %" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}