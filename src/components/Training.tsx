import { motion } from "framer-motion";
import { BookOpen, Terminal, Code, Cpu } from "lucide-react";

const Training = () => {
  const points = [
    { icon: <Terminal className="h-5 w-5" />, text: "Embedded Systems Mastery" },
    { icon: <Cpu className="h-5 w-5" />, text: "IoT Hardware Development" },
    { icon: <Code className="h-5 w-5" />, text: "Real-world Engineering Skills" },
  ];

  return (
    <section id="training" className="py-24 overflow-hidden bg-slate-950 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-8">
              <BookOpen className="h-4 w-4" />
              Addis Training
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Building Ethiopia’s Next Generation of <span className="text-sky-500">Engineers</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Our ESP32 program is more than a course — it's a technical ecosystem where local talent evolves into hardware experts. We bridge the gap between theory and industrial impact.
            </p>
            
            <div className="space-y-6 mb-12">
              {points.map((point) => (
                <div key={point.text} className="flex items-center gap-4 group">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    {point.icon}
                  </div>
                  <span className="text-lg text-slate-300 font-medium">{point.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ce2af6ba-3d88-4c27-8323-b8cfd05759f6/addis-training-esp32-fc450023-1776173807974.webp" 
                alt="Ethiopian engineers learning ESP32" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="text-white font-bold text-lg mb-1 italic">"The future of Ethiopian hardware starts here."</p>
                <p className="text-slate-400 text-sm">— Addis Tech Academy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Training;