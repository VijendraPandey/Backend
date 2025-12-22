import { useState } from "react";
import { loginUser } from "../api/auth.api";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // ✅ UI-only state
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { refreshProfile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    try {
      setLoading(true);
      await loginUser({ username, password });
      await refreshProfile();
      navigate("/profile");
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #FAFAFA 0%, #EEF2FF 100%)",
        color: "#374151",
      }}
    >
      <div
        style={{
          border: "1px solid #E5E7EB",
          padding: 28,
          borderRadius: 16,
          width: 340,
          backgroundColor: "#FFFFFF",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ marginBottom: 6 }}>
          Welcome <span style={{ color: "#8B8CF8" }}>Back</span>
        </h2>

        <p
          style={{
            marginBottom: 22,
            fontSize: 13,
            color: "#6B7280",
          }}
        >
          Login to continue to MiniSocial
        </p>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "11px 14px",
              marginBottom: 14,
              borderRadius: 10,
              border: "1px solid #E5E7EB",
              fontSize: 14,
              outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#8B8CF8")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
          />

          {/* Password with toggle */}
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "11px 42px 11px 14px",
                marginBottom: 10,
                borderRadius: 10,
                border: "1px solid #E5E7EB",
                fontSize: 14,
                outline: "none",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#8B8CF8")}
              onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
            />

            {/* Eye toggle */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: 14,
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 500,
                color: "#8B8CF8",
                userSelect: "none",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* Error text */}
          {error && (
            <p
              style={{
                marginBottom: 12,
                fontSize: 12,
                color: "#EF4444",
              }}
            >
              {error}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "11px 0",
              borderRadius: 999,
              border: "none",
              backgroundColor: loading ? "#D1FAE5" : "#A7F3D0",
              color: "#065F46",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {loading ? "Logging in..." : "Login ✨"}
          </button>
        </form>

        {/* Register link */}
        <p
          style={{
            marginTop: 18,
            fontSize: 13,
            color: "#6B7280",
            textAlign: "center",
          }}
        >
          Don’t have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#8B8CF8",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
