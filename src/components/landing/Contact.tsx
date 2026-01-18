import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              Emergency Slab Leak Detection in Naperville
              <span className="text-blue-600 block">Call Us Today</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Don't wait until the damage gets worse. We offer 24/7 service for slab leaks.
              Schedule your free assessment now.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+18777921410"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-sm text-slate-500 block">24/7 Emergency Line</span>
                  <span className="font-heading font-bold text-xl text-slate-900">(877) 792-1410</span>
                </div>
              </a>

              <a
                href="mailto:info@pickpoynt.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-sm text-slate-500 block">Email Us</span>
                  <span className="font-heading font-bold text-slate-900">info@pickpoynt.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-sm text-slate-500 block">Service Area</span>
                  <span className="font-heading font-semibold text-slate-900">Naperville & DuPage County</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-sm text-slate-500 block">Business Hours</span>
                  <span className="font-heading font-semibold text-slate-900">24 Hours / 7 Days a Week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              Request Immediate Assistance
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-900 block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-900 block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-slate-900 block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="(630) 555-0000"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-900 block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-900 block mb-2">
                  Tell Us About Your Issue
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Describe the symptoms (e.g., warm floor, high water bill)..."
                />
              </div>

              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Request Callback
              </Button>

              <p className="text-xs text-slate-500 text-center">
                Your information is secure. We never share your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
