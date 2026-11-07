import { useState } from "react";
import { useNavigate } from "react-router";
import logoImg from "../imports/WhatsApp_Image_2026-08-29_at_9.15.10_PM.jpeg";

const ArrowLeft = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const CLASSES = [
  { label: "Class 4", emoji: "🎨", track: "Design & AI", fee: 849, accent: "#2563EB", accentLight: "#EFF6FF" },
  { label: "Class 5", emoji: "🎨", track: "Design & AI", fee: 849, accent: "#2563EB", accentLight: "#EFF6FF" },
  { label: "Class 6", emoji: "🖼", track: "Design & AI", fee: 849, accent: "#A21CAF", accentLight: "#FDF4FF" },
  { label: "Class 7", emoji: "📱", track: "Design & AI", fee: 849, accent: "#6D3CF5", accentLight: "#F5F3FF" },
  { label: "Class 8", emoji: "💻", track: "Web Development", fee: 949, accent: "#10B981", accentLight: "#ECFDF5" },
  { label: "Class 9", emoji: "⚡", track: "Web Development", fee: 949, accent: "#F59E0B", accentLight: "#FFFBEB" },
  { label: "Class 10", emoji: "🌐", track: "Web Development", fee: 949, accent: "#EF4444", accentLight: "#FEF2F2" },
];

const COURSES = [
  { name: "Basic Canvas & Basic Designing", classLabel: "Class 4", duration: "2 Months", fee: 849, emoji: "🎨" },
  { name: "Basic Canvas & Basic Designing", classLabel: "Class 5", duration: "2 Months", fee: 849, emoji: "🎨" },
  { name: "Understanding Apps & Graphic Designing", classLabel: "Class 6", duration: "2 Months", fee: 849, emoji: "🖼" },
  { name: "Full App Design & Understand AI", classLabel: "Class 7", duration: "2 Months", fee: 849, emoji: "📱" },
  { name: "Website Structure & Basic Styling", classLabel: "Class 8", duration: "2 Months", fee: 949, emoji: "💻" },
  { name: "More on Styling & JS Fun", classLabel: "Class 9", duration: "2 Months", fee: 949, emoji: "⚡" },
  { name: "Full Interactive Websites & Hosting", classLabel: "Class 10", duration: "2 Months", fee: 949, emoji: "🌐" },
];

const UPI_ID = "techiesacademy@upi";
const ACCOUNT = { name: "Techies Academy", number: "XXXX XXXX XXXX 4821", ifsc: "SBIN0001234", bank: "State Bank of India" };

type Step = "class" | "select" | "details" | "pay" | "confirm";

