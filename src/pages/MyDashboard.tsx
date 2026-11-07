import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import logoImg from "../imports/WhatsApp_Image_2026-08-29_at_9.15.10_PM.jpeg";

type Student = {
  id: number; name: string; school: string; course: string;
  phone: string; email: string; enrolled: string;
  status: string; progress: number; attendance: number; grade: string;
};

type LearningModule = {
  title: string;
  summary: string;
  keyPoints: string[];
  practice: string;
};

type ResourceType = "video" | "notes" | "dpp";

const WEB_MODULES: LearningModule[] = [
  {
    title: "HTML Revision & Advanced Tags",
    summary: "Revise page structure and learn semantic tags that make websites clearer, accessible and easier to maintain.",
    keyPoints: ["Use header, nav, main, section and footer correctly", "Keep heading levels in a meaningful order", "Add alt text and labels for accessibility"],
    practice: "Create a semantic homepage for a school club. It must include a header, navigation, two sections and a footer.",
  },
  {
    title: "HTML Forms & Input Types",
    summary: "Build forms that collect useful information through text fields, dropdowns, radio buttons and checkboxes.",
    keyPoints: ["Connect every label to its input", "Choose the correct input type", "Group related controls and add required validation"],
    practice: "Build a student registration form with name, email, class dropdown, course radio buttons and a terms checkbox.",
  },
  {
    title: "CSS Flexbox & Responsive Design",
    summary: "Create flexible layouts that adapt smoothly across mobile, tablet and desktop screens.",
    keyPoints: ["Understand main axis and cross axis", "Use gap, justify-content and align-items", "Add media queries for smaller screens"],
    practice: "Create a three-card course row that becomes one column on screens smaller than 600px.",
  },
  {
    title: "JavaScript Data Handling & Logic",
    summary: "Read user input, validate values and use conditions and calculations to produce useful results.",
    keyPoints: ["Store values with const and let", "Convert input strings to numbers safely", "Use if/else conditions and reusable functions"],
    practice: "Build a marks calculator that accepts five subject scores, shows the average and displays Pass or Needs Improvement.",
  },
  {
    title: "Multi-Page Layout & Navigation",
    summary: "Plan and connect Home, About, Services and Contact pages with a consistent navigation system.",
    keyPoints: ["Use clear relative file paths", "Keep navigation consistent on every page", "Show which page is currently active"],
    practice: "Create four linked HTML pages and make sure every navigation link works correctly from every page.",
  },
  {
    title: "Dark & Light Mode Toggle",
    summary: "Use JavaScript events and CSS variables to let visitors switch between two complete visual themes.",
    keyPoints: ["Define reusable colors with CSS variables", "Toggle a theme class with JavaScript", "Keep text readable in both themes"],
    practice: "Add a theme button that changes the page background, text, cards and button colors without reloading.",
  },
  {
    title: "Interactive E-commerce Project",
    summary: "Build a product catalogue with clickable items, clear prices and an interactive cart preview.",
    keyPoints: ["Represent products as JavaScript objects", "Render consistent product cards", "Update cart count and total when an item is added"],
    practice: "Create a catalogue of four products. Each Add to Cart button must update the item count and total price.",
  },
  {
    title: "JavaScript DOM & Events",
    summary: "Select page elements and update content, styles and interactions in response to visitor actions.",
    keyPoints: ["Select elements with querySelector", "Listen for click and input events", "Update text and classes through the DOM"],
    practice: "Build an image gallery where Previous and Next buttons change the image and its caption.",
  },
  {
    title: "Git & GitHub Basics",
    summary: "Track project changes, create meaningful commits and safely publish source code to a GitHub repository.",
    keyPoints: ["Understand repository, commit and branch", "Write short and meaningful commit messages", "Push a local project to a remote repository"],
    practice: "Create a repository for your course project, make two meaningful commits and write a README with project details.",
  },
  {
    title: "Live Hosting & Graduation Showcase",
    summary: "Publish the final website on GitHub Pages, test its public URL and prepare a confident project demonstration.",
    keyPoints: ["Check file names and links before publishing", "Test the live site on mobile and desktop", "Explain the problem, solution and features during the demo"],
    practice: "Publish your project, test every page and prepare a two-minute presentation covering three features you built.",
  },
];

