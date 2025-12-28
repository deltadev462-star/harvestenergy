# Harvest Energy Website

A modern, responsive corporate website for Harvest Energy - an ISO-certified environmental and energy consulting company specializing in NORM & TENORM management.

## Features

- 🎨 Beautiful, responsive design inspired by Kalium theme
- ⚡ Built with React, TypeScript, and Vite for optimal performance
- 🎭 Smooth animations using Framer Motion
- 📱 Fully responsive across all devices
- 🔍 SEO optimized with meta tags
- 🖼️ Animated gallery for project showcase

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your project images:
   - Place 8 images in the `public` folder named: `photo-1.jpg` through `photo-8.jpg`
   - These images will be used in the Projects gallery

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## Project Structure

```
harvest-energy-frontend/
├── public/              # Static assets (add your 8 photos here)
├── src/
│   ├── components/      # Reusable components
│   │   ├── AnimatedGallery.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   ├── pages/          # Page components
│   │   ├── AboutUs.tsx
│   │   ├── Consultations.tsx
│   │   ├── GetInTouch.tsx
│   │   ├── Goals.tsx
│   │   ├── HarvestPolicy.tsx
│   │   ├── Home.tsx
│   │   ├── Mission.tsx
│   │   ├── Projects.tsx
│   │   ├── Training.tsx
│   │   └── Vision.tsx
│   ├── App.tsx         # Main app component with routing
│   ├── index.css       # Global styles and design system
│   └── main.tsx        # Application entry point
├── package.json
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Design System

The website uses a custom design system with:
- **Colors**: Primary (Emerald), Secondary (Slate), Accent (Amber)
- **Typography**: Akrobat font family (ExtraBold for headlines, SemiBold for body)
- **Spacing**: Consistent spacing scale based on rem units
- **Components**: Reusable button styles, cards, and navigation

## Pages

1. **Home** - Company overview and key features
2. **About Us** - Company information and values
3. **Vision** - Company vision statement
4. **Mission** - Company mission and objectives
5. **Goals** - Strategic goals and commitments
6. **Harvest Policy** - General policy and HSSE & Q information
7. **Consultations** - Services offered with expandable sections
8. **Projects** - Animated gallery showcasing projects
9. **Training** - Training programs and areas
10. **Get In Touch** - Contact form and information

## Key Features

### Animated Gallery
The Projects page features a smooth animated gallery with:
- Grid view of project cards
- Lightbox modal with keyboard navigation
- Smooth transitions between images
- Progress indicator
- Responsive design

### Navigation
- Sticky header with blur effect
- Mobile-responsive menu
- Active page highlighting
- Smooth scroll behavior

### Animations
- Slide-up animations on page load
- Hover effects on cards and buttons
- Smooth page transitions
- Framer Motion for advanced animations

## Next Steps

To complete the website:

1. **Add Images**: Place your 8 project photos in the public folder
2. **Backend Integration**: Set up Node.js/Express backend with Supabase
3. **Content Management**: Connect to Supabase for dynamic content
4. **Contact Form**: Implement backend for form submission
5. **Deployment**: Deploy to hosting service (Vercel, Netlify, etc.)

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide Icons

## License

© 2024 Harvest Energy. All rights reserved.