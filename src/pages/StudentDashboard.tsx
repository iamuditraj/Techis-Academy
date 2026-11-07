import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import logoImg from "../imports/WhatsApp_Image_2026-08-29_at_9.15.10_PM.jpeg";

// ─── Icons ────────────────────────────────────────────────────────────────────
const HomeIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const BookIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);
const UsersIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);
const ChartIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const BellIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);
const LogoutIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);
const SearchIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
const PlusIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);
const EditIcon = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);
const TrashIcon = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);
const CloseIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const MenuIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const COURSES = [
  "Basic Canvas And Basic Designing",
  "Full App Design & Understand AI",
  "Full Interactive Websites & Hosting",
  "Basic Website Structure & Basic Styling",
];

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  Active:     { bg: "#D1FAE5", text: "#065F46" },
  Completed:  { bg: "#DBEAFE", text: "#1D4ED8" },
  Inactive:   { bg: "#FEE2E2", text: "#991B1B" },
  Pending:    { bg: "#FEF3C7", text: "#92400E" },
};

type Student = {
  id: number;
  name: string;
  school: string;
  course: string;
  phone: string;
  email: string;
  enrolled: string;
  status: "Active" | "Completed" | "Inactive" | "Pending";
  progress: number;
  attendance: number;
  grade: string;
};

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

// ─── Subcomponents ────────────────────────────────────────────────────────────

function ProgressBar({ value, color = "#2563EB" }: { value: number; color?: string }) {
  return (
    <div style={{ width: "100%", background: "#E5E7EB", borderRadius: 99, height: 6, overflow: "hidden" }}>
      <div style={{ width: `${value}%`, background: color, height: "100%", borderRadius: 99, transition: "width 0.4s ease" }} />
    </div>
  );
}

function StatCard({ emoji, label, value, sub, color }: { emoji: string; label: string; value: string | number; sub: string; color: string }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "20px 24px", border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(7,26,61,0.06)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#6B7280", marginBottom: 6 }}>{label}</div>
          <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 28, color: "#071A3D", lineHeight: 1 }}>{value}</div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF", marginTop: 4 }}>{sub}</div>
        </div>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{emoji}</div>
      </div>
    </div>
  );
}

type ModalProps = {
  student?: Student | null;
  onClose: () => void;
  onSave: (s: Student) => void;
};

