import { motion } from "framer-motion";
import { TrendingUp, Users, Wrench, Factory } from "lucide-react";

const impacts = [
  {
    title: "Import Substitution",
    description: "Developing local alternatives to imported electronics, reducing capital flight.",
    icon: <Factory className="h-8 w-8 text-sky-500" />,
    stat: "Reducing reliance on imports",
  },
  {
    title: "Job Creation",
    description: "Creating high-value technical jobs for Ethiopia's growing engineering talent pool.",
    icon: <Users className="h-8 w-8 text-sky-500" />,
    stat: "Empowering local talent",
  },
  {
    title: "Local Capacity",
    description: "Building a self-sustaining ecosystem for hardware design and manufacturing.",
    icon: <Wrench className="h-8 w-8 text-sky-500" />,
    stat: "Strengthening tech sovereignty",
  },
  {
    title: "Industrial Digitization",
    description: "Driving Ethiopia's Industry 4.0 transition through smart IoT integration.",
    icon: <TrendingUp className="h-8 w-8 text-sky-500" />,
    stat: "Accelerating digital growth",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Driving Impact</h2>
          <p className="text-slate-500 text-lg">Measurable change for Ethiopia’s industrial landscape.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-sky-50 dark:bg-sky-500/10 w-fit group-hover:text-white transition-all text-sky-600 dark:text-sky-400">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-sky-500 uppercase tracking-widest">{item.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;