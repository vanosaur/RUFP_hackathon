"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Copy } from "lucide-react";

export default function CLDExamples() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="social">
        <TabsList className="mb-4">
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="gaming">Gaming</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        
        <TabsContent value="social" className="space-y-6">
          <div className="bg-muted/30 border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-4">Social Media Addiction Feedback Loops</h3>
            
            <div className="relative border rounded-lg bg-background p-2 min-h-[400px] mb-4">
              <img 
                src="https://images.pexels.com/photos/8325060/pexels-photo-8325060.jpeg" 
                alt="Social Media CLD Example" 
                className="w-full h-[400px] object-contain rounded"
              />
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This diagram illustrates the reinforcing feedback loops in social media addiction among teenagers. Key elements include:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Dopamine-driven reward cycle that strengthens with continued use</li>
                <li>FOMO (Fear of Missing Out) amplifying addiction tendencies</li>
                <li>Validation-seeking behavior forming a strong reinforcing loop</li>
                <li>Negative impacts on academic performance, sleep, and real-world social skills</li>
                <li>Built-in platform engagement mechanisms designed to maximize screen time</li>
              </ul>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <Copy className="h-4 w-4 mr-2" /> Clone to Editor
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="gaming" className="space-y-6">
          <div className="bg-muted/30 border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-4">Gaming Addiction System Dynamics</h3>
            
            <div className="relative border rounded-lg bg-background p-2 min-h-[400px] mb-4">
              <img 
                src="https://images.pexels.com/photos/3045389/pexels-photo-3045389.jpeg" 
                alt="Gaming CLD Example" 
                className="w-full h-[400px] object-contain rounded"
              />
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This diagram illustrates the system dynamics of gaming addiction among Indian teenagers. Key elements include:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Achievement and progression mechanics creating constant reward paths</li>
                <li>Social validation through multiplayer gaming communities</li>
                <li>Escapism from academic pressure or family expectations</li>
                <li>Time displacement effects on studies, physical activity, and sleep</li>
                <li>Monetization mechanics (loot boxes, battle passes) reinforcing engagement</li>
              </ul>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <Copy className="h-4 w-4 mr-2" /> Clone to Editor
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="education" className="space-y-6">
          <div className="bg-muted/30 border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-4">Educational Impact System Map</h3>
            
            <div className="relative border rounded-lg bg-background p-2 min-h-[400px] mb-4">
              <img 
                src="https://images.pexels.com/photos/6282607/pexels-photo-6282607.jpeg" 
                alt="Education CLD Example" 
                className="w-full h-[400px] object-contain rounded"
              />
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This diagram maps the systemic impacts of screen addiction on educational outcomes for Indian teenagers. Key elements include:
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Attention fragmentation and reduced cognitive focus</li>
                <li>Time displacement from studying and homework</li>
                <li>Sleep deprivation affecting memory consolidation and learning</li>
                <li>Digital multitasking habits reducing deep learning capabilities</li>
                <li>Balancing factors like educational technology benefits</li>
              </ul>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <Copy className="h-4 w-4 mr-2" /> Clone to Editor
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}