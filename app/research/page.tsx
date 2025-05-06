import ResearchRepository from "@/components/research/research-repository";

export default function ResearchPage() {
  return (
    <div className="flex flex-col justify-center items-center align-center">
      <div className="border-b">
        <div className="container py-10">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Research Repository</h1>
          <p className="text-muted-foreground">
            Curated studies and articles on screen addiction causes and impacts.
          </p>
        </div>
      </div>

      <div className="container py-8">
        <ResearchRepository />
      </div>
    </div>
  );
}