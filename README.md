# Shamsipour Security - Mobile-First Landing Page

## Overview
This is a **mobile-first responsive landing page** for a fictional IT security company called Shamsipour Security. The design focuses on **mobile usability**, but it scales nicely to tablets and desktops. The page demonstrates a clean, simple, and professional layout using only **HTML, CSS, and JavaScript** without any external frameworks like Bootstrap or jQuery.

## Features & Design Decisions

- **Mobile-First Design:** The layout is designed primarily for mobile devices and scales up for larger screens using media queries.
- **Responsive Layout:** Sections and cards adjust their layout depending on the viewport size.
- **Header & Hamburger Menu:** A mobile-friendly hamburger menu that works on both mobile and desktop.
- **Hero Section:** Prominent title, short description, and a call-to-action button.
- **Services Section:** Feature cards with **images, titles, and short descriptions** for quick user understanding.
- **Projects Section:** Cards displaying project titles and descriptions; images are optional to keep it lightweight.
- **Pricing Plans:** Simple cards showing different pricing tiers.
- **Contact Section:** Contact info and a call-to-action button.
- **Footer:** Social links and copyright information.
- **Interactive Elements:** 
  - Hamburger menu toggling
  - Active navigation link highlighting on scroll

## Technologies Used

- **HTML5**: Structure and semantic layout
- **CSS3**: Styling, Flexbox for layout, responsive media queries
- **JavaScript**: Hamburger menu toggle, scroll detection for active links

## Color Palette & Typography

- **Background:** Dark (#0d0d0d)
- **Primary Accent:** Blue (#00d1ff) for buttons and active links
- **Text:** Light (#eaeaea) for readability
- **Font:** System sans-serif (simple and mobile-friendly)

## File Structure

```
project-root/
│
├── index.html       # Main landing page
├── style.css        # Mobile-first CSS styling
├── script.js        # JavaScript for interactive elements
└── README.md        # This file
```

## Notes

- All images used in the services section are optimized for mobile (max width ~640px).
- Cards are stacked vertically on mobile and arranged horizontally on larger screens.
- The design is kept simple for ease of use and clarity.
