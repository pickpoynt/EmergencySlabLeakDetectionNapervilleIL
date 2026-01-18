import { AlertTriangle, Droplets, Ear, Thermometer, ShieldCheck, CheckCircle2 } from "lucide-react";

const warningSignsData = [
  {
    icon: Droplets,
    title: "Unexplained High Water Bill",
    description: "A sudden spike in your water bill without increased usage is the most common sign of a hidden slab leak.",
  },
  {
    icon: Thermometer,
    title: "Hot Spots on Floor",
    description: "If a specific area of your floor feels unusually warm, a hot water line under the slab might be leaking.",
  },
  {
    icon: Ear,
    title: "Sound of Running Water",
    description: "Hearing the sound of water running when no faucets are on? This often indicates a leak beneath your foundation.",
  },
];

const benefitsData = [
  "Prevent irreversible foundation damage",
  "Stop mold and mildew growth immediately",
  "Significantly lower your monthly water bills",
  "Avoid major, destructive excavation later",
  "Maintain your home's structural integrity",
  "Peace of mind with a detailed leak report",
];

const SlabLeakInfo = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-4">
            Know the Signs
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Is Your Foundation at Risk of a Slab Leak?
          </h2>
          <p className="text-gray-300 text-lg">
            Slab leaks occur when pipes beneath your home's concrete foundation fail.
            Left undetected, they can compromise the structural integrity of your entire house.
          </p>
        </div>

        {/* Warning Signs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {warningSignsData.map((sign, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-900/50 flex items-center justify-center mb-6">
                <sign.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                {sign.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {sign.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-800 rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-blue-500" />
              <h3 className="text-2xl font-heading font-bold text-white">
                Why Act Fast?
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Water pressure and shifting soil can cause copper pipes under your slab to fail.
              The water eroding the soil creates a void, leading to foundation settling and cracks.
            </p>
            <p className="text-gray-400 leading-relaxed">
              In Naperville and the surrounding DuPage County area, soil composition shifts can exacerbate these issues.
              Early detection is critical to saving your foundation and avoiding tens of thousands in repairs.
            </p>
          </div>

          <div className="bg-blue-900/20 border border-blue-800 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              Benefits of Professional Detection
            </h3>
            <ul className="space-y-4">
              {benefitsData.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm rounded-full px-8 py-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400" />
            <span className="text-white font-medium text-lg">
              Suspect a leak? We offer free phone consultations for Naperville homeowners.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlabLeakInfo;
