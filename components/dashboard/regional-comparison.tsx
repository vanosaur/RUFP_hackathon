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
const fetchRegionalData = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 900));
  
  return [
    { region: "Metro", screenTime: 8.7, addiction: 52 },
    { region: "Tier-1", screenTime: 7.5, addiction: 46 },
    { region: "Tier-2", screenTime: 6.3, addiction: 37 },
    { region: "Rural", screenTime: 4.8, addiction: 29 },
  ];
};

export default function RegionalComparison() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  
  useEffect(() => {
    const getData = async () => {
      try {
        const regionalData = await fetchRegionalData();
        setData(regionalData);
      } catch (error) {
        console.error("Error fetching regional data:", error);
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
          layout="vertical"
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis 
            type="number"
            tick={{ fill: textColor }}
            tickMargin={5}
            stroke={gridColor}
          />
          <YAxis 
            dataKey="region"
            type="category"
            tick={{ fill: textColor }}
            tickMargin={10}
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
            dataKey="screenTime" 
            fill="hsl(var(--chart-4))" 
            name="Screen Time" 
            radius={[0, 4, 4, 0]}
          />
          <Bar 
            dataKey="addiction" 
            fill="hsl(var(--chart-5))" 
            name="Addiction %" 
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}