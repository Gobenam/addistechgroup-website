import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const brandTurquoise = "#00e0d1";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/ce2af6ba-3d88-4c27-8323-b8cfd05759f6/hero-tech-background-2dd73964-1776173806946.webp"
          alt="High-tech engineering laboratory"
          className="w-full h-full object-cover opacity-30 grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* <span 
            className="inline-block py-1 px-3 rounded-full text-xs font-black tracking-widest uppercase mb-6 border"
            style={{ 
              backgroundColor: `${brandTurquoise}1a`, 
              color: brandTurquoise,
              borderColor: `${brandTurquoise}33`
            }}
          >
            Pioneering Deep Tech in Ethiopia
          </span> */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[1.1]">
            Engineering Ethiopia’s <br />
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r"
              style={{ backgroundImage: `linear-gradient(to right, ${brandTurquoise}, #3b82f6, #6366f1)` }}
            >
              Smart Future
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            We design, prototype, and assemble intelligent hardware and IoT systems in Ethiopia — 
            built by local engineers for real-world impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-slate-950 rounded-full px-10 py-7 text-lg font-black transition-all shadow-lg uppercase tracking-tight"
              style={{ 
                backgroundColor: brandTurquoise,
                boxShadow: `0 10px 15px -3px ${brandTurquoise}33`
              }}
              onClick={() => navigate("/services")}
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-700 text-slate-300 rounded-full px-10 py-7 text-lg font-black transition-all uppercase tracking-tight"
              style={{ borderColor: '', color: '' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = brandTurquoise;
                e.currentTarget.style.color = brandTurquoise;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.color = '';
              }}
              onClick={() => navigate("/products")}
            >
              View Products
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => navigate("/services")}
      >
        <ChevronDown 
          className="h-8 w-8 text-slate-500 transition-colors" 
          onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise}
          onMouseLeave={(e) => e.currentTarget.style.color = ''}
        />
      </motion.div>
    </section>
  );
};

export default Hero;