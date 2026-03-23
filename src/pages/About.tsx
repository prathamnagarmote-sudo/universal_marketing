import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Globe, Leaf, Shield, Users, Cpu } from 'lucide-react';

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

/* ── Hero Banner ── */
function PageHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={ref} className="relative h-[60vh] min-h-[460px] flex items-center overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85"
          alt="Farmland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F3B63]/95 via-[#1F3B63]/80 to-[#1F3B63]/40" />
      </motion.div>

      {/* Animated decorative rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 right-20 w-72 h-72 border border-[#F2B705]/20 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-24 right-36 w-44 h-44 border border-[#3F7A3A]/30 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-10 right-1/3 w-60 h-60 rounded-full bg-[#F2B705]/10 blur-3xl hidden lg:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 text-white/60 text-sm mb-4"
        >
          <Link to="/" className="hover:text-[#F2B705] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#F2B705]">About Us</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl lg:text-7xl font-black text-white leading-tight"
        >
          About <span className="text-[#F2B705]">AgroTech</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/75 text-xl mt-4 max-w-xl leading-relaxed"
        >
          Two decades of powering modern agriculture with world-class machinery and unmatched expertise.
        </motion.p>
      </div>
    </section>
  );
}

/* ── Story Section — clean grid, no tilted images ── */
function OurStory() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Two straight images stacked in a clean grid */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Tall left image */}
            <div className="row-span-2 rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80"
                alt="Wheat field"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Top right image */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[220px]">
              <img
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&q=80"
                alt="Harvester"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom right image */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[224px]">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80"
                alt="Rice field"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right — Text content */}
          <div>
            <SectionTag label="Our Story" />
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl lg:text-5xl font-black text-[#1F3B63] leading-tight mb-6"
            >
              Building the Future of <span className="text-[#3F7A3A]">Agriculture</span> Since 1999
            </motion.h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              {[
                'AgroTech was founded in 1999 with a single mission: to bring world-class agricultural machinery to farmers and industrial plant operators everywhere.',
                'We specialise in rice mill machinery, industrial plant equipment and precision farming solutions — partnering with the world\'s most respected manufacturers to deliver performance-proven machinery.',
                'Our certified engineers provide end-to-end support from installation to after-sales maintenance, ensuring every machine performs at peak efficiency in your specific environment.',
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {[
                { value: '25+', label: 'Years Experience' },
                { value: '5,000+', label: 'Happy Clients' },
                { value: '30+', label: 'Countries Served' },
                { value: '150+', label: 'Machine Models' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1, type: 'spring', bounce: 0.3 }}
                  whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(31,59,99,0.12)' }}
                  className="bg-[#f8f9fa] rounded-xl p-4 border border-gray-100 text-center cursor-default"
                >
                  <p className="text-3xl font-black text-[#1F3B63]">{item.value}</p>
                  <p className="text-sm text-gray-500 font-semibold mt-1">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="mt-8"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(242,183,5,0.35)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 bg-[#1F3B63] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#F2B705] hover:text-[#1F3B63] transition-all duration-300 shadow-lg"
                >
                  Work With Us
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Values ── */
const values = [
  { icon: Shield, title: 'Quality Assured', desc: 'Every machine undergoes rigorous quality checks before delivery. ISO 9001:2015 certified across all our facilities.', color: '#1F3B63' },
  { icon: Globe, title: 'Global Reach', desc: 'Serving 30+ countries with localised support teams, spare parts hubs and service centres worldwide.', color: '#3F7A3A' },
  { icon: Leaf, title: 'Sustainable', desc: 'Committed to eco-friendly machinery and farming practices that protect soil health for future generations.', color: '#3F7A3A' },
  { icon: Cpu, title: 'Innovation First', desc: 'Continuously integrating IoT, GPS precision and AI-driven analytics into our equipment catalogue.', color: '#1F3B63' },
  { icon: Users, title: 'Client-Centric', desc: 'Dedicated account managers, 24/7 support lines and personalised consultation for every client.', color: '#F2B705' },
  { icon: Award, title: 'Award Winning', desc: 'Recognised with 18 international industry awards for excellence in agro machinery supply and innovation.', color: '#F2B705' },
];

function Values() {
  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <SectionTag label="Our Core Values" />
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl lg:text-6xl font-black text-[#1F3B63]"
          >
            What Drives <span className="text-[#3F7A3A]">Our Mission</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(31,59,99,0.1)' }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group cursor-pointer transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ backgroundColor: v.color + '18' }}
                >
                  <Icon className="w-7 h-7" style={{ color: v.color }} />
                </motion.div>
                <h3 className="text-xl font-black text-[#1F3B63] mb-3 group-hover:text-[#F2B705] transition-colors duration-300">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Milestones Timeline ── */
function Milestones() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const milestones = [
    { year: '1999', title: 'Company Founded', desc: 'Started as a small regional machinery dealer focused on rice mill and agro equipment.' },
    { year: '2005', title: 'International Expansion', desc: 'Entered European and Asian markets with localised service hubs and spare part centres.' },
    { year: '2012', title: 'ISO Certification', desc: 'Achieved ISO 9001:2015 certification across all our facilities worldwide.' },
    { year: '2018', title: 'Smart Farming Launch', desc: 'Launched our proprietary IoT precision farming and rice mill automation platform.' },
    { year: '2023', title: '5,000 Clients Milestone', desc: 'Reached 5,000 satisfied clients across 30+ countries in agro and industrial sectors.' },
    { year: '2025', title: 'AI Integration', desc: 'Integrated AI-powered diagnostics and yield prediction into all smart equipment lines.' },
  ];

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80" alt="Fields" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1F3B63]/92" />
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <SectionTag label="Our Journey" />
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl lg:text-6xl font-black text-white"
          >
            A Legacy of <span className="text-[#F2B705]">Excellence</span>
          </motion.h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#F2B705]/30 hidden lg:block" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, borderColor: 'rgba(242,183,5,0.6)' }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300"
                  >
                    <span className="text-[#F2B705] font-black text-2xl">{m.year}</span>
                    <h3 className="text-white font-bold text-lg mt-1">{m.title}</h3>
                    <p className="text-white/65 text-sm mt-1">{m.desc}</p>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: 'spring', bounce: 0.5 }}
                  className="w-5 h-5 rounded-full bg-[#F2B705] border-4 border-[#1F3B63] shadow-lg flex-shrink-0 hidden lg:block z-10"
                />
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHero />
      <OurStory />
      <Values />
      <Milestones />
    </>
  );
}
