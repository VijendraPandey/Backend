import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await api.get("/auth/logout");
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err.response?.data || err.message);
    }
  };

  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <nav
      className="
        flex justify-between items-center
        px-6 py-3.5
        border-b border-[#e5e7eb]
        bg-white/80 backdrop-blur-md
        sticky top-0 z-50
      "
    >
      {/* LEFT */}
      <h3 className="text-[18px] font-semibold text-[#8B8CF8] tracking-wide">
        MiniSocial
      </h3>

      {/* RIGHT */}
      {user ? (
        <div className="flex items-center gap-[15px]">
          <span className="text-[#6b7280] text-[14px]">@{user.username}</span>

          <Link
            to="/profile"
            style={{
              textDecoration: "none",
              color: "#374151",
              padding: "6px 12px",
              borderRadius: "999px",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#EEF2FF")}
            onMouseOut={(e) => (e.target.style.background = "transparent")}
          >
            Profile
          </Link>

          <Link
            to="/create"
            style={{
              textDecoration: "none",
              color: "#374151",
              padding: "6px 12px",
              borderRadius: "999px",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#EEF2FF")}
            onMouseOut={(e) => (e.target.style.background = "transparent")}
          >
            Create
          </Link>

          <button
            onClick={handleLogout}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 16px",
              border: "none",
              outline: "none",
              borderRadius: "9999px",
              backgroundColor: "#A7F3D0",
              color: "#065f46",
              fontSize: "14px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          {isLoginPage && (
            <Link
              to="/register"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 16px",
                borderRadius: "9999px",
                backgroundColor: "#A7F3D0",
                color: "#065f46",
                fontSize: "14px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Register
            </Link>
          )}

          {isRegisterPage && (
            <Link
              to="/login"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 16px",
                borderRadius: "9999px",
                backgroundColor: "#A7F3D0",
                color: "#065f46",
                fontSize: "14px",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
