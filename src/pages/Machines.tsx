import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  'Whitener / Silky Machine & Complete Spares',
  'Rubber Roll / Cone Polisher Rubber / Bearing / V- Belt',
  'Moisture Meter / Weighing Machine / Paddy Tester Machine',
  'Paddy Separator / De-Stoner / Vibratory Sifter',
  'Color Sorter / Optical Sorting Machine',
  'Elevators / Conveyors / Material Handling',
  'Packaging Machine / Sewing Machine',
  'Dryer / Boiler / Steam Generator',
  'Electrical Panel / Motor / Control System',
  'Complete Rice Mill Plant / Turnkey Solutions'
];

const allMachines = [
  { category: 'Whitener / Silky Machine & Complete Spares', name: 'Whitener Screen', img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80', desc: 'Description...', specs: ['Spec 1', 'Spec 2', 'Spec 3', 'Spec 4'], badge: 'New' },
  { category: 'Whitener / Silky Machine & Complete Spares', name: 'Silky Screen', img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&q=80', desc: 'Description...', specs: ['Spec 1', 'Spec 2', 'Spec 3', 'Spec 4'], badge: 'New' },
  { category: 'Whitener / Silky Machine & Complete Spares', name: 'Milling Roll', img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=600&q=80', desc: 'Description...', specs: ['Spec 1', 'Spec 2', 'Spec 3', 'Spec 4'], badge: 'New' },
  { category: 'Rubber Roll / Cone Polisher Rubber / Bearing / V- Belt', name: 'Rubber Roll', img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80', desc: 'Description...', specs: ['Spec 1', 'Spec 2', 'Spec 3', 'Spec 4'], badge: 'New' },
  { category: 'Moisture Meter / Weighing Machine / Paddy Tester Machine', name: 'Kett Moisture Meter', img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80', desc: 'Description...', specs: ['Spec 1', 'Spec 2', 'Spec 3', 'Spec 4'], badge: 'New' },
];

export default function Machines() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <div className="py-24 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-black mb-10 text-[#1F3B63]">OUR MACHINES</h1>
      
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`p-4 border text-sm font-bold text-left transition-all ${
              activeCategory === cat 
                ? 'bg-[#1F3B63] text-white border-[#1F3B63]' 
                : 'bg-white text-[#1F3B63] border-gray-200 hover:border-[#F2B705]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {allMachines
            .filter(m => m.category === activeCategory)
            .map((m, i) => (
              <div key={i} className="bg-white border p-6 rounded-xl shadow-lg">
                <img src={m.img} className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h3 className="font-bold text-lg mb-2">{m.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{m.desc}</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                  {m.specs.map(s => <span key={s}>• {s}</span>)}
                </div>
              </div>
            ))
          }
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
