import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeSlider() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#1F3B63]">
        <img src="https://images.unsplash.com/photo-1607804707687-5e5cf991a6ac?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover opacity-60" />
      </div>
      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-7xl font-black text-white mb-6"
        >
          Powering <span className="text-[#F2B705]">Modern Agriculture</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-xl mb-10 max-w-2xl mx-auto"
        >
          High-performance machinery, expert engineering, and scalable farming solutions — transforming agriculture with cutting-edge technology.
        </motion.p>
        <Link to="/machines">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#F2B705] text-[#1F3B63] font-bold px-10 py-4 rounded-lg flex items-center gap-2 mx-auto"
          >
            Explore Equipment <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </div>
    </section>
  );
}