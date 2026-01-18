import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a slab leak?",
    answer: "A slab leak is a plumbing leak that occurs in the water pipes running below the concrete foundation of your home. They are often caused by corrosion, improper installation, or shifting soil.",
  },
  {
    question: "Will you have to tear up my entire floor?",
    answer: "Not necessarily. We use non-invasive electronic detection to locate the exact spot. In many cases, we can reroute the pipe through the walls or ceiling, leaving your floor completely untouched. If we do need to access the slab, it will be a small, precise opening.",
  },
  {
    question: "Does homeowners insurance cover slab leaks?",
    answer: "In most cases, homeowners insurance covers the cost of the 'tear-out' and 'build-back' (accessing the leak and fixing the floor), but may not cover the cost of the plumbing repair itself. We can help guide you through the process with your insurance company.",
  },
  {
    question: "How do I know if I have a slab leak?",
    answer: "Common signs include high water bills, the sound of running water when taps are off, damp spots on floors or carpets, low water pressure, and cracks in your walls or flooring.",
  },
  {
    question: "How long does the repair take?",
    answer: "Most slab leak repairs or reroutes can be completed in 1 to 2 days, depending on the complexity and location of the leak.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-slate-50" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">
            Got questions about slab leaks? We have answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
