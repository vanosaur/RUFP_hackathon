"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CirclePlus,
  ArrowRightCircle,
  Save,
  Download,
  Trash,
  Plus,
  Minus
} from "lucide-react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface Edge {
  id: string;
  source: string;
  target: string;
  type: "positive" | "negative";
}

export default function CLDEditor() {
  const [nodes, setNodes] = useState<Node[]>([
    { id: "1", label: "Social Media Usage", x: 150, y: 100 },
    { id: "2", label: "Dopamine Release", x: 300, y: 150 },
    { id: "3", label: "Addiction Tendency", x: 450, y: 100 },
    { id: "4", label: "Academic Performance", x: 400, y: 300 },
    { id: "5", label: "Sleep Quality", x: 200, y: 300 },
  ]);
  
  const [edges, setEdges] = useState<Edge[]>([
    { id: "e1", source: "1", target: "2", type: "positive" },
    { id: "e2", source: "2", target: "3", type: "positive" },
    { id: "e3", source: "3", target: "1", type: "positive" },
    { id: "e4", source: "3", target: "4", type: "negative" },
    { id: "e5", source: "3", target: "5", type: "negative" },
    { id: "e6", source: "5", target: "4", type: "positive" },
  ]);
  
  const [newNodeLabel, setNewNodeLabel] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedTarget, setSelectedTarget] = useState("");
  const [edgeType, setEdgeType] = useState<"positive" | "negative">("positive");
  
  const addNode = () => {
    if (newNodeLabel.trim()) {
      const newId = (nodes.length + 1).toString();
      const newNode = {
        id: newId,
        label: newNodeLabel,
        x: Math.random() * 400 + 100,
        y: Math.random() * 200 + 100,
      };
      
      setNodes([...nodes, newNode]);
      setNewNodeLabel("");
    }
  };
  
  const addEdge = () => {
    if (selectedSource && selectedTarget) {
      const newId = `e${edges.length + 1}`;
      const newEdge = {
        id: newId,
        source: selectedSource,
        target: selectedTarget,
        type: edgeType,
      };
      
      setEdges([...edges, newEdge]);
      setSelectedSource("");
      setSelectedTarget("");
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Add Node</h3>
            <div className="flex gap-2">
              <Input
                value={newNodeLabel}
                onChange={(e) => setNewNodeLabel(e.target.value)}
                placeholder="Node label"
              />
              <Button onClick={addNode} size="icon">
                <CirclePlus className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Add Connection</h3>
            <div className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="source">Source</Label>
                <Select
                  value={selectedSource}
                  onValueChange={setSelectedSource}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    {nodes.map((node) => (
                      <SelectItem key={node.id} value={node.id}>
                        {node.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="target">Target</Label>
                <Select
                  value={selectedTarget}
                  onValueChange={setSelectedTarget}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select target" />
                  </SelectTrigger>
                  <SelectContent>
                    {nodes.map((node) => (
                      <SelectItem key={node.id} value={node.id}>
                        {node.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="type">Relationship</Label>
                <Select
                  value={edgeType}
                  onValueChange={(value) => setEdgeType(value as "positive" | "negative")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="positive">
                      Positive (+)
                    </SelectItem>
                    <SelectItem value="negative">
                      Negative (-)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button onClick={addEdge} className="w-full">
                <ArrowRightCircle className="h-4 w-4 mr-2" /> Add Connection
              </Button>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <Save className="h-4 w-4 mr-2" /> Save
            </Button>
            <Button variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" /> Export
            </Button>
          </div>
        </div>
        
        <div className="md:w-2/3 border rounded-lg bg-background p-2 relative min-h-[500px]">
          <svg width="100%" height="500" viewBox="0 0 600 500" className="bg-background">
            {/* Render edges */}
            {edges.map((edge) => {
              const source = nodes.find((n) => n.id === edge.source);
              const target = nodes.find((n) => n.id === edge.target);
              
              if (!source || !target) return null;
              
              // Calculate marker position for edge type indicator
              const dx = target.x - source.x;
              const dy = target.y - source.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              // Calculate midpoint
              const midX = source.x + dx * 0.5;
              const midY = source.y + dy * 0.5;
              
              return (
                <g key={edge.id}>
                  <line
                    x1={source.x}
                    y1={source.y}
                    x2={target.x}
                    y2={target.y}
                    stroke="currentColor"
                    strokeWidth={2}
                    markerEnd="url(#arrowhead)"
                    className="text-muted-foreground"
                  />
                  
                  {/* Edge type indicator */}
                  <circle
                    cx={midX}
                    cy={midY}
                    r={10}
                    className={edge.type === "positive" ? "fill-chart-1" : "fill-chart-3"}
                  />
                  
                  <text
                    x={midX}
                    y={midY}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="white"
                    fontSize={12}
                    fontWeight="bold"
                  >
                    {edge.type === "positive" ? "+" : "-"}
                  </text>
                </g>
              );
            })}
            
            {/* Render nodes */}
            {nodes.map((node) => (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={40}
                  className="fill-background stroke-border stroke-2"
                />
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={12}
                  className="fill-foreground"
                  style={{ maxWidth: "80px" }}
                >
                  {node.label}
                </text>
              </g>
            ))}
            
            {/* Arrow marker definition */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" className="fill-muted-foreground" />
              </marker>
            </defs>
          </svg>
          
          <div className="absolute top-4 right-4 space-y-2">
            <Button size="icon" variant="outline">
              <Plus className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline">
              <Minus className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline">
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-muted/50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">CLD Analysis</h3>
        <p className="text-sm text-muted-foreground">
          This diagram shows a reinforcing loop (R1) between social media usage, dopamine release, and addiction tendency. 
          The addiction negatively impacts both academic performance and sleep quality, while good sleep positively affects academic performance.
          This illustrates how screen addiction can create cascading negative effects.
        </p>
      </div>
    </div>
  );
}