const DESIGN_TITLES = [
  "Design Thinking & Workspace", "Smart Components", "AI Design Assistant", "Logo & Color Theme",
  "UX Basics & User Flow", "Interactive App Flow", "App Screens Deep Dive",
  "Real App Project", "Portfolio Creation", "Graduation Showcase",
];

const BASIC_DESIGN_TITLES = [
  "Creative Design Basics", "Canva Tools & Templates", "Colors & Typography", "AI Image Creation",
  "Poster Mini Project", "Figma Introduction", "Shapes, Icons & Frames",
  "Mobile Screen Design", "Story App Project", "Portfolio Showcase",
];

const BASIC_WEB_TITLES = [
  "How the Web & Browsers Work", "HTML Text & Structure", "Images, Links & Navigation",
  "Lists, Tables & Semantic HTML", "HTML Practice Project", "CSS Colors & Fonts",
  "Borders, Shadows & Backgrounds", "CSS Box Model & Spacing", "Page Layout with CSS",
  "Personal Profile Page & Showcase",
];

function getCourseModules(course: string): LearningModule[] {
  if (course.includes("Full Interactive")) return WEB_MODULES;
  const titles = course.includes("Full App")
    ? DESIGN_TITLES
    : course.includes("Canvas")
      ? BASIC_DESIGN_TITLES
      : BASIC_WEB_TITLES;

  return titles.map((title, index) => ({
    title,
    summary: `Learn the core ideas of ${title.toLowerCase()} through a guided explanation and a hands-on activity.`,
    keyPoints: [
      `Understand the purpose and key terms of ${title}`,
      "Follow the demonstrated process step by step",
      "Apply the lesson independently in a small project",
    ],
    practice: `Create a small project that demonstrates ${title.toLowerCase()}. Include at least three lesson concepts and briefly explain your choices.`,
  }));
}

const INITIAL_STUDENTS: Student[] = [
  { id: 1, name: "Riya Sharma", school: "St. Mary's School", course: "Basic Canvas And Basic Designing", phone: "+91 98001 11001", email: "riya@email.com", enrolled: "2026-07-01", status: "Active", progress: 80, attendance: 92, grade: "A" },
  { id: 2, name: "Arjun Mehta", school: "Delhi Public School", course: "Full Interactive Websites & Hosting", phone: "+91 98001 11002", email: "arjun@email.com", enrolled: "2026-07-05", status: "Active", progress: 60, attendance: 85, grade: "B+" },
  { id: 3, name: "Priya Nair", school: "Kendriya Vidyalaya", course: "Full App Design & Understand AI", phone: "+91 98001 11003", email: "priya@email.com", enrolled: "2026-06-15", status: "Completed", progress: 100, attendance: 97, grade: "A+" },
  { id: 4, name: "Siddharth Roy", school: "St. Xavier's", course: "Basic Website Structure & Basic Styling", phone: "+91 98001 11004", email: "sid@email.com", enrolled: "2026-08-01", status: "Pending", progress: 10, attendance: 60, grade: "—" },
  { id: 5, name: "Ananya Patel", school: "Ryan International", course: "Basic Canvas And Basic Designing", phone: "+91 98001 11005", email: "ananya@email.com", enrolled: "2026-07-10", status: "Active", progress: 55, attendance: 88, grade: "B" },
  { id: 6, name: "Karan Singh", school: "DAV School", course: "Full Interactive Websites & Hosting", phone: "+91 98001 11006", email: "karan@email.com", enrolled: "2026-05-20", status: "Completed", progress: 100, attendance: 95, grade: "A" },
  { id: 7, name: "Deepika Rao", school: "Modern School", course: "Full App Design & Understand AI", phone: "+91 98001 11007", email: "deepika@email.com", enrolled: "2026-08-12", status: "Active", progress: 35, attendance: 78, grade: "B-" },
  { id: 8, name: "Vikram Joshi", school: "Army School", course: "Basic Website Structure & Basic Styling", phone: "+91 98001 11008", email: "vikram@email.com", enrolled: "2026-07-25", status: "Inactive", progress: 20, attendance: 40, grade: "—" },
];

