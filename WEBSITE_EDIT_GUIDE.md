# 📖 AgroTech Website — Complete Self-Edit Guide
> All edits are in 2 files only:
> - **`src/components/Layout.tsx`** → Navbar + Footer
> - **`src/pages/Machines.tsx`** → All machinery cards

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🔷 PART 1 — LOGO & COMPANY NAME
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**File:** `src/components/Layout.tsx`

---

### 1A. Change the Company Name in the NAVBAR

**Find this block (around line 78–81):**
```tsx
<p className="font-black text-[#1F3B63] text-lg leading-tight">AgroTech</p>
<p className="text-[#1F3B63]/70 text-[10px] font-semibold uppercase tracking-widest leading-none">Machinery Supply</p>
```

**What to change:**
- Replace `AgroTech` → your company name (big bold text)
- Replace `Machinery Supply` → your tagline or sub-name (small text below)

**Example:**
```tsx
<p className="font-black text-[#1F3B63] text-lg leading-tight">RicePro</p>
<p className="text-[#1F3B63]/70 text-[10px] font-semibold uppercase tracking-widest leading-none">Industrial Machines</p>
```

---

### 1B. Change the Logo ICON in the Navbar

**Find this line (around line 77):**
```tsx
<Leaf className="w-7 h-7 text-[#1F3B63]" />
```

**Option A — Use a different built-in icon:**
The website uses `lucide-react` icons. Replace `Leaf` with any icon name from https://lucide.dev/icons/
Popular choices for agro/industry:
- `Wheat` → wheat grain icon
- `Factory` → factory building
- `Sprout` → seedling
- `Tractor` → tractor

Example:
```tsx
<Wheat className="w-7 h-7 text-[#1F3B63]" />
```
Also update the import at the top of the file from:
```tsx
import { ..., Leaf } from 'lucide-react';
```
to:
```tsx
import { ..., Wheat } from 'lucide-react';
```

**Option B — Use your own logo image file:**
1. Put your logo file (e.g. `logo.png`) inside the `/public` folder
2. Replace the `<Leaf .../>` line with:
```tsx
<img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
```

---

### 1C. Change the Company Name in the FOOTER

**Find these lines (around line 139–140):**
```tsx
<p className="font-black text-xl text-white leading-none">AgroTech</p>
<p className="text-white/50 text-[10px] uppercase tracking-widest">Machinery Supply</p>
```

**Change to your name:**
```tsx
<p className="font-black text-xl text-white leading-none">RicePro</p>
<p className="text-white/50 text-[10px] uppercase tracking-widest">Industrial Machines</p>
```

---

### 1D. Change the Footer Logo Icon

**Find this line (around line 136):**
```tsx
<Leaf className="w-5 h-5 text-[#1F3B63]" />
```

Replace with same icon you used in navbar, e.g.:
```tsx
<Wheat className="w-5 h-5 text-[#1F3B63]" />
```
Or use your image:
```tsx
<img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
```

---

### 1E. Change the Copyright Line

**Find this line (around line 221):**
```tsx
<p>© {new Date().getFullYear()} AgroTech Machinery Supply. All rights reserved.</p>
```

Change to:
```tsx
<p>© {new Date().getFullYear()} RicePro Industrial Machines. All rights reserved.</p>
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🔷 PART 2 — FOOTER CONTACT INFO & LOCATION
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**File:** `src/components/Layout.tsx`

---

### 2A. Change Phone Number, Email & Address (Gold Top Bar)

**Find these 3 lines (around line 122–124):**
```tsx
<div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (800) 555-AGRO</div>
<div className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@agrotech-supply.com</div>
<div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Kansas City, MO, USA</div>
```

**Replace the text values only:**
```tsx
<div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +92 300 1234567</div>
<div className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@yourcompany.com</div>
<div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Lahore, Punjab, Pakistan</div>
```

---

### 2B. Change the Footer Description Text

**Find this block (around line 143–144):**
```tsx
<p className="text-white/60 text-sm leading-relaxed mb-6">
  Powering modern agriculture with world-class machinery, smart farming solutions
  and unmatched after-sales support since 1999.
</p>
```

**Replace with your own description:**
```tsx
<p className="text-white/60 text-sm leading-relaxed mb-6">
  Supplying premium rice mill and industrial plant machinery across Pakistan
  and South Asia since 2005. Quality you can trust.
