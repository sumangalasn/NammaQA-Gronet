
import { useState } from "react";
import {
  connectionRequests,
  peopleYouMayKnow,
} from "../data/MyGronetters";

const CARD_STYLE = {
  width: "220px",
  height: "320px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  position: "relative" as const,
  overflow: "hidden",
  
};

const SECTION_BOX = {
  backgroundColor: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "20px",
  marginBottom: "24px",
};

const MyGronetters = () => {
  const [activeTab, setActiveTab] =
    useState<"requests" | "sent">("requests");

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "24px",
        backgroundColor: "#f7f8fa",
        minHeight: "100vh",
        justifyContent: "center", // 🔥 IMPORTANT
      }}
    >
      {/* ================= LEFT FEED ================= */}
      <div
        style={{
         maxWidth: "694px", // ⭐ FIGMA WIDTH
         width: "100%", // 🔥 FIGMA WIDTH
        }}
      >
        
        <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "16px" }}>
          My Gronetters
        </h2>
        

        {/* ================= CONNECTION REQUESTS BOX ================= */}
        <div style={SECTION_BOX}>
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              gap: "30px",
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: "12px",
              marginBottom: "20px",
            }}
          >
            <button
              onClick={() => setActiveTab("requests")}
              style={{
                background: "none",
                border: "none",
                paddingBottom: "6px",
                borderBottom:
                  activeTab === "requests"
                    ? "2px solid #0f2a5f"
                    : "none",
                fontWeight: activeTab === "requests" ? 600 : 400,
                cursor: "pointer",
              }}
            >
              Connection Requests
            </button>

            <button
              onClick={() => setActiveTab("sent")}
              style={{
                background: "none",
                border: "none",
                color: "#666",
                cursor: "pointer",
              }}
            >
              Request Sent
            </button>
          </div>

          {/* Cards */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {connectionRequests.map((user) => (
              <div key={user.id} style={CARD_STYLE}>
                <span
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "10px",
                    cursor: "pointer",
                  }}
                >
                  ×
                </span>

                <div style={{ height: "70px", backgroundColor: "#f2b8b8" }} />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "-35px",
                    padding: "0 12px 16px",
                    height: "100%",
                  }}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      border: "2px solid #fff",
                    }}
                  />

                  <h4 style={{ margin: "8px 0 4px" }}>{user.name}</h4>

                  <p style={{ fontSize: "12px", color: "#666" }}>
                    {user.subtitle}
                  </p>

                  <div style={{ flexGrow: 1 }} />

                  <button
                    style={{
                      width: "100%",
                      backgroundColor: "#0f2a5f",
                      color: "#fff",
                      border: "none",
                      padding: "6px",
                      borderRadius: "20px",
                    }}
                  >
                    Accept
                  </button>

                  <button
                    style={{
                      marginTop: "6px",
                      width: "100%",
                      border: "1px solid #ccc",
                      padding: "6px",
                      borderRadius: "20px",
                      fontSize: "12px",
                    }}
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PEOPLE YOU MAY KNOW BOX ================= */}
        <div style={SECTION_BOX}>
          <h3 style={{ fontWeight: 600, marginBottom: "16px" }}>
            People you may know
          </h3>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {peopleYouMayKnow.map((user) => (
              <div key={user.id} style={CARD_STYLE}>
                <div style={{ height: "70px", backgroundColor: "#f2b8b8" }} />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "-35px",
                    padding: "0 12px 16px",
                    height: "100%",
                  }}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      border: "2px solid #fff",
                    }}
                  />

                  <h4 style={{ margin: "8px 0 4px" }}>{user.name}</h4>

                  <p style={{ fontSize: "12px", color: "#666" }}>
                    {user.subtitle}
                  </p>

                  <div style={{ flexGrow: 1 }} />

                  <button
                    style={{
                      width: "100%",
                      backgroundColor: "#0f2a5f",
                      color: "#fff",
                      border: "none",
                      padding: "6px",
                      borderRadius: "20px",
                    }}
                  >
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDEBAR ================= */}
      <div
        style={{
          width: "337px",
          marginLeft: "24px",
          alignSelf: "flex-start",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #E1E1E1",
            borderRadius: "8px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#F3F4F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              💬
            </div>
            My Network
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontWeight: 600,
              color: "#0F2A5F",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#F3F4F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              👥
            </div>
            My Circles
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGronetters;
