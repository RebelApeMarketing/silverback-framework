# Silverback Framework - Landing Page Template

A professional, reusable landing page template built with Astro 5, Tailwind CSS 4, and Vite. Perfect for service-based businesses looking for a conversion-optimized website.

## 🚀 Features

- **Modern Tech Stack**: Built with Astro 5 + Tailwind CSS 4 + Vite
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Component-Based**: Modular, reusable components for easy customization
- **SEO Friendly**: Semantic HTML and optimized structure
- **Performance Optimized**: Fast loading times and minimal JavaScript
- **Form Ready**: Netlify Forms integration (easy to swap for GoHighLevel or other form providers)
- **Customizable Backgrounds**: Control section backgrounds from pages, not components

## 📦 What's Included

### Components

- **Header** - Fixed navigation with logo, Google reviews badge, and call-to-action button
- **Hero** - Eye-catching hero section with headline, subheadline, CTAs, and checklist
- **Button** - Reusable button component with multiple variants (primary, secondary, outline)
- **WhatHappens** - 3-column process overview section
- **HowDoIKnow** - Two-column trust-building section with reasons and image
- **Features** - 3-column benefits showcase
- **WhatYouGet** - Two-column checklist with image highlighting deliverables
- **TheDifference** - Dual-column comparison of unique selling points
- **ScheduleNow** - Scheduling process with contact information
- **ServiceAreas** - Location grid showing service coverage
- **Certifications** - Credentials and certification showcase grid
- **SocialProof** - Customer testimonials and statistics
- **FAQ** - Accordion-style frequently asked questions
- **ScheduleForm** - Full contact/scheduling form with Netlify integration
- **CTA** - Full-width call-to-action section with gradient background
- **Footer** - 4-column footer with company info, contact, hours, and legal links

## 🎨 Customization

### Site Configuration

Edit `src/config/site.ts` to customize your company information:

```typescript
const raw: SiteConfig = {
  companyName: "Your Company Name",
  phone: "(555) 123-4567",
  email: "info@yourcompany.com",
  address: "123 Main Street",
  city: "Your City",
  state: "ST",
  zip: "12345",
  hours: "Mon–Fri 8am–6pm, Sat 9am–2pm",
  socials: {
    facebook: "https://facebook.com/yourcompany",
    instagram: "https://instagram.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany"
  },
  primaryColor: "#3b82f6",
  accentColor: "#10b981"
}
```

### Background Patterns

Backgrounds are controlled at the page level for easy customization. You can:
- Use solid colors: `class="bg-white"` or `class="bg-gray-50"`
- Add patterns from [Hero Patterns](https://heropatterns.com)
- Use gradients or custom backgrounds

### Icons

Icons are from [Heroicons](https://heroicons.com) and are embedded as SVG for performance.

### Images

All images use placeholder images from placehold.co. Replace these with your own:
- Logo: Update in Header component
- Hero background: Update background style in Hero component
- Section images: Update image src attributes in respective components

## 🛠️ Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📄 Page Structure

The main landing page (`src/pages/index.astro`) includes these sections in order:

1. Header (fixed)
2. Hero
3. What Happens
4. How Do I Know
5. Features
6. What You Get
7. The Difference
8. Schedule Now
9. Service Areas
10. Certifications
11. Social Proof
12. FAQ
13. Schedule Form
14. CTA
15. Footer

You can easily rearrange, remove, or duplicate sections as needed.

## 🎯 Form Configuration

The schedule form is configured for Netlify Forms by default. To use with GoHighLevel or another provider:

1. Open `src/components/ScheduleForm.astro`
2. Replace the form attributes with your provider's requirements
3. Update the form action and method as needed

## 📱 Responsive Design

All components are built mobile-first with Tailwind CSS responsive utilities:
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

## 🎨 Styling

The template uses Tailwind CSS 4 with the following color scheme:
- **Primary**: Blue (`blue-600`)
- **Accent**: Green (`green-600`)
- **Gray scale**: Slate

Colors can be easily customized by updating the class names or extending Tailwind configuration.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📝 License

This template is free to use for your projects.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## ✨ Credits

Built by Rebel Ape Marketing
