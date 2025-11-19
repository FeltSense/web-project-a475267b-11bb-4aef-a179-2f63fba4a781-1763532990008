# 🧠 Project Context & Memory

**Auto-generated on:** 2025-11-19T06:16:16.506Z  
**Purpose:** This file provides instant context for AI editing and planning, eliminating the need for expensive project analysis.

---

## 📋 Generation Metadata

- **Project ID:** `a475267b-11bb-4aef-a179-2f63fba4a781`
- **Brand Name:** Retail Business
- **Industry:** general
- **Generation Method:** Separated Components (7 components + config files)
- **Generation Cost:** ~$0.60-0.70
- **Original Prompt:** "Create a website for this startup idea: Product Overview

Product Name: Homework Gamifier

Category: B2C EdTech/Educational Games

Target Market: Students (K-12), parents, and educators seeking to imp..."

---

## 🎨 Design System Summary

**Color Palette:**
- Primary: teal-600
- Used consistently across all sections
- Spacing: py-24 md:py-32 (sections), p-8 md:p-12 (cards), gap-8 md:gap-12 (grids)

**Typography:**
- Font family: Inter (from Google Fonts)
- Heading sizes: text-4xl to text-5xl
- Body text: text-lg with leading-relaxed

**Visual Style:**
- Modern, general-appropriate design
- Generous whitespace and clean layouts
- Subtle shadows and hover effects

---

## 🏗️ Architecture & Structure

### **Pattern Choices:**
- **Hero:** image-grid-background
- **Services:** tab-navigation
- **Testimonials:** infinite-scroll
- **Pricing:** Single-tier pricing card
- **Form:** Contact form with appointment fields
- **Navigation:** mega-menu
- **Footer:** newsletter-focused

### **Key Features Implemented:**
1. AI Assignment Upload: Photo any homework, instantly converted to games
2. Multi-Subject Gamification: Math puzzles, history adventures, science explorations
3. Real-Time Comprehension: Game mechanics verify understanding, not just completion
4. Adaptive Learning: Adjusts difficulty based on student performance
5. Time Management: AI estimates duration, tracks progress, suggests breaks
6. Parent Dashboard: See progress, time spent, comprehension analytics

### **Target Audience:**
Primary: Parents (ages 30-50) of K-12 students concerned about homework engagement. Secondary: K-12 students (ages 6-18) seeking fun homework experiences. Tertiary: Teachers and school administrators looking to improve homework completion rates.

---

## 📁 File Structure & Responsibilities

### **Components (7 files):**

