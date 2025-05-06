"use client";

import { 
  Clock, 
  Smartphone, 
  AlertCircle, 
  Brain, 
  TrendingUp 
} from "lucide-react";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-card p-4 rounded-lg border flex flex-col">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/10 rounded">
            <Clock className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-medium">Daily Screen Time</span>
        </div>
        <div className="mt-3">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold">7.2</span>
            <span className="text-sm text-muted-foreground ml-1">hours</span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-xs">
            <TrendingUp className="h-3 w-3 text-destructive" />
            <span className="text-destructive">+12% vs 2022</span>
          </div>
        </div>
      </div>
      
      <div className="bg-card p-4 rounded-lg border flex flex-col">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/10 rounded">
            <Smartphone className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-medium">Social Media</span>
        </div>
        <div className="mt-3">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold">3.5</span>
            <span className="text-sm text-muted-foreground ml-1">hours/day</span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-xs">
            <TrendingUp className="h-3 w-3 text-destructive" />
            <span className="text-destructive">+18% vs 2022</span>
          </div>
        </div>
      </div>
      
      <div className="bg-card p-4 rounded-lg border flex flex-col">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/10 rounded">
            <AlertCircle className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-medium">Addiction Rate</span>
        </div>
        <div className="mt-3">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold">43%</span>
            <span className="text-sm text-muted-foreground ml-1">of teenagers</span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-xs">
            <TrendingUp className="h-3 w-3 text-destructive" />
            <span className="text-destructive">+8% vs 2022</span>
          </div>
        </div>
      </div>
      
      <div className="bg-card p-4 rounded-lg border flex flex-col">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/10 rounded">
            <Brain className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-medium">Mental Health</span>
        </div>
        <div className="mt-3">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold">67%</span>
            <span className="text-sm text-muted-foreground ml-1">report anxiety</span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-xs">
            <TrendingUp className="h-3 w-3 text-destructive" />
            <span className="text-destructive">+14% vs 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}