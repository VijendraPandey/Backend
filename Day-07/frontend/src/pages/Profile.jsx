import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, posts, loading } = useAuth();

  if (loading)
    return <p style={{ color: "#6B7280" }}>Loading profile...</p>;

  if (!user)
    return <p style={{ color: "#6B7280" }}>Not logged in</p>;

  return (
    <div
      style={{
        padding: 20,
        color: "#374151",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ marginBottom: 4 }}>
          Welcome,{" "}
          <span style={{ color: "#8B8CF8" }}>
            {user.username}
          </span>{" "}
          👋
        </h2>

        <p style={{ fontSize: 14, color: "#6B7280" }}>
          Here’s a snapshot of what you’ve shared
        </p>
      </div>

      <hr style={{ borderColor: "#E5E7EB" }} />

      {/* Section title */}
      <h3 style={{ marginTop: 18, marginBottom: 10 }}>
        Your Posts
      </h3>

      {/* Empty state */}
      {posts.length === 0 && (
        <div
          style={{
            padding: 20,
            marginTop: 20,
            borderRadius: 14,
            backgroundColor: "#EEF2FF",
            color: "#4F46E5",
            maxWidth: 360,
          }}
        >
          <p style={{ marginBottom: 6, fontWeight: 600 }}>
            No posts yet ✨
          </p>
          <p style={{ fontSize: 14, color: "#6B7280" }}>
            Create your first post and it’ll appear here.
          </p>
        </div>
      )}

      {/* Posts grid */}
      <div
        style={{
          display: "grid",
          gap: 60,
          gridTemplateColumns: "repeat(auto-fit, 220px)",
          marginTop: 24,
        }}
      >
        {posts.map((post) => (
          <div
            key={post._id}
            style={{
              width: 230,
              border: "1px solid #E5E7EB",
              padding: 12,
              borderRadius: 12,
              backgroundColor: "#FFFFFF",
              boxShadow:
                "0 6px 16px rgba(0,0,0,0.04)",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform =
                "translateY(0)")
            }
          >
            <img
              src={post.imageUrl}
              alt="post"
              style={{
                width: "100%",
                borderRadius: 10,
                marginBottom: 10,
                objectFit: "cover",
              }}
            />

            <p
              style={{
                fontSize: 13,
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  color: "#6B7280",
                }}
              >
                Caption:
              </span>{" "}
              {post.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