function ProgressRing({ value, color, size = 90 }: { value: number; color: string; size?: number }) {
  const r = (size - 12) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E5E7EB" strokeWidth="8" />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="8"
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.8s ease" }} />
    </svg>
  );
}

function CourseIcon({ course }: { course: string }) {
  if (course.includes("Full App")) {
    return (
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none" aria-hidden="true">
        <rect x="14" y="6" width="20" height="36" rx="5" stroke="currentColor" strokeWidth="3" />
        <path d="M20 11h8M21 36h6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="m20 27 4-5 4 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (course.includes("Canvas")) {
    return (
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none" aria-hidden="true">
        <path d="M24 7C14.6 7 7 13.9 7 22.5S14.1 38 22.7 38h2.2c2.2 0 3.6-2.4 2.4-4.3-1.3-2.1.2-4.7 2.7-4.7h3.6C38.3 29 41 25.8 41 22 41 13.7 33.4 7 24 7Z" stroke="currentColor" strokeWidth="3" />
        <circle cx="16" cy="20" r="2" fill="currentColor" />
        <circle cx="23" cy="15" r="2" fill="currentColor" />
        <circle cx="31" cy="18" r="2" fill="currentColor" />
        <circle cx="15" cy="28" r="2" fill="currentColor" />
      </svg>
    );
  }

  if (course.includes("Full Interactive")) {
    return (
      <svg viewBox="0 0 48 48" width="31" height="31" fill="none" aria-hidden="true">
        <path d="m18 14-10 10 10 10M30 14l10 10-10 10M27 9l-6 30" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" width="31" height="31" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="36" height="31" rx="4" stroke="currentColor" strokeWidth="3" />
      <path d="M7 16h34M12 12h.1M17 12h.1M15 25l-4 4 4 4M33 25l4 4-4 4M28 22l-8 14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function getAllStudents(): Student[] {
  try {
    const stored = JSON.parse(localStorage.getItem("ta_students") || "[]");
    return [...INITIAL_STUDENTS, ...stored];
  } catch { return INITIAL_STUDENTS; }
}

export default function MyDashboard() {
  const navigate = useNavigate();
  const [student, setStudent] = useState<Student | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const [activeResource, setActiveResource] = useState<ResourceType>("video");
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, string>>({});
  const [submittedPractice, setSubmittedPractice] = useState<Record<number, boolean>>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    try {
      const session = JSON.parse(localStorage.getItem("ta_session") || "null");
      if (!session || session.role !== "student") { navigate("/login"); return; }
      const all = getAllStudents();
      const found = all.find(s => s.id === session.studentId);
      if (found) setStudent(found);
      else setNotFound(true);
    } catch { navigate("/login"); }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("ta_session");
    navigate("/login");
  };

  if (notFound) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16, fontFamily: "Poppins, sans-serif", background: "#F1F5F9" }}>
      <div style={{ fontSize: 48 }}>😕</div>
      <h2 style={{ color: "#071A3D" }}>Student record not found</h2>
      <button onClick={() => navigate("/login")} style={{ background: "#2563EB", color: "#fff", border: "none", padding: "12px 24px", borderRadius: 10, cursor: "pointer", fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>Back to Login</button>
    </div>
  );

  if (!student) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F1F5F9" }}>
      <div style={{ fontFamily: "Inter, sans-serif", color: "#9CA3AF", fontSize: 14 }}>Loading your dashboard...</div>
    </div>
  );

  const gradeColor = student.grade === "A+" ? "#6D3CF5" : student.grade === "A" ? "#2563EB" : student.grade.startsWith("B") ? "#10B981" : "#6B7280";
  const modules = getCourseModules(student.course);
  const selectedModule = modules[activeModule];

  const selectModule = (index: number) => {
    setActiveModule(index);
    setActiveResource("video");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F1F5F9", fontFamily: "Inter, sans-serif" }}>

      {/* Top bar */}
      <div style={{ background: "#071A3D", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => navigate("/")}>
          <img src={logoImg} alt="Logo" style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.2)" }} />
          <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff" }}>Techies Academy</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Logged in as <strong style={{ color: "#fff" }}>{student.name}</strong></div>
          <button onClick={handleLogout} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: 12, padding: "7px 14px", borderRadius: 8, cursor: "pointer" }}>
            Logout
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "32px 20px 60px" }}>

        {/* Hero card */}
        <div style={{ background: "linear-gradient(135deg, #071A3D 0%, #2563EB 100%)", borderRadius: 24, padding: "clamp(28px, 4vw, 44px)", marginBottom: 24, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
          <div style={{ position: "relative", zIndex: 1, display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: `hsl(${student.id * 60}, 60%, 65%)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 28, color: "#fff", flexShrink: 0, border: "3px solid rgba(255,255,255,0.3)" }}>
              {student.name[0]}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(18px, 3vw, 26px)", color: "#fff", marginBottom: 4 }}>Welcome, {student.name.split(" ")[0]}! 👋</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>{student.school}</div>
              <span style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", padding: "4px 14px", borderRadius: 99, fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600 }}>
                {student.status}
              </span>
            </div>
          </div>
        </div>

        {/* Progress rings */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }} className="my-grid">
          <div style={{ background: "#fff", borderRadius: 20, padding: "24px", border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(7,26,61,0.06)", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#071A3D" }}>Course Progress</div>
            <div style={{ position: "relative" }}>
              <ProgressRing value={student.progress} color="#2563EB" size={96} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 18, color: "#2563EB" }}>{student.progress}%</div>
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#9CA3AF", textAlign: "center" }}>
              {student.progress === 100 ? "🎉 Course Completed!" : `${100 - student.progress}% remaining`}
            </div>
          </div>

          <div style={{ background: "#fff", borderRadius: 20, padding: "24px", border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(7,26,61,0.06)", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#071A3D" }}>Attendance</div>
            <div style={{ position: "relative" }}>
              <ProgressRing value={student.attendance} color={student.attendance >= 75 ? "#10B981" : "#EF4444"} size={96} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 18, color: student.attendance >= 75 ? "#10B981" : "#EF4444" }}>{student.attendance}%</div>
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: student.attendance < 75 ? "#EF4444" : "#9CA3AF", textAlign: "center" }}>
              {student.attendance < 75 ? "⚠️ Below 75% — improve attendance" : "✅ Good attendance"}
            </div>
          </div>
        </div>

        {/* Interactive enrolled course */}
        <section style={{ background: "#fff", borderRadius: 20, border: "1px solid #BFDBFE", marginBottom: 20, overflow: "hidden", boxShadow: "0 8px 30px rgba(18,59,206,0.08)" }}>
          <button
            type="button"
            onClick={() => setCourseOpen(open => !open)}
            aria-expanded={courseOpen}
            aria-controls="course-learning-center"
            style={{ background: courseOpen ? "#EAF2FF" : "#EFF6FF", width: "100%", padding: "20px 24px", border: "none", cursor: "pointer", display: "flex", gap: 14, alignItems: "center", textAlign: "left" }}
          >
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "#2563EB", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <CourseIcon course={student.course} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#6B7280", letterSpacing: "0.05em", marginBottom: 4 }}>ENROLLED COURSE · CLICK TO {courseOpen ? "CLOSE" : "EXPLORE"}</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, color: "#1D4ED8" }}>{student.course}</div>
            </div>
            <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: "50%", background: "#fff", color: "#1D4ED8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, transform: courseOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s ease", flexShrink: 0 }}>⌄</span>
          </button>

          {courseOpen && (
            <div id="course-learning-center" style={{ borderTop: "1px solid #DBEAFE" }}>
              <div style={{ padding: "20px 20px 8px" }}>
                <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, fontWeight: 800, color: "#071A3D" }}>Course learning center</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6B7280", marginTop: 4 }}>Choose a module, then open its video, notes or daily practice problem.</div>
              </div>

              <div className="learning-layout">
                <div className="module-list" role="list" aria-label="Course modules">
                  {modules.map((module, index) => (
                    <button
                      type="button"
                      role="listitem"
                      key={module.title}
                      onClick={() => selectModule(index)}
                      className={`module-row ${activeModule === index ? "module-row-active" : ""}`}
                    >
                      <span className="module-number">{String(index + 1).padStart(2, "0")}</span>
                      <span style={{ flex: 1 }}>
                        <span className="module-month">{index < 5 ? "MONTH 1" : "MONTH 2"}</span>
                        <span className="module-title">{module.title}</span>
                      </span>
                      <span aria-hidden="true" className="module-arrow">›</span>
                    </button>
                  ))}
                </div>

                <div className="resource-panel">
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, color: "#2563EB", letterSpacing: "0.08em", marginBottom: 5 }}>MODULE {activeModule + 1} OF 10</div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 800, color: "#071A3D", lineHeight: 1.35 }}>{selectedModule.title}</div>
                  </div>

                  <div className="resource-tabs" role="tablist" aria-label="Module resources">
                    {([
                      ["video", "Video lesson"],
                      ["notes", "Detailed notes"],
                      ["dpp", "DPP practice"],
                    ] as [ResourceType, string][]).map(([type, label]) => (
                      <button
                        type="button"
                        role="tab"
                        aria-selected={activeResource === type}
                        key={type}
                        onClick={() => setActiveResource(type)}
                        className={`resource-tab ${activeResource === type ? "resource-tab-active" : ""}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  {activeResource === "video" && (
                    <div role="tabpanel">
                      <div className="video-frame">
                        <div className="video-brand">TECHIES ACADEMY</div>
                        <div className="video-symbol" aria-hidden="true">
                          <svg viewBox="0 0 48 48" width="28" height="28" fill="currentColor">
                            <path d="M18 13.5v21l18-10.5-18-10.5Z" />
                          </svg>
                        </div>
                        <div className="video-title">{selectedModule.title}</div>
                        <div className="video-subtitle">Module {activeModule + 1} · Video lesson</div>
                        <div className="video-track"><span /></div>
                      </div>
                      <div className="resource-caption">The academy's secure class video appears in this lesson area. Use Notes for revision and DPP to practise.</div>
                    </div>
                  )}

                  {activeResource === "notes" && (
                    <div role="tabpanel" className="notes-card">
                      <div className="resource-label">LESSON OVERVIEW</div>
                      <p className="notes-summary">{selectedModule.summary}</p>
                      <div className="resource-label">KEY TAKEAWAYS</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {selectedModule.keyPoints.map((point, index) => (
                          <div key={point} className="note-point">
                            <span>{index + 1}</span>
                            <p>{point}</p>
                          </div>
                        ))}
                      </div>
                      <div className="remember-box"><strong>Remember:</strong> Learn the concept, try it yourself, and then explain it in your own words.</div>
                    </div>
                  )}

                  {activeResource === "dpp" && (
                    <div role="tabpanel" className="dpp-card">
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
                        <div className="resource-label" style={{ marginBottom: 0 }}>DAILY PRACTICE PROBLEM</div>
                        <span className="dpp-time">20 min</span>
                      </div>
                      <p className="dpp-question">{selectedModule.practice}</p>
                      <label htmlFor={`answer-${activeModule}`} className="answer-label">Write your approach or paste your solution</label>
                      <textarea
                        id={`answer-${activeModule}`}
                        value={practiceAnswers[activeModule] || ""}
                        onChange={event => {
                          setPracticeAnswers(current => ({ ...current, [activeModule]: event.target.value }));
                          setSubmittedPractice(current => ({ ...current, [activeModule]: false }));
                        }}
                        placeholder="Explain the steps you followed and what you learned..."
                        className="practice-answer"
                        rows={6}
                      />
                      {submittedPractice[activeModule] && (
                        <div className="submission-message" role="status">Practice completed for this study session. Review your answer with the lesson notes.</div>
                      )}
                      <button
                        type="button"
                        disabled={!practiceAnswers[activeModule]?.trim()}
                        onClick={() => setSubmittedPractice(current => ({ ...current, [activeModule]: true }))}
                        className="submit-practice"
                      >
                        {submittedPractice[activeModule] ? "Submitted" : "Submit practice"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Info grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }} className="my-grid">
          {[
            { icon: "🏆", label: "Current Grade", value: student.grade === "—" ? "Not graded yet" : student.grade, color: gradeColor },
            { icon: "📅", label: "Enrolled On", value: student.enrolled, color: "#374151" },
            { icon: "📞", label: "Phone", value: student.phone, color: "#374151" },
            { icon: "✉️", label: "Email", value: student.email || "Not provided", color: "#374151" },
          ].map(item => (
            <div key={item.label} style={{ background: "#fff", borderRadius: 16, padding: "16px 18px", border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(7,26,61,0.05)" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#9CA3AF", letterSpacing: "0.04em" }}>{item.label.toUpperCase()}</div>
              </div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: item.color }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* Need help */}
        <div style={{ background: "linear-gradient(135deg, #071A3D 0%, #1E3A6E 100%)", borderRadius: 20, padding: "24px 28px", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 6 }}>Need help or have a question?</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Contact your instructor at Techies Academy anytime.</div>
            <div style={{ marginTop: 8, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>📞 +91 6201786801</span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>✉️ techiesacademy.edu@gmail.com</span>
            </div>
          </div>
          <button onClick={() => navigate("/")} style={{ background: "#F59E0B", color: "#071A3D", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, padding: "12px 20px", borderRadius: 12, border: "none", cursor: "pointer", flexShrink: 0 }}>
            Back to Home →
          </button>
        </div>
      </div>

      <style>{`
        .learning-layout {
          display: grid;
          grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.35fr);
          gap: 18px;
          padding: 12px 20px 24px;
        }
        .module-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
          max-height: 520px;
          overflow-y: auto;
          padding-right: 4px;
        }
        .module-row {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          background: #fff;
          text-align: left;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }
        .module-row:hover { border-color: #93C5FD; background: #F8FAFF; transform: translateX(2px); }
        .module-row-active { border-color: #2563EB; background: #EFF6FF; }
        .module-number {
          width: 31px;
          height: 31px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F1F5F9;
          color: #64748B;
          font-family: Poppins, sans-serif;
          font-size: 11px;
          font-weight: 800;
          flex-shrink: 0;
        }
        .module-row-active .module-number { background: #2563EB; color: #fff; }
        .module-month {
          display: block;
          font-family: Inter, sans-serif;
          color: #94A3B8;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 2px;
        }
        .module-title {
          display: block;
          font-family: Poppins, sans-serif;
          color: #1E293B;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.35;
        }
        .module-arrow { color: #94A3B8; font-size: 20px; }
        .resource-panel {
          min-width: 0;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 20px;
          background: #F8FAFC;
        }
        .resource-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 4px;
          margin-bottom: 16px;
          border-radius: 12px;
          background: #E2E8F0;
          gap: 4px;
        }
        .resource-tab {
          border: none;
          border-radius: 9px;
          padding: 9px 7px;
          color: #64748B;
          background: transparent;
          font-family: Inter, sans-serif;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
        }
        .resource-tab-active { color: #1D4ED8; background: #fff; box-shadow: 0 2px 8px rgba(7,26,61,0.08); }
        .video-frame {
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 13px;
          background:
            radial-gradient(circle at 80% 20%, rgba(109,60,245,0.3), transparent 28%),
            linear-gradient(135deg, #071A3D, #123BCE);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 22px;
          position: relative;
          text-align: center;
        }
        .video-brand { color: rgba(255,255,255,0.58); font-family: Inter, sans-serif; font-size: 8px; font-weight: 700; letter-spacing: 0.16em; margin-bottom: 12px; }
        .video-symbol { width: 54px; height: 54px; border: 1px solid rgba(255,255,255,0.36); border-radius: 50%; background: rgba(255,255,255,0.14); color: #fff; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; padding-left: 3px; }
        .video-title { color: #fff; font-family: Poppins, sans-serif; font-size: 14px; font-weight: 700; line-height: 1.4; }
        .video-subtitle { color: rgba(255,255,255,0.62); font-family: Inter, sans-serif; font-size: 9px; margin-top: 4px; }
        .video-track { position: absolute; left: 18px; right: 18px; bottom: 14px; height: 3px; border-radius: 99px; background: rgba(255,255,255,0.2); overflow: hidden; }
        .video-track span { display: block; width: 18%; height: 100%; border-radius: inherit; background: #F59E0B; }
        .resource-caption { color: #64748B; font-family: Inter, sans-serif; font-size: 10px; line-height: 1.6; margin-top: 10px; }
        .notes-card, .dpp-card { border-radius: 13px; background: #fff; border: 1px solid #E2E8F0; padding: 18px; }
        .resource-label { color: #2563EB; font-family: Inter, sans-serif; font-size: 9px; font-weight: 800; letter-spacing: 0.08em; margin-bottom: 8px; }
        .notes-summary { color: #475569; font-family: Inter, sans-serif; font-size: 12px; line-height: 1.7; margin: 0 0 18px; }
        .note-point { display: flex; gap: 10px; align-items: flex-start; }
        .note-point span { width: 22px; height: 22px; border-radius: 50%; background: #DBEAFE; color: #1D4ED8; display: flex; align-items: center; justify-content: center; font-family: Poppins, sans-serif; font-size: 9px; font-weight: 800; flex-shrink: 0; }
        .note-point p { color: #334155; font-family: Inter, sans-serif; font-size: 11px; line-height: 1.5; margin: 2px 0 0; }
        .remember-box { background: #FFFBEB; border-left: 3px solid #F59E0B; border-radius: 8px; color: #78350F; font-family: Inter, sans-serif; font-size: 10px; line-height: 1.6; margin-top: 18px; padding: 10px 12px; }
        .dpp-time { border-radius: 99px; background: #F5F3FF; color: #6D3CF5; font-family: Inter, sans-serif; font-size: 9px; font-weight: 700; padding: 5px 9px; }
        .dpp-question { color: #071A3D; font-family: Poppins, sans-serif; font-size: 13px; font-weight: 600; line-height: 1.65; margin: 0 0 16px; }
        .answer-label { display: block; color: #475569; font-family: Inter, sans-serif; font-size: 10px; font-weight: 700; margin-bottom: 7px; }
        .practice-answer { width: 100%; resize: vertical; border: 1px solid #CBD5E1; border-radius: 10px; background: #F8FAFC; color: #071A3D; font-family: Inter, sans-serif; font-size: 11px; line-height: 1.6; outline: none; padding: 11px; }
        .practice-answer:focus { border-color: #2563EB; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
        .submission-message { border-radius: 9px; background: #ECFDF5; color: #065F46; font-family: Inter, sans-serif; font-size: 10px; line-height: 1.5; margin-top: 10px; padding: 9px 11px; }
        .submit-practice { width: 100%; border: none; border-radius: 10px; background: #2563EB; color: #fff; cursor: pointer; font-family: Poppins, sans-serif; font-size: 11px; font-weight: 700; margin-top: 10px; padding: 11px; }
        .submit-practice:disabled { background: #CBD5E1; color: #64748B; cursor: not-allowed; }
        @media (max-width: 540px) {
          .my-grid { grid-template-columns: 1fr !important; }
          .learning-layout { grid-template-columns: 1fr; padding: 10px 14px 18px; }
          .module-list { max-height: 330px; }
          .resource-panel { padding: 14px; }
          .resource-tabs { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