function StudentModal({ student, onClose, onSave }: ModalProps) {
  const isEdit = !!student;
  const [form, setForm] = useState<Student>(student ?? {
    id: Date.now(),
    name: "", school: "", course: COURSES[0], phone: "", email: "",
    enrolled: new Date().toISOString().slice(0, 10),
    status: "Active", progress: 0, attendance: 0, grade: "—"
  });

  const set = (k: keyof Student, v: string | number) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(7,26,61,0.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 20, width: "100%", maxWidth: 540, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 32px 64px rgba(7,26,61,0.2)" }}>
        {/* Header */}
        <div style={{ padding: "24px 28px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 18, color: "#071A3D" }}>{isEdit ? "Edit Student" : "Add New Student"}</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#9CA3AF" }}>{isEdit ? "Update student details" : "Fill in the student information below"}</div>
          </div>
          <button onClick={onClose} style={{ background: "#F3F4F6", border: "none", cursor: "pointer", borderRadius: 8, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", color: "#6B7280" }}><CloseIcon /></button>
        </div>

        <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
          {([
            { label: "Full Name *", key: "name", type: "text", placeholder: "e.g. Rahul Sharma" },
            { label: "School / Institution *", key: "school", type: "text", placeholder: "e.g. DPS, Kendriya Vidyalaya" },
            { label: "Phone Number", key: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
            { label: "Email Address", key: "email", type: "email", placeholder: "student@email.com" },
            { label: "Enrollment Date", key: "enrolled", type: "date", placeholder: "" },
          ] as const).map(f => (
            <div key={f.key}>
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>{f.label}</label>
              <input type={f.type} value={form[f.key] as string} placeholder={f.placeholder}
                onChange={e => set(f.key, e.target.value)}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", background: "#FAFAFA" }} />
            </div>
          ))}

          <div>
            <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Course *</label>
            <select value={form.course} onChange={e => set("course", e.target.value)}
              style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", background: "#FAFAFA" }}>
              {COURSES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Status</label>
              <select value={form.status} onChange={e => set("status", e.target.value as Student["status"])}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", background: "#FAFAFA" }}>
                {["Active", "Completed", "Inactive", "Pending"].map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Grade</label>
              <select value={form.grade} onChange={e => set("grade", e.target.value)}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", background: "#FAFAFA" }}>
                {["A+", "A", "B+", "B", "B-", "C", "—"].map(g => <option key={g}>{g}</option>)}
              </select>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Progress (%)</label>
              <input type="number" min={0} max={100} value={form.progress} onChange={e => set("progress", +e.target.value)}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", background: "#FAFAFA" }} />
            </div>
            <div>
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 6 }}>Attendance (%)</label>
              <input type="number" min={0} max={100} value={form.attendance} onChange={e => set("attendance", +e.target.value)}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", background: "#FAFAFA" }} />
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <button onClick={onClose} style={{ flex: 1, padding: "12px", borderRadius: 10, border: "1.5px solid #E5E7EB", background: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 14, color: "#374151", cursor: "pointer" }}>Cancel</button>
            <button onClick={() => { if (form.name && form.course) onSave(form); }} style={{ flex: 2, padding: "12px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #123BCE 0%, #2563EB 100%)", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", cursor: "pointer", boxShadow: "0 4px 12px rgba(37,99,235,0.3)" }}>
              {isEdit ? "Save Changes" : "Add Student"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

type Tab = "overview" | "students";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("overview");

  useEffect(() => {
    try {
      const session = JSON.parse(localStorage.getItem("ta_session") || "null");
      if (!session || session.role !== "admin") navigate("/login");
    } catch { navigate("/login"); }
  }, [navigate]);
  const getStudents = (): Student[] => {
    try {
      const stored = JSON.parse(localStorage.getItem("ta_students") || "[]");
      return [...INITIAL_STUDENTS, ...stored];
    } catch {
      return INITIAL_STUDENTS;
    }
  };
  const [students, setStudents] = useState<Student[]>(getStudents);
  const [search, setSearch] = useState("");
  const [filterCourse, setFilterCourse] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [modal, setModal] = useState<"add" | "edit" | null>(null);
  const [editing, setEditing] = useState<Student | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bellOpen, setBellOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const filtered = students.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.school.toLowerCase().includes(search.toLowerCase());
    const matchCourse = filterCourse === "All" || s.course === filterCourse;
    const matchStatus = filterStatus === "All" || s.status === filterStatus;
    return matchSearch && matchCourse && matchStatus;
  });

  const syncLocalStorage = (updated: Student[]) => {
    const registered = updated.filter(s => !INITIAL_STUDENTS.find(i => i.id === s.id));
    localStorage.setItem("ta_students", JSON.stringify(registered));
  };

  const handleSave = (s: Student) => {
    setStudents(prev => {
      const updated = modal === "edit" ? prev.map(p => p.id === s.id ? s : p) : [...prev, s];
      syncLocalStorage(updated);
      return updated;
    });
    setModal(null); setEditing(null);
  };
  const handleDelete = (id: number) => setStudents(prev => {
    const updated = prev.filter(s => s.id !== id);
    syncLocalStorage(updated);
    return updated;
  });
  const openEdit = (s: Student) => { setEditing(s); setModal("edit"); };

  const statsByStatus = (status: string) => students.filter(s => s.status === status).length;
  const avgAttendance = students.length ? Math.round(students.reduce((a, s) => a + s.attendance, 0) / students.length) : 0;

  const navItems: { label: string; key: Tab; icon: React.ReactNode }[] = [
    { label: "Overview", key: "overview", icon: <HomeIcon /> },
    { label: "All Students", key: "students", icon: <UsersIcon /> },
  ];

  const sidebarContent = (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Logo */}
      <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)", cursor: "pointer" }} onClick={() => navigate("/")}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={logoImg} alt="Logo" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.2)" }} />
          <div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", lineHeight: 1.2 }}>Techies Academy</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#94A3B8" }}>Student Portal</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: "16px 12px", flex: 1 }}>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#64748B", letterSpacing: "0.08em", fontWeight: 600, padding: "0 8px", marginBottom: 8 }}>MAIN MENU</div>
        {navItems.map(item => (
          <button key={item.key} onClick={() => { setTab(item.key); setSidebarOpen(false); }} style={{
            display: "flex", alignItems: "center", gap: 10, width: "100%",
            padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer",
            background: tab === item.key ? "rgba(37,99,235,0.2)" : "transparent",
            color: tab === item.key ? "#60A5FA" : "#94A3B8",
            fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: tab === item.key ? 600 : 400,
            marginBottom: 4, transition: "all 0.2s", textAlign: "left",
            borderLeft: tab === item.key ? "3px solid #2563EB" : "3px solid transparent"
          }}>
            {item.icon} {item.label}
          </button>
        ))}

        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#64748B", letterSpacing: "0.08em", fontWeight: 600, padding: "0 8px", marginBottom: 8, marginTop: 20 }}>COURSES</div>
        {COURSES.map(c => (
          <div key={c} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB", flexShrink: 0 }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#64748B", lineHeight: 1.4 }}>{c}</span>
          </div>
        ))}
      </nav>

      {/* Back to website + logout */}
      <div style={{ padding: "16px 12px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: 4 }}>
        <button onClick={() => navigate("/")} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer", background: "transparent", color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: 14 }}>
          <LogoutIcon /> Back to Website
        </button>
        <button onClick={() => { localStorage.removeItem("ta_session"); navigate("/login"); }} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer", background: "rgba(239,68,68,0.08)", color: "#EF4444", fontFamily: "Inter, sans-serif", fontSize: 14 }}>
          🚪 Logout
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F1F5F9", fontFamily: "Inter, sans-serif" }}>

      {/* Sidebar – Desktop */}
      <div style={{ width: 240, background: "#071A3D", flexShrink: 0, position: "sticky", top: 0, height: "100vh", overflowY: "auto" }} className="dash-sidebar">
        {sidebarContent}
      </div>

      {/* Sidebar – Mobile overlay */}
      {sidebarOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200 }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} onClick={() => setSidebarOpen(false)} />
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 260, background: "#071A3D" }}>
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div style={{ flex: 1, overflowX: "hidden" }}>

        {/* Top bar */}
        <div style={{ background: "#fff", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #E5E7EB", position: "sticky", top: 0, zIndex: 50 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={() => setSidebarOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "#6B7280", display: "none" }} className="dash-mobile-menu">
              <MenuIcon />
            </button>
            <div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "#071A3D" }}>
                {tab === "overview" ? "Dashboard Overview" : "Student Records"}
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF" }}>Techies Academy • Admin Panel</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* Student info chips */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }} className="dash-topbar-info">
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 10, padding: "6px 12px" }}>
                <span style={{ fontSize: 14 }}>🧑‍🎓</span>
                <div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 13, color: "#1D4ED8", lineHeight: 1 }}>{students.length}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#6B7280", marginTop: 1 }}>Total Students</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 10, padding: "6px 12px" }}>
                <span style={{ fontSize: 14 }}>✅</span>
                <div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 13, color: "#065F46", lineHeight: 1 }}>{statsByStatus("Active")}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#6B7280", marginTop: 1 }}>Active</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#F5F3FF", border: "1px solid #DDD6FE", borderRadius: 10, padding: "6px 12px" }}>
                <span style={{ fontSize: 14 }}>🎓</span>
                <div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 13, color: "#5B21B6", lineHeight: 1 }}>{statsByStatus("Completed")}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#6B7280", marginTop: 1 }}>Completed</div>
                </div>
              </div>
            </div>
            {/* Bell */}
            <div style={{ position: "relative" }}>
              <div onClick={() => setBellOpen(o => !o)} style={{ width: 36, height: 36, borderRadius: "50%", background: bellOpen ? "#2563EB" : "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", color: bellOpen ? "#fff" : "#2563EB", cursor: "pointer", border: "1px solid #BFDBFE", transition: "all 0.2s" }}>
                <BellIcon />
              </div>
              {!bellOpen && <div style={{ position: "absolute", top: 0, right: 0, width: 10, height: 10, background: "#EF4444", borderRadius: "50%", border: "2px solid #fff" }} />}

              {/* Notification dropdown */}
              {bellOpen && (
                <div
                  style={{ position: "absolute", top: 44, right: 0, width: 340, background: "#fff", borderRadius: 16, boxShadow: "0 16px 48px rgba(7,26,61,0.18)", border: "1px solid #E5E7EB", zIndex: 200, overflow: "hidden", display: "flex", flexDirection: "column", maxHeight: 480 }}
                  onWheel={e => e.stopPropagation()}
                >
                  {/* Header */}
                  <div style={{ padding: "14px 16px", borderBottom: "1px solid #F3F4F6", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
                    {selectedStudent ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <button onClick={() => setSelectedStudent(null)} style={{ background: "#F3F4F6", border: "none", borderRadius: 8, width: 28, height: 28, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#6B7280", fontSize: 14 }}>←</button>
                        <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#071A3D" }}>Student Details</div>
                      </div>
                    ) : (
                      <div>
                        <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#071A3D" }}>All Students</div>
                        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#9CA3AF" }}>Click a student to view details</div>
                      </div>
                    )}
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      {!selectedStudent && <span style={{ background: "#EF4444", color: "#fff", borderRadius: 99, padding: "2px 8px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 11 }}>{students.length}</span>}
                      <button onClick={() => { setBellOpen(false); setSelectedStudent(null); }} style={{ background: "#F3F4F6", border: "none", borderRadius: 8, width: 28, height: 28, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#6B7280", fontSize: 14 }}>✕</button>
                    </div>
                  </div>

                  {/* Scrollable body */}
                  <div style={{ overflowY: "auto", overscrollBehavior: "contain", flex: 1 }}>

                    {/* ── List view ── */}
                    {!selectedStudent && students.map(s => (
                      <div key={s.id} onClick={() => setSelectedStudent(s)}
                        style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 16px", cursor: "pointer", borderBottom: "1px solid #F9FAFB" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#F8FAFC")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                        <div style={{ width: 36, height: 36, borderRadius: "50%", background: `hsl(${s.id * 60}, 60%, 65%)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#fff", flexShrink: 0 }}>{s.name[0]}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#071A3D", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.name}</div>
                          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.school}</div>
                        </div>
                        <span style={{ ...STATUS_COLORS[s.status], padding: "2px 8px", borderRadius: 99, fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 600, flexShrink: 0 } as React.CSSProperties}>{s.status}</span>
                      </div>
                    ))}

                    {/* ── Detail view ── */}
                    {selectedStudent && (
                      <div style={{ padding: 16 }}>
                        {/* Mini hero */}
                        <div style={{ background: `linear-gradient(135deg, #071A3D, #2563EB)`, borderRadius: 14, padding: "16px", marginBottom: 14, display: "flex", gap: 12, alignItems: "center" }}>
                          <div style={{ width: 48, height: 48, borderRadius: "50%", background: `hsl(${selectedStudent.id * 60}, 60%, 65%)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 20, color: "#fff", flexShrink: 0, border: "2px solid rgba(255,255,255,0.25)" }}>{selectedStudent.name[0]}</div>
                          <div>
                            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff" }}>{selectedStudent.name}</div>
                            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.65)", marginBottom: 6 }}>{selectedStudent.school}</div>
                            <span style={{ ...STATUS_COLORS[selectedStudent.status], padding: "2px 10px", borderRadius: 99, fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700 } as React.CSSProperties}>{selectedStudent.status}</span>
                          </div>
                        </div>

                        {/* Course */}
                        <div style={{ background: "#EFF6FF", borderRadius: 10, padding: "10px 12px", marginBottom: 10, border: "1px solid #BFDBFE" }}>
                          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#6B7280", letterSpacing: "0.05em", marginBottom: 3 }}>📚 COURSE</div>
                          <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 11, color: "#1D4ED8" }}>{selectedStudent.course}</div>
                        </div>

                        {/* Info rows */}
                        {[
                          { icon: "📞", label: "Phone", value: selectedStudent.phone },
                          { icon: "✉️", label: "Email", value: selectedStudent.email || "—" },
                          { icon: "📅", label: "Enrolled", value: selectedStudent.enrolled },
                          { icon: "🏆", label: "Grade", value: selectedStudent.grade },
                        ].map(row => (
                          <div key={row.label} style={{ display: "flex", gap: 10, alignItems: "center", padding: "8px 10px", background: "#F8FAFC", borderRadius: 8, marginBottom: 6, border: "1px solid #F3F4F6" }}>
                            <span style={{ fontSize: 14, flexShrink: 0 }}>{row.icon}</span>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#9CA3AF" }}>{row.label}</div>
                              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#071A3D", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.value}</div>
                            </div>
                          </div>
                        ))}

                        {/* Progress bars */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10, marginBottom: 12 }}>
                          {[
                            { label: "Progress", value: selectedStudent.progress, color: "#2563EB" },
                            { label: "Attendance", value: selectedStudent.attendance, color: selectedStudent.attendance >= 75 ? "#10B981" : "#EF4444" },
                          ].map(bar => (
                            <div key={bar.label} style={{ background: "#F8FAFC", borderRadius: 10, padding: "10px 12px", border: "1px solid #F3F4F6" }}>
                              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#6B7280" }}>{bar.label}</span>
                                <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 11, color: bar.color }}>{bar.value}%</span>
                              </div>
                              <div style={{ background: "#E5E7EB", borderRadius: 99, height: 5 }}>
                                <div style={{ width: `${bar.value}%`, background: bar.color, height: "100%", borderRadius: 99 }} />
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Actions */}
                        <div style={{ display: "flex", gap: 8 }}>
                          <button onClick={() => { openEdit(selectedStudent); setBellOpen(false); setSelectedStudent(null); }}
                            style={{ flex: 1, padding: "9px", borderRadius: 9, border: "none", background: "linear-gradient(135deg,#123BCE,#2563EB)", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                            ✏️ Edit
                          </button>
                          <button onClick={() => { handleDelete(selectedStudent.id); setBellOpen(false); setSelectedStudent(null); }}
                            style={{ padding: "9px 12px", borderRadius: 9, border: "1px solid #FEE2E2", background: "#FEF2F2", color: "#EF4444", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                            🗑
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Click-outside overlay for bell dropdown */}
        {bellOpen && <div style={{ position: "fixed", inset: 0, zIndex: 199 }} onClick={() => setBellOpen(false)} />}

        <div style={{ padding: "28px 24px" }}>

          {/* ── OVERVIEW TAB ── */}
          {tab === "overview" && (
            <div>
              <div style={{ marginBottom: 24 }}>
                <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 22, color: "#071A3D", marginBottom: 4 }}>Welcome back, Admin 👋</h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#6B7280" }}>Here's a summary of all students at Techies Academy.</p>
              </div>

              {/* Stat cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }} className="dash-stats">
                <StatCard emoji="🧑‍🎓" label="Total Students" value={students.length} sub="Across all courses" color="#2563EB" />
                <StatCard emoji="✅" label="Active" value={statsByStatus("Active")} sub="Currently enrolled" color="#10B981" />
                <StatCard emoji="🎓" label="Completed" value={statsByStatus("Completed")} sub="Finished their course" color="#6D3CF5" />
                <StatCard emoji="📊" label="Avg Attendance" value={`${avgAttendance}%`} sub="Across all students" color="#F59E0B" />
              </div>

              {/* Course breakdown */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }} className="dash-grid-2">
                <div style={{ background: "#fff", borderRadius: 16, padding: 24, border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(7,26,61,0.06)" }}>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, color: "#071A3D", marginBottom: 20 }}>📚 Students by Course</div>
                  {COURSES.map((c, i) => {
                    const count = students.filter(s => s.course === c).length;
                    const pct = students.length ? Math.round((count / students.length) * 100) : 0;
                    const colors = ["#2563EB", "#6D3CF5", "#F59E0B", "#10B981"];
                    return (
                      <div key={c} style={{ marginBottom: 16 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#374151", maxWidth: "75%" }}>{c}</span>
                          <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 12, color: colors[i] }}>{count} students</span>
                        </div>
                        <ProgressBar value={pct} color={colors[i]} />
                      </div>
                    );
                  })}
                </div>

                <div style={{ background: "#fff", borderRadius: 16, padding: 24, border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(7,26,61,0.06)" }}>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, color: "#071A3D", marginBottom: 20 }}>📋 Status Breakdown</div>
                  {["Active", "Completed", "Pending", "Inactive"].map(status => {
                    const count = statsByStatus(status);
                    const colors: Record<string, string> = { Active: "#10B981", Completed: "#2563EB", Pending: "#F59E0B", Inactive: "#EF4444" };
                    return (
                      <div key={status} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #F3F4F6" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 10, height: 10, borderRadius: "50%", background: colors[status] }} />
                          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#374151" }}>{status}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#071A3D" }}>{count}</span>
                          <span style={{ ...STATUS_COLORS[status], padding: "2px 10px", borderRadius: 99, fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600 } as React.CSSProperties}>{status}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recent students */}
              <div style={{ background: "#fff", borderRadius: 16, padding: 24, border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(7,26,61,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, color: "#071A3D" }}>🕐 Recent Enrollments</div>
                  <button onClick={() => setTab("students")} style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 13, color: "#2563EB", background: "none", border: "none", cursor: "pointer" }}>View All →</button>
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: "#F8FAFC" }}>
                        {["Student", "School", "Course", "Enrolled", "Status"].map(h => (
                          <th key={h} style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: "#6B7280", padding: "10px 12px", textAlign: "left", letterSpacing: "0.05em" }}>{h.toUpperCase()}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {students.slice(0, 5).map((s, i) => (
                        <tr key={s.id} style={{ borderTop: "1px solid #F3F4F6", background: i % 2 === 0 ? "#fff" : "#FAFAFA" }}>
                          <td style={{ padding: "12px 12px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <div style={{ width: 32, height: 32, borderRadius: "50%", background: `hsl(${s.id * 60}, 60%, 70%)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 12, color: "#fff" }}>{s.name[0]}</div>
                              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#071A3D" }}>{s.name}</span>
                            </div>
                          </td>
                          <td style={{ padding: "12px 12px", fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6B7280" }}>{s.school}</td>
                          <td style={{ padding: "12px 12px", fontFamily: "Inter, sans-serif", fontSize: 12, color: "#374151", maxWidth: 200 }}>{s.course}</td>
                          <td style={{ padding: "12px 12px", fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6B7280" }}>{s.enrolled}</td>
                          <td style={{ padding: "12px 12px" }}>
                            <span style={{ ...STATUS_COLORS[s.status], padding: "3px 10px", borderRadius: 99, fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600 } as React.CSSProperties}>{s.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── STUDENTS TAB ── */}
          {tab === "students" && (
            <div>
              {/* Header row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
                <div>
                  <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 22, color: "#071A3D", marginBottom: 4 }}>Student Records</h2>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#6B7280" }}>{filtered.length} of {students.length} students shown</p>
                </div>
                <button onClick={() => setModal("add")} style={{ display: "flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #123BCE, #2563EB)", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, padding: "12px 20px", borderRadius: 12, border: "none", cursor: "pointer", boxShadow: "0 4px 12px rgba(37,99,235,0.3)" }}>
                  <PlusIcon /> Add Student
                </button>
              </div>

              {/* Filters */}
              <div style={{ background: "#fff", borderRadius: 14, padding: "16px 20px", border: "1px solid #E5E7EB", marginBottom: 20, display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ position: "relative", flex: "1 1 200px" }}>
                  <div style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }}><SearchIcon /></div>
                  <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name or school..."
                    style={{ width: "100%", paddingLeft: 36, paddingRight: 14, paddingTop: 10, paddingBottom: 10, borderRadius: 10, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 13, color: "#071A3D", outline: "none" }} />
                </div>
                <select value={filterCourse} onChange={e => setFilterCourse(e.target.value)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 13, color: "#374151", outline: "none", minWidth: 180 }}>
                  <option>All</option>
                  {COURSES.map(c => <option key={c}>{c}</option>)}
                </select>
                <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
                  style={{ padding: "10px 14px", borderRadius: 10, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 13, color: "#374151", outline: "none" }}>
                  {["All", "Active", "Completed", "Pending", "Inactive"].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              {/* Table */}
              <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(7,26,61,0.06)", overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
                  <thead>
                    <tr style={{ background: "#F8FAFC", borderBottom: "1px solid #E5E7EB" }}>
                      {["Student", "School", "Course", "Progress", "Attendance", "Grade", "Status", "Actions"].map(h => (
                        <th key={h} style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: "#6B7280", padding: "12px 16px", textAlign: "left", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{h.toUpperCase()}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length === 0 ? (
                      <tr>
                        <td colSpan={8} style={{ padding: 40, textAlign: "center", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#9CA3AF" }}>No students found matching your filters.</td>
                      </tr>
                    ) : filtered.map((s, i) => (
                      <tr key={s.id} style={{ borderTop: "1px solid #F3F4F6", background: i % 2 === 0 ? "#fff" : "#FAFAFA" }}>
                        <td style={{ padding: "14px 16px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{ width: 36, height: 36, borderRadius: "50%", background: `hsl(${s.id * 60}, 60%, 65%)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#fff", flexShrink: 0 }}>{s.name[0]}</div>
                            <div>
                              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#071A3D" }}>{s.name}</div>
                              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF" }}>{s.phone}</div>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: "14px 16px", fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6B7280" }}>{s.school}</td>
                        <td style={{ padding: "14px 16px", fontFamily: "Inter, sans-serif", fontSize: 12, color: "#374151", maxWidth: 180 }}>{s.course}</td>
                        <td style={{ padding: "14px 16px", minWidth: 100 }}>
                          <div style={{ marginBottom: 4, fontFamily: "Poppins, sans-serif", fontSize: 12, fontWeight: 700, color: "#071A3D" }}>{s.progress}%</div>
                          <ProgressBar value={s.progress} color="#2563EB" />
                        </td>
                        <td style={{ padding: "14px 16px", minWidth: 100 }}>
                          <div style={{ marginBottom: 4, fontFamily: "Poppins, sans-serif", fontSize: 12, fontWeight: 700, color: "#071A3D" }}>{s.attendance}%</div>
                          <ProgressBar value={s.attendance} color={s.attendance >= 75 ? "#10B981" : "#EF4444"} />
                        </td>
                        <td style={{ padding: "14px 16px" }}>
                          <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: s.grade === "—" ? "#9CA3AF" : "#071A3D" }}>{s.grade}</span>
                        </td>
                        <td style={{ padding: "14px 16px" }}>
                          <span style={{ ...STATUS_COLORS[s.status], padding: "4px 12px", borderRadius: 99, fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600 } as React.CSSProperties}>{s.status}</span>
                        </td>
                        <td style={{ padding: "14px 16px" }}>
                          <div style={{ display: "flex", gap: 6 }}>
                            <button onClick={() => openEdit(s)} title="Edit" style={{ width: 30, height: 30, borderRadius: 8, border: "1px solid #E5E7EB", background: "#F9FAFB", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB" }}><EditIcon /></button>
                            <button onClick={() => handleDelete(s.id)} title="Delete" style={{ width: 30, height: 30, borderRadius: 8, border: "1px solid #FEE2E2", background: "#FEF2F2", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444" }}><TrashIcon /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Student Detail Slide-in Panel */}
      {selectedStudent && (
        <>
          <div style={{ position: "fixed", inset: 0, background: "rgba(7,26,61,0.35)", zIndex: 300 }} onClick={() => setSelectedStudent(null)} />
          <div style={{
            position: "fixed", top: 0, right: 0, bottom: 0, width: 360, background: "#fff",
            zIndex: 301, boxShadow: "-8px 0 40px rgba(7,26,61,0.18)",
            display: "flex", flexDirection: "column", animation: "slideIn 0.25s ease"
          }}>
            {/* Panel header */}
            <div style={{ background: `linear-gradient(135deg, #071A3D 0%, #2563EB 100%)`, padding: "28px 24px 24px", position: "relative" }}>
              <button onClick={() => setSelectedStudent(null)} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 8, width: 30, height: 30, cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CloseIcon />
              </button>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: `hsl(${selectedStudent.id * 60}, 60%, 65%)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 24, color: "#fff", marginBottom: 12 }}>
                {selectedStudent.name[0]}
              </div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 18, color: "#fff", marginBottom: 4 }}>{selectedStudent.name}</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>{selectedStudent.school}</div>
              <span style={{ ...STATUS_COLORS[selectedStudent.status], padding: "4px 14px", borderRadius: 99, fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 700 } as React.CSSProperties}>{selectedStudent.status}</span>
            </div>

            {/* Panel body */}
            <div style={{ flex: 1, overflowY: "auto", padding: 24 }}>

              {/* Info rows */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#071A3D", marginBottom: 12 }}>📋 Personal Information</div>
                {[
                  { label: "Phone", value: selectedStudent.phone, icon: "📞" },
                  { label: "Email", value: selectedStudent.email, icon: "✉️" },
                  { label: "Enrolled On", value: selectedStudent.enrolled, icon: "📅" },
                  { label: "Grade", value: selectedStudent.grade === "—" ? "Not graded yet" : selectedStudent.grade, icon: "🏆" },
                ].map(row => (
                  <div key={row.label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", background: "#F8FAFC", borderRadius: 10, marginBottom: 8, border: "1px solid #F3F4F6" }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>{row.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#9CA3AF", marginBottom: 1 }}>{row.label}</div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#071A3D", fontWeight: 600 }}>{row.value || "—"}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Course */}
              <div style={{ background: "#EFF6FF", borderRadius: 12, padding: "14px 16px", border: "1px solid #BFDBFE", marginBottom: 20 }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#6B7280", marginBottom: 4 }}>📚 ENROLLED COURSE</div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#1D4ED8" }}>{selectedStudent.course}</div>
              </div>

              {/* Progress */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#071A3D", marginBottom: 14 }}>📊 Progress & Attendance</div>
                <div style={{ background: "#F8FAFC", borderRadius: 12, padding: "16px", border: "1px solid #F3F4F6", marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6B7280" }}>Course Progress</span>
                    <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#2563EB" }}>{selectedStudent.progress}%</span>
                  </div>
                  <ProgressBar value={selectedStudent.progress} color="#2563EB" />
                </div>
                <div style={{ background: "#F8FAFC", borderRadius: 12, padding: "16px", border: "1px solid #F3F4F6" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6B7280" }}>Attendance</span>
                    <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: selectedStudent.attendance >= 75 ? "#10B981" : "#EF4444" }}>{selectedStudent.attendance}%</span>
                  </div>
                  <ProgressBar value={selectedStudent.attendance} color={selectedStudent.attendance >= 75 ? "#10B981" : "#EF4444"} />
                  {selectedStudent.attendance < 75 && (
                    <div style={{ marginTop: 8, fontFamily: "Inter, sans-serif", fontSize: 11, color: "#EF4444" }}>⚠️ Attendance below 75% — action needed</div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => { openEdit(selectedStudent); setSelectedStudent(null); }}
                  style={{ flex: 1, padding: "11px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #123BCE, #2563EB)", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  ✏️ Edit Details
                </button>
                <button onClick={() => { handleDelete(selectedStudent.id); setSelectedStudent(null); }}
                  style={{ padding: "11px 14px", borderRadius: 10, border: "1px solid #FEE2E2", background: "#FEF2F2", color: "#EF4444", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  🗑
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Modal */}
      {(modal === "add" || modal === "edit") && (
        <StudentModal student={modal === "edit" ? editing : null} onClose={() => { setModal(null); setEditing(null); }} onSave={handleSave} />
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @media (max-width: 768px) {
          .dash-sidebar { display: none !important; }
          .dash-mobile-menu { display: flex !important; }
          .dash-stats { grid-template-columns: 1fr 1fr !important; }
          .dash-grid-2 { grid-template-columns: 1fr !important; }
          .dash-topbar-info { display: none !important; }
        }
        @media (max-width: 480px) {
          .dash-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
