# 🖼️ Image & Background Change Guide — AgroTech Website
# File to edit: `src/App.tsx`

---

## ✅ HOW TO USE YOUR OWN IMAGES

You have **two options** for each image:

### Option A — Online URL (Unsplash, your CDN, etc.)
Replace the URL string directly:
```
'url(https://your-image-host.com/your-image.jpg)'
```

### Option B — Local Image File
1. Put your image inside the `public/` folder (e.g. `public/hero-bg.jpg`)
2. Use it like this:
```
'url(/hero-bg.jpg)'
```
Or for `<img>` tags:
```jsx
src="/hero-bg.jpg"
```

---

## 📍 COMPLETE IMAGE MAP — Every Image in the Website

---

### 1. 🌾 HERO SECTION — Full-Screen Background
**Location:** `src/App.tsx` → `function Hero()` → line ~321

```jsx
backgroundImage:
  'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80)',
```

**What it shows:** Golden wheat field  
**Recommended size:** 1920×1080px minimum  
**How to change:**
```jsx
backgroundImage: 'url(YOUR_IMAGE_URL_HERE)',
// OR for local file in /public folder:
backgroundImage: 'url(/your-hero-image.jpg)',
```

---

### 2. 🌿 ABOUT SECTION — Parallax Background
**Location:** `src/App.tsx` → `function About()` → line ~464

```jsx
backgroundImage:
  'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80)',
```

**What it shows:** Green farmland landscape (used as a subtle parallax bg under a white overlay)  
**Recommended size:** 1920×1080px minimum  
**How to change:**
```jsx
backgroundImage: 'url(YOUR_IMAGE_URL_HERE)',
```
> 💡 The overlay is `bg-white/93` — increase the number to make the bg less visible, decrease it to show more.

---

### 3. 🚜 ABOUT SECTION — Main Photo (Left Column, Large)
**Location:** `src/App.tsx` → `function About()` → line ~484

```jsx
<img
  src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&q=80"
  alt="Farming machinery"
  ...
/>
```

**What it shows:** Tractor / farming machinery close-up  
**Recommended size:** 800×600px minimum  
**How to change:** Replace the `src` value:
```jsx
src="https://your-image.com/machinery.jpg"
// OR
src="/about-main.jpg"
```

---

### 4. 🌱 ABOUT SECTION — Small Accent Image (Top-right corner overlay)
**Location:** `src/App.tsx` → `function About()` → line ~504

```jsx
<img
  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=300&q=80"
  alt="Field"
  ...
/>
```

**What it shows:** Aerial field view  
**Recommended size:** 300×300px (square)  
**How to change:**
```jsx
src="https://your-image.com/field-small.jpg"
// OR
src="/accent-thumb.jpg"
```

---

### 5. ⚙️ SERVICES SECTION — Background
**Location:** `src/App.tsx` → `function Services()` → line ~595

```jsx
backgroundImage:
  'url(https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=80)',
```

**What it shows:** Aerial view of tractor in field  
**Recommended size:** 1920×1080px minimum  
**How to change:**
```jsx
backgroundImage: 'url(YOUR_IMAGE_URL_HERE)',
```
> 💡 The overlay is `bg-[#1F3B63]/93` (dark navy). Adjust opacity to control how much of the image shows through.

---

### 6. 🚜 SERVICE CARD 1 — Agricultural Machinery
**Location:** `src/App.tsx` → `const services` array → line ~69

```js
img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&q=80',
```

**What it shows:** Tractor  
**Recommended size:** 600×400px  
**How to change:** Edit the `img:` value in the services array:
```js
img: 'https://your-image.com/tractor.jpg',
// OR
img: '/service-tractor.jpg',
```

---

### 7. 🔧 SERVICE CARD 2 — Maintenance & Support
**Location:** `src/App.tsx` → `const services` array → line ~76

```js
img: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80',
```

**What it shows:** Technical/maintenance work  
**How to change:**
```js
img: '/service-maintenance.jpg',
```

---

### 8. 🌱 SERVICE CARD 3 — Smart Farming Solutions
**Location:** `src/App.tsx` → `const services` array → line ~83

```js
img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
```

**What it shows:** Open farmland / irrigation  
**How to change:**
```js
img: '/service-smart-farming.jpg',
```

---

### 9. 🌾 SERVICE CARD 4 — Grain Handling Systems
**Location:** `src/App.tsx` → `const services` array → line ~90

```js
img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80',
```

**What it shows:** Grain / wheat harvesting  
**How to change:**
```js
img: '/service-grain.jpg',
```

---

### 10. 🗂️ PROJECT CARD 1 — Large-Scale Wheat Farm
**Location:** `src/App.tsx` → `const projects` array → line ~106

```js
img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&q=80',
```

**How to change:**
```js
img: '/project-1.jpg',
```

---

### 11. 🗂️ PROJECT CARD 2 — Precision Rice Cultivation
**Location:** `src/App.tsx` → `const projects` array → line ~112

```js
img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80',
```

**How to change:**
```js
img: '/project-2.jpg',
```

---

### 12. 🗂️ PROJECT CARD 3 — Vineyard Automation
**Location:** `src/App.tsx` → `const projects` array → line ~118

```js
img: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=700&q=80',
```

**How to change:**
```js
img: '/project-3.jpg',
```

---

### 13. 🗂️ PROJECT CARD 4 — Corn Belt Operations
**Location:** `src/App.tsx` → `const projects` array → line ~124

```js
img: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=700&q=80',
```

