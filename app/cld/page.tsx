import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CLDEditor from "@/components/cld/cld-editor";
import SystemNarrative from "@/components/cld/system-narrative";
import CLDExamples from "@/components/cld/cld-examples";

export default function CLDPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-muted/50 border-b">
        <div className="container py-10">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Causal Loop Diagram Analysis</h1>
          <p className="text-muted-foreground">
            Visualize and understand the system dynamics of screen addiction.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <Tabs defaultValue="editor" className="space-y-6">
          <TabsList>
            <TabsTrigger value="editor">CLD Editor</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="narrative">System Narrative</TabsTrigger>
          </TabsList>
          
          <TabsContent value="editor" className="space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-medium mb-4">Build Your Causal Loop Diagram</h2>
              <CLDEditor />
            </div>
          </TabsContent>
          
          <TabsContent value="examples" className="space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-medium mb-4">Example CLD Models</h2>
              <CLDExamples />
            </div>
          </TabsContent>
          
          <TabsContent value="narrative" className="space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-medium mb-4">System Narrative Generator</h2>
              <SystemNarrative />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}