</p>
```

---

### 2C. Change the Footer Machine Links List

**Find this block (around line 184):**
```tsx
{['Paddy Pre-Cleaner', 'Rubber Roll Husker', 'Rice Whitener & Polisher',
  'Color Sorter Machine', 'Industrial Rice Mill Plant', 'Grain Dryer System'].map((s) => (
```

**Replace the names in the array to match your machines:**
```tsx
{['Your Machine 1', 'Your Machine 2', 'Your Machine 3',
  'Your Machine 4', 'Your Machine 5', 'Your Machine 6'].map((s) => (
```

---

### 2D. Change Social Media Links

**Find this block (around line 147–157):**
```tsx
{[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
  <motion.a key={i} href="#" ...>
```

Replace each `href="#"` with your real social media URLs:
```tsx
const socialLinks = [
  { Icon: Facebook, url: 'https://facebook.com/yourpage' },
  { Icon: Instagram, url: 'https://instagram.com/yourpage' },
  { Icon: Linkedin, url: 'https://linkedin.com/company/yourpage' },
  { Icon: Youtube, url: 'https://youtube.com/@yourchannel' },
];
```
Then update the map to use `socialLinks` instead.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🔷 PART 3 — OUR MACHINES PAGE
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**File:** `src/pages/Machines.tsx`

There are two arrays in this file:
- `riceMachines` → starts around **line 89** (Rice Mill section, 6 machines)
- `industrialMachines` → starts around **line 140** (Industrial Plant section, 6 machines)

Each machine entry looks exactly like this:
```tsx
{
  name: 'Machine Name Here',           // ← Big title on the card
  category: 'Rice Mill',               // ← Small tag top-left on image
  img: 'https://...image-url...',      // ← Card image (explained below)
  desc: 'Your description here...',    // ← Paragraph below the image
  specs: [                             // ← 4 bullet specs (shown as checkmarks)
    'Spec 1',
    'Spec 2',
    'Spec 3',
    'Spec 4',
  ],
  badge: 'Best Seller',                // ← Gold badge top-right on image
},
```

---

### 3A. Change a Machine NAME

Find the machine entry and change the `name:` value:

**Before:**
```tsx
name: 'Paddy Pre-Cleaner',
```
**After:**
```tsx
name: 'Auto Paddy Cleaner Pro',
```

---

### 3B. Change the Machine DESCRIPTION

Find the machine entry and change the `desc:` value:

**Before:**
```tsx
desc: 'Heavy-duty pre-cleaning unit that removes straw, stones...',
```
**After:**
```tsx
desc: 'Write your own description of this machine here. Explain what it does, its benefits and why a customer should choose it.',
```

---

### 3C. Change the Machine SPECS (4 bullet points)

Find the `specs:` array inside any machine and edit the 4 items:

**Before:**
```tsx
specs: ['Capacity: 5–20 T/hr', 'Sieve Layers: 2', 'Power: 3–7.5 kW', 'Auto Stone Discharge'],
```
**After:**
```tsx
specs: ['Capacity: 10–30 T/hr', 'Motor: 5.5 kW', 'Voltage: 380V/50Hz', 'CE Certified'],
```

---

### 3D. Change the BADGE text (gold label on image)

**Before:**
```tsx
badge: 'Best Seller',
```
**After:**
```tsx
badge: 'New Arrival',
```
Other ideas: `'In Stock'`, `'Heavy Duty'`, `'Export Grade'`, `'Popular'`

---

### 3E. 🖼️ Change the Machine IMAGE — Full Guide

Each machine card has an `img:` field. You have two options:

---

#### ✅ OPTION A — Use a Free Online Image (Unsplash)

1. Go to **https://unsplash.com**
2. Search for your machine (e.g. "rice mill", "grain dryer", "conveyor belt")
3. Click on the image you want → click the **Download** button dropdown → select **Copy link**
4. Or right-click the image → **Copy image address**
5. Paste that URL into the `img:` field:

```tsx
img: 'https://images.unsplash.com/photo-XXXXXXXXXXXXXXXXX?w=600&q=80',
```
> Add `?w=600&q=80` at the end if it's not there — this makes the image load faster

---

#### ✅ OPTION B — Use Your Own Photo (Local File) — RECOMMENDED

1. Take your machine photo (phone camera is fine)
2. Name the file simply, e.g. `paddy-cleaner.jpg`
3. **Copy/paste the file into the `/public` folder** of the project
4. In the machine entry, change `img:` to:

```tsx
img: '/paddy-cleaner.jpg',
```

That's it! The `/public` folder maps directly to the root URL.

**Examples:**
```tsx
img: '/machine1.jpg',        // file: public/machine1.jpg
img: '/rice-whitener.png',   // file: public/rice-whitener.png
img: '/photos/dryer.jpg',    // file: public/photos/dryer.jpg
```

---

### 3F. Add a BRAND NEW Machine Card

To add a new machine to the Rice Mill section, open `src/pages/Machines.tsx`, find the `riceMachines` array (around line 89) and add a new entry **before the closing `];`**:

```tsx
  {
    name: 'Your New Machine Name',
    category: 'Rice Mill',
    img: '/your-machine-photo.jpg',
    desc: 'Write a full description of what this machine does, its key benefits and what makes it the right choice for rice mill operations.',
    specs: [
      'Capacity: X T/hr',
      'Power: X kW',
      'Spec 3',
      'Spec 4',
    ],
    badge: 'New',
  },
```

For the Industrial Plant section, add it to the `industrialMachines` array instead (around line 140).

---

### 3G. Remove a Machine Card

Simply delete the entire `{ ... },` block for that machine from the array.

**Example — delete this entire block:**
```tsx
  {
    name: 'Rice Bran Oil Plant',
    category: 'Industrial Plant',
    img: '...',
    desc: '...',
    specs: [...],
    badge: 'Value Added',
  },
```

---

### 3H. Change the Section Titles

**Rice Mill section title** — find around line 300+:
```tsx
title={<>Rice Mill <span className="text-[#F2B705]">Machinery</span></>}
subtitle={"Complete line of precision rice milling ..."}
```

**Industrial Plant section title** — find a few lines below:
```tsx
title={<>Industrial <span className="text-[#F2B705]">Plant Equipment</span></>}
subtitle={"Heavy-duty plant solutions for ..."}
```

Change the text inside the `<>...</>` brackets.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🔷 PART 4 — QUICK REFERENCE TABLE
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| What to Change | File | Approx. Line |
|---|---|---|
| Company name in navbar | `Layout.tsx` | 79 |
| Tagline under name in navbar | `Layout.tsx` | 80 |
| Logo icon in navbar | `Layout.tsx` | 77 |
| Company name in footer | `Layout.tsx` | 139 |
| Logo icon in footer | `Layout.tsx` | 136 |
| Copyright text | `Layout.tsx` | 221 |
| Phone number | `Layout.tsx` | 122 |
| Email address | `Layout.tsx` | 123 |
| Location/Address | `Layout.tsx` | 124 |
| Footer description paragraph | `Layout.tsx` | 143 |
| Footer machine links list | `Layout.tsx` | 184 |
| Social media links | `Layout.tsx` | 147–157 |
| Rice Mill machine cards (6) | `Machines.tsx` | 89–138 |
| Industrial Plant cards (6) | `Machines.tsx` | 140–189 |
| Machine image | `Machines.tsx` | `img:` field in each entry |
| Machine name | `Machines.tsx` | `name:` field in each entry |
| Machine description | `Machines.tsx` | `desc:` field in each entry |
| Machine specs | `Machines.tsx` | `specs:` array in each entry |
| Machine badge label | `Machines.tsx` | `badge:` field in each entry |

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🔷 PART 5 — TIPS & NOTES
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### ✅ Best Image Sizes
| Location | Recommended Size |
|---|---|
| Machine card image | 600×400 px (landscape) |
| Hero background | 1920×1080 px |
| About page photos | 800×600 px |

### ✅ Image File Formats
- JPG/JPEG → best for photos (smaller file size)
- PNG → use if image has transparent background
- WebP → best quality + smallest size (modern browsers)

### ✅ How to put local images into the project
1. Open the project folder on your computer
2. Find the `public` folder inside it
3. Drag and drop your image file into `public/`
4. In your code, reference it as `/filename.jpg`

### ✅ After making ANY change — rebuild the website
Run in the terminal:
```bash
npm run build
```
Or for live preview while editing:
```bash
npm run dev
```
Then open http://localhost:5173 in your browser to see changes instantly.

### ✅ Color Reference
| Color | Hex Code | Used For |
|---|---|---|
| Deep Navy Blue | `#1F3B63` | Navbar, headings, backgrounds |
| Golden Yellow | `#F2B705` | Accents, badges, buttons, gold bar |
| Forest Green | `#3F7A3A` | Checkmarks, secondary accents |
