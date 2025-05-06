import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SolutionsHeader() {
  return (
    <div className="flex flex-col space-y-4">
      
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Solution Strategies</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Evidence-based approaches to reverse screen addiction trends
        </p>
      </div>
      
      <div className="prose max-w-none dark:prose-invert mt-4">
        <p>
          Based on our systems analysis, we've identified strategic intervention approaches across
          multiple dimensions. These solutions target key leverage points and address the underlying
          system dynamics rather than just symptoms.
        </p>
      </div>
    </div>
  );
}