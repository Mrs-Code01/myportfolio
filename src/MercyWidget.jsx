import { useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";

const VAPI_PUBLIC_KEY = "35a950ab-9120-41be-bc06-494f1c2ed2cb";
const ASSISTANT_ID = "07ef14ae-02da-4a27-827a-3b7ab30ea1e0";

export default function MercyWidget() {
  const vapiRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState("Click to start a voice conversation");

  useEffect(() => {
    vapiRef.current = new Vapi(VAPI_PUBLIC_KEY);
    vapiRef.current.on("call-start", () => {
      setIsActive(true);
      setStatus("Connected — Mercy is listening...");
    });
    vapiRef.current.on("call-end", () => {
      setIsActive(false);
      setStatus("Call ended. Click to start again.");
    });
    vapiRef.current.on("error", () => {
      setIsActive(false);
      setStatus("Something went wrong. Please try again.");
    });
    return () => vapiRef.current?.stop();
  }, []);

  const handleCall = () => {
    if (isActive) {
      vapiRef.current.stop();
    } else {
      setStatus("Connecting to Mercy...");
      vapiRef.current.start(ASSISTANT_ID);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button onClick={() => setIsOpen(!isOpen)} style={styles.floatBtn}>
        📞
      </button>

      {/* Panel */}
      {isOpen && (
        <div style={styles.panel}>
          <div style={styles.header}>
            <div style={styles.avatar}>🤍</div>
            <div>
              <div style={styles.name}>Mercy's AI Assistant</div>
              <div style={styles.online}>🟢 Online & Ready</div>
            </div>
            <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
              ✕
            </button>
          </div>

          <div style={styles.body}>
            <div style={styles.message}>
              👋 Hi! I'm <strong style={{ color: "#a78bfa" }}>Mercy</strong>,
              your AI assistant. I can help you book an appointment in just a
              few minutes!
            </div>

            {isActive && (
              <div style={styles.visualizer}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    style={{ ...styles.bar, animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            )}

            <button
              onClick={handleCall}
              style={{
                ...styles.callBtn,
                background: isActive
                  ? "linear-gradient(135deg,#ef4444,#dc2626)"
                  : "linear-gradient(135deg,#6c63ff,#3ecf8e)",
              }}
            >
              {isActive ? "🔴 End Call" : "📞 Talk to Mercy"}
            </button>

            <div style={styles.status}>{status}</div>
          </div>

          <div style={styles.footer}>
            Powered by <span style={{ color: "#6c63ff" }}>Mercy's AI</span> ·
            Built with VAPI
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1.2); }
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(108,99,255,0.5); }
          70% { box-shadow: 0 0 0 14px rgba(108,99,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(108,99,255,0); }
        }
      `}</style>
    </>
  );
}

const styles = {
  floatBtn: {
    position: "fixed",
    top: "25%",
    left: "20px",
    transform: "translateY(-50%)",
    width: 65,
    height: 65,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#6c63ff,#3ecf8e)",
    border: "none",
    cursor: "pointer",
    fontSize: 26,
    zIndex: 99999,
    animation: "pulse 2.5s infinite",
    boxShadow: "0 4px 24px rgba(108,99,255,0.5)",
  },
  panel: {
    position: "fixed",
    bottom: "100px",
    left: "10px",
    transform: "none",
    width: "90vw",
    maxWidth: "360px",
    background: "#0f1117",
    border: "1px solid #252a3a",
    borderRadius: 20,
    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
    zIndex: 99998,
    fontFamily: "Segoe UI, sans-serif",
    overflow: "hidden",
  },
  header: {
    background: "linear-gradient(135deg,#1a1f2e,#0d1b2a)",
    padding: "18px 20px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    borderBottom: "1px solid #252a3a",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#6c63ff,#3ecf8e)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  name: { color: "#f1f5f9", fontSize: 15, fontWeight: 600 },
  online: { color: "#4ade80", fontSize: 11, marginTop: 2 },
  closeBtn: {
    marginLeft: "auto",
    background: "none",
    border: "none",
    color: "#7a7f94",
    cursor: "pointer",
    fontSize: 18,
  },
  body: {
    padding: "24px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
  message: {
    background: "#181c2a",
    border: "1px solid #252a3a",
    borderRadius: 12,
    padding: "14px 16px",
    color: "#c8cde0",
    fontSize: 13,
    lineHeight: 1.6,
    width: "100%",
    textAlign: "center",
  },
  callBtn: {
    width: "100%",
    padding: 14,
    borderRadius: 12,
    border: "none",
    color: "white",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    boxShadow: "0 4px 20px rgba(108,99,255,0.4)",
  },
  status: { fontSize: 12, color: "#7a7f94", textAlign: "center" },
  visualizer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    height: 30,
  },
  bar: {
    width: 4,
    height: 20,
    background: "linear-gradient(to top,#6c63ff,#3ecf8e)",
    borderRadius: 2,
    animation: "bounce 0.8s infinite ease-in-out",
  },
  footer: {
    padding: "12px 20px",
    borderTop: "1px solid #252a3a",
    textAlign: "center",
    fontSize: 11,
    color: "#3a3f52",
  },
};
