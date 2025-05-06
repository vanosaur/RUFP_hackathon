import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function SystemArchtypes() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>System Archetypes</CardTitle>
          <CardDescription>
            Recurring patterns in the screen addiction system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none dark:prose-invert mb-6">
            <p>
              System archetypes are common patterns of behavior in complex systems. Identifying these
              patterns in screen addiction helps us recognize leverage points for intervention.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Fixes that Fail</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    <strong>Pattern:</strong> Short-term solutions that address symptoms actually worsen the
                    underlying problem over time.
                  </p>
                  <p>
                    <strong>Example in Screen Addiction:</strong> Parents restricting device access completely
                    often leads to teens finding workarounds or bingeing when restrictions are lifted. Similarly,
                    schools banning phones may reduce immediate distractions but doesn't address the underlying
                    dependency or teach healthy usage habits.
                  </p>
                  <p>
                    <strong>Insight:</strong> Solutions must address root causes of addiction rather than
                    simply restricting access, which may intensify the desire for screen time.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Shifting the Burden</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    <strong>Pattern:</strong> Addressing symptoms rather than fundamental solutions,
                    leading to atrophy of the system's ability to solve the core problem.
                  </p>
                  <p>
                    <strong>Example in Screen Addiction:</strong> Using screen time monitoring apps instead
                    of developing internal self-regulation. The dependency on external controls prevents
                    teenagers from developing their own ability to manage screen time and digital habits.
                  </p>
                  <p>
                    <strong>Insight:</strong> Effective solutions must build internal capacity for self-regulation
                    rather than relying exclusively on external controls.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Tragedy of the Commons</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    <strong>Pattern:</strong> Individual actors, acting in their own self-interest,
                    deplete a shared resource to everyone's detriment.
                  </p>
                  <p>
                    <strong>Example in Screen Addiction:</strong> Attention is the commons being depleted.
                    Tech companies compete intensely for teenage attention, each optimizing their own
                    platforms to capture more engagement. Collectively, this depletes teenagers' available
                    attention for education, physical activities, and face-to-face social interaction.
                  </p>
                  <p>
                    <strong>Insight:</strong> Industry-wide standards and regulations may be necessary since
                    individual companies have limited incentive to reduce engagement.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Success to the Successful</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    <strong>Pattern:</strong> Resources flow to successful elements, further enhancing
                    their success while starving other elements.
                  </p>
                  <p>
                    <strong>Example in Screen Addiction:</strong> As teenagers spend more time on screens,
                    they develop digital skills and online relationships, making screen-based activities
                    more rewarding. Meanwhile, they may lose opportunities to develop offline skills and
                    relationships, making non-screen activities less rewarding. This creates a widening gap
                    in satisfaction between online and offline experiences.
                  </p>
                  <p>
                    <strong>Insight:</strong> Interventions must ensure that offline activities remain
                    sufficiently rewarding and accessible to compete with digital experiences.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Escalation</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>
                    <strong>Pattern:</strong> Parties react to each other's actions with intensifying
                    competitive responses.
                  </p>
                  <p>
                    <strong>Example in Screen Addiction:</strong> Social media platforms and game developers
                    compete for attention with increasingly engaging features. As one platform implements a
                    new engagement mechanism, others follow with their own versions. This escalates the
                    addictive potential of all platforms over time as they compete in an "engagement arms race."
                  </p>
                  <p>
                    <strong>Insight:</strong> Breaking this pattern requires changing the competitive landscape
                    through regulation or creating alternative success metrics beyond engagement time.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    );
  }