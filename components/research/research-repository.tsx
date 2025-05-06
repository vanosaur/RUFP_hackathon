"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  FileText,
  Download,
  BookOpen,
  Bookmark,
  Calendar,
  User,
  Tag,
  Filter,
  ExternalLink
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const researchPapers = [
  {
    id: "paper1",
    title: "Prevalence and Predictors of Smartphone Addiction among Indian Adolescents",
    authors: ["Sharma, R.", "Patel, A.", "Kumar, S."],
    year: 2022,
    journal: "Journal of Behavioral Addictions",
    abstract: "This cross-sectional study examined smartphone addiction prevalence among 2,500 Indian teenagers aged 13-19 across five major cities. Using the Smartphone Addiction Scale-Short Version (SAS-SV), researchers found 41.3% of participants met criteria for high risk of addiction, with significantly higher rates among urban adolescents and those from higher socioeconomic backgrounds. Key predictors included parental smartphone habits, academic pressure, and social anxiety.",
    keywords: ["smartphone addiction", "adolescents", "India", "prevalence", "urban"],
    type: "Research Study",
    focus: "Prevalence",
    pdf_url: "#",
    location: "India"
  },
  {
    id: "paper2",
    title: "Psychological and Neurobiological Mechanisms of Gaming Addiction in Indian Youth",
    authors: ["Mehta, V.", "Singh, J.", "Chauhan, P."],
    year: 2021,
    journal: "Addiction Research & Theory",
    abstract: "This review synthesizes findings from neuroimaging studies on gaming addiction among Indian adolescents. Results show structural and functional alterations in brain regions associated with reward processing, executive function, and impulse control. The paper highlights how cultural factors specific to India, including academic pressure and family expectations, interact with neurobiological vulnerabilities to increase addiction risk.",
    keywords: ["gaming addiction", "neurobiology", "adolescents", "India", "fMRI"],
    type: "Literature Review",
    focus: "Neuroscience",
    pdf_url: "#",
    location: "India"
  },
  {
    id: "paper3",
    title: "Impact of Social Media Usage on Academic Performance of Indian Secondary School Students",
    authors: ["Gupta, N.", "Rao, T."],
    year: 2022,
    journal: "Journal of Educational Psychology",
    abstract: "This longitudinal study followed 1,200 secondary school students across India for two years, examining relationships between social media usage patterns and academic performance. After controlling for socioeconomic status and prior academic achievement, researchers found that time spent on social media negatively correlated with grade point averages. However, the relationship was moderated by the type of usage, with educational content showing neutral or positive associations.",
    keywords: ["social media", "academic performance", "adolescents", "longitudinal study", "India"],
    type: "Research Study",
    focus: "Educational Impact",
    pdf_url: "#",
    location: "India"
  },
  {
    id: "paper4",
    title: "Sleep Quality, Screen Time, and Mental Health: A Cross-Sectional Study of Indian Urban Teenagers",
    authors: ["Joshi, A.", "Desai, M.", "Pillai, R."],
    year: 2023,
    journal: "Journal of Adolescent Health",
    abstract: "This study examined relationships between screen time, sleep quality, and mental health symptoms among 1,800 teenagers in six Indian metropolitan cities. Using validated questionnaires and one-week sleep diaries, researchers found that nighttime screen use was associated with delayed sleep onset, reduced sleep duration, and increased symptoms of depression and anxiety. The effect was strongest for social media use in the two hours before bedtime.",
    keywords: ["screen time", "sleep", "mental health", "adolescents", "India"],
    type: "Research Study",
    focus: "Health Impact",
    pdf_url: "#",
    location: "India"
  },
  {
    id: "paper5",
    title: "Digital Media Use and Psychological Well-being Among Indian Adolescents: A Systematic Review",
    authors: ["Kapoor, S.", "Ahmed, F."],
    year: 2021,
    journal: "Clinical Child Psychology and Psychiatry",
    abstract: "This systematic review analyzed 42 studies published between 2010-2020 examining relationships between digital media use and psychological well-being among Indian adolescents. The review found consistent associations between excessive social media and gaming with increased depression, anxiety, and loneliness. Protective factors included parental mediation, physical activity, and having clear technology usage boundaries.",
    keywords: ["digital media", "mental health", "systematic review", "adolescents", "India"],
    type: "Literature Review",
    focus: "Mental Health",
    pdf_url: "#",
    location: "India"
  },
  {
    id: "paper6",
    title: "Family Dynamics and Screen Addiction: A Qualitative Study of Indian Households",
    authors: ["Verma, P.", "Kumar, L."],
    year: 2022,
    journal: "Family Process",
    abstract: "This qualitative study explored how family dynamics contribute to or protect against screen addiction among Indian teenagers. Through in-depth interviews with 45 families, researchers identified key themes including parental modeling, communication patterns, and cultural attitudes toward technology. Findings suggest that authoritarian parenting styles combined with high academic expectations create environments where screen addiction is more likely to develop.",
    keywords: ["family dynamics", "screen addiction", "qualitative research", "parenting", "India"],
    type: "Research Study",
    focus: "Family Factors",
    pdf_url: "#",
    location: "India"
  },
  {
    id: "paper7",
    title: "Effectiveness of School-Based Interventions for Reducing Screen Addiction Among Indian Adolescents",
    authors: ["Nair, S.", "Krishnan, V.", "Menon, P."],
    year: 2023,
    journal: "Journal of School Health",
    abstract: "This randomized controlled trial evaluated the effectiveness of a comprehensive school-based intervention program for reducing problematic screen use among 1,400 adolescents across 12 schools in India. The six-month intervention included curriculum components, policy changes, and parent engagement. Post-intervention, the treatment group showed significant reductions in screen time, problematic usage patterns, and addiction symptoms compared to control schools.",
    keywords: ["intervention", "schools", "screen addiction", "adolescents", "India"],
    type: "Intervention Study",
    focus: "Interventions",
    pdf_url: "#",
    location: "India"
  },
  {
    id: "paper8",
    title: "Rural-Urban Differences in Screen Use Patterns and Addiction Risk Among Indian Youth",
    authors: ["Reddy, K.", "Sharma, S."],
    year: 2021,
    journal: "International Journal of Environmental Research and Public Health",
    abstract: "This comparative study examined differences in screen use patterns between rural and urban Indian adolescents (N=1,860). While smartphone ownership was lower in rural areas, rural adolescents who owned devices showed higher addiction scores and less parental monitoring. Urban teenagers reported more diverse usage patterns and greater social media engagement, while rural teenagers reported more gaming and entertainment consumption.",
    keywords: ["rural", "urban", "digital divide", "screen addiction", "India"],
    type: "Research Study",
    focus: "Demographics",
    pdf_url: "#",
    location: "India"
  },
  {
    id: "paper9",
    title: "Cultural Factors Influencing Digital Media Use and Addiction Among Indian Teenagers",
    authors: ["Bajaj, R.", "Iyer, P."],
    year: 2022,
    journal: "Transcultural Psychiatry",
    abstract: "This mixed-methods study explored how cultural factors shape digital media use and addiction patterns among Indian teenagers. Through surveys (N=1,200) and focus groups (N=80), researchers identified uniquely Indian factors including family honor (izzat), academic achievement pressure, gender role expectations, and collectivist values that influence how technologies are used and when usage becomes problematic.",
    keywords: ["culture", "digital media", "addiction", "adolescents", "India"],
    type: "Research Study",
    focus: "Cultural Factors",
    pdf_url: "#",
    location: "India"
  },
  {
    id: "paper10",
    title: "Social Media, Body Image, and Psychological Distress Among Indian Female Adolescents",
    authors: ["Malhotra, A.", "Sen, D."],
    year: 2023,
    journal: "International Journal of Eating Disorders",
    abstract: "This study examined relationships between social media use, body image concerns, and psychological distress among 950 female adolescents aged 13-19 in India. Results indicated that time spent on visual social media platforms was significantly associated with body dissatisfaction, drive for thinness, and appearance anxiety. These relationships were mediated by social comparison processes and exposure to idealized Western beauty standards.",
    keywords: ["social media", "body image", "female adolescents", "psychological distress", "India"],
    type: "Research Study",
    focus: "Mental Health",
    pdf_url: "#",
    location: "India"
  }
];

