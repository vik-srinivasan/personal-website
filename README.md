# Vikram Srinivasan - Personal Portfolio

A modern personal portfolio website built with React and Vite, featuring a clean minimal design with bold typography.

## Tech Stack

- **React 19** with React Router for client-side routing
- **Vite** for fast development and optimized builds
- **CSS Modules** for scoped component styling
- **Google Fonts** (Inter + Sora) for typography
- **Formspree** for contact form handling

## Features

- Responsive design with mobile hamburger navigation
- Scroll-triggered fade-in animations via Intersection Observer
- Lazy-loaded blog post content with code splitting
- Frosted glass navbar with backdrop blur
- Featured project cards with inverted dark styling
- Timeline components for education and work experience

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  components/
    layout/     # Navbar, Footer, ScrollToTop
    ui/         # Card, ContactForm, FadeInSection, SectionHeading, TimelineItem
  content/      # Blog article JSX components
  data/         # Static data (projects, experience, education, blog posts)
  hooks/        # Custom React hooks
  pages/        # Route page components
public/
  images/       # Portfolio images
  resume.pdf    # Resume download
```
