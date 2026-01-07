

const Home = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        paddingBottom: "40px",
      }}
    >
      {/* ===== POST WRAPPER ===== */}
      <div style={{ marginBottom: "24px" }}>
        
        {/* ===== HEADER BOX (RECTANGLE 1) ===== */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          {/* LEFT SIDE */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img
              src="/assets/Icons/icon1.svg"
              alt="logo"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
              }}
            />

            <div>
              <div style={{ fontSize: "14px", fontWeight: 600 }}>
                Wedigital{" "}
                <span style={{ color: "#6b7280", fontWeight: 400 }}>
                  · 2 hrs ago
                </span>
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                @Jacob posted reply / New Comments
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <button
            style={{
              padding: "4px 14px",
              borderRadius: "16px",
              border: "1px solid #1e3a8a",
              background: "#ffffff",
              color: "#1e3a8a",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Join
          </button>
        </div>

        {/* ===== CONTENT BOX (RECTANGLE 2) ===== */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          {/* TITLE */}
          <div style={{ padding: "12px 16px" }}>
            <h3 style={{ fontSize: "18px", margin: 0 }}>
              Digital Marketing is Trending!!!
            </h3>
          </div>

          {/* IMAGE */}
          <img
            src="/assets/image/image1.svg"
            alt="post"
            style={{
              width: "100%",
              height: "360px",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* FOOTER */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              padding: "12px 16px",
              fontSize: "13px",
              color: "#374151",
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <span>♡ 65K</span>
            <span>💬 65K</span>
            <span>↗ 5K</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