export default function ResearchRepository() {
  const [searchTerm, setSearchTerm] = useState("");
  const [paperType, setPaperType] = useState("all");
  const [focusArea, setFocusArea] = useState("all");
  const [year, setYear] = useState("all");
  
  // Filter papers based on search and filters
  const filteredPapers = researchPapers.filter(paper => {
    // Search term filter
    const searchMatch = 
      searchTerm === "" || 
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase())) ||
      paper.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Paper type filter
    const typeMatch = paperType === "all" || paper.type === paperType;
    
    // Focus area filter
    const focusMatch = focusArea === "all" || paper.focus === focusArea;
    
    // Year filter
    const yearMatch = year === "all" || paper.year.toString() === year;
    
    return searchMatch && typeMatch && focusMatch && yearMatch;
  });
  
  // Get unique years for the filter
  const years = [...new Set(researchPapers.map(paper => paper.year))].sort((a, b) => b - a);
  
  // Get unique paper types for the filter
  const paperTypes = [...new Set(researchPapers.map(paper => paper.type))];
  
  // Get unique focus areas for the filter
  const focusAreas = [...new Set(researchPapers.map(paper => paper.focus))];
  
  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by title, keywords, or authors..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" /> Advanced Filters
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="w-full sm:w-auto">
            <Select value={paperType} onValueChange={setPaperType}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Paper Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {paperTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full sm:w-auto">
            <Select value={focusArea} onValueChange={setFocusArea}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Focus Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Areas</SelectItem>
                {focusAreas.map(focus => (
                  <SelectItem key={focus} value={focus}>{focus}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full sm:w-auto">
            <Select value={year} onValueChange={setYear}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Publication Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map(year => (
                  <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {/* Research Papers */}
      <div>
        <h2 className="text-xl font-bold mb-4">
          Research Papers <span className="text-muted-foreground font-normal">({filteredPapers.length} results)</span>
        </h2>
        
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Papers</TabsTrigger>
            <TabsTrigger value="prevalence">Prevalence</TabsTrigger>
            <TabsTrigger value="impact">Impact Studies</TabsTrigger>
            <TabsTrigger value="interventions">Interventions</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            {filteredPapers.length > 0 ? (
              filteredPapers.map(paper => (
                <ResearchPaperCard key={paper.id} paper={paper} />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No research papers match your search criteria.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="prevalence" className="space-y-4">
            {filteredPapers.filter(paper => paper.focus === "Prevalence" || paper.focus === "Demographics").length > 0 ? (
              filteredPapers
                .filter(paper => paper.focus === "Prevalence" || paper.focus === "Demographics")
                .map(paper => (
                  <ResearchPaperCard key={paper.id} paper={paper} />
                ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No prevalence studies match your search criteria.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="impact" className="space-y-4">
            {filteredPapers.filter(paper => paper.focus === "Health Impact" || paper.focus === "Educational Impact" || paper.focus === "Mental Health").length > 0 ? (
              filteredPapers
                .filter(paper => paper.focus === "Health Impact" || paper.focus === "Educational Impact" || paper.focus === "Mental Health")
                .map(paper => (
                  <ResearchPaperCard key={paper.id} paper={paper} />
                ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No impact studies match your search criteria.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="interventions" className="space-y-4">
            {filteredPapers.filter(paper => paper.focus === "Interventions").length > 0 ? (
              filteredPapers
                .filter(paper => paper.focus === "Interventions")
                .map(paper => (
                  <ResearchPaperCard key={paper.id} paper={paper} />
                ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No intervention studies match your search criteria.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="reviews" className="space-y-4">
            {filteredPapers.filter(paper => paper.type === "Literature Review").length > 0 ? (
              filteredPapers
                .filter(paper => paper.type === "Literature Review")
                .map(paper => (
                  <ResearchPaperCard key={paper.id} paper={paper} />
                ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No review papers match your search criteria.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function ResearchPaperCard({ paper }: { paper: any }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{paper.title}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <User className="h-3.5 w-3.5 mr-1" />
              {paper.authors.join(", ")}
            </CardDescription>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge>{paper.type}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              {paper.year}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <div className="flex items-center text-sm mb-1">
            <BookOpen className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
            <span className="font-medium">{paper.journal}</span>
          </div>
          <p className="text-sm">{paper.abstract}</p>
        </div>
        
        <div className="flex items-center gap-1.5 flex-wrap">
          <Tag className="h-3.5 w-3.5 text-muted-foreground" />
          {paper.keywords.map((keyword: string, index: number) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {keyword}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge variant="outline">{paper.focus}</Badge>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Bookmark className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Read Paper
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}