1. **Navigation.tsx** (~800 chars)
   - Purpose: Site-wide navigation with mobile menu
   - State: Uses useState for mobile menu toggle
   - Links: Home, Services (#services), Pricing (#pricing), Contact (#contact)
   - Features: Sticky positioning, hamburger menu, smooth scroll

2. **Hero.tsx** (~9000 chars)
   - Purpose: First impression section with main CTA
   - Layout: Full-width section with compelling imagery
   - CTAs: Primary action button
   - Images: Next.js Image component with optimized loading

3. **Services.tsx** (~13000 chars)
   - Purpose: Showcase 6 key services/features
   - Layout: Responsive grid (stacks on mobile)
   - Content: Service-specific descriptions for general
   - Images: Industry-relevant images with proper aspect ratios

4. **Testimonials.tsx** (~11000 chars)
   - Purpose: Social proof with customer stories
   - Layout: 3-4 testimonial cards
   - Content: Industry-specific testimonials
   - Images: Professional customer photos

5. **Pricing.tsx** (~4800 chars)
   - Purpose: Single $29 website package pricing
   - Layout: Centered single card (max-w-md mx-auto)
   - Integration: Stripe payment link for task ID
   - **CRITICAL:** Do NOT change price or create multiple tiers!

6. **ContactForm.tsx** (~6600 chars)
   - Purpose: Lead capture with email notifications
   - Fields: name, email, phone, message
   - Integration: Submits to /api/form_submissions
   - Task ID: a475267b-11bb-4aef-a179-2f63fba4a781 (for tracking submissions)

7. **Footer.tsx** (~9300 chars)
   - Purpose: Site footer with links and contact info
   - Layout: Multi-column with company info
   - Links: Navigation links + legal/social
   - Contact: Company details and social media

### **App Files:**

- **app/page.tsx** (~550 chars): Main page importing all 7 components
- **app/layout.tsx** (~1200 chars): Root layout with Inter font, NO metadata export
- **app/globals.css** (~900 chars): Tailwind imports + custom styles

### **Config Files:**

- **package.json**: Next.js 14.1.0, React 18, TypeScript, Tailwind
- **tailwind.config.js**: Configured for app/ directory
- **next.config.js**: Image optimization for Pixabay/Unsplash
- **tsconfig.json**: Standard Next.js TypeScript config

---

## ⚠️ DO NOT MODIFY (Without User Approval)

### **Protected Elements:**

1. **Pricing Amount:** $29 (Stripe integrated)
2. **Form Field Names:** name, email, phone, message (database schema)
3. **Task ID Integration:** Used in form submissions and Stripe
4. **Navigation Links:** Designed for single-page scroll flow
5. **Image Domains:** Configured in next.config.js (picsum.photos, pixabay.com)

### **Why These Are Protected:**

- **Pricing:** Connected to Stripe payment link
- **Form Fields:** Match Supabase schema
- **Task ID:** Used for tracking across systems
- **Navigation:** Single-page architecture (changing breaks scroll behavior)

---

## 💡 Common Edit Patterns

### **Text Changes:**
- **Tool:** globalReplace
- **Example:** "Change company name ABC to XYZ"
- **Cost:** ~$0.05 (efficient!)

### **Color Changes:**
- **Tool:** globalReplace  
- **Example:** "Change bg-blue-500 to bg-red-500"
- **Pattern:** Must be 10+ characters for safety

### **Layout Modifications:**
- **Tool:** modifyFile (surgical)
- **Example:** "Add padding to hero section"
- **Context:** Include 20-30 lines of surrounding code

### **Adding New Sections:**
- **Tool:** createFile
- **Example:** "Create app/blog/page.tsx"
- **Requirements:** Provide complete file content

### **Removing Files:**
- **Tool:** deleteFile
- **Safety:** Cannot delete core files (layout.tsx, page.tsx, package.json)

---

## 🎯 Optimization Tips

### **For AI Editors:**

✅ **DO:**
- Read this file FIRST before any editing (saves 20K tokens!)
- Use conversation history for multi-turn edits
- Make surgical changes (don't rewrite entire files)
- Test build after changes
- Commit and deploy

❌ **DON'T:**
- Skip reading PROJECT_CONTEXT.md (wastes tokens re-analyzing)
- Read all files unnecessarily (use context to target specific files)
- Make multiple tools retries (fail fast if confused)
- Forget to provide required parameters to tools

### **Cost Estimates:**

- **Simple CSS edit:** $0.05-0.10 (with context)
- **Component modification:** $0.15-0.25
- **Adding new pages:** $0.30-0.50
- **Complex multi-file changes:** $0.50-1.00

---

## 📊 Generation Summary

**Total Files Generated:** 16
**Total Characters:** ~55,000
**Components:** 7 (Navigation, Hero, Services, Testimonials, Pricing, Form, Footer)
**Config Files:** 8 (Next.js, Tailwind, TypeScript, etc.)

**Industry-Specific Adaptations:**
- Color scheme matches general expectations
- Content tone appropriate for Primary: Parents (ages 30-50) of K-12 students concerned about homework engagement. Secondary: K-12 students (ages 6-18) seeking fun homework experiences. Tertiary: Teachers and school administrators looking to improve homework completion rates.
- Images selected for general context
- Layout patterns suitable for general websites

---

## 🔗 Integration Points

**Form Submissions:**
- Endpoint: `POST /api/form_submissions`
- Task ID: `a475267b-11bb-4aef-a179-2f63fba4a781`
- Fields: name, email, phone, message

**Stripe Payment:**
- Price: $29 one-time
- Payment link includes task ID for tracking
- Integrated in Pricing component

**Deployment:**
- Platform: Vercel
- GitHub: Auto-push triggers rebuild
- Custom domains: Supported via Vercel

---

## 📝 Edit History

*This section will be updated by AI as edits are made*

<!-- Edit log will appear here as conversation history grows -->

---

**💡 TIP FOR AI EDITORS:** Always read this file first! It contains everything you need to know about the project structure, decisions, and constraints. This saves 20,000+ tokens per edit by eliminating the need for expensive project analysis.

**Last Updated:** 2025-11-19T06:16:16.506Z
