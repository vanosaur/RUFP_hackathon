"use client";

import { useEffect, useState } from "react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { useTheme } from "next-themes";

// This would be replaced with real API data
const fetchPlatformData = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  return [
    { name: "Instagram", value: 28 },
    { name: "YouTube", value: 24 },
    { name: "Gaming", value: 19 },
    { name: "WhatsApp", value: 14 },
    { name: "Other Social", value: 15 },
  ];
};

export default function PlatformBreakdown() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  
  useEffect(() => {
    const getData = async () => {
      try {
        const platformData = await fetchPlatformData();
        setData(platformData);
      } catch (error) {
        console.error("Error fetching platform data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    getData();
  }, []);

  const COLORS = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
    'hsl(var(--chart-4))',
    'hsl(var(--chart-5))',
  ];
  
  const textColor = theme === "dark" ? "#f8fafc" : "#1e293b";
  
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
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value}%`, "Usage"]}
            contentStyle={{ 
              backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
              borderColor: theme === "dark" ? "#334155" : "#e2e8f0",
              color: textColor
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}