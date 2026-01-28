import React from "react";
import PostSVG from "../assets/images/post.svg";

/* ================== STYLES ================== */
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "20px",
    background: "#f5f6f8",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
    alignItems: "center",
  },
  heading: {
    margin: 0,
    fontSize: "22px",
    fontWeight: 600,
  },
  search: {
    padding: "8px 14px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    outline: "none",
    width: "220px",
    fontSize: "14px",
  },
  content: {
    display: "flex",
    gap: "16px",
  },
  feed: {
    flex: 3,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    background: "#eef1f6",
  },
  cardBody: {
    padding: "12px",
  },
  tag: {
    fontSize: "12px",
    color: "#007bff",
    fontWeight: 600,
  },
  title: {
    fontSize: "14px",
    marginTop: "6px",
    lineHeight: 1.4,
  },
  rightPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  panelCard: {
    background: "#fff",
    borderRadius: "10px",
    padding: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  },
  panelTitle: {
    fontSize: "15px",
    fontWeight: 600,
    marginBottom: "10px",
  },
  panelItem: {
    fontSize: "13px",
    marginBottom: "8px",
    cursor: "pointer",
    color: "#333",
  },
  groupItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "13px",
    marginBottom: "10px",
  },
  joinBtn: {
    padding: "4px 12px",
    borderRadius: "12px",
    border: "none",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "12px",
  },
};

/* ================== COMPONENT ================== */
const Explore: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.heading}>Explore</h2>
        <input type="text" placeholder="Search" style={styles.search} />
      </div>

      <div style={styles.content}>
        {/* Feed Section */}
        <div style={styles.feed}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} style={styles.card}>
              <img
                src={PostSVG}
                alt="post"
                style={styles.image}
              />

              <div style={styles.cardBody}>
                <span style={styles.tag}>UX DESIGN</span>
                <h4 style={styles.title}>
                  AI in Action: Transforming Patient Care
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div style={styles.rightPanel}>
          <div style={styles.panelCard}>
            <h4 style={styles.panelTitle}>Top Articles</h4>
            {[1, 2, 3].map((a) => (
              <p key={a} style={styles.panelItem}>
                The ethics of AI-generated content in marketing
              </p>
            ))}
          </div>

          <div style={styles.panelCard}>
            <h4 style={styles.panelTitle}>Groups</h4>
            {[1, 2].map((g) => (
              <div key={g} style={styles.groupItem}>
                <span>UX Designers</span>
                <button style={styles.joinBtn}>Join</button>
              </div>
            ))}
          </div>
         </div>
      </div>
    </div>
  );
};

export default Explore;
