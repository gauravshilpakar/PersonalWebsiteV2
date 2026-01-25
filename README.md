# Gaurav Shilpakar - Personal Portfolio Website

A modern personal portfolio website built with **Next.js 16**, **React 19**, and **TypeScript 5**.

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.4 (App Router)
- **UI Library**: React 19.2.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + Custom CSS
- **Icons**: Font Awesome
- **Deployment**: Optimized for Vercel, Heroku, or any Node.js hosting

## 📦 Getting Started

### Prerequisites

- Node.js 24+ (LTS)
- npm 11+

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 🎨 Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Single Page Application**: Smooth scroll navigation between sections
- **Dynamic Content**: Experience and projects loaded from JSON files
- **Photography Gallery**: Masonry-style photo grid
- **Contact Form**: Interactive contact form with social media links
- **Modern UI**: Dark theme with custom borders and typography

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main page with all sections
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Home.tsx         # Hero section
│       ├── Nav.tsx          # Navigation bar
│       ├── About.tsx        # About section
│       ├── Experience.tsx   # Work experience timeline
│       ├── Works.tsx        # Projects showcase
│       ├── Beyond.tsx       # Photography gallery
│       └── Contact.tsx      # Contact form
├── public/
│   └── assets/
│       ├── experiences.json # Work experience data
│       ├── works.json       # Projects data
│       ├── images/          # Profile images
│       ├── img/             # Project & gallery images
│       └── resume.pdf       # Downloadable resume
└── angular_old/             # Original Angular app (archived)
```

## 🔄 Migration from Angular

This project was migrated from Angular 14 to Next.js 16. The original Angular application is preserved in the `angular_old/` folder.

### Key Changes:

- ✅ Converted Angular components to React functional components
- ✅ Replaced RxJS observables with React hooks (`useState`, `useEffect`)
- ✅ Migrated from Bootstrap 3 to Tailwind CSS 4 + custom CSS
- ✅ Updated Font Awesome integration for React
- ✅ Improved TypeScript types and interfaces
- ✅ Optimized images with Next.js Image component

## 📝 Content Management

Update your content by editing these JSON files:

- `public/assets/experiences.json` - Work experience
- `public/assets/works.json` - Projects portfolio

Replace images in `public/assets/images/` and `public/assets/img/`.

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Heroku

The project includes configuration for Heroku deployment:

```bash
git push heroku master
```

### Other Platforms

Build the project and deploy the `.next` folder with Node.js:

```bash
npm run build
npm start
```

## 📄 License

Personal portfolio website - All rights reserved.

## 👤 Author

**Gaurav Shilpakar**

- Email: gaurav.shilpakar@gmail.com
- LinkedIn: [gauravshilpakar](https://www.linkedin.com/in/gauravshilpakar/)
- GitHub: [gauravshilpakar](https://github.com/gauravshilpakar)

---

Built with ❤️ using Next.js and React