export default function PaymentCenter() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("class");
  const [selectedClass, setSelectedClass] = useState<typeof CLASSES[0] | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<typeof COURSES[0] | null>(null);
  const [payMode, setPayMode] = useState<"upi" | "bank" | "card">("upi");
  const [form, setForm] = useState({ name: "", email: "", phone: "", transactionId: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [couponInput, setCouponInput] = useState("");
  const [couponStatus, setCouponStatus] = useState<"idle" | "valid" | "invalid">("idle");
  const [discountPct, setDiscountPct] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState("");

  // Valid coupons: code → discount %
  const COUPONS: Record<string, number> = {
    "TECHIES10": 10,
    "WELCOME20": 20,
    "SCHOOL15": 15,
    "FIRST50": 50,
  };

  const applyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (COUPONS[code]) {
      setDiscountPct(COUPONS[code]);
      setCouponStatus("valid");
      setAppliedCoupon(code);
    } else {
      setDiscountPct(0);
      setCouponStatus("invalid");
      setAppliedCoupon("");
    }
  };

  const removeCoupon = () => {
    setCouponInput("");
    setCouponStatus("idle");
    setDiscountPct(0);
    setAppliedCoupon("");
  };

  const set = (k: string, v: string) => { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: "" })); };

  const validateDetails = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Valid email is required";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) e.phone = "Valid 10-digit phone is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateTxn = () => {
    const e: Record<string, string> = {};
    if (!form.transactionId.trim()) e.transactionId = "Please enter your transaction / UTR ID";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validateTxn()) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setStep("confirm"); }, 1200);
  };

  const baseFee = selectedCourse ? selectedCourse.fee : 0;
  const discount = Math.round(baseFee * discountPct / 100);
  const discountedFee = baseFee - discount;
  const gst = selectedCourse ? Math.round(discountedFee * 0.18) : 0;
  const total = selectedCourse ? discountedFee + gst : 0;

  return (
    <div style={{ minHeight: "100vh", background: "#F7F9FC", fontFamily: "Inter, sans-serif" }}>

      {/* Top bar */}
      <div style={{ background: "#071A3D", padding: "12px 24px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => navigate("/")}>
            <img src={logoImg} alt="Techies Academy" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.2)" }} />
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff" }}>Techies Academy</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {step !== "class" && step !== "confirm" && (
              <button
                onClick={() => {
                  if (step === "select") setStep("class");
                  else if (step === "details") setStep("select");
                  else if (step === "pay") setStep("details");
                }}
                style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#CBD5E1", fontFamily: "Inter, sans-serif", fontSize: 13, padding: "7px 14px", borderRadius: 8, cursor: "pointer" }}>
                <ArrowLeft /> Step Back
              </button>
            )}
            <button onClick={() => navigate("/")} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#94A3B8", fontFamily: "Inter, sans-serif", fontSize: 13, padding: "7px 14px", borderRadius: 8, cursor: "pointer" }}>
              🏠 Home
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 20px 80px" }}>

        {/* Page heading */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>💳</div>
          <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(22px, 4vw, 32px)", color: "#071A3D", marginBottom: 8 }}>Payment Center</h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#6B7280" }}>Securely pay your course fee in just a few steps.</p>
        </div>

        {/* Stepper */}
        {step !== "confirm" && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, marginBottom: 36, flexWrap: "wrap", rowGap: 8 }}>
            {[
              { key: "class", label: "Select Class", n: 1 },
              { key: "select", label: "Select Course", n: 2 },
              { key: "details", label: "Your Details", n: 3 },
              { key: "pay", label: "Make Payment", n: 4 },
            ].map((s, i) => {
              const stepOrder = ["class", "select", "details", "pay"];
              const currentIdx = stepOrder.indexOf(step);
              const done = i < currentIdx;
              const active = step === s.key;
              return (
                <div key={s.key} style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: done ? "#10B981" : active ? "#2563EB" : "#E5E7EB", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 13, color: done || active ? "#fff" : "#9CA3AF", transition: "all 0.3s" }}>
                      {done ? "✓" : s.n}
                    </div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: active ? 600 : 400, color: active ? "#071A3D" : "#9CA3AF", whiteSpace: "nowrap" }}>{s.label}</div>
                  </div>
                  {i < 3 && <div style={{ width: 44, height: 2, background: done ? "#10B981" : "#E5E7EB", margin: "0 3px 18px", transition: "background 0.3s" }} />}
                </div>
              );
            })}
          </div>
        )}

        {/* ── STEP 0: Select Class ── */}
        {step === "class" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 20, color: "#071A3D", marginBottom: 8 }}>Which class are you in?</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#6B7280" }}>Select your class to see the right course for you.</div>
            </div>

            {/* Design & AI Track */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ background: "linear-gradient(135deg,#071A3D,#2563EB)", borderRadius: 12, padding: "8px 18px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>🎨</span>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#fff" }}>Design & AI Track</span>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 13, color: "#F59E0B" }}>₹849</span>
                </div>
                <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }} className="pay-class-grid-4">
                {CLASSES.slice(0, 4).map(cl => (
                  <div key={cl.label} onClick={() => setSelectedClass(cl)} style={{
                    background: selectedClass?.label === cl.label ? cl.accentLight : "#fff",
                    borderRadius: 18, padding: "24px 16px", cursor: "pointer", textAlign: "center",
                    border: selectedClass?.label === cl.label ? `2px solid ${cl.accent}` : "2px solid #E5E7EB",
                    boxShadow: selectedClass?.label === cl.label ? `0 4px 20px ${cl.accent}22` : "0 2px 8px rgba(7,26,61,0.05)",
                    transition: "all 0.2s", position: "relative",
                  }}>
                    {selectedClass?.label === cl.label && (
                      <div style={{ position: "absolute", top: 10, right: 10, width: 20, height: 20, borderRadius: "50%", background: cl.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11 }}>✓</div>
                    )}
                    <div style={{ fontSize: 36, marginBottom: 10 }}>{cl.emoji}</div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 16, color: "#071A3D", marginBottom: 4 }}>{cl.label}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF" }}>{cl.track}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Web Development Track */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ background: "linear-gradient(135deg,#064E3B,#10B981)", borderRadius: 12, padding: "8px 18px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>💻</span>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#fff" }}>Web Development Track</span>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 13, color: "#F59E0B" }}>₹949</span>
                </div>
                <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="pay-class-grid-3">
                {CLASSES.slice(4).map(cl => (
                  <div key={cl.label} onClick={() => setSelectedClass(cl)} style={{
                    background: selectedClass?.label === cl.label ? cl.accentLight : "#fff",
                    borderRadius: 18, padding: "24px 16px", cursor: "pointer", textAlign: "center",
                    border: selectedClass?.label === cl.label ? `2px solid ${cl.accent}` : "2px solid #E5E7EB",
                    boxShadow: selectedClass?.label === cl.label ? `0 4px 20px ${cl.accent}22` : "0 2px 8px rgba(7,26,61,0.05)",
                    transition: "all 0.2s", position: "relative",
                  }}>
                    {selectedClass?.label === cl.label && (
                      <div style={{ position: "absolute", top: 10, right: 10, width: 20, height: 20, borderRadius: "50%", background: cl.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11 }}>✓</div>
                    )}
                    <div style={{ fontSize: 36, marginBottom: 10 }}>{cl.emoji}</div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 16, color: "#071A3D", marginBottom: 4 }}>{cl.label}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF" }}>{cl.track}</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => { if (selectedClass) { setSelectedCourse(COURSES.find(c => c.classLabel === selectedClass.label) || null); setStep("select"); } }}
              disabled={!selectedClass}
              style={{ width: "100%", padding: "15px", borderRadius: 14, border: "none", background: selectedClass ? "linear-gradient(135deg,#123BCE,#2563EB)" : "#E5E7EB", color: selectedClass ? "#fff" : "#9CA3AF", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, cursor: selectedClass ? "pointer" : "not-allowed", boxShadow: selectedClass ? "0 4px 16px rgba(37,99,235,0.3)" : "none", transition: "all 0.2s" }}>
              Continue to Course →
            </button>
          </div>
        )}

        {/* ── STEP 1: Select Course ── */}
        {step === "select" && selectedClass && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 17, color: "#071A3D" }}>Your Course for {selectedClass.label}</div>
              <div style={{ background: selectedClass.accentLight, color: selectedClass.accent, fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 11, padding: "4px 12px", borderRadius: 99, border: `1px solid ${selectedClass.accent}30` }}>{selectedClass.track}</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, marginBottom: 28 }}>
              {COURSES.filter(c => c.classLabel === selectedClass.label).map(c => (
                <div key={c.name} onClick={() => setSelectedCourse(c)} style={{
                  background: "#fff", borderRadius: 18, padding: "26px 24px", cursor: "pointer",
                  border: selectedCourse?.name === c.name && selectedCourse?.classLabel === c.classLabel ? `2px solid ${selectedClass.accent}` : "2px solid #E5E7EB",
                  boxShadow: selectedCourse?.name === c.name ? `0 4px 20px ${selectedClass.accent}20` : "0 2px 8px rgba(7,26,61,0.05)",
                  transition: "all 0.2s", position: "relative", display: "flex", alignItems: "center", gap: 20,
                }}>
                  {selectedCourse?.classLabel === c.classLabel && (
                    <div style={{ position: "absolute", top: 14, right: 14, width: 24, height: 24, borderRadius: "50%", background: selectedClass.accent, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13 }}>✓</div>
                  )}
                  <div style={{ width: 64, height: 64, borderRadius: 18, background: selectedClass.accentLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34, flexShrink: 0 }}>{c.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "inline-block", background: selectedClass.accentLight, color: selectedClass.accent, fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 10, padding: "2px 10px", borderRadius: 99, marginBottom: 6 }}>{c.classLabel}</div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, color: "#071A3D", marginBottom: 4 }}>{c.name}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#9CA3AF", marginBottom: 10 }}>⏱ {c.duration} &nbsp;·&nbsp; 📜 Certificate Included</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                      <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: 28, color: selectedClass.accent }}>₹{c.fee.toLocaleString()}</span>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#9CA3AF" }}>+ 18% GST</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => { if (selectedCourse) setStep("details"); }}
              disabled={!selectedCourse}
              style={{ width: "100%", padding: "15px", borderRadius: 14, border: "none", background: selectedCourse ? "linear-gradient(135deg,#123BCE,#2563EB)" : "#E5E7EB", color: selectedCourse ? "#fff" : "#9CA3AF", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, cursor: selectedCourse ? "pointer" : "not-allowed", boxShadow: selectedCourse ? "0 4px 16px rgba(37,99,235,0.3)" : "none", transition: "all 0.2s" }}>
              Continue →
            </button>
          </div>
        )}

        {/* ── STEP 2: Student Details ── */}
        {step === "details" && selectedCourse && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24, alignItems: "start" }} className="pay-layout">
            <div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 17, color: "#071A3D", marginBottom: 18 }}>Your Details</div>
              <div style={{ background: "#fff", borderRadius: 20, padding: "28px", border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(7,26,61,0.06)", display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { key: "name", label: "Full Name *", type: "text", placeholder: "As per registration" },
                  { key: "email", label: "Email Address *", type: "email", placeholder: "your@email.com" },
                  { key: "phone", label: "Phone Number *", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 7 }}>{f.label}</label>
                    <input type={f.type} value={form[f.key as keyof typeof form]} placeholder={f.placeholder}
                      onChange={e => set(f.key, e.target.value)}
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: `1.5px solid ${errors[f.key] ? "#EF4444" : "#E5E7EB"}`, fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", boxSizing: "border-box", background: "#FAFAFA" }} />
                    {errors[f.key] && <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#EF4444", marginTop: 4 }}>⚠️ {errors[f.key]}</div>}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                <button onClick={() => setStep("select")} style={{ flex: 1, padding: "13px", borderRadius: 12, border: "1.5px solid #E5E7EB", background: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 14, color: "#374151", cursor: "pointer" }}>← Back</button>
                <button onClick={() => { if (validateDetails()) setStep("pay"); }} style={{ flex: 2, padding: "13px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#123BCE,#2563EB)", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer", boxShadow: "0 4px 14px rgba(37,99,235,0.3)" }}>Continue to Payment →</button>
              </div>
            </div>

            {/* Order summary */}
            <div style={{ background: "#071A3D", borderRadius: 20, padding: "24px" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 16 }}>Order Summary</div>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{selectedCourse.emoji}</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", lineHeight: 1.4, marginBottom: 4 }}>{selectedCourse.name}</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#94A3B8", marginBottom: 16 }}>⏱ {selectedCourse.duration}</div>

              {/* Coupon code */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#94A3B8", marginBottom: 8 }}>🏷️ Have a coupon code?</div>
                {couponStatus !== "valid" ? (
                  <div style={{ display: "flex", gap: 8 }}>
                    <input
                      value={couponInput}
                      onChange={e => { setCouponInput(e.target.value.toUpperCase()); setCouponStatus("idle"); }}
                      placeholder="Enter code"
                      onKeyDown={e => e.key === "Enter" && applyCoupon()}
                      style={{ flex: 1, padding: "9px 12px", borderRadius: 10, border: `1.5px solid ${couponStatus === "invalid" ? "#EF4444" : "rgba(255,255,255,0.15)"}`, background: "rgba(255,255,255,0.07)", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 13, outline: "none", letterSpacing: "0.05em" }}
                    />
                    <button onClick={applyCoupon} style={{ padding: "9px 14px", borderRadius: 10, border: "none", background: "#F59E0B", color: "#071A3D", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 12, cursor: "pointer", whiteSpace: "nowrap" }}>Apply</button>
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.4)", borderRadius: 10, padding: "9px 14px" }}>
                    <div>
                      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 12, color: "#6EE7B7" }}>✅ {appliedCoupon}</div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#34D399" }}>{discountPct}% discount applied!</div>
                    </div>
                    <button onClick={removeCoupon} style={{ background: "none", border: "none", color: "#6EE7B7", cursor: "pointer", fontSize: 16, lineHeight: 1 }}>✕</button>
                  </div>
                )}
                {couponStatus === "invalid" && (
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#FCA5A5", marginTop: 6 }}>⚠️ Invalid coupon code. Please try again.</div>
                )}
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#94A3B8" }}>Course Fee</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#E2E8F0" }}>₹{baseFee.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#6EE7B7" }}>Discount ({discountPct}%)</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#6EE7B7" }}>− ₹{discount.toLocaleString()}</span>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#94A3B8" }}>GST (18%)</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#E2E8F0" }}>₹{gst.toLocaleString()}</span>
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 12, display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>Total</span>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 18, color: "#F59E0B" }}>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 3: Payment ── */}
        {step === "pay" && selectedCourse && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, alignItems: "start" }} className="pay-layout">
            <div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 17, color: "#071A3D", marginBottom: 18 }}>Choose Payment Method</div>

              {/* Method tabs */}
              <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
                {([
                  { key: "upi", label: "📲 UPI" },
                  { key: "bank", label: "🏦 Bank Transfer" },
                  { key: "card", label: "💳 Card" },
                ] as const).map(m => (
                  <button key={m.key} onClick={() => setPayMode(m.key)} style={{
                    padding: "10px 18px", borderRadius: 10, border: payMode === m.key ? "2px solid #2563EB" : "2px solid #E5E7EB",
                    background: payMode === m.key ? "#EFF6FF" : "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 13,
                    color: payMode === m.key ? "#2563EB" : "#6B7280", cursor: "pointer", transition: "all 0.2s"
                  }}>{m.label}</button>
                ))}
              </div>

              <div style={{ background: "#fff", borderRadius: 20, padding: "28px", border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(7,26,61,0.06)", marginBottom: 20 }}>

                {/* UPI */}
                {payMode === "upi" && (
                  <div>
                    <div style={{ textAlign: "center", marginBottom: 20 }}>
                      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, color: "#071A3D", marginBottom: 6 }}>Pay via UPI</div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#6B7280" }}>Scan the QR code or use the UPI ID below</div>
                    </div>
                    {/* QR placeholder */}
                    <div style={{ width: 160, height: 160, margin: "0 auto 20px", background: "linear-gradient(135deg, #EFF6FF, #F5F3FF)", borderRadius: 16, border: "2px dashed #BFDBFE", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      <span style={{ fontSize: 40 }}>📲</span>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#9CA3AF", textAlign: "center", padding: "0 12px" }}>QR Code for ₹{total.toLocaleString()}</div>
                    </div>
                    <div style={{ background: "#F8FAFC", borderRadius: 12, padding: "14px 18px", border: "1px solid #E5E7EB", textAlign: "center", marginBottom: 8 }}>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF", marginBottom: 4 }}>UPI ID</div>
                      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 16, color: "#2563EB", letterSpacing: "0.02em" }}>{UPI_ID}</div>
                    </div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#9CA3AF", textAlign: "center" }}>Supported: GPay, PhonePe, Paytm, BHIM, any UPI app</div>
                  </div>
                )}

                {/* Bank Transfer */}
                {payMode === "bank" && (
                  <div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, color: "#071A3D", marginBottom: 16 }}>Bank Account Details</div>
                    {[
                      { label: "Account Name", value: ACCOUNT.name },
                      { label: "Account Number", value: ACCOUNT.number },
                      { label: "IFSC Code", value: ACCOUNT.ifsc },
                      { label: "Bank", value: ACCOUNT.bank },
                      { label: "Amount to Pay", value: `₹${total.toLocaleString()}` },
                    ].map(r => (
                      <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 14px", background: "#F8FAFC", borderRadius: 10, marginBottom: 8, border: "1px solid #F3F4F6" }}>
                        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6B7280" }}>{r.label}</span>
                        <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#071A3D" }}>{r.value}</span>
                      </div>
                    ))}
                    <div style={{ background: "#FEF3C7", borderRadius: 10, padding: "10px 14px", border: "1px solid #FDE68A", marginTop: 6 }}>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#92400E" }}>⚠️ After transferring, enter your UTR/Transaction ID below to confirm.</div>
                    </div>
                  </div>
                )}

                {/* Card */}
                {payMode === "card" && (
                  <div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 15, color: "#071A3D", marginBottom: 18 }}>Card Details</div>
                    {[
                      { key: "cardName", label: "Name on Card", placeholder: "As printed on card", type: "text" },
                      { key: "cardNum", label: "Card Number", placeholder: "XXXX XXXX XXXX XXXX", type: "text" },
                    ].map(f => (
                      <div key={f.key} style={{ marginBottom: 14 }}>
                        <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 7 }}>{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder} style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", boxSizing: "border-box", background: "#FAFAFA" }} />
                      </div>
                    ))}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div>
                        <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 7 }}>Expiry</label>
                        <input type="text" placeholder="MM / YY" style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", boxSizing: "border-box", background: "#FAFAFA" }} />
                      </div>
                      <div>
                        <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 7 }}>CVV</label>
                        <input type="password" maxLength={4} placeholder="•••" style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: "1.5px solid #E5E7EB", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", boxSizing: "border-box", background: "#FAFAFA" }} />
                      </div>
                    </div>
                    <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ fontSize: 18 }}>🔒</span>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF" }}>256-bit SSL encrypted. Your card details are safe.</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Transaction ID confirmation */}
              <div style={{ background: "#fff", borderRadius: 16, padding: "20px 24px", border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(7,26,61,0.05)", marginBottom: 20 }}>
                <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 8 }}>
                  Transaction / UTR ID <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <input value={form.transactionId} onChange={e => set("transactionId", e.target.value)} placeholder="Enter your 12-digit transaction or UTR ID"
                  style={{ width: "100%", padding: "12px 14px", borderRadius: 12, border: `1.5px solid ${errors.transactionId ? "#EF4444" : "#E5E7EB"}`, fontFamily: "Inter, sans-serif", fontSize: 14, color: "#071A3D", outline: "none", boxSizing: "border-box", background: "#FAFAFA" }} />
                {errors.transactionId && <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#EF4444", marginTop: 5 }}>⚠️ {errors.transactionId}</div>}
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#9CA3AF", marginTop: 6 }}>After paying, enter the transaction ID from your payment app or bank SMS.</div>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button onClick={() => setStep("details")} style={{ flex: 1, padding: "13px", borderRadius: 12, border: "1.5px solid #E5E7EB", background: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 14, color: "#374151", cursor: "pointer" }}>← Back</button>
                <button onClick={handleSubmit} disabled={submitting} style={{ flex: 2, padding: "13px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#059669,#10B981)", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.75 : 1, boxShadow: "0 4px 14px rgba(16,185,129,0.35)" }}>
                  {submitting ? "Confirming..." : "✅ Confirm Payment"}
                </button>
              </div>
            </div>

            {/* Order summary sidebar */}
            <div style={{ background: "#071A3D", borderRadius: 20, padding: "24px", position: "sticky", top: 90 }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 16 }}>Order Summary</div>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{selectedCourse.emoji}</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 13, color: "#fff", lineHeight: 1.4, marginBottom: 4 }}>{selectedCourse.name}</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#94A3B8", marginBottom: 8 }}>⏱ {selectedCourse.duration}</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#94A3B8", marginBottom: 20 }}>👤 {form.name || "—"}</div>
              {appliedCoupon && (
                <div style={{ marginBottom: 12, background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.35)", borderRadius: 10, padding: "8px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 11, color: "#6EE7B7" }}>✅ {appliedCoupon}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#34D399" }}>{discountPct}% discount applied</div>
                  </div>
                </div>
              )}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#94A3B8" }}>Course Fee</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#E2E8F0" }}>₹{baseFee.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6EE7B7" }}>Discount ({discountPct}%)</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6EE7B7" }}>− ₹{discount.toLocaleString()}</span>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#94A3B8" }}>GST (18%)</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#E2E8F0" }}>₹{gst.toLocaleString()}</span>
                </div>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 12, display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#fff" }}>Total</span>
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 20, color: "#F59E0B" }}>₹{total.toLocaleString()}</span>
                </div>
              </div>
              <div style={{ marginTop: 20, padding: "12px", background: "rgba(16,185,129,0.12)", borderRadius: 10, border: "1px solid rgba(16,185,129,0.25)" }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#6EE7B7", lineHeight: 1.6 }}>🔒 Payments are verified manually within 24 hours. You will receive a confirmation on your email/phone.</div>
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 4: Confirmation ── */}
        {step === "confirm" && selectedCourse && (
          <div style={{ textAlign: "center", maxWidth: 520, margin: "0 auto" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg,#059669,#10B981)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 38, margin: "0 auto 20px", boxShadow: "0 8px 24px rgba(16,185,129,0.35)" }}>✅</div>
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 26, color: "#071A3D", marginBottom: 10 }}>Payment Submitted!</h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#6B7280", lineHeight: 1.8, marginBottom: 28 }}>
              Thank you <strong>{form.name}</strong>! Your payment of <strong>₹{total.toLocaleString()}</strong> for <strong>{selectedCourse.name}</strong> has been received. Our team will verify it within <strong>24 hours</strong> and send a confirmation to <strong>{form.email}</strong>.
            </p>

            <div style={{ background: "#fff", borderRadius: 20, padding: "24px", border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(7,26,61,0.06)", marginBottom: 28, textAlign: "left" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, color: "#071A3D", marginBottom: 14 }}>📋 Payment Summary</div>
              {[
                { label: "Student Name", value: form.name },
                { label: "Course", value: selectedCourse.name },
                { label: "Amount Paid", value: `₹${total.toLocaleString()}` },
                { label: "Transaction ID", value: form.transactionId },
                { label: "Payment Method", value: payMode === "upi" ? "UPI" : payMode === "bank" ? "Bank Transfer" : "Card" },
              ].map(r => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "9px 0", borderBottom: "1px solid #F3F4F6", gap: 16 }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#9CA3AF", flexShrink: 0 }}>{r.label}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#071A3D", textAlign: "right" }}>{r.value}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => navigate("/")} style={{ padding: "13px 28px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#123BCE,#2563EB)", color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer", boxShadow: "0 4px 14px rgba(37,99,235,0.3)" }}>Back to Home</button>
              <button onClick={() => { setStep("select"); setSelectedCourse(null); setForm({ name: "", email: "", phone: "", transactionId: "" }); }} style={{ padding: "13px 24px", borderRadius: 12, border: "1.5px solid #E5E7EB", background: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: 14, color: "#374151", cursor: "pointer" }}>Pay Another Course</button>
            </div>

            <div style={{ marginTop: 24, fontFamily: "Inter, sans-serif", fontSize: 13, color: "#9CA3AF" }}>
              Questions? Call us at <strong style={{ color: "#071A3D" }}>+91 6201786801</strong> or email <strong style={{ color: "#071A3D" }}>techiesacademy.edu@gmail.com</strong>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pay-class-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          .pay-class-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
          .pay-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .pay-grid { grid-template-columns: 1fr !important; }
          .pay-class-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          .pay-class-grid-3 { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
