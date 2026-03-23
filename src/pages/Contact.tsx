import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

/* ── Hero ── */
function PageHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={ref} className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img
          src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&q=85"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F3B63]/95 to-[#3F7A3A]/70" />
      </motion.div>

      {/* Animated particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.7 }}
          className="absolute w-2 h-2 rounded-full bg-[#F2B705]"
          style={{ left: `${15 + i * 14}%`, top: `${30 + (i % 3) * 20}%` }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 text-white/60 text-sm mb-4"
        >
          <Link to="/" className="hover:text-[#F2B705] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#F2B705]">Contact</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl lg:text-7xl font-black text-white leading-tight"
        >
          Get In <span className="text-[#F2B705]">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/75 text-xl mt-4 max-w-xl"
        >
          Our agro experts are ready to help you find the perfect farming solution.
        </motion.p>
      </div>
    </section>
  );
}

/* ── Contact Info Cards ── */
const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+1 (800) 555-AGRO', '+1 (800) 555-2476'],
    note: 'Mon–Fri, 8am – 6pm EST',
    color: '#1F3B63',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@agrotech-supply.com', 'support@agrotech-supply.com'],
    note: 'Response within 24 hours',
    color: '#3F7A3A',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['1200 Farm Drive, Suite 400', 'Kansas City, MO 64101, USA'],
    note: 'Headquarters',
    color: '#1F3B63',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Fri: 8:00 am – 6:00 pm', 'Sat: 9:00 am – 2:00 pm'],
    note: 'Emergency 24/7 support available',
    color: '#3F7A3A',
  },
];

function ContactInfoCards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(31,59,99,0.12)' }}
                className="bg-white border border-gray-100 rounded-2xl p-7 group shadow-sm hover:border-[#F2B705]/40 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all"
                  style={{ backgroundColor: info.color + '15' }}
                >
                  <Icon className="w-7 h-7" style={{ color: info.color }} />
                </motion.div>
                <h3 className="font-black text-[#1F3B63] text-lg mb-3 group-hover:text-[#F2B705] transition-colors">{info.title}</h3>
                {info.lines.map((line, j) => (
                  <p key={j} className="text-gray-700 font-medium text-sm">{line}</p>
                ))}
                <p className="text-gray-400 text-xs mt-2">{info.note}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Contact Form ── */
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full px-5 py-4 rounded-xl border-2 text-gray-800 font-medium bg-white outline-none transition-all duration-300 text-base ${
      focused === field
        ? 'border-[#F2B705] shadow-[0_0_0_4px_rgba(242,183,5,0.12)]'
        : 'border-gray-200 hover:border-gray-300'
    }`;

  return (
    <section className="py-20 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left: heading + info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-[3px] bg-[#F2B705] rounded-full" />
              <span className="text-[#F2B705] font-semibold uppercase tracking-widest text-sm">Send a Message</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-black text-[#1F3B63] leading-tight mb-6"
            >
              Let's Start a <span className="text-[#3F7A3A]">Conversation</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              Fill in the form and one of our agro machinery specialists will get back to you within 24 hours with a personalised recommendation.
            </motion.p>

            {/* Why choose us points */}
            <div className="space-y-4">
              {[
                'Free no-obligation consultation',
                'Expert advice from certified agronomists',
                'Competitive pricing & flexible financing',
                'Fast delivery to 30+ countries',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#F2B705] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#1F3B63]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex gap-3"
            >
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, backgroundColor: '#F2B705', color: '#1F3B63' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-[#1F3B63] text-white flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 0.6, repeat: 2 }}
                      className="w-20 h-20 rounded-full bg-[#3F7A3A]/15 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-[#3F7A3A]" />
                    </motion.div>
                    <h3 className="text-3xl font-black text-[#1F3B63] mb-3">Message Sent!</h3>
                    <p className="text-gray-600 text-lg mb-8">
                      Thank you! Our team will contact you within 24 hours.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                      className="bg-[#1F3B63] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#F2B705] hover:text-[#1F3B63] transition-all duration-300"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="John Mitchell"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          className={inputClass('name')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="john@farm.com"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          className={inputClass('email')}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          onFocus={() => setFocused('phone')}
                          onBlur={() => setFocused(null)}
                          className={inputClass('phone')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
                        <select
                          required
                          value={form.subject}
                          onChange={e => setForm({ ...form, subject: e.target.value })}
                          onFocus={() => setFocused('subject')}
                          onBlur={() => setFocused(null)}
                          className={inputClass('subject')}
                        >
                          <option value="">Select a topic...</option>
                          <option>Agricultural Machinery Enquiry</option>
                          <option>Maintenance & Support</option>
                          <option>Smart Farming Solutions</option>
                          <option>Grain Handling Systems</option>
                          <option>Request a Quote</option>
                          <option>Partnership Enquiry</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your Message *</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about your farm, the equipment you need, your location and any specific requirements..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className={`${inputClass('message')} resize-none`}
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(31,59,99,0.25)' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-3 bg-[#1F3B63] text-white font-black py-5 rounded-xl text-lg hover:bg-[#F2B705] hover:text-[#1F3B63] transition-all duration-300 shadow-lg disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Map placeholder ── */
function MapSection() {
  return (
    <section className="h-80 relative overflow-hidden bg-gray-200">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80"
          alt="Location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1F3B63]/65 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-14 h-14 bg-[#F2B705] rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl"
            >
              <MapPin className="w-7 h-7 text-[#1F3B63]" />
            </motion.div>
            <p className="text-white font-black text-xl">1200 Farm Drive, Suite 400</p>
            <p className="text-white/75 font-medium">Kansas City, MO 64101, USA</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero />
      <ContactInfoCards />
      <ContactForm />
      <MapSection />
    </>
  );
}