**How to change:**
```js
img: '/project-4.jpg',
```

---

### 14. 🗂️ PROJECT CARD 5 — Sugarcane Mechanisation
**Location:** `src/App.tsx` → `const projects` array → line ~130

```js
img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700&q=80',
```

**How to change:**
```js
img: '/project-5.jpg',
```

---

### 15. 🗂️ PROJECT CARD 6 — Organic Farm Network
**Location:** `src/App.tsx` → `const projects` array → line ~136

```js
img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=700&q=80',
```

**How to change:**
```js
img: '/project-6.jpg',
```

---

### 16. 💬 TESTIMONIALS SECTION — Background
**Location:** `src/App.tsx` → `function Testimonials()` → line ~747

```jsx
backgroundImage:
  'url(https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1920&q=80)',
```

**What it shows:** Combine harvester in a golden field  
**Recommended size:** 1920×1080px minimum  
**How to change:**
```jsx
backgroundImage: 'url(YOUR_IMAGE_URL_HERE)',
```
> 💡 The overlay is `bg-[#3F7A3A]/90` (forest green). Adjust opacity to show more/less of the image.

---

### 17. 👤 TESTIMONIAL AVATAR — John Mitchell
**Location:** `src/App.tsx` → `const testimonials` array → line ~145

```js
avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
```

**How to change:**
```js
avatar: '/team-john.jpg',
```

---

### 18. 👤 TESTIMONIAL AVATAR — Sarah Chen
**Location:** `src/App.tsx` → `const testimonials` array → line ~153

```js
avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
```

**How to change:**
```js
avatar: '/team-sarah.jpg',
```

---

### 19. 👤 TESTIMONIAL AVATAR — Hans Mueller
**Location:** `src/App.tsx` → `const testimonials` array → line ~161

```js
avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
```

**How to change:**
```js
avatar: '/team-hans.jpg',
```

---

### 20. 📣 CTA BANNER — Background
**Location:** `src/App.tsx` → `function CTABanner()` → line ~822

```jsx
backgroundImage:
  'url(https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&q=80)',
```

**What it shows:** Sugarcane / farming field  
**Recommended size:** 1920×600px minimum  
**How to change:**
```jsx
backgroundImage: 'url(YOUR_IMAGE_URL_HERE)',
```
> 💡 The overlay is `bg-[#1F3B63]/88` (dark navy).

---

### 21. 📬 CONTACT SECTION — Background
**Location:** `src/App.tsx` → `function Contact()` → line ~884

```jsx
backgroundImage:
  'url(https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1920&q=80)',
```

**What it shows:** Organic/farming landscape  
**Recommended size:** 1920×1080px minimum  
**How to change:**
```jsx
backgroundImage: 'url(YOUR_IMAGE_URL_HERE)',
```
> 💡 The overlay is `bg-white/94` (near-white). High opacity keeps the form readable.

---

## 🎨 OVERLAY OPACITY QUICK REFERENCE

All section backgrounds use a colored overlay on top of the image. You can control how much the image "shows through" by changing the opacity number:

| Section       | Overlay Class           | Opacity | Effect                      |
|---------------|-------------------------|---------|-----------------------------|
| Hero          | `bg-[#1F3B63]/88`       | 88%     | Dark navy, image faintly visible |
| About         | `bg-white/93`           | 93%     | Almost white, subtle bg     |
| Services      | `bg-[#1F3B63]/93`       | 93%     | Very dark, minimal image    |
| Testimonials  | `bg-[#3F7A3A]/90`       | 90%     | Green tinted                |
| CTA Banner    | `bg-[#1F3B63]/88`       | 88%     | Dark navy                   |
| Contact       | `bg-white/94`           | 94%     | Near white                  |

**To show MORE image:** Lower the number (e.g. `/93` → `/70`)  
**To show LESS image:** Raise the number (e.g. `/88` → `/95`)

---

## 📁 RECOMMENDED LOCAL FILE STRUCTURE

If using local images, place them in the `public/` folder:

```
public/
├── hero-bg.jpg           → Hero background
├── about-bg.jpg          → About parallax background
├── about-main.jpg        → About left column photo
├── about-accent.jpg      → About small overlay photo
├── services-bg.jpg       → Services background
├── testimonials-bg.jpg   → Testimonials background
├── cta-bg.jpg            → CTA Banner background
├── contact-bg.jpg        → Contact background
├── service-1.jpg         → Service card: Agricultural Machinery
├── service-2.jpg         → Service card: Maintenance & Support
├── service-3.jpg         → Service card: Smart Farming
├── service-4.jpg         → Service card: Grain Handling
├── project-1.jpg         → Project card 1
├── project-2.jpg         → Project card 2
├── project-3.jpg         → Project card 3
├── project-4.jpg         → Project card 4
├── project-5.jpg         → Project card 5
├── project-6.jpg         → Project card 6
├── avatar-john.jpg       → Testimonial avatar
├── avatar-sarah.jpg      → Testimonial avatar
└── avatar-hans.jpg       → Testimonial avatar
```

---

## 🚀 QUICK EXAMPLE — Replacing the Hero Background

**Before:**
```jsx
backgroundImage:
  'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80)',
```

**After (using a local file in /public):**
```jsx
backgroundImage: 'url(/hero-bg.jpg)',
```

**After (using another online image):**
```jsx
backgroundImage: 'url(https://your-cdn.com/images/wheat-field.jpg)',
```

That's it! Save the file and the website updates instantly.
