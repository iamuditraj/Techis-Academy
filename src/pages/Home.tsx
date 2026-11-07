import { useState } from "react";
import { useNavigate } from "react-router";
import logoImg from "../imports/WhatsApp_Image_2026-08-29_at_9.15.10_PM.jpeg";
import heroImg from "../imports/1763445058460.jpg";

// ─── Icons ────────────────────────────────────────────────────────────────────

const PhoneIcon = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
  </svg>
);
const EmailIcon = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const MenuIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const CloseIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const PlayIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);
const CheckIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const StarIcon = () => (
  <svg width="16" height="16" fill="#F59E0B" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98l5.74 3.02-5.74 3.02z" />
  </svg>
);
const StudentsIcon = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);
const InstructorsIcon = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#6D3CF5" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const CoursesIcon = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#F59E0B" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);
const RatingIcon = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#F59E0B" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);
const WebIcon = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
const DataIcon = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#6D3CF5" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const SecurityIcon = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#F59E0B" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const AppIcon = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

// ─── Shared Logo ──────────────────────────────────────────────────────────────

function Logo() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} onClick={() => navigate("/")}>
      <img src={logoImg} alt="Techies Academy Logo"
        style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "2px solid #E5E7EB" }} />
      <div>
        <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "#071A3D", lineHeight: 1.2 }}>Techies Academy</div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#6B7280", lineHeight: 1 }}>Learning you can trust</div>
      </div>
    </div>
  );
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Student Dashboard", href: "/login", external: true },
  { label: "Payment Center", href: "/payment", external: true },
  { label: "Contact Us", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (link: typeof navLinks[0]) => {
    setOpen(false);
    if (link.external) {
      navigate(link.href);
    }
  };

  return (
    <>
      <nav style={{ background: "#fff", boxShadow: "0 2px 16px rgba(7,26,61,0.08)", position: "sticky", top: 0, zIndex: 200 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Logo />

          {/* Desktop links */}
          <ul style={{ display: "flex", gap: 4, listStyle: "none", margin: 0, padding: 0 }} className="hidden-mobile">
            {navLinks.map(link => (
              <li key={link.label}>
                {link.external ? (
                  <button onClick={() => handleNav(link)} style={{
                    fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500,
                    color: "#374151", background: "none", border: "none", cursor: "pointer",
                    padding: "8px 12px", borderRadius: 8,
                  }}
                    onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = "#2563EB"; (e.currentTarget as HTMLElement).style.background = "#EFF6FF"; }}
                    onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = "#374151"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >{link.label}</button>
                ) : (
                  <a href={link.href} style={{
                    fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500,
                    color: "#374151", textDecoration: "none", padding: "8px 12px",
                    borderRadius: 8, display: "block"
                  }}
                    onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = "#2563EB"; (e.currentTarget as HTMLElement).style.background = "#EFF6FF"; }}
                    onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = "#374151"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >{link.label}</a>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button onClick={() => navigate("/register")} className="hidden-mobile" style={{
            background: "linear-gradient(135deg, #123BCE 0%, #2563EB 100%)",
            color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 600,
            fontSize: 14, padding: "10px 22px", borderRadius: 10,
            border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
            boxShadow: "0 4px 12px rgba(37,99,235,0.35)", whiteSpace: "nowrap"
          }}>
            Register Now <ArrowRight />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="show-mobile"
            aria-label="Toggle menu"
            style={{
              background: open ? "#EFF6FF" : "none", border: "none", cursor: "pointer",
              color: "#071A3D", padding: "8px", borderRadius: 8, display: "none",
              alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer — sits outside <nav> so it's always display:block */}
      {open && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, bottom: 0,
          zIndex: 199, display: "flex", flexDirection: "column",
        }}>
          {/* Menu panel */}
          <div style={{
            background: "#fff", borderTop: "1px solid #E5E7EB",
            padding: "8px 0 20px", overflowY: "auto",
            boxShadow: "0 8px 32px rgba(7,26,61,0.18)",
          }}>
            {navLinks.map(link => (
              link.external ? (
                <button key={link.label} onClick={() => handleNav(link)} style={{
                  display: "flex", width: "100%", textAlign: "left", alignItems: "center",
                  fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 500,
                  color: "#071A3D", background: "none", border: "none", cursor: "pointer",
                  padding: "14px 24px", borderBottom: "1px solid #F3F4F6",
                  boxSizing: "border-box",
                }}>{link.label}</button>
              ) : (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)} style={{
                  display: "block", fontFamily: "Inter, sans-serif", fontSize: 16,
                  fontWeight: 500, color: "#071A3D", textDecoration: "none",
                  padding: "14px 24px", borderBottom: "1px solid #F3F4F6",
                }}>{link.label}</a>
              )
            ))}
            <div style={{ padding: "16px 24px 0" }}>
              <button onClick={() => { setOpen(false); navigate("/register"); }} style={{
                display: "block", width: "100%",
                background: "linear-gradient(135deg, #123BCE 0%, #2563EB 100%)",
                color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700,
                fontSize: 15, padding: "15px 22px", borderRadius: 12,
                border: "none", cursor: "pointer", textAlign: "center",
                boxShadow: "0 4px 16px rgba(37,99,235,0.4)",
              }}>Register Now →</button>
            </div>
          </div>
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            style={{ flex: 1, background: "rgba(7,26,61,0.35)", backdropFilter: "blur(2px)" }}
          />
        </div>
      )}
    </>
  );
}

