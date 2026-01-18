import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does galvanized pipe replacement cost in Akron?",
    answer: "The cost typically ranges from $2,000 to $15,000 depending on your home's size, pipe accessibility, and the extent of replacement needed. A single-story home with accessible pipes averages $4,000-$6,000, while multi-story homes or those requiring wall/floor access can range from $8,000-$15,000. We provide free, detailed estimates with no hidden fees."
  },
  {
    question: "How long does a full galvanized pipe replacement take?",
    answer: "Most residential galvanized pipe replacements take 2-5 days to complete. A simple, accessible replacement can be done in 1-2 days, while larger homes or complex jobs requiring drywall removal may take up to a week. We work efficiently to minimize disruption to your daily routine."
  },
  {
    question: "How do I know if my galvanized pipes need replacing?",
    answer: "Common signs include rusty or discolored water, low water pressure, frequent leaks, visible corrosion on exposed pipes, and homes built before 1960. If you're experiencing any of these issues, we recommend a free inspection to assess your pipe condition."
  },
  {
    question: "What materials do you use to replace galvanized pipes?",
    answer: "We primarily use copper and PEX (cross-linked polyethylene) piping. Copper offers excellent durability and a 50+ year lifespan. PEX is more affordable, flexible, and resistant to freezing. We'll recommend the best option based on your home's needs and budget."
  },
  {
    question: "Will my water be shut off during the replacement?",
    answer: "Yes, water service must be temporarily shut off during active work. However, we typically restore water at the end of each workday. For multi-day projects, you'll have water access overnight and during non-working hours."
  },
  {
    question: "Do you offer financing for pipe replacement?",
    answer: "Yes! We understand pipe replacement is a significant investment. We offer flexible financing options with approved credit, including 0% interest plans for qualified homeowners. Ask about our payment plans during your free estimate."
  },
  {
    question: "Is galvanized pipe replacement covered by homeowners insurance?",
    answer: "Generally, insurance covers damage caused by pipe failure (like water damage from a burst pipe) but not the replacement itself. However, every policy differs. We can provide documentation to support any claims, and many homeowners find the investment increases their property value."
  },
  {
    question: "Do I need permits for pipe replacement in Akron?",
    answer: "Yes, plumbing permits are required in Akron and Summit County. As licensed contractors, we handle all permit applications and inspections for you—it's included in our service at no extra charge."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Galvanized Pipe Replacement FAQ – Akron, OH
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Get answers to common questions about galvanized pipe replacement costs, timelines, and process in Akron and Summit County.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-steel/20 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-navy font-semibold hover:text-copper hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-steel leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-steel mb-4">Still have questions?</p>
          <a 
            href="tel:+18777921410" 
            className="text-copper font-semibold hover:text-copper-dark transition-colors text-lg"
          >
            Call us at (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
