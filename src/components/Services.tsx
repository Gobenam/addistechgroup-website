import { motion } from "framer-motion";
import { Cpu, Layers, Zap, CheckCircle2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { serviceImages } from "@/lib/siteContent";

const services = [
  {
    title: "Design",
    icon: <Cpu className="h-10 w-10 text-sky-400" />,
    image: serviceImages.design,
    description:
      "PCB design, schematics, embedded systems, and production-ready layouts tailored for efficiency.",
    example: "Sabean water meter PCB (compact, battery-powered, scalable)",
    items: [
      "Schematic Capture",
      "PCB Layout",
      "Embedded Firmware",
      "Signal Integrity",
    ],
  },
  {
    title: "Fabrication",
    icon: <Layers className="h-10 w-10 text-sky-400" />,
    image: serviceImages.fabrication,
    description:
      "Support for PCB manufacturing, Gerber file preparation, and seamless production coordination.",
    example: "Optimized Gerber preparation for high-yield manufacturing",
    items: [
      "DFM Analysis",
      "Gerber Generation",
      "Vendor Selection",
      "Quality Assurance",
    ],
  },
  {
    title: "Assembly",
    icon: <Zap className="h-10 w-10 text-sky-400" />,
    image: serviceImages.assembly,
    description:
      "High-precision electronics assembly and system-level integration for complete hardware solutions.",
    example: "AutoBell manufacturing (system-level integration)",
    items: [
      "SMT Assembly",
      "THT Soldering",
      "Enclosure Integration",
      "Final Testing",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter"
          >
            Our Engineering Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-sky-500 mx-auto rounded-full mb-6"
          />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            End-to-end hardware development, from initial concept to high-volume
            production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 hover:border-sky-500/50 group overflow-hidden bg-card/50 backdrop-blur-sm">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 z-10 rounded-xl border border-white/10 bg-slate-950/60 p-2 backdrop-blur-md">
                    {service.icon}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-500 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-sky-500/5 border border-slate-100 dark:border-sky-500/10">
                      <p className="text-xs font-bold text-sky-600 dark:text-sky-400 mb-1 uppercase tracking-widest">
                        Case Study
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                        {service.example}
                      </p>
                    </div>
                    <ul className="space-y-2.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <div className="flex-shrink-0">
                            <CheckCircle2 className="h-4 w-4 text-sky-500" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
