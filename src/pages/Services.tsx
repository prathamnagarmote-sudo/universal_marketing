import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tractor, Sprout, Wrench, PackageCheck, CheckCircle, ArrowRight, Cpu, Leaf } from 'lucide-react';

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

/* ── Hero ── */
function PageHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={ref} className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img
          src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=1920&q=85"
          alt="Tractor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F3B63]/95 to-[#1F3B63]/55" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[#F2B705]/10 blur-3xl hidden lg:block"
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
          <span className="text-[#F2B705]">Services</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl lg:text-7xl font-black text-white leading-tight"
        >
          Our <span className="text-[#F2B705]">Services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/75 text-xl mt-4 max-w-xl"
        >
          End-to-end agricultural solutions — from equipment supply to smart farming integration.
        </motion.p>
      </div>
    </section>
  );
}

/* ── Main Services ── */
const mainServices = [
  {
    icon: Tractor,
    title: 'Agricultural Machinery',
    desc: 'We supply the full spectrum of farm equipment — from compact utility tractors to large-scale combine harvesters and everything in between. Every machine is precision-engineered for maximum output and minimum downtime.',
    features: ['Heavy-duty tractors (50–600 HP)', 'Combine harvesters & headers', 'Precision planters & seeders', 'Tillage & soil preparation equipment', 'Crop protection sprayers', 'Baling & forage machines'],
    img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=900&q=80',
    accent: '#1F3B63',
    tag: '01',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    desc: 'Our certified technicians deliver preventive maintenance programs and rapid emergency support across all major brands. Keep your machinery running at peak performance throughout every season.',
    features: ['24/7 emergency breakdown support', 'Preventive maintenance schedules', 'Genuine OEM spare parts', 'On-site & mobile service units', 'Remote diagnostics & telematics', 'Extended warranty programs'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80',
    accent: '#3F7A3A',
    tag: '02',
  },
  {
    icon: Sprout,
    title: 'Smart Farming Solutions',
    desc: 'Harness the power of precision agriculture with our IoT-enabled ecosystem. Monitor soil health, automate irrigation, track yield data and optimise every operation from your smartphone.',
    features: ['GPS-guided auto-steer systems', 'Soil sensors & moisture mapping', 'Automated variable-rate irrigation', 'Drone-based crop monitoring', 'Yield mapping & analytics', 'AI-powered crop recommendations'],
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=80',
    accent: '#1F3B63',
    tag: '03',
  },
  {
    icon: PackageCheck,
    title: 'Grain Handling Systems',
    desc: 'Complete post-harvest infrastructure solutions. Protect the quality of your grain from field to storage with industrial-grade handling, drying and storage systems designed for scale.',
    features: ['High-capacity grain dryers', 'Flat-base & hopper storage silos', 'Bucket elevators & augers', 'Pneumatic conveyor systems', 'Grain cleaning & grading lines', 'Automation & silo monitoring'],
    img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=80',
    accent: '#3F7A3A',
    tag: '04',
  },
];

function MainServices() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 space-y-28">
        {mainServices.map((s, i) => {
          const Icon = s.icon;
          const isEven = i % 2 === 0;
          return (
            <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image side */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className={`relative ${!isEven ? 'lg:order-2' : ''}`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <motion.img
                    src={s.img}
                    alt={s.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-80 lg:h-[440px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Tag number */}
                  <div
                    className="absolute top-6 left-6 text-7xl font-black opacity-20 text-white"
                    style={{ fontFamily: 'serif' }}
                  >
                    {s.tag}
                  </div>
                </div>
                {/* Decorative border */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border-2 -z-10"
                  style={{ borderColor: s.accent + '30' }}
                />
              </motion.div>

              {/* Text side */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className={!isEven ? 'lg:order-1' : ''}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: s.accent + '15' }}>
                    <Icon className="w-6 h-6" style={{ color: s.accent }} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest" style={{ color: s.accent }}>Service {s.tag}</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-[#1F3B63] mb-5 leading-tight">{s.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{s.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {s.features.map((f, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.08 }}
                      className="flex items-start gap-2 text-gray-700 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: s.accent }} />
                      {f}
                    </motion.li>
                  ))}
                </ul>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${s.accent}35` }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 font-bold px-8 py-4 rounded-xl text-white transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: s.accent }}
                  >
                    Request a Quote <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── Add-ons / Extra Services ── */
const extras = [
  { icon: Cpu, title: 'Fleet Management Software', desc: 'Real-time tracking, usage analytics and maintenance scheduling for your entire machinery fleet.' },
  { icon: Leaf, title: 'Agronomy Consulting', desc: 'Expert agronomist visits, soil testing and customised crop rotation recommendations.' },
  { icon: CheckCircle, title: 'Equipment Training', desc: 'Comprehensive operator training programmes with certified instructors on-site or remote.' },
  { icon: PackageCheck, title: 'Spare Parts Supply', desc: 'Stocked OEM parts warehouse with same-day dispatch to minimise equipment downtime.' },
];

function ExtraServices() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80" alt="bg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1F3B63]/93" />
      </motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-14">
          <SectionTag label="Additional Services" />
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl lg:text-5xl font-black text-white"
          >
            Beyond the <span className="text-[#F2B705]">Machine</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {extras.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8, backgroundColor: 'rgba(242,183,5,0.1)' }}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-7 group cursor-pointer transition-all duration-300 hover:border-[#F2B705]/50"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  className="w-12 h-12 rounded-xl bg-[#F2B705]/20 flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-[#F2B705]" />
                </motion.div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#F2B705] transition-colors">{e.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{e.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function ServicesCTA() {
  return (
    <section className="py-20 bg-[#F2B705]">
      <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl lg:text-5xl font-black text-[#1F3B63] mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-[#1F3B63]/75 text-lg mb-8">
            Our agro engineers will assess your operation and recommend the perfect solution — completely free.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: '0 20px 50px rgba(31,59,99,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#1F3B63] text-white font-black px-12 py-5 rounded-xl text-lg hover:bg-[#3F7A3A] transition-all duration-300 shadow-xl"
            >
              Get Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <PageHero />
      <MainServices />
      <ExtraServices />
      <ServicesCTA />
    </>
  );
}
