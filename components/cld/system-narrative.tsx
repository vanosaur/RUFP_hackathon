"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  FileText, 
  Download, 
  Copy, 
  RefreshCw,
  Loader2
} from "lucide-react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SystemNarrative() {
  const [loading, setLoading] = useState(false);
  const [narrative, setNarrative] = useState("");
  
  const generateNarrative = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setNarrative(`# Screen Addiction System Narrative

## Core Feedback Loops

The system of screen addiction among Indian teenagers is characterized by several interconnected feedback loops:

### R1: The Dopamine Loop
- Social media and gaming platforms are designed to trigger dopamine release
- This creates a reward pathway that reinforces continued usage
- As tolerance builds, more screen time is needed for the same dopamine effect
- This reinforcing loop drives compulsive checking and usage patterns

### R2: The Social Validation Loop
- Content sharing and social interaction generate likes/comments
- This external validation becomes tied to self-worth
- Fear of missing out (FOMO) develops when not connected
- Social comparison increases anxiety and need for further validation
- This drives increased frequency and duration of platform engagement

### B1: Academic Performance Balancing Loop
- Increased screen time reduces time available for studies
- Academic performance declines beyond a threshold
- Parental and school interventions may temporarily reduce screen time
- However, this balancing loop is often overpowered by the reinforcing loops

## Key Leverage Points

1. **Awareness and Education**: Building critical media literacy skills among teenagers
2. **Social Norms Modification**: Creating peer groups that value balanced screen usage
3. **Design Interventions**: Working with tech companies to implement less addictive design features
4. **Family Media Plans**: Structured approach to screen time within families
5. **School Policies**: Consistent approaches to device management in educational settings

## Intervention Strategy

The most effective interventions will work at multiple levels simultaneously:
- Individual behavior change
- Family system modifications
- School environment adjustments
- Policy-level regulations
- Technology design changes

This systems approach recognizes that isolated interventions targeting single factors will likely fail due to the resilience of the interconnected feedback loops.`);
      setLoading(false);
    }, 2000);
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-muted/30 p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          The System Narrative Generator helps you convert your CLD diagrams into comprehensive written explanations of system dynamics.
          This narrative explains the key feedback loops, leverage points, and potential intervention strategies based on your analysis.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Generate System Narrative</CardTitle>
            <CardDescription>
              Create a comprehensive narrative based on your CLD diagram
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-4">
                The generator will analyze the feedback loops, leverage points, and system boundaries
                from your CLD diagram to create a comprehensive narrative.
              </p>
              
              <Button 
                onClick={generateNarrative} 
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Narrative
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Narrative Options</CardTitle>
            <CardDescription>
              Customize your narrative output
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Include feedback loops</span>
                <div className="h-4 w-8 bg-primary rounded-full relative">
                  <div className="absolute right-0 top-0 h-4 w-4 bg-white rounded-full shadow"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Include leverage points</span>
                <div className="h-4 w-8 bg-primary rounded-full relative">
                  <div className="absolute right-0 top-0 h-4 w-4 bg-white rounded-full shadow"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Include intervention strategies</span>
                <div className="h-4 w-8 bg-primary rounded-full relative">
                  <div className="absolute right-0 top-0 h-4 w-4 bg-white rounded-full shadow"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Include visual diagrams</span>
                <div className="h-4 w-8 bg-muted rounded-full relative">
                  <div className="absolute left-0 top-0 h-4 w-4 bg-white rounded-full shadow"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {narrative && (
        <div className="border rounded-lg p-4 bg-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Generated Narrative</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Copy className="h-4 w-4 mr-2" /> Copy
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" /> Download
              </Button>
              <Button variant="outline" size="sm" onClick={generateNarrative} disabled={loading}>
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              </Button>
            </div>
          </div>
          
          <div className="max-h-[500px] overflow-y-auto prose prose-sm dark:prose-invert">
            <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: narrative.replace(/\n/g, '<br/>').replace(/\# (.*)/g, '<h2>$1</h2>').replace(/\## (.*)/g, '<h3>$1</h3>').replace(/\### (.*)/g, '<h4>$1</h4>').replace(/- (.*)/g, '<li>$1</li>') }} />
          </div>
        </div>
      )}
    </div>
  );
}