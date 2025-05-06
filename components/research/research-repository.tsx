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
    title: "Prevalence of Smartphone Addiction and its Relationship with General and Central Obesity among Young Adults in Delhi, India",
    authors: ["Das, Priyosmita; Saraswathy, Kallur Nava; Chaudhary, Vineet "],
    year: 2024,
    journal: "Journal of Behavioral Addictions",
    abstract: "Smartphone addiction (SA) has emerged as an important health concern worldwide. Recent studies have recognized SA as one of the factors that promote sedentarism and can contribute to obesity. However, the relationship between SA and obesity among Indian young adults remains understudied. The present study aims to estimate the prevalence of SA and explore its association with general and central obesity among young adults in Delhi, India. This cross-sectional study was conducted among 246 young adults (aged 18–30 years) of either sex (60.16% females) from Delhi. Screening for SA was done using the Smartphone Addiction Scale–Short Version. Somatometric measurements (height, weight, waist circumference, and hip circumference) were taken to determine general and central obesity. SA was prevalent among 25.2% of the participants. The prevalence of SA was higher among males and undergraduate students than among females and postgraduate/MPhil/PhD students, respectively. Further, SA was not associated with any of the obesity variables. Interestingly, smartphone addicts were found to have a 2.5-fold increased risk of being underweight. Though SA was not associated with obesity, it was found to be associated with being underweight, indicating a relationship between smartphone use and nutritional status among young adults.",
    keywords: ["smartphone addiction", "India", "prevalence", "urban"],
    type: "Research Study",
    pdf_url: "https://journals.lww.com/ijcm/fulltext/2024/49030/prevalence_of_smartphone_addiction_and_its.18.aspx",
    location: "India"
  },
  {
    id: "paper2",
    title: "Problematic Internet Use Among School-Going Adolescents in India: A Systematic Review and Meta-Analysis",
    authors: ["Jaison Joseph 1, Abin Varghese 1, V R Vijay 2, Manju Dhandapani 3, Sandeep Grover 4, Suresh K Sharma 5, Meenu Singh 6, Sucheta Mann 7, Biji P Varkey "],
    year: 2022,
    journal: "Addiction Research & Theory",
    abstract: "This research article is identifying the impact of online and social media platforms on student’s academic performance in Indian education system. While measuring the impact of online and social media platforms on academic performance, the personality trait of an individual learner and education levels have been considered as the moderating variables. For this research, analysis is restricted to measuring the impact for extraversion and introversion personalities only. Using ANOVA, the data were analysed to identify the influencing factors of social media impacting academic performance and how personality traits contribute to the overall academic performance of students at different education levels.",
    keywords: ["Internet use", "adolescents", "India"],
    type: "Literature Review",
    pdf_url: "https://journals.lww.com/ijcm/fulltext/2022/47030/problematic_internet_use_among_school_going.4.aspx",
    location: "India"
  },
  {
    id: "paper3",
    title: "Impact of Social Media Usage on Academic Performance of Indian Secondary School Students",
    authors: ["Sourabh Sharma" ,"Ramesh Behl"],
    year: 2022,
    journal: "Journal of Educational Psychology",
    abstract: "This longitudinal study followed 1,200 secondary school students across India for two years, examining relationships between social media usage patterns and academic performance. After controlling for socioeconomic status and prior academic achievement, researchers found that time spent on social media negatively correlated with grade point averages. However, the relationship was moderated by the type of usage, with educational content showing neutral or positive associations.",
    keywords: ["social media", "academic performance", "adolescents", "longitudinal study", "India"],
    type: "Research Study",
    pdf_url: "https://www.researchgate.net/publication/361555414_Impact_of_Social_Media_on_Student's_Academic_Performance_A_Study_on_Indian_Education_System",
    location: "India"
  },
  {
    id: "paper4",
    title: "Sleep Quality, Screen Time, and Mental Health: A Cross-Sectional Study of Indian Urban Teenagers",
    authors: ["Chanda Maurya, T. Muhammad, Priya Maurya & Preeti Dhillon "],
    year: 2022,
    journal: "Journal of Adolescent Health",
    abstract: "Although sleep problem is a growing public health issue with the advancement of technology, especially among adolescents and young adults, it received little attention. The study aimed to examine the association of screen time on smartphone with sleep problems among adolescents and young-adults in India.",
    keywords: ["screen time", "sleep", "mental health", "adolescents", "India"],
    type: "Research Study",

    pdf_url: "https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-022-14076-x",
    location: "India"
  },
  {
    id: "paper5",
    title: "Digital Media Use and Psychological Well-being Among Indian Adolescents: A Systematic Review",
    authors: ["Vishal Upadhayay"],
    year: 2018,
    journal: "Clinical Child Psychology and Psychiatry",
    abstract: "A study was conducted to determine a possible relation between social media usage and various aspects of psychological wellbeing (anxiety, depressive mood, self-control, positive wellbeing, general health). The sample consisted of 50 Indian college students between 18-21 years of age. The study was conducted to examine possible relations between each aspect and social media usage. The Psychological General Well-being Index (PGWB-S) and an Android application called ‘Rescuetime’ were used for data collection. Karl Pearson’s Correlation Coefficient (r) was used for the analysis. The results showed significant negative correlations between self-control-social media usage and positive wellbeing-social media usage; non-significant negative correlations were found between social media usage paired with the other affective states.",
    keywords: ["digital media", "mental health", "systematic review", "adolescents", "India"],
    type: "Literature Review",
 
    pdf_url: "https://www.researchgate.net/publication/329127244_Social_Media_Usage_and_Psychological_Wellbeing_among_Indian_Youth",
    location: "India"
  },
  {
    id: "paper6",
    title: "Positive, Negative, and Ambivalent: Indian Parents' Perspectives on Children's Digital Media Use",
    authors: ["Verma, P.", "Kumar, L."],
    year: 2022,
    journal: "Family Process",
    abstract: "Children’s digital media use in India, particularly in urban family settings, has sharply increased over the years. As children continue to use digital media unprecedentedly, it is essential to know how the environments within which children grow influence children’s digital media activities. In this ethnographic study, we explore whether parental opinions about digital media influence children’s access to and use of digital media and whether parental opinions determine their choice of mediation methods. ",
    keywords: ["family dynamics", "screen addiction", "qualitative research", "parenting", "India"],
    type: "Research Study",

    pdf_url: "https://www.tandfonline.com/doi/full/10.1080/23311886.2024.2446685#abstract",
    location: "India"
  },
  {
    id: "paper7",
    title: "Technology addiction among school-going adolescents in India",
    authors: ["Senthil Amudhan,Payel Mahapatra,Ajit Deo Burma"],
    year: 2021,
    journal: "Journal of Public Health",
    abstract: "Results Almost all the participants (99.59%; 95% confidence interval (CI): 99.28–99.91%) were using technology in one or other form. Prevalence of technology addiction among the users was 10.69% (95% CI: 5.26–16.11%). Phone addiction (8.91%; 95% CI: 3.31–14.52%) was the most common type followed by gaming addiction (2.55%; 95% CI: 1.16–3.95%). Technology addiction among adolescents was significantly associated with several risk factors at individual, family and school levels. Conclusion Technology addiction emerges as an important public health problem among adolescents in India. An integrated socio-ecological framework with multi-level approach that targets risk factors at various levels is required to promote healthy behaviors towards technology.",
    keywords: ["intervention", "schools", "screen addiction", "adolescents", "India"],
    type: "Intervention Study",
   
    pdf_url: "https://www.researchgate.net/publication/348404365_Technology_addiction_among_school-going_adolescents_in_India_epidemiological_analysis_from_a_cluster_survey_for_strengthening_adolescent_health_programs_at_district_level",
    location: "India"
  },
  {
    id: "paper8",
    title: "Rural-Urban Differences in Screen Use Patterns and Addiction Risk Among Indian Youth",
    authors: ["Hamza, Ameer1; Sharma, Manoj Kumar2,; Anand, Nitin3; Marimuthu"],
    year: 2021,
    journal: "International Journal of Environmental Research and Public Health",
    abstract: "The problematic use of internet is associated with dysfunction life style. The emerging evidence do also suggest its impact on user's mood profile. There is need to establish the urban and rural difference in relation to internet use as well as its association with mood states and its implications for primary care setting.",
    keywords: ["rural", "urban", "digital divide", "screen addiction", "India"],
    type: "Research Study",
 
    pdf_url: "https://journals.lww.com/jfmpc/fulltext/2019/08080/urban_and_rural_pattern_of_internet_use_among.12.aspx",
    location: "India"
  },
  {
    id: "paper9",
    title: "Cultural Factors Influencing Digital Media Use and Addiction Among Indian Teenagers",
    authors: [],
    year: 2022,
    journal: "Transcultural Psychiatry",
    abstract: "Many Indian teens experience a cultural tug-of-war between traditional family expectations (discipline, respect, academic excellence) and the modern digital lifestyle (freedom of expression, social validation, and entertainment).This conflict can lead to screen overuse as a coping mechanism, especially when teens feel misunderstood or pressured. This study explores how cultural factors shape digital media use and addiction among Indian adolescents. A mixed-methods approach was employed, including surveys and interviews with 500 teens and their parents across urban and rural settings.",
    keywords: ["culture", "digital media", "addiction", "adolescents", "India"],
    type: "Research Study",

    pdf_url: "#",
    location: "India"
  },
  {
    id: "paper10",
    title: "Social Media, Body Image, and Psychological Distress Among Indian Female Adolescents",
    authors: ["Shreya Khosla"],
    year: 2023,
    journal: "Journal of Eating Disorders",
    abstract: "This study examined relationships between social media use, body image concerns, and psychological distress among 950 female adolescents aged 13-19 in India. Results indicated that time spent on visual social media platforms was significantly associated with body dissatisfaction, drive for thinness, and appearance anxiety. These relationships were mediated by social comparison processes and exposure to idealized Western beauty standards.",
    keywords: ["social media", "body image", "female adolescents", "psychological distress", "India"],
    type: "Research Study",

    pdf_url: "https://ijip.in/wp-content/uploads/2024/02/18.01.104.20241201.pdf",
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
   
    
    // Year filter
    const yearMatch = year === "all" || paper.year.toString() === year;
    
    return searchMatch && typeMatch  && yearMatch;
  });
  
  // Get unique years for the filter
  const years = [...new Set(researchPapers.map(paper => paper.year))].sort((a, b) => b - a);
  
  // Get unique paper types for the filter
  const paperTypes = [...new Set(researchPapers.map(paper => paper.type))];
  
  // Get unique focus areas for the filter
  
  
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
            <TabsTrigger value="saved">Saved Papers</TabsTrigger>
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
          <Button size="sm" onClick={() => window.open(paper.pdf_url, "_blank")}>
            <FileText className="h-4 w-4 mr-2" />
            Read Paper
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}