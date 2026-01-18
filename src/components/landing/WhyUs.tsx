import { Shield, Users, ThumbsUp, Clock, DollarSign, Hammer } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Family-Owned & Operated",
    description: "Three generations of Akron plumbers. We treat your home like our own.",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Our copper and PEX installations are backed by industry-leading warranties.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees. Get a detailed quote before any work begins.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most whole-house repiping completed in 1-2 days with minimal disruption.",
  },
  {
    icon: ThumbsUp,
    title: "500+ 5-Star Reviews",
    description: "Summit County's highest-rated pipe replacement specialists.",
  },
  {
    icon: Hammer,
    title: "Clean Work Sites",
    description: "We protect your floors, patch drywall, and leave your home spotless.",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-copper/10 rounded-full text-copper text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Akron, Ohio's Most Trusted
              <span className="text-gradient-copper block">Galvanized Pipe Replacement Experts</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Since 1985, we've helped over 5,000 Akron families upgrade from outdated galvanized 
              pipes to modern, reliable plumbing. Our commitment to quality craftsmanship and 
              honest service has made us the region's go-to specialists.
            </p>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">5,000+</span>
                <span className="text-sm text-muted-foreground">Homes Served</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">40+</span>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="w-px h-16 bg-border" />
              <div className="text-center">
                <span className="text-4xl font-heading font-bold text-copper block">A+</span>
                <span className="text-sm text-muted-foreground">BBB Rating</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-copper/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
