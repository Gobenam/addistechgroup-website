import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

const specialties = ["PCB Design", "Embedded Firmware", "Hardware Prototyping", "IoT Integration"];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Who We Are</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              Addis Tech Group is an Ethiopian deep-tech company focused on PCB design, 
              embedded systems, and IoT solutions. We believe in the power of local 
              innovation to solve global challenges.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <Target className="h-8 w-8 text-sky-500 mb-4" />
                <h4 className="font-bold text-lg mb-2">Our Mission</h4>
                <p className="text-sm text-slate-500">Strengthen Ethiopia’s hardware innovation ecosystem through local engineering.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <Eye className="h-8 w-8 text-sky-500 mb-4" />
                <h4 className="font-bold text-lg mb-2">Our Vision</h4>
                <p className="text-sm text-slate-500">Become a leading African hardware and IoT company, recognized globally for excellence.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck className="h-48 w-48" />
            </div>
            <h3 className="text-3xl font-bold mb-8">Our Specialties</h3>
            <div className="space-y-6">
              {specialties.map((specialty) => (
                <div key={specialty} className="flex items-center gap-4 group">
                  <div className="h-2 w-2 rounded-full bg-sky-500 group-hover:scale-150 transition-all" />
                  <span className="text-xl font-medium text-slate-300 group-hover:text-white transition-colors">{specialty}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;