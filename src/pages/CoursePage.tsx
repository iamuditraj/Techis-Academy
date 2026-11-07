import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import logoImg from "../imports/WhatsApp_Image_2026-08-29_at_9.15.10_PM.jpeg";

const ArrowLeft = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const ArrowRight = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

type Course = {
  slug: string;
  title: string;
  tagline: string;
  emoji: string;
  accent: string;
  accentLight: string;
  duration: string;
  level: string;
  mode: string;
  certificate: boolean;
  about: string;
  highlights: string[];
  learns: string[];
  weeks: { label: string; topic: string; details: string }[];
  tools: { name: string; emoji: string }[]; // kept for type compat, not rendered
  whoFor: string[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
  instructorNote: string;
};

const COURSES: Course[] = [
  // ── Class 4 ───────────────────────────────────────────────────────────────────
  {
    slug: "canvas-designing-class-4",
    title: "Basic Canvas & Basic Designing",
    tagline: "Make colorful posters, AI art and phone screen designs — a fun 2-month creative course for Class 4.",
    emoji: "🎨",
    accent: "#2563EB",
    accentLight: "#EFF6FF",
    duration: "2 Months",
    level: "Beginner",
    mode: "Online & Offline",
    certificate: true,
    about:
      "Class 4 students learn to make colorful posters, greeting cards and funny story pictures using Canva and AI tools. In Month 2 they step into Figma and draw simple phone screens — finishing with their very own 3-page Cartoon Story App or Game Screen. Every student creates 3 real projects and earns a certificate!",
    highlights: [
      "2 months · 10 fun, hands-on modules",
      "3 real projects — poster, greeting card & app screen",
      "Student Certificate + Parent Showcase Day",
      "Works on laptop, tablet or school computers",
    ],
    learns: [
      "Make Birthday Cards, School Posters and Wallpapers in Canva",
      "Use AI Photo Generator to create cartoon and story pictures",
      "Pick nice colors and combine shapes (circles, squares & stars)",
      "Add big bold titles and clean handwriting-style fonts",
      "Learn Figma basics — shapes, icons, boxes and drawing tools",
      "Design colorful buttons, profile pictures and app main pages",
      "Build a complete 3-page Cartoon Story App or Game Screen",
      "Present your final design to friends and teachers",
    ],
    weeks: [
      { label: "Month 1 · Module 1", topic: "Introduction to Digital Design", details: "What is digital design? Explore tools, workspace setup and your first Canva project." },
      { label: "Month 1 · Module 2", topic: "Canva Basics & AI Photo Fun", details: "Birthday cards, school posters, wallpapers and AI-generated cartoon pictures." },
      { label: "Month 1 · Module 3", topic: "Colors & Shapes", details: "Color theory in action — picking palettes, combining circles, squares and stars." },
      { label: "Month 1 · Module 4", topic: "Text & Fonts", details: "Adding big bold titles, handwriting styles and clean text layouts." },
      { label: "Month 1 · Module 5", topic: "Month 1 Mini Project", details: "Design a complete greeting card or school event poster using all Month 1 skills." },
      { label: "Month 2 · Module 6", topic: "Figma Tool Introduction", details: "Learning basic tools, drawing boxes, shapes and icons on Figma." },
      { label: "Month 2 · Module 7", topic: "Buttons, Icons & UI Elements", details: "Draw colorful buttons, icons and navigation bars for a mobile screen." },
      { label: "Month 2 · Module 8", topic: "App Screen Design", details: "Drawing profile pictures, home screens and main pages of a mobile app." },
      { label: "Month 2 · Module 9", topic: "Storyboard & App Flow", details: "Connect 3 app screens together into a simple interactive story or game flow." },
      { label: "Month 2 · Module 10", topic: "Final Project & Showcase", details: "Build a complete 3-page Cartoon Story App and present it to friends and teachers." },
    ],
    tools: [],
    whoFor: [
      "Class 4 students",
      "Kids who love art, drawing or coloring",
      "Complete beginners — zero experience needed",
      "Students who want to create their first digital project",
    ],
    outcomes: [
      "Create professional-looking posters and cards in Canva",
      "Generate AI art by typing simple prompts",
      "Design a simple mobile app screen in Figma",
      "Own a portfolio of 3 real creative projects",
    ],
    faqs: [],
    instructorNote:
      "This course is designed to feel like a creative art class — not a computer class. Every session produces something kids are proud to show their parents. By Module 3 every student is smiling at their own designs.",
  },

  // ── Class 5 ───────────────────────────────────────────────────────────────────
  {
    slug: "canvas-designing-class-5",
    title: "Basic Canvas & Basic Designing",
    tagline: "Make colorful posters, AI art and phone screen designs — a fun 2-month creative course for Class 5.",
    emoji: "🎨",
    accent: "#2563EB",
    accentLight: "#EFF6FF",
    duration: "2 Months",
    level: "Beginner",
    mode: "Online & Offline",
    certificate: true,
    about:
      "Class 5 students learn to make colorful posters, greeting cards and funny story pictures using Canva and AI tools. In Month 2 they step into Figma and draw simple phone screens — finishing with their very own 3-page Cartoon Story App or Game Screen. Every student creates 3 real projects and earns a certificate!",
    highlights: [
      "2 months · 10 fun, hands-on modules",
      "3 real projects — poster, greeting card & app screen",
      "Student Certificate + Parent Showcase Day",
      "Works on laptop, tablet or school computers",
    ],
    learns: [
      "Make Birthday Cards, School Posters and Wallpapers in Canva",
      "Use AI Photo Generator to create cartoon and story pictures",
      "Pick nice colors and combine shapes (circles, squares & stars)",
      "Add big bold titles and clean handwriting-style fonts",
      "Learn Figma basics — shapes, icons, boxes and drawing tools",
      "Design colorful buttons, profile pictures and app main pages",
      "Build a complete 3-page Cartoon Story App or Game Screen",
      "Present your final design to friends and teachers",
    ],
    weeks: [
      { label: "Month 1 · Module 1", topic: "Introduction to Digital Design", details: "What is digital design? Explore tools, workspace setup and your first Canva project." },
      { label: "Month 1 · Module 2", topic: "Canva Basics & AI Photo Fun", details: "Birthday cards, school posters, wallpapers and AI-generated cartoon pictures." },
      { label: "Month 1 · Module 3", topic: "Colors & Shapes", details: "Color theory in action — picking palettes, combining circles, squares and stars." },
      { label: "Month 1 · Module 4", topic: "Text & Fonts", details: "Adding big bold titles, handwriting styles and clean text layouts." },
      { label: "Month 1 · Module 5", topic: "Month 1 Mini Project", details: "Design a complete greeting card or school event poster using all Month 1 skills." },
      { label: "Month 2 · Module 6", topic: "Figma Tool Introduction", details: "Learning basic tools, drawing boxes, shapes and icons on Figma." },
      { label: "Month 2 · Module 7", topic: "Buttons, Icons & UI Elements", details: "Draw colorful buttons, icons and navigation bars for a mobile screen." },
      { label: "Month 2 · Module 8", topic: "App Screen Design", details: "Drawing profile pictures, home screens and main pages of a mobile app." },
      { label: "Month 2 · Module 9", topic: "Storyboard & App Flow", details: "Connect 3 app screens together into a simple interactive story or game flow." },
      { label: "Month 2 · Module 10", topic: "Final Project & Showcase", details: "Build a complete 3-page Cartoon Story App and present it to friends and teachers." },
    ],
    tools: [],
    whoFor: [
      "Class 5 students",
      "Kids who love art, drawing or coloring",
      "Complete beginners — zero experience needed",
      "Students who want to create their first digital project",
    ],
    outcomes: [
      "Create professional-looking posters and cards in Canva",
      "Generate AI art by typing simple prompts",
      "Design a simple mobile app screen in Figma",
      "Own a portfolio of 3 real creative projects",
    ],
    faqs: [],
    instructorNote:
      "This course is designed to feel like a creative art class — not a computer class. Every session produces something kids are proud to show their parents. By Module 3 every student is smiling at their own designs.",
  },

  // ── Class 6 ───────────────────────────────────────────────────────────────────
  {
    slug: "app-graphics-class-6",
    title: "Understanding Apps & Graphic Designing",
    tagline: "Learn color theory, AI visual art and how mobile apps are designed — 2-month course for Class 6.",
    emoji: "🖼",
    accent: "#A21CAF",
    accentLight: "#FDF4FF",
    duration: "2 Months",
    level: "Beginner",
    mode: "Online & Offline",
    certificate: true,
    about:
      "Class 6 students learn color matching, font styling and how mobile apps work. They use AI tools to generate creative images and design connected screens for a smartphone app. By Month 2, they build a complete School App Project with multiple linked screens and a portfolio-ready design.",
    highlights: [
      "2 months · 10 engaging modules",
      "Build a complete School App Project",
      "Student Certificate + Parent Showcase Day",
      "Learn real design tools used by professionals",
    ],
    learns: [
      "Understand color theory and how colors work together",
      "Match fonts and create clean text layouts for apps",
      "Use AI to generate creative images and visual artwork",
      "Design clickable app layouts with connected screens",
      "Create a navigation bar and home screen for a mobile app",
      "Learn how professional apps are planned and structured",
      "Build a School App Project with multiple pages",
      "Present your finished app design to the class",
    ],
    weeks: [
      { label: "Month 1 · Module 1", topic: "Introduction to App Design", details: "What are apps? How are they designed? Explore real apps and understand their structure." },
      { label: "Month 1 · Module 2", topic: "Color Theory & Palettes", details: "How colors work together — warm, cool, complementary and split-complementary palettes." },
      { label: "Month 1 · Module 3", topic: "Fonts & Text Design", details: "Font pairing, text hierarchy, size contrast and clean readable layouts." },
      { label: "Month 1 · Module 4", topic: "AI Visual Art & Image Generation", details: "Use AI tools to generate creative images, backgrounds and illustrations for app screens." },
      { label: "Month 1 · Module 5", topic: "Month 1 Mini Project", details: "Design a themed poster or app banner combining colors, fonts and AI images." },
      { label: "Month 2 · Module 6", topic: "App Layout & Screen Structure", details: "Understand app screens — home, profile, list and detail views. Draw basic wireframes." },
      { label: "Month 2 · Module 7", topic: "Navigation & Clickable Flow", details: "Add navigation bars, back buttons and connect app screens into a clickable flow." },
      { label: "Month 2 · Module 8", topic: "School App Project — Design", details: "Start designing the full School App: Home, Timetable, Teachers and Notice Board screens." },
      { label: "Month 2 · Module 9", topic: "School App Project — Polish", details: "Apply colors, fonts and AI images to all screens. Make it look like a real app." },
      { label: "Month 2 · Module 10", topic: "Final Presentation & Showcase", details: "Present your completed School App design to friends, teachers and parents." },
    ],
    tools: [],
    whoFor: [
      "Class 6 students",
      "Students who enjoy art, creativity and technology",
      "Anyone curious about how apps are designed",
      "Students ready to go beyond basic drawing tools",
    ],
    outcomes: [
      "Design a complete multi-screen mobile app",
      "Apply color theory and font pairing confidently",
      "Generate AI artwork for real design projects",
      "Build a School App portfolio piece",
    ],
    faqs: [],
    instructorNote:
      "Class 6 is where students start thinking like real designers — not just making pretty pictures but understanding why certain colors, fonts and layouts work. It's a big leap and every student surprises themselves.",
  },

  // ── Class 7 ───────────────────────────────────────────────────────────────────
  {
    slug: "app-design-ai",
    title: "Full App Design & Understand AI",
    tagline: "Build full working mobile app designs and master smart AI tools — in 2 months.",
    emoji: "📱",
    accent: "#6D3CF5",
    accentLight: "#F5F3FF",
    duration: "2 Months",
    level: "Intermediate",
    mode: "Online & Offline",
    certificate: true,
    about:
      "Students build full working designs for mobile apps. They learn to make reusable buttons, interactive screens and use smart AI tools to create complete digital projects. Month 1 covers advanced design and AI tools; Month 2 is dedicated to building a full E-commerce Shopping App with a portfolio showcase. Every student graduates with a Certificate and a Project Portfolio PDF.",
    highlights: [
      "2 months — advanced design + real AI tools",
      "Build a full E-commerce Shopping App design",
      "Student Certificate + Project Portfolio PDF",
      "Graduation Showcase with parents & school",
    ],
    learns: [
      "Create reusable Smart Buttons & Components in Figma",
      "Use AI Design Assistant to write app ideas and outlines",
      "Build custom Logo & Color Themes for an app brand",
      "Apply User Experience (UX) principles — make apps anyone can use",
      "Design Interactive App Flows with pop-ups and slide animations",
      "Build a real E-commerce / Online Shopping App",
      "Compile all work into a clean Portfolio Presentation",
      "Present your app on Graduation Showcase Day",
    ],
    weeks: [
      { label: "Month 1 · Module 1", topic: "Design Thinking & Figma Workspace", details: "Understand design thinking, set up Figma and explore frames, layers and grids." },
      { label: "Month 1 · Module 2", topic: "Smart Figma Components", details: "Create one button and reuse it everywhere — build a complete design system." },
      { label: "Month 1 · Module 3", topic: "AI Design Assistant", details: "Use AI to write story text, app ideas, topic outlines and generate design assets." },
      { label: "Month 1 · Module 4", topic: "Logo & Color Theme", details: "Custom theme colors, app icons and building a complete brand identity." },
      { label: "Month 1 · Module 5", topic: "UX Basics & User Flow", details: "How to make apps that anyone can use — user journeys, wireframes and navigation." },
      { label: "Month 2 · Module 6", topic: "Interactive App Flow", details: "Smooth pop-ups, slide animations and working search bars in Figma." },
      { label: "Month 2 · Module 7", topic: "App Screens Deep Dive", details: "Design Home, Product, Cart and Profile screens for a shopping app." },
      { label: "Month 2 · Module 8", topic: "Real App Project — Shopping App", details: "Design a full E-commerce / Online Shopping App from product listing to checkout." },
      { label: "Month 2 · Module 9", topic: "Portfolio Creation", details: "Compile all Month 1 and Month 2 work into a clean, shareable Portfolio PDF." },
      { label: "Month 2 · Module 10", topic: "Graduation Showcase", details: "Present your Shopping App and Portfolio. Receive certificate on Demo Day." },
    ],
    tools: [],
    whoFor: [
      "Class 7 students",
      "Students who have done Basic Canvas or similar",
      "Anyone interested in UI/UX design and AI",
      "Future designers, product creators and tech entrepreneurs",
    ],
    outcomes: [
      "Design a full Shopping App with interactive screens",
      "Build and reuse a professional component library",
      "Use AI tools confidently for real design work",
      "Graduate with a Portfolio PDF and a Certificate",
    ],
    faqs: [],
    instructorNote:
      "AI is not just for engineers — designers who understand AI have a massive advantage. This course gives Class 7 students both the creative and technical edge they need in today's digital world.",
  },

  // ── Class 9 ───────────────────────────────────────────────────────────────────
  {
    slug: "styling-js-class-9",
    title: "More on Styling & JS Fun",
    tagline: "Level up with CSS Flexbox, JavaScript and interactive web projects — 2-month course for Class 9.",
    emoji: "⚡",
    accent: "#F59E0B",
    accentLight: "#FFFBEB",
    duration: "2 Months",
    level: "Intermediate",
    mode: "Online & Offline",
    certificate: true,
    about:
      "Class 9 students go deeper into web development — mastering CSS Flexbox, hover effects, Google Fonts and Icons, then stepping into JavaScript. They build a Dark/Light Mode toggle, interactive forms and a School Portal Page, finishing with a complete styled multi-page project presented live.",
    highlights: [
      "2 months · 10 structured modules",
      "Build a School Portal Page with JavaScript",
      "Student Certificate + Live Project Demo",
      "Real coding skills that lead directly to Class 10",
    ],
    learns: [
      "Master CSS Flexbox for professional page layouts",
      "Add hover effects, transitions and animations",
      "Use Google Fonts and Material Icons in web pages",
      "Write JavaScript — variables, functions and events",
      "Build a Dark/Light Mode toggle using JS and CSS",
      "Create interactive HTML forms with validation",
      "Build a styled School Portal Page",
      "Present your project live with a demo",
    ],
    weeks: [
      { label: "Month 1 · Module 1", topic: "HTML Revision & Advanced Tags", details: "Quick HTML recap, semantic tags (header, nav, section, footer) and accessibility basics." },
      { label: "Month 1 · Module 2", topic: "CSS Flexbox Layouts", details: "Flexbox container and item properties — row, column, wrap, justify and align." },
      { label: "Month 1 · Module 3", topic: "Hover Effects & Transitions", details: "CSS :hover, transitions, transform effects and animated buttons." },
      { label: "Month 1 · Module 4", topic: "Google Fonts & Icons", details: "Import custom fonts and Material Icons — make pages look modern and polished." },
      { label: "Month 1 · Module 5", topic: "JavaScript Basics", details: "Variables, data types, functions, console.log and your first JS alert/popup." },
      { label: "Month 2 · Module 6", topic: "JS Events & DOM Manipulation", details: "Click events, button interactions and changing page content with JavaScript." },
      { label: "Month 2 · Module 7", topic: "Dark / Light Mode Toggle", details: "Build a working Dark/Light Mode switch using JS variables and CSS classes." },
      { label: "Month 2 · Module 8", topic: "HTML Forms & Input Types", details: "Text inputs, dropdowns, radio buttons, checkboxes and basic JS form validation." },
      { label: "Month 2 · Module 9", topic: "School Portal Page Project", details: "Build a styled multi-section School Portal — Home, Notices, Timetable and Login page." },
      { label: "Month 2 · Module 10", topic: "Final Project Demo & Showcase", details: "Present your complete School Portal Page live. Receive certificate on Demo Day." },
    ],
    tools: [],
    whoFor: [
      "Class 9 students",
      "Students who know basic HTML and CSS",
      "Anyone ready to start JavaScript",
      "Students preparing for Class 10 — Full Interactive Websites",
    ],
    outcomes: [
      "Build fully responsive layouts using CSS Flexbox",
      "Write working JavaScript code independently",
      "Create a School Portal Page with interactive features",
      "Be fully ready for Class 10 — Full Interactive Websites",
    ],
    faqs: [],
    instructorNote:
      "JavaScript changes everything — students go from making static pages to pages that actually DO things. That first moment a button click changes the page is always magical. Class 9 is where coding becomes exciting.",
  },

  // ── Class 10 ──────────────────────────────────────────────────────────────────
  {
    slug: "interactive-websites-class-10",
    title: "Full Interactive Websites & Hosting",
    tagline: "Code a real multi-page website with JavaScript and publish it live on the internet — 2-month course for Class 10.",
    emoji: "🌐",
    accent: "#EF4444",
    accentLight: "#FEF2F2",
    duration: "2 Months",
    level: "Intermediate to Advanced",
    mode: "Online & Offline",
    certificate: true,
    about:
      "Students build full working multi-page websites with interactive forms, JavaScript logic and live hosting on GitHub Pages. Month 1 covers HTML forms, JS data handling and multi-page layout. Month 2 is project-focused — building an E-commerce / Product Catalog site, learning Git & GitHub, and publishing a real live URL. Every student graduates with a Web Developer Certificate and a Live Website Link.",
    highlights: [
      "2 months — from forms to live website",
      "Build an E-commerce / Product Catalog website",
      "Publish a real site with a free GitHub Pages URL",
      "Web Developer Certificate + Live Website Link",
    ],
    learns: [
      "Create HTML Forms — text inputs, dropdowns, radio buttons and checkboxes",
      "Read and validate form data using JavaScript",
      "Write JavaScript Logic — Simple Calculator or Quiz App",
      "Build Multi-Page layouts linking Home, About, Services and Contact",
      "Build an E-commerce / Product Catalog Website with cart preview",
      "Upload code to GitHub and manage project files safely",
      "Publish your website live on GitHub Pages with a free URL",
      "Present your live project to parents and teachers on Showcase Day",
    ],
    weeks: [
      { label: "Month 1 · Module 1", topic: "HTML Revision & Advanced Tags", details: "Quick HTML recap, semantic tags (header, nav, section, footer) and accessibility basics." },
      { label: "Month 1 · Module 2", topic: "HTML Forms & Input Types", details: "Text inputs, dropdown menus, radio buttons, checkboxes and form structure." },
      { label: "Month 1 · Module 3", topic: "CSS Flexbox & Responsive Design", details: "Flexbox layouts, media queries and making pages look great on mobile and desktop." },
      { label: "Month 1 · Module 4", topic: "JS Data Handling & Logic", details: "Reading form values, validating inputs and simple JS calculations (Calculator / Quiz)." },
      { label: "Month 1 · Module 5", topic: "Multi-Page Layout & Navigation", details: "Linking Home, About, Services and Contact pages with a shared navigation bar." },
      { label: "Month 2 · Module 6", topic: "Dark / Light Mode Toggle", details: "JavaScript toggle between dark and light themes using CSS variables and JS events." },
      { label: "Month 2 · Module 7", topic: "Interactive E-commerce Project", details: "Build a Product Catalog website with clickable items and a cart preview." },
      { label: "Month 2 · Module 8", topic: "JavaScript DOM & Events", details: "Dynamic content updates, button events, image sliders and interactive menus." },
      { label: "Month 2 · Module 9", topic: "Git & GitHub Basics", details: "Upload code online, manage project files and understand version control." },
      { label: "Month 2 · Module 10", topic: "Live Hosting & Graduation Showcase", details: "Publish your website on GitHub Pages and present your live site to parents and teachers." },
    ],
    tools: [],
    whoFor: [
      "Class 10 students",
      "Students who have completed Class 9 styling & JS",
      "Anyone who wants a real, live website with their name on it",
      "Students preparing for tech or web development careers",
    ],
    outcomes: [
      "Own a live website with a real public URL",
      "Write JavaScript that calculates and validates data",
      "Manage code on GitHub like a real developer",
      "Graduate with a Web Developer Certificate and live site link",
    ],
    faqs: [],
    instructorNote:
      "Seeing your website go live and sharing the URL with your family — that moment of pride is what this course is built for. Every session produces something real, something that works, something you built yourself.",
  },

  // ── Class 8 ───────────────────────────────────────────────────────────────────
  {
    slug: "website-structure-styling",
    title: "Website Structure & Basic Styling",
    tagline: "Learn how websites work, write your first HTML & CSS, and build a Personal Profile Page — in 2 months.",
    emoji: "💻",
    accent: "#10B981",
    accentLight: "#ECFDF5",
    duration: "2 Months",
    level: "Beginner",
    mode: "Online & Offline",
    certificate: true,
    about:
      "Students learn how websites work, how to build web pages using HTML tags and make them look beautiful with CSS colors, fonts and layouts. Month 1 focuses on HTML fundamentals; Month 2 adds CSS styling, the Box Model and a First Web Project — a Personal Profile Page (Digital Resume / ID Card) presented live to the class.",
    highlights: [
      "2 months — HTML + CSS from absolute scratch",
      "Build a Personal Profile Page (Digital ID Card)",
      "Present your webpage live to friends and teachers",
      "Techies Academy Certificate on completion",
    ],
    learns: [
      "Understand how web browsers and the internet work",
      "Write HTML — headings, paragraphs, line breaks and text",
      "Insert images, background images and links to other websites",
      "Create bullet lists, numbered steps and timetables",
      "Style pages with CSS — text colors, backgrounds, fonts and borders",
      "Understand the Box Model — margins, padding, content and borders",
      "Build a Personal Profile Page (Digital Resume / ID Card)",
      "Present your finished webpage live in class",
    ],
    weeks: [
      { label: "Month 1 · Module 1", topic: "How the Web & Browsers Work", details: "What happens when you type a URL? Browsers, servers, HTML files and VS Code setup." },
      { label: "Month 1 · Module 2", topic: "HTML Basics — Text & Structure", details: "Headings, paragraphs, line breaks, bold, italic, comments and page structure." },
      { label: "Month 1 · Module 3", topic: "Images, Links & Navigation", details: "Inserting photos, background images, clickable links and anchor tags." },
      { label: "Month 1 · Module 4", topic: "Lists, Tables & Semantic HTML", details: "Bullet lists, numbered steps, data tables, and semantic tags (header, main, footer)." },
      { label: "Month 1 · Module 5", topic: "HTML Practice Project", details: "Build a full multi-section HTML page combining headings, images, links and lists." },
      { label: "Month 2 · Module 6", topic: "CSS Basics — Colors & Fonts", details: "Text colors, background colors, font families, font sizes and text alignment." },
      { label: "Month 2 · Module 7", topic: "CSS Borders, Shadows & Backgrounds", details: "Border styles, rounded corners, box shadows and background image techniques." },
      { label: "Month 2 · Module 8", topic: "CSS Box Model & Spacing", details: "Margins, padding, content and border boxes — mastering how CSS spaces everything." },
      { label: "Month 2 · Module 9", topic: "Page Layout with CSS", details: "Centering content, side-by-side columns and basic two-column page layouts." },
      { label: "Month 2 · Module 10", topic: "Personal Profile Page & Showcase", details: "Build and style a complete Personal Profile Page (Digital Resume / ID Card) and present live." },
    ],
    tools: [],
    whoFor: [
      "Class 8 students",
      "Absolute coding beginners — no experience needed",
      "Anyone curious about how websites are actually made",
      "Students preparing to move on to JavaScript and hosting",
    ],
    outcomes: [
      "Build a styled Personal Profile Page from scratch",
      "Understand how every website is structured using HTML",
      "Use CSS to control colors, fonts, spacing and layout",
      "Be fully ready for Class 9 — More on Styling & JS Fun",
    ],
    faqs: [],
    instructorNote:
      "HTML and CSS are not just beginner topics — they are the foundation every web developer, designer and product person uses every day. Learning them properly in Class 8 gives students a head start that lasts for years.",
  },
];

// ── Enquiry Modal ─────────────────────────────────────────────────────────────

function EnquiryModal({ courseTitle, onClose }: { courseTitle: string; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      {/* Backdrop */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(7,26,61,0.55)", backdropFilter: "blur(4px)" }} onClick={onClose} />

      {/* Modal card */}
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 460, background: "#fff", borderRadius: 24, boxShadow: "0 32px 80px rgba(7,26,61,0.25)", overflow: "hidden", animation: "fadeUp 0.22s ease" }}>

        {/* Header */}
        <div style={{ background: "linear-gradient(135deg, #071A3D 0%, #123BCE 100%)", padding: "24px 28px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 18, color: "#fff", marginBottom: 4 }}>Ask a Question</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.65)" }}>We'll get back to you within 24 hours.</div>
            </div>
            <button onClick={onClose} style={{ background: "rgba(255,255,255,0.12)", border: "none", borderRadius: 8, width: 32, height: 32, cursor: "pointer", color: "#fff", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>✕</button>
          </div>
          {/* Pre-filled course pill */}
          <div style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(245,158,11,0.2)", border: "1px solid rgba(245,158,11,0.4)", borderRadius: 99, padding: "5px 14px" }}>
            <span style={{ fontSize: 13 }}>📚</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#FCD34D", fontWeight: 600 }}>{courseTitle}</span>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px 28px" }}>
          {!submitted ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { key: "name", label: "Your Name *", type: "text", placeholder: "e.g. Rahul Sharma" },
                { key: "phone", label: "Phone Number *", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                { key: "email", label: "Email Address", type: "email", placeholder: "you@email.com" },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} value={form[f.key as keyof typeof form]}
                    onChange={e => set(f.key, e.target.value)}
                    style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", boxSizing: "border-box", background: "#FAFAFA" }} />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Your Question / Message</label>
                <textarea rows={3} placeholder="What would you like to know about this course?" value={form.message}
                  onChange={e => set("message", e.target.value)}
                  style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", boxSizing: "border-box", background: "#FAFAFA", resize: "none" }} />
              </div>
              <button onClick={handleSubmit} disabled={loading || !form.name.trim() || !form.phone.trim()}
                style={{ width: "100%", padding: "13px", borderRadius: 12, border: "none", background: (!form.name.trim() || !form.phone.trim()) ? "#E5E7EB" : "#F59E0B", color: (!form.name.trim() || !form.phone.trim()) ? "#9CA3AF" : "#071A3D", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, cursor: (!form.name.trim() || !form.phone.trim()) ? "not-allowed" : "pointer", boxShadow: (!form.name.trim() || !form.phone.trim()) ? "none" : "0 6px 20px rgba(245,158,11,0.4)", transition: "all 0.2s", opacity: loading ? 0.7 : 1 }}>
                {loading ? "Sending..." : "Submit Enquiry →"}
              </button>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div style={{ fontSize: 52, marginBottom: 14 }}>✅</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 20, color: "#071A3D", marginBottom: 8 }}>Enquiry Sent!</div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#6B7280", lineHeight: 1.75, marginBottom: 24 }}>
                Thanks, <strong>{form.name}</strong>! We've received your question about <strong>{courseTitle}</strong>. Our team will contact you on <strong>{form.phone}</strong> within 24 hours.
              </p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                <button onClick={onClose} style={{ padding: "11px 28px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#123BCE,#2563EB)", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Close</button>
              </div>
            </div>
          )}

          <div style={{ marginTop: 16, display: "flex", gap: 16, justifyContent: "center" }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF" }}>📞 +91 6201786801</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF" }}>✉️ techiesacademy.edu@gmail.com</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function CoursePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const course = COURSES.find(c => c.slug === slug);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!course) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, fontFamily: "Poppins, sans-serif" }}>
        <div style={{ fontSize: 56 }}>🔍</div>
        <h2 style={{ color: "#071A3D", fontSize: 22 }}>Course not found</h2>
        <button onClick={() => navigate("/")} style={{ background: "#2563EB", color: "#fff", border: "none", padding: "12px 24px", borderRadius: 10, cursor: "pointer", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 14 }}>Back to Home</button>
      </div>
    );
  }

  const goToRegister = () => navigate(`/register?course=${encodeURIComponent(course.title)}`);

  return (
    <div style={{ minHeight: "100vh", background: "#F7F9FC", fontFamily: "Inter, sans-serif" }}>

      {/* ── Responsive styles ── */}
      <style>{`
        .cp-topbar-inner { max-width:900px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; }
        .cp-logo-text { font-family:Poppins,sans-serif; font-weight:700; font-size:14px; color:#fff; }
        .cp-topbar-btns { display:flex; gap:10px; }
        .cp-topbar-register { background:#F59E0B; color:#071A3D; font-family:Poppins,sans-serif; font-weight:700; font-size:13px; padding:7px 16px; border-radius:8px; border:none; cursor:pointer; white-space:nowrap; }
        .cp-topbar-back { display:flex; align-items:center; gap:6px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); color:#CBD5E1; font-family:Inter,sans-serif; font-size:13px; padding:7px 14px; border-radius:8px; cursor:pointer; }

        .cp-content { max-width:900px; margin:0 auto; padding:0 20px 80px; }

        .cp-hero { border-radius:0 0 32px 32px; padding:clamp(32px,5vw,60px) clamp(22px,4vw,52px); margin-bottom:28px; position:relative; overflow:hidden; }
        .cp-hero-emoji { font-size:clamp(44px,8vw,64px); margin-bottom:14px; line-height:1; }
        .cp-hero h1 { font-family:Poppins,sans-serif; font-weight:800; font-size:clamp(20px,4vw,36px); color:#fff; line-height:1.2; margin-bottom:12px; max-width:600px; }
        .cp-hero-tagline { font-family:Inter,sans-serif; font-size:clamp(13px,2vw,15px); color:rgba(255,255,255,0.8); line-height:1.75; margin-bottom:22px; max-width:540px; }
        .cp-meta-pills { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:26px; }
        .cp-meta-pill { display:flex; align-items:center; gap:6px; background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.2); border-radius:10px; padding:7px 13px; }
        .cp-meta-pill span:last-child { font-family:Inter,sans-serif; font-size:12px; color:#E2E8F0; font-weight:500; }
        .cp-hero-cta { display:flex; gap:12px; flex-wrap:wrap; }
        .cp-btn-enrol { background:#F59E0B; color:#071A3D; font-family:Poppins,sans-serif; font-weight:700; font-size:clamp(13px,2vw,14px); padding:13px 28px; border-radius:12px; border:none; cursor:pointer; display:inline-flex; align-items:center; gap:8px; box-shadow:0 6px 20px rgba(245,158,11,0.5); }
        .cp-btn-ask { background:rgba(255,255,255,0.1); color:#fff; font-family:Poppins,sans-serif; font-weight:600; font-size:clamp(13px,2vw,14px); padding:13px 22px; border-radius:12px; border:1px solid rgba(255,255,255,0.25); cursor:pointer; }

        .cp-highlights { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px; margin-bottom:22px; }
        .cp-highlight-card { background:#fff; border-radius:16px; padding:16px 18px; border:1px solid #E5E7EB; box-shadow:0 2px 8px rgba(7,26,61,0.05); display:flex; gap:12px; align-items:flex-start; }

        .cp-about { border-radius:20px; padding:clamp(18px,3vw,26px) clamp(18px,3vw,30px); margin-bottom:22px; }
        .cp-about-inner { display:flex; gap:16px; align-items:flex-start; }

        .cp-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-bottom:22px; }
        .cp-card { border-radius:20px; padding:clamp(20px,3vw,26px) clamp(18px,3vw,28px); }
        .cp-card-white { background:#fff; border:1px solid #E5E7EB; box-shadow:0 2px 12px rgba(7,26,61,0.05); }
        .cp-card-dark { background:#071A3D; }

        .cp-curriculum { background:#fff; border-radius:20px; padding:clamp(20px,3vw,28px) clamp(18px,3vw,30px); border:1px solid #E5E7EB; box-shadow:0 2px 12px rgba(7,26,61,0.05); margin-bottom:22px; }
        .cp-week-row { display:flex; gap:14px; align-items:flex-start; border-radius:14px; padding:14px 18px; }

        .cp-instructor { border-radius:20px; padding:clamp(20px,3vw,26px) clamp(18px,3vw,30px); margin-bottom:22px; display:flex; gap:18px; align-items:flex-start; background:linear-gradient(135deg,#071A3D 0%,#1E3A5F 100%); }

        .cp-cta { border-radius:24px; padding:clamp(28px,4vw,52px) clamp(20px,4vw,52px); text-align:center; position:relative; overflow:hidden; }

        /* Tablet: ≤ 720px */
        @media (max-width: 720px) {
          .cp-grid-2 { grid-template-columns:1fr; }
          .cp-highlights { grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); }
        }

        /* Mobile: ≤ 480px */
        @media (max-width: 480px) {
          .cp-content { padding:0 14px 60px; }
          .cp-logo-text { display:none; }
          .cp-topbar-back span { display:none; }
          .cp-topbar-back { padding:7px 10px; }
          .cp-topbar-register { font-size:12px; padding:7px 12px; }
          .cp-hero { border-radius:0 0 24px 24px; }
          .cp-about-inner { flex-direction:column; gap:12px; }
          .cp-instructor { flex-direction:column; gap:12px; }
          .cp-btn-enrol, .cp-btn-ask { width:100%; justify-content:center; padding:13px 16px; }
          .cp-hero-cta { flex-direction:column; }
          .cp-highlights { grid-template-columns:1fr 1fr; gap:10px; }
          .cp-week-row { padding:12px 14px; gap:10px; }
        }

        @keyframes fadeUp {
          from { transform:translateY(20px); opacity:0; }
          to   { transform:translateY(0);    opacity:1; }
        }
      `}</style>

      {/* Topbar */}
      <div style={{ background: "#071A3D", padding: "12px 16px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
        <div className="cp-topbar-inner">
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => navigate("/")}>
            <img src={logoImg} alt="Techies Academy" style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.2)", flexShrink: 0 }} />
            <span className="cp-logo-text">Techies Academy</span>
          </div>
          <div className="cp-topbar-btns">
            <button className="cp-topbar-back" onClick={() => navigate(-1)}>
              <ArrowLeft /> <span>Back</span>
            </button>
            <button className="cp-topbar-register" onClick={goToRegister}>
              Register Now →
            </button>
          </div>
        </div>
      </div>

      <div className="cp-content">

        {/* ── Hero ── */}
        <div className="cp-hero" style={{ background: `linear-gradient(135deg, #071A3D 0%, ${course.accent} 100%)` }}>
          <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -40, left: -30, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.03)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="cp-hero-emoji">{course.emoji}</div>
            <h1>{course.title}</h1>
            <p className="cp-hero-tagline">{course.tagline}</p>
            <div className="cp-meta-pills">
              {[
                { icon: "⏱", v: course.duration },
                { icon: "📊", v: course.level },
                { icon: "🌐", v: course.mode },
                { icon: "🎓", v: "Certificate" },
              ].map(m => (
                <div key={m.v} className="cp-meta-pill">
                  <span style={{ fontSize: 12 }}>{m.icon}</span>
                  <span>{m.v}</span>
                </div>
              ))}
            </div>
            <div className="cp-hero-cta">
              <button className="cp-btn-enrol" onClick={goToRegister}>
                Enrol in This Course <ArrowRight />
              </button>
              <button className="cp-btn-ask" onClick={() => setEnquiryOpen(true)}>
                Ask a Question
              </button>
            </div>
          </div>
        </div>

        {/* ── Course Highlights ── */}
        <div className="cp-highlights">
          {course.highlights.map((h, i) => {
            const icons = ["🏆", "📜", "💡", "👨‍🏫"];
            return (
              <div key={h} className="cp-highlight-card">
                <div style={{ width: 34, height: 34, borderRadius: 10, background: course.accentLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>{icons[i % icons.length]}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#374151", fontWeight: 500, lineHeight: 1.55 }}>{h}</div>
              </div>
            );
          })}
        </div>

        {/* ── About ── */}
        <div className="cp-about" style={{ background: course.accentLight, border: `1px solid ${course.accent}25` }}>
          <div className="cp-about-inner">
            <div style={{ width: 46, height: 46, borderRadius: 14, background: `${course.accent}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>📖</div>
            <div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "#071A3D", marginBottom: 10 }}>About This Course</div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#374151", lineHeight: 1.8, margin: 0 }}>{course.about}</p>
            </div>
          </div>
        </div>

        {/* ── What You Learn + Who For ── */}
        <div className="cp-grid-2">
          <div className="cp-card cp-card-white">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: course.accentLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>✅</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "#071A3D" }}>What You'll Learn</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {course.learns.map(item => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: course.accent, fontSize: 15, flexShrink: 0, lineHeight: 1.5, fontWeight: 700 }}>→</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#374151", lineHeight: 1.65 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cp-card cp-card-dark">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>👥</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>Who Is This For?</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
              {course.whoFor.map(item => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "center", background: "rgba(255,255,255,0.07)", borderRadius: 10, padding: "11px 14px" }}>
                  <span style={{ color: "#60A5FA", fontSize: 14, flexShrink: 0, fontWeight: 700 }}>✓</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#E2E8F0" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: 12, padding: "12px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>💬</span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#FCD34D", lineHeight: 1.6 }}>Not sure if this is right for you? Call us at <strong>+91 6201786801</strong> and we'll help you decide.</span>
            </div>
          </div>
        </div>

        {/* ── Curriculum ── */}
        <div className="cp-curriculum">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: course.accentLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>📅</div>
            <div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "#071A3D" }}>Week-by-Week Curriculum</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#9CA3AF", marginTop: 2 }}>{course.duration} · {course.weeks.length} modules</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {course.weeks.map((w, i) => (
              <div key={w.label} className="cp-week-row" style={{ background: course.accentLight, border: `1px solid ${course.accent}20` }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: course.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 12, color: "#fff" }}>{i + 1}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 10, color: course.accent, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 3 }}>{w.label}</div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#071A3D", marginBottom: 3 }}>{w.topic}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6B7280", lineHeight: 1.6 }}>{w.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── What You'll Achieve ── */}
        <div className="cp-card cp-card-white" style={{ marginBottom: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: course.accentLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>🏁</div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "#071A3D" }}>What You'll Achieve</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="cp-grid-2">
            {course.outcomes.map((o, i) => (
              <div key={o} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: course.accentLight, border: `1.5px solid ${course.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 10, color: course.accent }}>{i + 1}</span>
                </div>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#374151", lineHeight: 1.65 }}>{o}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Instructor Note ── */}
        <div className="cp-instructor">
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(245,158,11,0.2)", border: "2px solid rgba(245,158,11,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>👨‍🏫</div>
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#F59E0B", marginBottom: 8 }}>A Note from Your Instructor</div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.82)", lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>"{course.instructorNote}"</p>
            <div style={{ marginTop: 12, fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 12, color: "#60A5FA" }}>— Techies Academy Teaching Team</div>
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div className="cp-cta" style={{ background: `linear-gradient(135deg, #071A3D 0%, ${course.accent} 100%)` }}>
          <div style={{ position: "absolute", top: -50, right: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -40, left: -30, width: 130, height: 130, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 48, marginBottom: 14 }}>{course.emoji}</div>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(19px, 3vw, 28px)", color: "#fff", marginBottom: 12 }}>
              Ready to Start Learning?
            </h3>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(13px, 2vw, 15px)", color: "rgba(255,255,255,0.75)", maxWidth: 420, margin: "0 auto 26px" }}>
              Join Techies Academy and build real skills that last. Your course will be pre-selected — just fill in your details.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={goToRegister} style={{ background: "#F59E0B", color: "#071A3D", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "clamp(13px,2vw,15px)", padding: "14px 34px", borderRadius: 12, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 6px 24px rgba(245,158,11,0.5)" }}>
                Register Now — Free <ArrowRight />
              </button>
            </div>
            <div style={{ marginTop: 18, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: 6 }}>📞 +91 6201786801</span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: 6 }}>✉️ techiesacademy.edu@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {enquiryOpen && course && (
        <EnquiryModal courseTitle={course.title} onClose={() => setEnquiryOpen(false)} />
      )}
    </div>
  );
}
