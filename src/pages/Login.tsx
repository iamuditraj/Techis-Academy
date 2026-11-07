import { useState } from "react";
import { useNavigate } from "react-router";
import logoImg from "../imports/WhatsApp_Image_2026-08-29_at_9.15.10_PM.jpeg";

const ADMIN_PASSWORD = "techies@admin";

type Student = {
  id: number; name: string; school: string; course: string;
  phone: string; email: string; enrolled: string;
  status: string; progress: number; attendance: number; grade: string;
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

function getAllStudents(): Student[] {
  try {
    const stored = JSON.parse(localStorage.getItem("ta_students") || "[]");
    return [...INITIAL_STUDENTS, ...stored];
  } catch {
    return INITIAL_STUDENTS;
  }
}

export default function Login() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"student" | "admin">("student");

  // Student login fields
  const [sName, setSName] = useState("");
  const [sPhone, setSPhone] = useState("");
  const [sCountryCode, setSCountryCode] = useState("+91");
  const [sError, setSError] = useState("");
  const [sLoading, setSLoading] = useState(false);

  // Admin login fields
  const [aPassword, setAPassword] = useState("");
  const [aError, setAError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleStudentLogin = () => {
    setSError("");
    if (!sName.trim() || !sPhone.trim()) { setSError("Please enter both your name and phone number."); return; }
    setSLoading(true);
    setTimeout(() => {
      const all = getAllStudents();
      const fullPhone = `${sCountryCode}${sPhone.replace(/\s/g, "")}`;
      const match = all.find(s =>
        s.name.trim().toLowerCase() === sName.trim().toLowerCase() &&
        (
          s.phone.replace(/\s/g, "") === fullPhone.replace(/\s/g, "") ||
          s.phone.replace(/\s/g, "") === sPhone.replace(/\s/g, "")
        )
      );
      if (match) {
        localStorage.setItem("ta_session", JSON.stringify({ role: "student", studentId: match.id }));
        navigate("/my-dashboard");
      } else {
        setSError("No student found with that name and phone number. Please check your details or contact Techies Academy.");
      }
      setSLoading(false);
    }, 600);
  };

  const handleAdminLogin = () => {
    setAError("");
    if (!aPassword) { setAError("Please enter the admin password."); return; }
    if (aPassword === ADMIN_PASSWORD) {
      localStorage.setItem("ta_session", JSON.stringify({ role: "admin" }));
      navigate("/dashboard");
    } else {
      setAError("Incorrect password. Please try again.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #071A3D 0%, #1E3A6E 50%, #2563EB 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "Inter, sans-serif" }}>

      {/* Background circles */}
      <div style={{ position: "fixed", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.03)", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: -80, left: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.03)", pointerEvents: "none" }} />

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, cursor: "pointer" }} onClick={() => navigate("/")}>
        <img src={logoImg} alt="Techies Academy" style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.3)" }} />
        <div>
          <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 18, color: "#fff" }}>Techies Academy</div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>Student Portal</div>
        </div>
      </div>

      {/* Card */}
      <div style={{ background: "#fff", borderRadius: 24, width: "100%", maxWidth: 420, boxShadow: "0 32px 80px rgba(0,0,0,0.35)", overflow: "hidden" }}>

        {/* Tab switcher */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#F1F5F9" }}>
          {(["student", "admin"] as const).map(t => (
            <button key={t} onClick={() => { setTab(t); setSError(""); setAError(""); }}
              style={{
                padding: "16px", border: "none", cursor: "pointer", fontFamily: "Poppins, sans-serif",
                fontWeight: 700, fontSize: 14, transition: "all 0.2s",
                background: tab === t ? "#fff" : "transparent",
                color: tab === t ? "#071A3D" : "#9CA3AF",
                borderBottom: tab === t ? "2px solid #2563EB" : "2px solid transparent",
              }}>
              {t === "student" ? "🎓 Student Login" : "🔐 Admin Login"}
            </button>
          ))}
        </div>

        <div style={{ padding: "32px 32px 36px" }}>

          {/* ── Student Login ── */}
          {tab === "student" && (
            <div>
              <div style={{ marginBottom: 24 }}>
                <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 20, color: "#071A3D", marginBottom: 6 }}>Welcome back!</h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>Enter your registered name and phone number to view your personal dashboard.</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 7 }}>Full Name (as registered)</label>
                  <input
                    value={sName} onChange={e => setSName(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleStudentLogin()}
                    placeholder="e.g. Riya Sharma"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", boxSizing: "border-box", background: "#FAFAFA" }} />
                </div>
                <div>
                  <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 7 }}>Phone Number (as registered)</label>
                  <div style={{ display: "flex", gap: 0, borderRadius: 12, border: "1.5px solid #E5E7EB", overflow: "hidden", background: "#FAFAFA" }}>
                    <select
                      value={sCountryCode}
                      onChange={e => setSCountryCode(e.target.value)}
                      style={{ padding: "12px 8px 12px 12px", border: "none", borderRight: "1.5px solid #E5E7EB", background: "#F3F4F6", fontFamily: "Inter, sans-serif", fontSize: 13, color: "#071A3D", outline: "none", cursor: "pointer", fontWeight: 600, minWidth: 88, flexShrink: 0 }}>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+966">🇸🇦 +966</option>
                      <option value="+65">🇸🇬 +65</option>
                      <option value="+60">🇲🇾 +60</option>
                      <option value="+880">🇧🇩 +880</option>
                      <option value="+92">🇵🇰 +92</option>
                      <option value="+94">🇱🇰 +94</option>
                      <option value="+977">🇳🇵 +977</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+39">🇮🇹 +39</option>
                      <option value="+7">🇷🇺 +7</option>
                      <option value="+27">🇿🇦 +27</option>
                      <option value="+234">🇳🇬 +234</option>
                    </select>
                    <input
                      value={sPhone}
                      onChange={e => setSPhone(e.target.value.replace(/[^0-9\s\-]/g, ""))}
                      onKeyDown={e => e.key === "Enter" && handleStudentLogin()}
                      placeholder="98001 11001"
                      style={{ flex: 1, padding: "12px 14px", border: "none", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", background: "#FAFAFA" }} />
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF", marginTop: 5 }}>Enter the number exactly as you registered it (without the country code)</div>
                </div>

                {sError && (
                  <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 10, padding: "10px 14px", fontFamily: "Inter, sans-serif", fontSize: 12, color: "#DC2626", lineHeight: 1.6 }}>
                    ⚠️ {sError}
                  </div>
                )}

                <button onClick={handleStudentLogin} disabled={sLoading}
                  style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #123BCE, #2563EB)", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, cursor: sLoading ? "not-allowed" : "pointer", opacity: sLoading ? 0.7 : 1, boxShadow: "0 4px 16px rgba(37,99,235,0.35)" }}>
                  {sLoading ? "Checking..." : "View My Dashboard →"}
                </button>
              </div>

              <div style={{ marginTop: 20, padding: "16px 18px", background: "#EFF6FF", borderRadius: 12, border: "1px solid #BFDBFE", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#1D4ED8", lineHeight: 1.7 }}>
                  <strong>Not registered yet?</strong> Sign up first — your login details will be your registered name and phone number.
                </div>
                <button
                  onClick={() => navigate("/register")}
                  style={{ width: "100%", padding: "12px", borderRadius: 10, border: "2px solid #2563EB", background: "#fff", color: "#2563EB", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                  Register Now →
                </button>
              </div>
            </div>
          )}

          {/* ── Admin Login ── */}
          {tab === "admin" && (
            <div>
              <div style={{ marginBottom: 24 }}>
                <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 20, color: "#071A3D", marginBottom: 6 }}>Admin Access</h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}>Enter the admin password to access the full student management portal.</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 7 }}>Admin Password</label>
                  <div style={{ position: "relative" }}>
                    <input
                      type={showPass ? "text" : "password"}
                      value={aPassword} onChange={e => setAPassword(e.target.value)}
                      onKeyDown={e => e.key === "Enter" && handleAdminLogin()}
                      placeholder="Enter admin password"
                      style={{ width: "100%", padding: "12px 44px 12px 14px", borderRadius: 12, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", boxSizing: "border-box", background: "#FAFAFA" }} />
                    <button onClick={() => setShowPass(s => !s)}
                      style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", fontSize: 14 }}>
                      {showPass ? "🙈" : "👁"}
                    </button>
                  </div>
                </div>

                {aError && (
                  <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 10, padding: "10px 14px", fontFamily: "Inter, sans-serif", fontSize: 12, color: "#DC2626" }}>
                    ⚠️ {aError}
                  </div>
                )}

                <button onClick={handleAdminLogin}
                  style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #071A3D, #1E3A6E)", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer", boxShadow: "0 4px 16px rgba(7,26,61,0.35)" }}>
                  Access Admin Panel →
                </button>
              </div>

              <div style={{ marginTop: 20, padding: "14px 16px", background: "#FEF3C7", borderRadius: 12, border: "1px solid #FDE68A" }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#92400E", lineHeight: 1.7 }}>
                  🔒 <strong>Admin only.</strong> This area gives access to all student records. Unauthorized access is not permitted.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <button onClick={() => navigate("/")} style={{ marginTop: 24, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", fontFamily: "Inter, sans-serif", fontSize: 13, padding: "10px 20px", borderRadius: 10, cursor: "pointer" }}>
        ← Back to Techies Academy
      </button>
    </div>
  );
}
