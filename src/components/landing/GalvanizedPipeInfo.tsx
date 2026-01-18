import { AlertTriangle, Droplets, Clock, Shield, CheckCircle2 } from "lucide-react";

const warningSignsData = [
  {
    icon: Droplets,
    title: "Rusty or Discolored Water",
    description: "Brown, yellow, or orange water coming from your taps is a clear sign of corroding galvanized pipes releasing rust into your water supply.",
  },
  {
    icon: AlertTriangle,
    title: "Low Water Pressure",
    description: "Mineral deposits and corrosion buildup inside galvanized pipes gradually restrict water flow, causing noticeably weaker pressure throughout your home.",
  },
  {
    icon: Clock,
    title: "Pipes Over 40 Years Old",
    description: "Galvanized pipes typically last 40-50 years. If your Akron home was built before 1985, your pipes are likely due for replacement.",
  },
];

const benefitsData = [
  "Improved water quality and taste",
  "Restored water pressure throughout your home",
  "Elimination of lead and rust contamination risks",
  "Increased home value and marketability",
  "Prevention of costly water damage from pipe bursts",
  "Peace of mind with modern, durable piping",
];

const GalvanizedPipeInfo = () => {
  return (
    <section id="pipe-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Understanding Your Pipes
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            The Hidden Dangers of Galvanized Pipes in Akron Homes
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Many Akron homes built before 1960 still have galvanized steel pipes. While durable when new, 
            these pipes corrode from the inside out, creating serious health and plumbing concerns.
          </p>
        </div>

        {/* Warning Signs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {warningSignsData.map((sign, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-copper/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <sign.icon className="w-7 h-7 text-copper" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {sign.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {sign.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Why Replace Galvanized Pipes?
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Galvanized pipes were the standard in American homes from the 1930s to 1960s. 
              The zinc coating that once protected them wears away over time, leaving steel 
              exposed to corrosion. This leads to restricted water flow, contaminated water, 
              and eventually, pipe failure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In Summit County, many historic neighborhoods like Highland Square, Firestone Park, 
              and Goodyear Heights still have original galvanized plumbing. If you're experiencing 
              water quality issues, it's time to consider a full repipe with modern copper or PEX piping.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              Benefits of Modern Pipe Replacement
            </h3>
            <ul className="space-y-4">
              {benefitsData.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90 text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-8 py-4">
            <AlertTriangle className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Not sure if you have galvanized pipes? We offer free inspections for Akron homeowners.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalvanizedPipeInfo;
