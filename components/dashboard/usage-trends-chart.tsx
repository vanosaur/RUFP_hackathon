"use client";

import { useEffect, useState } from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { useTheme } from "next-themes";

// This would be replaced with real API data
const fetchScreenTimeData = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    { year: "Q3-2018", screenTime: 6.48, socialMedia: 2.6, gaming: 2.5, educational: 1.2 },
    { year: "Q3-2019", screenTime: 6.38, socialMedia: 2.9, gaming: 2.2, educational: 1.2 },
    { year: "Q3-2020", screenTime: 6.54, socialMedia: 3.0, gaming: 2.3, educational: 1.2 },
    { year: "Q3-2021", screenTime: 6.58, socialMedia: 3.1, gaming: 2.2, educational: 1.2 },
    { year: "Q3-2022", screenTime: 6.36, socialMedia: 3.2, gaming: 1.9, educational: 1.2 },
    { year: "Q3-2023", screenTime: 6.40, socialMedia: 3.3, gaming: 1.9, educational: 1.2 },
  ];
};

export default function UsageTrendsChart() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  
  useEffect(() => {
    const getData = async () => {
      try {
        const screenTimeData = await fetchScreenTimeData();
        setData(screenTimeData);
      } catch (error) {
        console.error("Error fetching screen time data:", error);
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
        <LineChart
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis 
            dataKey="year" 
            tick={{ fill: textColor }}
            tickMargin={10}
            stroke={gridColor}
            tickFormatter={(value) => value.split("-")[0] === data[data.length - 1].year.split("-")[0] ? value : value.split("-")[0]}
          />
          <YAxis 
            tickFormatter={(value) => `${value}h`}
            tick={{ fill: textColor }}
            stroke={gridColor}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
              borderColor: gridColor,
              color: textColor
            }}
            formatter={(value) => [`${value} hours`, ""]}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="screenTime" 
            stroke="hsl(var(--chart-1))" 
            name="Total Screen Time"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="socialMedia" 
            stroke="hsl(var(--chart-2))" 
            name="Social Media"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="gaming" 
            stroke="hsl(var(--chart-3))" 
            name="Gaming"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="educational" 
            stroke="hsl(var(--chart-4))" 
            name="Educational"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}