function ContactBar() {
  return (
    <div style={{ background: "#071A3D", padding: "8px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <a href="tel:+916201786801" style={{ display: "flex", alignItems: "center", gap: 6, color: "#CBD5E1", fontFamily: "Inter, sans-serif", fontSize: 12, textDecoration: "none" }}>
          <PhoneIcon /> +91 6201786801
        </a>
        <a href="mailto:techiesacademy.edu@gmail.com" style={{ display: "flex", alignItems: "center", gap: 6, color: "#CBD5E1", fontFamily: "Inter, sans-serif", fontSize: 12, textDecoration: "none" }}>
          <EmailIcon /> techiesacademy.edu@gmail.com
        </a>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" style={{ background: "#F7F9FC", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", top: -100, right: -200, width: 700, height: 700, background: "linear-gradient(135deg, #071A3D 0%, #123BCE 100%)", borderRadius: "50%", opacity: 0.06, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)", border: "1px solid #BFDBFE", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
              <span style={{ fontSize: 14 }}>🎓</span>
              <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 12, color: "#2563EB", letterSpacing: "0.05em" }}>ADMISSIONS OPEN • 2026</span>
            </div>
            <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.15, color: "#071A3D", margin: "0 0 20px" }}>
              Empowering <span className="gradient-text">Minds.</span><br />Building <span className="gradient-text">Futures.</span>
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(15px, 2vw, 17px)", color: "#4B5563", lineHeight: 1.75, marginBottom: 32, maxWidth: 480 }}>
              Join Techies Academy and unlock your potential with industry-focused courses and expert guidance.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {[
                { icon: "🏆", title: "Expert Faculty", desc: "Learn from industry experts" },
                { icon: "💻", title: "Practical Learning", desc: "Real-world projects and training" },
                { icon: "🚀", title: "Career Support", desc: "Placement assistance & career guidance" },
              ].map(f => (
                <div key={f.title} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)", border: "1px solid #BFDBFE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 14, color: "#071A3D" }}>{f.title}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#6B7280" }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#courses" style={{ background: "linear-gradient(135deg, #123BCE 0%, #2563EB 100%)", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 12, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 8px 24px rgba(37,99,235,0.4)" }}>
                Explore Courses <ArrowRight />
              </a>
              <a href="#" style={{ background: "#fff", color: "#071A3D", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 12, textDecoration: "none", display: "flex", alignItems: "center", gap: 8, border: "2px solid #E5E7EB", boxShadow: "0 4px 12px rgba(7,26,61,0.08)" }}>
                <span style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg, #123BCE 0%, #6D3CF5 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}><PlayIcon /></span>
                Watch Video
              </a>
            </div>
          </div>
          <div style={{ position: "relative" }} className="hero-image-col">
            <div style={{ position: "absolute", top: -30, right: -30, width: "90%", height: "90%", background: "linear-gradient(135deg, #071A3D 0%, #123BCE 60%, #6D3CF5 100%)", borderRadius: 32, zIndex: 0, opacity: 0.9 }} />
            <div style={{ position: "absolute", bottom: -20, left: -20, width: 120, height: 120, zIndex: 1 }} className="dots-pattern" />
            <div style={{ position: "relative", zIndex: 2, borderRadius: 24, overflow: "hidden", boxShadow: "0 32px 64px rgba(7,26,61,0.3)" }}>
              <img src={heroImg} alt="Indian students learning with technology in a modern classroom" style={{ width: "100%", display: "block", objectFit: "cover", height: 420 }} />
            </div>
            <div className="floating" style={{ position: "absolute", bottom: 24, left: -20, zIndex: 3, background: "#fff", borderRadius: 16, padding: "14px 18px", boxShadow: "0 16px 40px rgba(7,26,61,0.2)", border: "1px solid #E5E7EB", maxWidth: 240 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🎉</div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#071A3D" }}>Happy Parents, Students & Schools</div>
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#6B7280", lineHeight: 1.5 }}>Trusted by families & partner schools across the region.</div>
              <div style={{ display: "flex", marginTop: 8 }}>
                {["#2563EB", "#6D3CF5", "#F59E0B", "#10B981"].map((c, i) => (
                  <div key={i} style={{ width: 24, height: 24, borderRadius: "50%", background: c, border: "2px solid #fff", marginLeft: i > 0 ? -8 : 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", fontWeight: 700 }}>
                    {["P", "S", "S", "🏫"][i]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { icon: <StudentsIcon />, value: "10+", label: "Ongoing Collaborations", bg: "#EFF6FF" },
    { icon: <InstructorsIcon />, value: "50+", label: "Expert Instructors", bg: "#F5F3FF" },
    { icon: <CoursesIcon />, value: "50+", label: "Courses Offered", bg: "#FFFBEB" },
    { icon: <RatingIcon />, value: "4.8/5", label: "Student Rating", bg: "#FFFBEB" },
  ];
  return (
    <section id="stats" style={{ background: "#fff", padding: "0 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", transform: "translateY(-40px)" }}>
        <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 16px 48px rgba(7,26,61,0.12)", border: "1px solid #E5E7EB", padding: "32px 40px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "16px 8px" }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>{s.icon}</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", color: "#071A3D", lineHeight: 1.1 }}>{s.value}</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#6B7280", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why" style={{ background: "#071A3D", padding: "80px 20px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, left: -100, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="why-grid">
          <div>
            <div style={{ display: "inline-block", background: "rgba(37,99,235,0.2)", borderRadius: 100, padding: "6px 16px", marginBottom: 16, border: "1px solid rgba(37,99,235,0.3)" }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 12, color: "#60A5FA", letterSpacing: "0.05em" }}>WHY CHOOSE US</span>
            </div>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 42px)", color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
              Quality Skill Development<br />& Education <span style={{ color: "#60A5FA" }}>You Can Trust</span>
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#94A3B8", lineHeight: 1.75, marginBottom: 36, maxWidth: 420 }}>
              We are committed to nurturing practical skills alongside academic excellence — equipping every student with hands-on expertise, industry readiness, and the confidence to thrive in a fast-changing world.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { title: "Higher Understanding Oriented Curriculum", desc: "Our courses are designed to build deep conceptual clarity alongside practical skills." },
                { title: "Modern Learning Environment", desc: "Access to the latest tools, labs and technologies." },
                { title: "Flexible Learning Options", desc: "Online and offline classes to suit your schedule." },
              ].map(b => (
                <div key={b.title} style={{ display: "flex", gap: 14 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0, marginTop: 2, background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}><CheckIcon /></div>
                  <div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 15, color: "#F1F5F9", marginBottom: 4 }}>{b.title}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#94A3B8" }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 50%, #6D3CF5 100%)", borderRadius: 24, padding: 32, border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 32px 64px rgba(0,0,0,0.3)" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 16, padding: 24, textAlign: "center", marginBottom: 24, border: "1px solid rgba(255,255,255,0.15)" }}>
                <div style={{ fontSize: 48, marginBottom: 8 }}>💻📚🎓</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Modern learning tools & resources</div>
              </div>
              <div style={{ display: "inline-block", background: "rgba(245,158,11,0.2)", borderRadius: 100, padding: "4px 14px", marginBottom: 12, border: "1px solid rgba(245,158,11,0.4)" }}>
                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 11, color: "#FCD34D" }}>MOST POPULAR</span>
              </div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 22, color: "#fff", marginBottom: 10 }}>Popular Courses</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: 24 }}>Kickstart your career with our most in-demand courses.</p>
              {["Basic Canvas And Basic Designing", "Full App Design & Understand AI", "Full Interactive Websites & Hosting", "Basic Website Structure & Basic Styling"].map(c => (
                <div key={c} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderRadius: 10, marginBottom: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#E2E8F0", fontWeight: 500 }}>{c}</span>
                  <div style={{ display: "flex", gap: 2 }}>{[...Array(5)].map((_, si) => <StarIcon key={si} />)}</div>
                </div>
              ))}
              <a href="#courses" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 20, background: "#F59E0B", color: "#071A3D", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, padding: "14px 24px", borderRadius: 12, textDecoration: "none", boxShadow: "0 8px 24px rgba(245,158,11,0.4)" }}>
                View All Courses <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const classCourses = [
  {
    classes: "Class 4", emoji: "🎨", accent: "#2563EB", accentLight: "#EFF6FF",
    title: "Basic Canvas & Basic Designing",
    desc: "Canva · AI Photo Magic · Figma Basics",
    detail: "Kids make colorful posters, greeting cards and AI story pictures using Canva. They also draw simple phone screens in Figma!",
    duration: "2 Months", level: "Beginner", slug: "canvas-designing-class-4",
    skills: ["Canva Posters", "AI Picture Magic", "Figma Basics", "Storybook Design"],
  },
  {
    classes: "Class 5", emoji: "🎨", accent: "#2563EB", accentLight: "#EFF6FF",
    title: "Basic Canvas & Basic Designing",
    desc: "Canva · AI Photo Magic · Figma Basics",
    detail: "Kids make colorful posters, greeting cards and AI story pictures using Canva. They also draw simple phone screens in Figma!",
    duration: "2 Months", level: "Beginner", slug: "canvas-designing-class-5",
    skills: ["Canva Posters", "AI Picture Magic", "Figma Basics", "Storybook Design"],
  },
  {
    classes: "Class 6", emoji: "🖼", accent: "#A21CAF", accentLight: "#FDF4FF",
    title: "Understanding Apps & Graphic Designing",
    desc: "Color Theory · AI Visual Art · App Layouts",
    detail: "Students learn color matching, font styling and how mobile apps work. They design connected screens for a smartphone app using AI tools.",
    duration: "2 Months", level: "Beginner", slug: "app-graphics-class-6",
    skills: ["Colors & Fonts", "AI Visual Art", "App Layout", "School App Project"],
  },
  {
    classes: "Class 7", emoji: "📱", accent: "#6D3CF5", accentLight: "#F5F3FF",
    title: "Full App Design & Understand AI",
    desc: "Smart Components · AI Tools · Shopping App",
    detail: "Students build full working mobile app designs with reusable buttons, interactive screens and smart AI tools. Final project: a Shopping App.",
    duration: "2 Months", level: "Intermediate", slug: "app-design-ai",
    skills: ["Smart Components", "Working App Screens", "AI Creative Tools", "Shopping App"],
  },
  {
    classes: "Class 8", emoji: "💻", accent: "#10B981", accentLight: "#ECFDF5",
    title: "Website Structure & Basic Styling",
    desc: "HTML · CSS · Personal Profile Page",
    detail: "Students learn how websites work, build web pages using HTML tags and make them look beautiful with CSS colors, fonts and the Box Model.",
    duration: "2 Months", level: "Beginner", slug: "website-structure-styling",
    skills: ["HTML Basics", "CSS Styling", "Box Model", "Profile Page"],
  },
  {
    classes: "Class 9", emoji: "⚡", accent: "#F59E0B", accentLight: "#FFFBEB",
    title: "More on Styling & JS Fun",
    desc: "CSS Flexbox · JavaScript · Interactive Pages",
    detail: "Students level up with Flexbox, hover effects and JavaScript — variables, popup alerts, Dark/Light Mode toggle and interactive web projects.",
    duration: "2 Months", level: "Intermediate", slug: "styling-js-class-9",
    skills: ["CSS Flexbox", "Hover Effects", "JavaScript Basics", "Portal Page"],
  },
  {
    classes: "Class 10", emoji: "🌐", accent: "#EF4444", accentLight: "#FEF2F2",
    title: "Full Interactive Websites & Hosting",
    desc: "Multi-Page Sites · JS Logic · GitHub Hosting",
    detail: "Students build full multi-page websites with JS forms, calculate data, and publish their website live on GitHub Pages with a real URL.",
    duration: "2 Months", level: "Advanced", slug: "interactive-websites-class-10",
    skills: ["Multi-Page Sites", "JS Calculator", "GitHub Upload", "Live Hosting"],
  },
];

