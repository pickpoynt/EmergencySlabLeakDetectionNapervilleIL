import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Construction, Drill, Droplets } from "lucide-react";

const services = [
  {
    title: "Electronic Leak Detection",
    description: "We use advanced acoustic and thermal imaging technology to pinpoint the exact location of your slab leak without damaging your floors.",
    icon: Search,
  },
  {
    title: "Minimally Invasive Repair",
    description: "Our direct access repairs involve precise concrete cutting, repairing the specific pipe section, and restoring the concrete surface perfectly.",
    icon: Drill,
  },
  {
    title: "Pipe Rerouting",
    description: "Sometimes the best solution is to reroute the plumbing through the ceiling or walls, eliminating the need to break the slab entirely.",
    icon: Construction,
  },
  {
    title: "Water Damage Mitigation",
    description: "Leak under your foundation? We assess moisture levels and help dry out the affected areas to prevent mold execution.",
    icon: Droplets,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold mb-2 block uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Comprehensive Slab Leak Solutions
          </h2>
          <p className="text-slate-600">
            From detection to restoration, we handle every aspect of your slab leak problem with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
