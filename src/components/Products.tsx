import { motion } from "framer-motion";
import {
  Cloud,
  Activity,
  Camera,
  Lock,
  Wifi,
  Droplets,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { productImages } from "@/lib/siteContent";

const products = {
  addisThings: {
    title: "AddisThings",
    subtitle: "Centralized IoT Platform",
    description:
      "A comprehensive ecosystem for monitoring and automation, bringing smart capabilities to homes and industries.",
    image: productImages.addisThings,
    devices: [
      { name: "AddisLight", icon: <Zap className="h-5 w-5" /> },
      { name: "AddisCam", icon: <Camera className="h-5 w-5" /> },
      { name: "AddisLock", icon: <Lock className="h-5 w-5" /> },
      { name: "AddisRouter", icon: <Wifi className="h-5 w-5" /> },
      { name: "WaterMeter", icon: <Droplets className="h-5 w-5" /> },
      { name: "PowerMeter", icon: <Activity className="h-5 w-5" /> },
    ],
  },
  addisMedical: {
    title: "Addis Medical",
    subtitle: "Healthcare Innovation",
    description:
      "Cutting-edge medical hardware designed for accessibility and precision in the digital age.",
    image: productImages.addisMedical,
    devices: [
      { name: "AddisHearing", detail: "Digital hearing aid" },
      { name: "AddisAudioMeter", detail: "Audio testing device" },
    ],
  },
};

const Products = () => {
  return (
    <section id="products" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Product Innovation
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-sky-500 mx-auto rounded-full mb-6"
          />
        </div>

        <div className="space-y-24">
          {/* AddisThings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="h-8 w-8 text-sky-500" />
                <h3 className="text-3xl md:text-4xl font-bold">
                  {products.addisThings.title}
                </h3>
              </div>
              <p className="text-xl text-sky-600 dark:text-sky-400 font-semibold mb-6">
                {products.addisThings.subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                {products.addisThings.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {products.addisThings.devices.map((device) => (
                  <div
                    key={device.name}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800"
                  >
                    <div className="text-sky-500">{device.icon}</div>
                    <span className="font-medium text-sm">{device.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={products.addisThings.image}
                  alt="AddisThings IoT Ecosystem"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Addis Medical */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={products.addisMedical.image}
                  alt="Addis Medical Devices"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <Activity className="h-8 w-8 text-sky-500" />
                <h3 className="text-3xl md:text-4xl font-bold">
                  {products.addisMedical.title}
                </h3>
              </div>
              <p className="text-xl text-sky-600 dark:text-sky-400 font-semibold mb-6">
                {products.addisMedical.subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                {products.addisMedical.description}
              </p>
              <div className="space-y-4">
                {products.addisMedical.devices.map((device) => (
                  <div
                    key={device.name}
                    className="flex justify-between items-center p-5 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800"
                  >
                    <span className="font-bold text-lg">{device.name}</span>
                    <Badge
                      variant="secondary"
                      className="bg-sky-500/10 text-sky-500 border-sky-500/20"
                    >
                      {device.detail}
                    </Badge>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
