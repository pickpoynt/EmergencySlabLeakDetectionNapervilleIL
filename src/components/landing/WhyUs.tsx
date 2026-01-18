import { BadgeCheck, Users, Wallet, Timer } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Non-Invasive Technology",
    description: "We use the latest acoustic and gas tracing tech to find leaks without destroying your property.",
  },
  {
    icon: Users,
    title: "Naperville Experts",
    description: "Our technicians live and work in the Naperville area and understand local plumbing and soil conditions.",
  },
  {
    icon: Wallet,
    title: "Upfront Pricing",
    description: "No hourly guessing games. We provide a clear, flat-rate price for detection and repair before we start.",
  },
  {
    icon: Timer,
    title: "Rapid Response",
    description: "Slab leaks can't wait. We prioritize emergency calls to minimize water damage to your home.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Choose PickPoynt?
          </h2>
          <p className="text-slate-600 text-lg">
            We combine cutting-edge technology with old-fashioned customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-slate-50 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