const trackA = classCourses.slice(0, 4); // Class 4–7
const trackB = classCourses.slice(4);    // Class 8–10

function CourseCard({ cl, navigate }: { cl: typeof classCourses[0]; navigate: ReturnType<typeof useNavigate> }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 20, border: `1.5px solid ${cl.accent}20`,
      boxShadow: "0 4px 20px rgba(7,26,61,0.07)", overflow: "hidden",
      display: "flex", flexDirection: "column",
      transition: "transform 0.18s, box-shadow 0.18s",
    }}
      onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px ${cl.accent}22`; }}
      onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(7,26,61,0.07)"; }}
    >
      {/* Card top bar */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${cl.accent}, #6D3CF5)` }} />

      <div style={{ padding: "22px 22px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 50, height: 50, borderRadius: 14, background: cl.accentLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>{cl.emoji}</div>
            <div>
              <div style={{ display: "inline-block", background: cl.accentLight, color: cl.accent, fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 10, padding: "3px 10px", borderRadius: 99, marginBottom: 4 }}>{cl.classes}</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 14, color: "#071A3D", lineHeight: 1.3 }}>{cl.title}</div>
            </div>
          </div>
        </div>

        {/* Desc */}
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#6B7280", lineHeight: 1.7, margin: 0 }}>{cl.detail}</p>

        {/* Skills */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {cl.skills.map(sk => (
            <span key={sk} style={{ background: cl.accentLight, color: cl.accent, border: `1px solid ${cl.accent}25`, fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 11, padding: "4px 10px", borderRadius: 6 }}>✓ {sk}</span>
          ))}
        </div>

        {/* Meta row */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[{ icon: "⏱", v: cl.duration }, { icon: "📊", v: cl.level }, { icon: "📜", v: "Certificate" }].map(m => (
            <div key={m.v} style={{ display: "flex", alignItems: "center", gap: 4, background: "#F7F9FC", borderRadius: 8, padding: "4px 10px" }}>
              <span style={{ fontSize: 11 }}>{m.icon}</span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#374151", fontWeight: 500 }}>{m.v}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 8, marginTop: "auto", paddingTop: 4 }}>
          <button onClick={() => navigate(`/course/${cl.slug}`)} style={{ flex: 1, background: `linear-gradient(135deg, ${cl.accent}, #6D3CF5)`, color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, padding: "11px 0", borderRadius: 10, border: "none", cursor: "pointer", boxShadow: `0 4px 12px ${cl.accent}35` }}>
            Learn More
          </button>
          <button onClick={() => navigate(`/register?course=${encodeURIComponent(cl.title)}`)} style={{ flex: 1, background: "#fff", color: cl.accent, fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, padding: "11px 0", borderRadius: 10, border: `2px solid ${cl.accent}`, cursor: "pointer" }}>
            Enrol Now
          </button>
        </div>
      </div>
    </div>
  );
}

function CoursesSection() {
  const navigate = useNavigate();

  return (
    <section id="courses" style={{ background: "#F7F9FC", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-block", background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)", border: "1px solid #BFDBFE", borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 12, color: "#2563EB" }}>OUR COURSES</span>
          </div>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 40px)", color: "#071A3D", marginBottom: 12, lineHeight: 1.2 }}>
            Courses by <span className="gradient-text">Class Level</span>
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#6B7280", maxWidth: 500, margin: "0 auto", lineHeight: 1.75 }}>
            Every class gets a course built exactly for their level — 7 courses from Class 4 to Class 10.
          </p>
        </div>

        {/* ── Track A: Class 4–7 ── */}
        <div style={{ marginBottom: 60 }}>
          {/* Track header banner */}
          <div style={{ background: "linear-gradient(135deg, #071A3D 0%, #2563EB 100%)", borderRadius: 20, padding: "28px 32px", marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🎨</div>
              <div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 20, color: "#fff", marginBottom: 4 }}>Design & AI Track</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Class 4 · 5 · 6 · 7 &nbsp;·&nbsp; 2 Months &nbsp;·&nbsp; Certificate Included</div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }} className="courses-grid">
            {trackA.map(cl => <CourseCard key={cl.classes} cl={cl} navigate={navigate} />)}
          </div>
        </div>

        {/* ── Track B: Class 8–10 ── */}
        <div>
          {/* Track header banner */}
          <div style={{ background: "linear-gradient(135deg, #064E3B 0%, #10B981 100%)", borderRadius: 20, padding: "28px 32px", marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>💻</div>
              <div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 20, color: "#fff", marginBottom: 4 }}>Web Development Track</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Class 8 · 9 · 10 &nbsp;·&nbsp; 2 Months &nbsp;·&nbsp; Certificate Included</div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="courses-grid-3">
            {trackB.map(cl => <CourseCard key={cl.classes} cl={cl} navigate={navigate} />)}
          </div>
        </div>

      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" style={{ background: "#fff", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
          <div>
            <div style={{ display: "inline-block", background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)", border: "1px solid #BFDBFE", borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 12, color: "#2563EB" }}>ABOUT US</span>
            </div>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 40px)", color: "#071A3D", lineHeight: 1.2, marginBottom: 16 }}>
              Who We Are & <span className="gradient-text">What We Stand For</span>
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#4B5563", lineHeight: 1.8, marginBottom: 16 }}>
              <strong style={{ color: "#071A3D" }}>Techies Academy</strong> is a modern skill-development institute dedicated to empowering students, parents, and partner schools with future-ready digital education. Our motto — <em>"Learning you can trust"</em> — is at the heart of everything we do.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#4B5563", lineHeight: 1.8, marginBottom: 24 }}>
              We believe that true education goes beyond memorising facts. Our higher-understanding oriented curriculum is designed to build deep conceptual clarity, nurture creative thinking, and give every learner a hands-on experience they can carry into the real world.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { emoji: "🎯", title: "Our Mission", desc: "To make quality skill development accessible to every student, regardless of background." },
                { emoji: "🔭", title: "Our Vision", desc: "To become the most trusted EdTech partner for schools, families, and young innovators." },
                { emoji: "🤝", title: "Our Values", desc: "Integrity, creativity, practical learning, and a genuine care for every student's growth." },
                { emoji: "🏫", title: "School Partnerships", desc: "We actively collaborate with schools to integrate skill courses into student schedules." },
              ].map(item => (
                <div key={item.title} style={{ background: "#F7F9FC", borderRadius: 14, padding: "16px 18px", border: "1px solid #E5E7EB" }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{item.emoji}</div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#071A3D", marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6B7280", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: "linear-gradient(135deg, #071A3D 0%, #123BCE 100%)", borderRadius: 20, padding: 28, boxShadow: "0 16px 48px rgba(7,26,61,0.2)" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 20 }}>🏆 Academy Highlights</div>
              {[
                { label: "Courses Offered", value: "50+", color: "#60A5FA" },
                { label: "Expert Instructors", value: "50+", color: "#A78BFA" },
                { label: "Ongoing Collaborations", value: "10+", color: "#FCD34D" },
                { label: "Student Rating", value: "4.8 / 5", color: "#34D399" },
                { label: "Learning Modes", value: "Online & Offline", color: "#FB923C" },
              ].map(h => (
                <div key={h.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{h.label}</span>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: h.color }}>{h.value}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "#F7F9FC", borderRadius: 20, padding: 24, border: "1px solid #E5E7EB" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, color: "#071A3D", marginBottom: 14 }}>👥 Who We Serve</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { icon: "🧒", who: "Students", desc: "Kids and teens looking to build digital skills early." },
                  { icon: "👨‍👩‍👧", who: "Parents", desc: "Families who want structured, trustworthy learning for their children." },
                  { icon: "🏫", who: "Schools", desc: "Institutions seeking collaborative skill-development partnerships." },
                ].map(w => (
                  <div key={w.who} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{w.icon}</div>
                    <div>
                      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 13, color: "#071A3D" }}>{w.who}</div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6B7280" }}>{w.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Priya Sharma", role: "Parent", emoji: "👩", text: "My daughter joined Techies Academy for the Basic Canvas course and completed it in just a month. The improvement in her design thinking is remarkable. Highly trusted institute!", rating: 5 },
    { name: "Arjun Mehta", role: "Student", emoji: "👦", text: "The Full Interactive Websites & Hosting course was amazing. I built and deployed my own website within 1.5 months. The faculty explains everything with patience and clarity.", rating: 5 },
    { name: "Mrs. Kavitha Rao", role: "School Principal", emoji: "👩‍🏫", text: "We partnered with Techies Academy to offer skill courses to our students. The collaboration has been seamless and our students are genuinely excited about learning technology.", rating: 5 },
    { name: "Rahul Verma", role: "Parent", emoji: "👨", text: "The flexible online and offline options made it easy for my son to attend classes around his school schedule. The academy truly cares about every student's progress.", rating: 5 },
  ];
  return (
    <section id="testimonials" style={{ background: "#F7F9FC", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "inline-block", background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)", border: "1px solid #BFDBFE", borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 12, color: "#2563EB" }}>TESTIMONIALS</span>
          </div>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 40px)", color: "#071A3D", lineHeight: 1.2, marginBottom: 12 }}>
            What Our <span className="gradient-text">Community Says</span>
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#6B7280", maxWidth: 480, margin: "0 auto" }}>
            Trusted by students, parents, and schools — here's what they have to say about their Techies Academy experience.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="courses-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 20, padding: 24, border: "1px solid #E5E7EB", boxShadow: "0 4px 16px rgba(7,26,61,0.06)", display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 2 }}>{[...Array(t.rating)].map((_, si) => <StarIcon key={si} />)}</div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#4B5563", lineHeight: 1.75, flex: 1, fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 12, borderTop: "1px solid #F3F4F6" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, border: "2px solid #BFDBFE" }}>{t.emoji}</div>
                <div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#071A3D" }}>{t.name}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#6B7280" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" style={{ background: "#fff", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "inline-block", background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)", border: "1px solid #BFDBFE", borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 12, color: "#2563EB" }}>CONTACT US</span>
          </div>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 40px)", color: "#071A3D", lineHeight: 1.2, marginBottom: 12 }}>
            Get In <span className="gradient-text">Touch With Us</span>
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#6B7280", maxWidth: 480, margin: "0 auto" }}>
            Have questions about our courses or want to partner with us? Reach out — we'd love to hear from you.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="hero-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { emoji: "📞", title: "Call Us", detail: "+91 6201786801", sub: "Mon – Sat, 9:00 AM – 6:00 PM" },
              { emoji: "📧", title: "Email Us", detail: "techiesacademy.edu@gmail.com", sub: "We reply within 24 hours" },
              { emoji: "🕐", title: "Office Hours", detail: "Mon – Fri: 9:00 AM – 6:00 PM  |  Sat: 9:00 AM – 1:00 PM", sub: "Closed on Sundays & Public Holidays" },
              { emoji: "🌐", title: "Learning Modes", detail: "Online & Offline Classes", sub: "Flexible to fit your schedule" },
            ].map(c => (
              <div key={c.title} style={{ display: "flex", gap: 16, alignItems: "flex-start", background: "#F7F9FC", borderRadius: 16, padding: "18px 20px", border: "1px solid #E5E7EB" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, flexShrink: 0, background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, border: "1px solid #BFDBFE" }}>{c.emoji}</div>
                <div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#071A3D", marginBottom: 2 }}>{c.title}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#2563EB", fontWeight: 600 }}>{c.detail}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6B7280", marginTop: 2 }}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: "linear-gradient(135deg, #071A3D 0%, #123BCE 100%)", borderRadius: 24, padding: 32, boxShadow: "0 16px 48px rgba(7,26,61,0.2)" }}>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 6 }}>Send an Enquiry</div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)", marginBottom: 24 }}>Fill in your details and we'll get back to you shortly.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Your Name", placeholder: "e.g. Rahul Sharma", type: "text" },
                { label: "Phone Number", placeholder: "+91 XXXXX XXXXX", type: "tel" },
                { label: "Email Address", placeholder: "you@email.com", type: "email" },
              ].map(f => (
                <div key={f.label}>
                  <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", display: "block", marginBottom: 6 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{ width: "100%", padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: 14, outline: "none" }} />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", display: "block", marginBottom: 6 }}>Interested In</label>
                <select style={{ width: "100%", padding: "12px 14px", borderRadius: 10, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: 14, outline: "none" }}>
                  <option value="" style={{ color: "#071A3D" }}>Select a course</option>
                  <option style={{ color: "#071A3D" }}>Basic Canvas And Basic Designing</option>
                  <option style={{ color: "#071A3D" }}>Full App Design & Understand AI</option>
                  <option style={{ color: "#071A3D" }}>Full Interactive Websites & Hosting</option>
                  <option style={{ color: "#071A3D" }}>Basic Website Structure & Basic Styling</option>
                  <option style={{ color: "#071A3D" }}>School Partnership / Collaboration</option>
                </select>
              </div>
              <button style={{ marginTop: 8, background: "#F59E0B", color: "#071A3D", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, padding: "14px 24px", borderRadius: 12, border: "none", cursor: "pointer", boxShadow: "0 8px 24px rgba(245,158,11,0.4)", width: "100%" }}>
                Submit Enquiry →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const navigate = useNavigate();
  return (
    <section style={{ background: "linear-gradient(135deg, #071A3D 0%, #123BCE 50%, #6D3CF5 100%)", padding: "80px 20px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -60, left: "10%", width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, right: "10%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 680, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
        <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(28px, 5vw, 48px)", color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>Ready to Shape Your Future?</h2>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: 36 }}>
          Join thousands of students who trust Techies Academy for their learning journey.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => navigate("/register")} style={{ background: "#F59E0B", color: "#071A3D", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, padding: "16px 36px", borderRadius: 14, display: "flex", alignItems: "center", gap: 8, boxShadow: "0 8px 32px rgba(245,158,11,0.5)", border: "none", cursor: "pointer" }}>
            Register Now <ArrowRight />
          </button>
          <a href="#courses" style={{ background: "rgba(255,255,255,0.12)", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 16, padding: "16px 36px", borderRadius: 14, textDecoration: "none", border: "2px solid rgba(255,255,255,0.25)" }}>
            Explore Courses
          </a>
        </div>
        <div style={{ marginTop: 40, display: "flex", justifyContent: "center", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div style={{ display: "flex" }}>
            {["#2563EB", "#6D3CF5", "#F59E0B", "#10B981", "#EF4444"].map((c, i) => (
              <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", background: c, border: "2px solid rgba(255,255,255,0.3)", marginLeft: i > 0 ? -10 : 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#fff", fontWeight: 700 }}>
                {["A", "B", "C", "D", "+"][i]}
              </div>
            ))}
          </div>
          <div>
            <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4,5].map(i => <StarIcon key={i} />)}</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)" }}>Trusted by students, parents & schools</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#071A3D", padding: "48px 20px 24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <img src={logoImg} alt="Techies Academy Logo" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.2)" }} />
              <div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>Techies Academy</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#94A3B8" }}>Learning you can trust</div>
              </div>
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#94A3B8", lineHeight: 1.75, maxWidth: 280 }}>Empowering students with skill-focused education and practical learning for a successful future.</p>
          </div>
          {[
            { heading: "Quick Links", links: [{ label: "Home", href: "#home" }, { label: "About Us", href: "#about" }, { label: "Courses", href: "#courses" }, { label: "Contact Us", href: "#contact" }] },
            { heading: "Courses", links: ["Basic Canvas & Basic Designing", "Website Graphics & Graphic Design", "Full Website Design & AI", "Basic Website Structure", "More on Styling & JS Fun", "Full Interactive Websites"].map(l => ({ label: l, href: "#courses" })) },
            { heading: "Contact", links: ["+91 6201786801", "techiesacademy.edu@gmail.com", "Mon-Sat: 9am-6pm"].map(l => ({ label: l, href: "#contact" })) },
          ].map(col => (
            <div key={col.heading}>
              <h4 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 16 }}>{col.heading}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map(l => (
                  <li key={l.label} style={{ marginBottom: 10 }}>
                    <a href={l.href} style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#94A3B8", textDecoration: "none" }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#64748B" }}>© 2026 Techies Academy. All rights reserved.</p>
          <div style={{ display: "flex", gap: 12 }}>
            {[FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
              <a key={i} href="#" style={{ color: "#64748B", display: "flex" }}><Icon /></a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const responsiveCSS = `
  .hidden-mobile { display: flex !important; }
  .show-mobile { display: none !important; }
  .hero-grid { grid-template-columns: 1fr 1fr !important; }
  .hero-image-col { display: block !important; }
  .why-grid { grid-template-columns: 1fr 1fr !important; }
  .courses-grid { grid-template-columns: repeat(4, 1fr) !important; }
  .courses-grid-3 { grid-template-columns: repeat(3, 1fr) !important; }
  .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
  .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr !important; }
  @media (max-width: 1024px) {
    .courses-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .courses-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
    .footer-grid { grid-template-columns: 1fr 1fr !important; }
    .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
  }
  @media (max-width: 768px) {
    .hidden-mobile { display: none !important; }
    .show-mobile { display: flex !important; }
    .hero-grid { grid-template-columns: 1fr !important; }
    .hero-image-col { order: 2; }
    .why-grid { grid-template-columns: 1fr !important; }
    .courses-grid { grid-template-columns: 1fr 1fr !important; }
    .courses-grid-3 { grid-template-columns: 1fr 1fr !important; }
    .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .footer-grid { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 480px) {
    .courses-grid { grid-template-columns: 1fr !important; }
    .courses-grid-3 { grid-template-columns: 1fr !important; }
  }
`;

export default function Home() {
  return (
    <>
      <style>{responsiveCSS}</style>
      <div style={{ minHeight: "100vh", background: "#F7F9FC" }}>
        <ContactBar />
        <Navbar />
        <main>
          <HeroSection />
          <StatsSection />
          <WhyChooseUs />
          <CoursesSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
