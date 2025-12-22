import { useState } from "react";
import { createPost } from "../api/post.api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

/* shimmer animation */
const shimmerStyle = `
@keyframes shimmer {
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}
`;

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // UI-only states
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { refreshProfile } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!image) {
      setError("Please select an image to upload");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      await createPost(formData);
      await refreshProfile();

      // ✨ success micro-feedback
      setSuccess(true);

      setTimeout(() => {
        navigate("/profile");
      }, 350);
    } catch (err) {
      console.error("Post creation failed:", err.response?.data || err.message);
      setError("Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
    minHeight: "calc(100vh - 64px)", // navbar height
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 40,
    paddingBottom: 40,
    color: "#374151",
  }}
    >
      <div style={{ padding: 20, color: "#374151" }}>
        <style>{shimmerStyle}</style>

        <h2 style={{ marginBottom: 6 }}>
          Create <span style={{ color: "#8B8CF8" }}>Post</span>
        </h2>

        <p style={{ marginBottom: 16, fontSize: 13, color: "#6B7280" }}>
          Upload an image — the caption will be generated automatically ✨
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            border: "1px solid #E5E7EB",
            padding: 20,
            borderRadius: 14,
            maxWidth: 360,
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Upload box */}
          <label
            style={{
              display: "block",
              padding: 18,
              marginBottom: 10,
              border: "1.5px dashed #C7D2FE",
              borderRadius: 12,
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: "#EEF2FF",
              color: "#4F46E5",
              fontSize: 14,
            }}
          >
            {image ? "Change image" : "Click or drop an image here"}

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              style={{ display: "none" }}
            />
          </label>

          {/* File name */}
          {image && (
            <p
              style={{
                fontSize: 12,
                color: "#6B7280",
                marginBottom: 12,
                textAlign: "center",
              }}
            >
              {image.name}
            </p>
          )}

          {/* Error text */}
          {error && (
            <p
              style={{
                fontSize: 12,
                color: "#EF4444",
                marginBottom: 12,
              }}
            >
              {error}
            </p>
          )}

          {/* Loading shimmer */}
          {loading && (
            <div
              style={{
                height: 6,
                borderRadius: 999,
                marginBottom: 14,
                background:
                  "linear-gradient(90deg, #E5E7EB 25%, #EEF2FF 37%, #E5E7EB 63%)",
                backgroundSize: "400% 100%",
                animation: "shimmer 1.4s ease infinite",
              }}
            />
          )}

          {/* Image preview */}
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              style={{
                width: "100%",
                borderRadius: 10,
                marginBottom: 14,
                objectFit: "cover",
              }}
            />
          )}

          {/* Success feedback */}
          {success && (
            <p
              style={{
                fontSize: 12,
                color: "#16A34A",
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              ✓ Post uploaded successfully
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "10px 0",
              borderRadius: 999,
              border: "none",
              backgroundColor: loading ? "#D1FAE5" : "#A7F3D0",
              color: "#065F46",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {loading ? "Creating post..." : "Upload ✨"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
