import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function EPSHeader() {
  return (
    <div className="flex flex-col space-y-4 text-center">
      
      
      <div>
        <h1 className="text-4xl font-bold tracking-tight">EPS Analysis & Leverage Points</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Identifying effective intervention points in the system
        </p>
      </div>
      
      <div className="prose max-w-none dark:prose-invert mt-4 text-center">
        <p>
          Environmental Policy Solutions (EPS) analysis helps identify effective intervention points 
          within complex systems.<br/>This section maps potential leverage points where targeted interventions 
          could have amplified effects in addressing screen addiction among Indian teenagers.
        </p>
      </div>
    </div>
  );
}