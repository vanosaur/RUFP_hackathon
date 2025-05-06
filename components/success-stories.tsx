"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const stories = [
  {
    id: 1,
    title: "School-Based Digital Citizenship Program",
    location: "Delhi Public Schools Network",
    category: "Education",
    impact: "28% reduction in problematic screen use",
    summary: "Implementation of a comprehensive digital wellbeing curriculum across 16 schools resulted in measurable improvements in healthy technology use among students.",
    quote: "The program changed how I think about my phone use. I'm much more conscious of when and why I'm reaching for my device.",
    student: "Arjun K., 16",
    avatar: ""
  },
  {
    id: 2,
    title: "Weekend Outdoor Adventure Program",
    location: "Bangalore Community Initiative",
    category: "Community",
    impact: "65% of participants reported reduced gaming time",
    summary: "A city-wide initiative offering structured weekend outdoor activities created compelling alternatives to screen time for teenagers.",
    quote: "I used to game for hours every weekend. Now I look forward to the adventure program - it's more fun than any game.",
    student: "Priya S., 15",
    avatar: ""
  },
  {
    id: 3,
    title: "Family Digital Wellness Challenge",
    location: "Maharashtra Health Department",
    category: "Family",
    impact: "42% of families maintained new habits 6 months later",
    summary: "A month-long challenge for families to establish healthier technology boundaries and practices showed lasting impact beyond the program duration.",
    quote: "The structured approach helped our whole family reset our relationship with technology. The family conversations were eye-opening.",
    student: "Rohan T., 17",
    avatar: ""
  },
  {
    id: 4,
    title: "Teen Tech Mentors Program",
    location: "Chennai Schools Collective",
    category: "Peer Support",
    impact: "Mentors showed 52% improvement in self-regulation",
    summary: "Empowering teenagers as digital wellbeing mentors for younger students created positive change for both mentors and mentees.",
    quote: "Teaching others about healthy tech use made me much more aware of my own habits. I've completely changed how I use social media.",
    student: "Neha R., 16",
    avatar: ""
  }
];

export function SuccessStories() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Success Stories</CardTitle>
        <CardDescription>
          Evidence-based interventions showing real-world impact
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel className="w-full">
          <CarouselContent>
            {stories.map((story) => (
              <CarouselItem key={story.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{story.title}</CardTitle>
                          <CardDescription>{story.location}</CardDescription>
                        </div>
                        <Badge variant="outline">{story.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm">Impact</h4>
                        <p className="text-sm text-primary">{story.impact}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm">Summary</h4>
                        <p className="text-sm text-muted-foreground">{story.summary}</p>
                      </div>
                      
                      <div className="pt-4 border-t flex items-start space-x-4">
                        <Avatar>
                          <AvatarFallback>{story.student.split('')[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm italic">"{story.quote}"</div>
                          <div className="text-xs font-medium mt-1">{story.student}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
}