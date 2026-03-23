import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Leaf } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Machines', path: '/machines' },
  { label: 'Contact', path: '/contact' },
];

/* ── Scroll to Top on route change ── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return null;
}

/* ── Scroll Top Button ── */
function ScrollTopBtn() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ type: 'spring', bounce: 0.4 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#1F3B63] rounded-full flex items-center justify-center shadow-2xl border-2 border-[#F2B705] hover:bg-[#F2B705] group transition-colors duration-300"
        >
          <ChevronUp className="w-5 h-5 text-[#F2B705] group-hover:text-[#1F3B63] transition-colors duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ── Navigation ── */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-2xl' : ''}`}
    >
        <div className={`transition-all duration-500 ${scrolled ? 'bg-[#1F3B63] shadow-2xl' : 'bg-[#1F3B63]/90 backdrop-blur-lg'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-10">
          <div className="flex items-stretch h-[96px]">

            {/* Logo — diagonal gold block */}
            <div className="relative flex items-center pr-24 pl-2 flex-shrink-0">
              <div
                className="absolute inset-0 bg-[#F2B705]"
                style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0 100%)' }}
              />
              <Link to="/" className="relative z-10 flex items-center gap-3">
                {/* ✅ LOGO IMAGE — Replace /logo.png with your own image file placed in the /public folder */}
                {/* To use your own logo image: save your image as "logo.png" inside the /public folder, then uncomment the line below and remove the <Leaf> icon line */}
                <img src="/logo .png" alt="Logo" className="w-27 h-19 object-contain" />

                {/* 🟡 CURRENT LOGO: leaf icon — delete this line if you add an image above */}
                {/* <Leaf className="w-11 h-11 text-[#1F3B63]" /> */}

                <div>
                  {/* ✅ COMPANY NAME — Change "AgroTech" to your company name */}
                  <p className="font-black text-[#1F3B63] text-2xl leading-tight">Universal Marketing</p>
                  {/* ✅ TAGLINE — Change "Machinery Supply" to your tagline */}
                  <p className="text-[#1F3B63]/70 text-[11px] font-semibold uppercase tracking-widest leading-none mt-0.5">Industrial & Agro Machine Support</p>
                </div>
              </Link>
            </div>
            {/* Nav — always visible, no hamburger */}
            <div className="flex items-center gap-1 ml-auto">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`relative px-4 py-2 font-semibold text-sm tracking-wide transition-colors duration-200 ${
                      isActive(item.path) ? 'text-[#F2B705]' : 'text-white hover:text-[#F2B705]'
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#F2B705] rounded-full"
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </motion.header>
  );
}

/* ── Footer ── */
function Footer() {
  const location = useLocation();
  return (
    <footer className="bg-[#0f2240] text-white">
      {/* Top bar */}
      <div className="bg-[#F2B705] py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-wrap items-center justify-between gap-4 text-[#1F3B63] text-sm font-semibold">
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9890776538</div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> universalmarketing1218@gmail.com</div>
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Nagpur,Maharashtra,India-440009 </div>
        </div>
      </div>

     {/* Main footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-16 h-10 bg-[#F2B705] rounded-xl flex items-center justify-center">
                  {/* <Leaf className="w-5 h-5 text-[#1F3B63]" /> */}
                  <img src="/logo .png" alt="Logo" className="w-23 h-16object-contain" />
                </div>
                <div>
                  <p className="font-black text-xl text-white leading-none">Universal Marketing</p>
                  {/*  if needed you can add the descrption below  */}
                  {/* <p className="text-white/50 text-[10px] uppercase tracking-widest">Industrial & Agro Machine Support</p> */}
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Powering modern agriculture with world-class machinery, smart farming solutions and unmatched after-sales support.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.15, backgroundColor: '#F2B705', color: '#1F3B63' }}
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-[#1F3B63] transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-black text-white text-base mb-5 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`text-sm flex items-center gap-2 transition-all duration-200 group ${
                        location.pathname === item.path ? 'text-[#F2B705]' : 'text-white/60 hover:text-[#F2B705]'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F2B705] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Machines */}
            <div>
              <h4 className="font-black text-white text-base mb-5 uppercase tracking-wider">Our Machines</h4>
              <ul className="space-y-3">
                {['Paddy Pre-Cleaner', 'Rubber Roll Husker', 'Rice Whitener & Polisher', 'Color Sorter Machine', 'Industrial Rice Mill Plant', 'Grain Dryer System'].map((s) => (
                  <li key={s}>
                    <Link to="/machines" className="text-white/60 hover:text-[#F2B705] text-sm flex items-center gap-2 group transition-all duration-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F2B705] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empty space filler for removed Newsletter */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} AgroTech Machinery Supply. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#F2B705] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F2B705] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#F2B705] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main className="pt-[72px]">{children}</main>
      <Footer />
      <ScrollTopBtn />
    </>
  );
}
