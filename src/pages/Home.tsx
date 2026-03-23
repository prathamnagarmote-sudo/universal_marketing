import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HomeSlider from '../components/HomeSlider';

/* ── Reusable animated section label ── */
function SectionTag({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 mb-4"
    >
      <span className="w-8 h-[3px] bg-[#F2B705] rounded-full" />
      <span className="text-[#F2B705] font-semibold uppercase tracking-widest text-sm">{label}</span>
    </motion.div>
  );
}

/* ── Info CONTACTS Bar ── */
function InfoBar() {
  return (
    <div className="bg-[#F2B705] relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#1F3B63]/20">
          {[
            { icon: '📞', text: '+91 9890776538' },
            { icon: '✉️', text: 'universalmarketing1218.com' },
            { icon: '📣', text: 'Nagpur,Maharashtra,India-440009' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 py-4 px-6 text-[#1F3B63] font-semibold text-sm"
            >
              <span className="text-lg">{item.icon}</span>
              {item.text}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


/* ── Product Slider ── */
function ProductSlider() {
  const productImages = [
    '/img 1.jpeg',
     '/img 2.jpeg',
      '/img 3.jpeg',
       '/img 4.jpeg',
        '/img 5.jpeg',
         '/img 6.jpeg',
          '/img 7.jpeg',
           '/img 8.jpeg',
            '/img 9.jpeg',
             '/img 10.jpeg',
              '/img 11.jpeg',
               '/img 12.jpeg',
                '/img 13.jpeg',
                 '/img 14.jpeg',
                  '/img 15.jpeg',
                   '/img 16.jpeg',
                    '/img 17.jpeg',
                     '/img 18.jpeg',
    
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <SectionTag label="Overview" />
        <h2 className="text-4xl font-black text-[#1F3B63]">Explore Our Machinery</h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...productImages, ...productImages].map((img, i) => (
            <div key={i} className="min-w-[300px] h-[220px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img src={img} alt="Product" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── About Teaser ── */
function AboutTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img
          src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80"
          alt="Farm aerial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1F3B63]/88" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTag label="Who We Are" />
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Trusted by Farmers <span className="text-[#F2B705]">Worldwide</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/75 text-lg leading-relaxed mb-8"
            >
              For over 25 years, AgroTech has been at the forefront of agricultural mechanisation,
              supplying premium equipment to farms, cooperatives and agri-businesses across 30+ countries.
            </motion.p>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(242,183,5,0.3)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 bg-[#F2B705] text-[#1F3B63] font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all duration-300"
              >
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HomeSlider />
      <InfoBar />
      <ProductSlider />
      <AboutTeaser />
    </>
  );
}