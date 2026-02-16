import { useState,useRef } from "react";
import { homeFeed } from "../data/home";




const Home = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [createType, setCreateType] = useState<"post" | "discussion" | null>(null);
  const [discussionTitle, setDiscussionTitle] = useState("");
  const [openIndustry, setOpenIndustry] = useState(false);
const [industries, setIndustries] = useState<string[]>([]);

const industryOptions = ["Career", "Youth", "Science"];

  const [openCommunity, setOpenCommunity] = useState(false);
  const [selectedCommunity, setSelectedCommunity] =
    useState<string | null>(null);
  const [title, setTitle] = useState("");

  const [openScope, setOpenScope] = useState(false);
  const [selectedScope, setSelectedScope] =
    useState("My Connections");
  const [postText, setPostText] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const scopes = ["My Connections", "Public"];
  const communities = [
    "My account",
    "The Testers group",
    "Tech genius",
  ];
  const overlayStyle = {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const menuItem = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
    cursor: "pointer",
  };
  const popupSmall = {
    width: "420px",
    background: "#fff",
    borderRadius: "20px",
    padding: "24px",
  };

  const popupLarge = {
    width: "720px",
    background: "#fff",
    borderRadius: "24px",
    padding: "24px",
  };

  const header = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "6px",
  };

  const optionStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "14px",
    marginBottom: "12px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    marginBottom: "12px",
  };

  const inputBox = {
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  background: "#fff",
  fontSize: "14px",
  };

  const scopeText = {
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    display: "inline-flex",
    gap: "6px",
  };

  const scopeDropdown = {
    position: "absolute" as const,
    top: "22px",
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    minWidth: "160px",
    zIndex: 3000,
  };

  const communityDropdown = {
    position: "absolute" as const,
  top: "48px",
  left: 0,
  width: "100%",
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
  zIndex: 3000,
  };

  const dropdownItem = {
    padding: "12px 16px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const sendBtn = {
    padding: "10px 20px",
    borderRadius: "20px",
    border: "1px solid #e5e7eb",
    background: "#fff",
    fontWeight: 600,
  };

  return (
     <div style={{ padding: "0px 20px" }}>
          
      
      {/* example: logo, search, community, academy, etc */}
      <div style={{ 
  display: "flex",
  marginTop: "20px",
  width: "100%",
  justifyContent: "flex-start",
  gap: "16px",
  paddingLeft: "40px",
}}>
</div>
    
    {/* ================= MAIN LAYOUT ================= */}
    <div style={{ display: "flex",
    marginTop: "20px",
    height: "calc(100vh - 72px)",
    overflow: "hidden",
    width: "100%",        // ok
    justifyContent: "flex-start",
    gap: "16px",  
    paddingLeft: "40px", 
                   // header height
         }}>



        {/* ================= MIDDLE FEED ================= */}
        {/* ================= MIDDLE FEED ================= */}
<div
  style={{
    width: "694px",
    flexShrink: 0,
    overflow: "visible",
    paddingRight: "4px",
  }}
>
  {homeFeed.map((post) => (
    <div key={post.id} style={{ marginBottom: "24px" }}>

      {/* POST HEADER */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          marginBottom: "8px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <img
            src={post.profile}
            alt="logo"
            style={{ width: "36px", height: "36px", borderRadius: "50%" }}
          />

          <div>
            <div style={{ fontWeight: 600 }}>
              {post.name} <span style={{ color: "#6b7280" }}>· {post.time}</span>
            </div>
            <div style={{ fontSize: "12px", color: "#6b7280" }}>
              {post.subtitle}
            </div>
          </div>
        </div>

        <button style={{
          border: "1px solid #1e3a8a",
          padding: "4px 14px",
          borderRadius: "16px",
          background: "#fff",
          color: "#1e3a8a",
          fontWeight: 600,
        }}>
          Join
        </button>
      </div>

      {/* POST BODY */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ padding: "12px 16px" }}>
          <h3>{post.title}</h3>
        </div>

        <img
          src={post.image}
          alt="post"
          style={{ width: "100%", height: "360px", objectFit: "cover" }}
        />
      </div>

    </div>
  ))}
</div>

        {/* ================= RIGHT PANEL ================= */}
             <div  style={{
             width: "337px",
             flexShrink: 0,
             position: "sticky",   // ⭐ KEY
            top: "2px",          // ⭐ header height adjust cheyyi
            background: "#FFFFFF",
            borderRadius: "8px",
            padding: "24px",
            border: "1px solid #E1E1E1",
            height: "fit-content",
            overflow: "hidden", // ⭐ Figma Hug effect
             }}
             >
  <button
    onClick={() => setOpenCreate(true)}
    style={{
      width: "100%",
      padding: "10px",
      borderRadius: "20px",
      border: "1px solid #1e3a8a",
      background: "#fff",
      fontWeight: 600,
      marginBottom: "16px",
      cursor: "pointer",
    }}
  >
    + Create
  </button>

  {/* ✅ MENU ITEMS START HERE */}
  <div style={menuItem}>
    <img src="/assets/Icons/icon2.svg" alt="post requests" width={40} />
    <span>Post Requests</span>
  </div>
  <div style={menuItem}>
    <img src="/assets/Icons/icon2.svg" alt="groups" width={40} />
    <span>My Groups</span>
  </div>
  <div style={menuItem}>
    <img src="/assets/Icons/icon3.svg" alt="discussions" width={40} />
    <span>My Discussions</span>
  </div>
  <div style={menuItem}>
    <img src="/assets/Icons/icon4.svg" alt="saved" width={40} />
    <span>Saved</span>
  </div>
</div>
      </div>


      {/* ================= POPUP 1 : CREATE ================= */}
      {openCreate && (
        <div onClick={() => setOpenCreate(false)} style={overlayStyle}>
          <div onClick={(e) => e.stopPropagation()} style={popupSmall}>
            <h2 style={{ marginBottom: "20px" }}>
              What do you want to create?
            </h2>

            <div
              style={optionStyle}
              onClick={() => {
                setCreateType("post");
                setSelectedScope("My Connections");
                setOpenCreate(false);
                setOpenPost(true);
              }}
            >
              <span>Start a post</span>
              <span>➜</span>
            </div>

            <div
              style={optionStyle}
              onClick={() => {
                setCreateType("discussion");
                setSelectedScope("Public"); 
                setOpenCreate(false);
                setOpenPost(true);
              }}
            >
              <span>Discussion</span>
              <span>➜</span>
            </div>
          </div>
        </div>
      )}

      {/* ================= POPUP 2 : START POST ================= */}
      {openPost && (
        <div onClick={() => setOpenPost(false)} style={overlayStyle}>
          <div onClick={(e) => e.stopPropagation()} style={popupLarge}>
            <div style={header}>
              <h2>What do you want to talk about?</h2>
              <span
                style={{ cursor: "pointer", fontSize: "22px" }}
                onClick={() => setOpenPost(false)}
              >
                ✕
              </span>
            </div>

            {/* SHOW SCOPE DROPDOWN ONLY FOR MY ACCOUNT */}
            {selectedCommunity === "My account" && (
           <div style={{ position: "relative", marginBottom: "12px" }}>
            <div
      style={scopeText}
      onClick={() => setOpenScope(!openScope)}
    >
      {selectedScope}
      <span style={{ fontSize: "12px" }}>▼</span>
    </div>

    {openScope && (
      <div style={scopeDropdown}>
        {scopes.map((item) => (
          <div
            key={item}
            style={dropdownItem}
            onClick={() => {
              setSelectedScope(item);
              setOpenScope(false);
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#f3f4f6")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            {item}
          </div>
        ))}
      </div>
    )}
  </div>
)}
{/* ================= post form ================= */}
    {createType === "post" && (
    <>
    <div style={{ position: "relative", marginBottom: "12px" }}>
    <div
    onClick={() => setOpenCommunity(!openCommunity)}
    style={inputBox}
    >
    <span style={{ color: selectedCommunity ? "#111827" : "#9ca3af" }}>
    {selectedCommunity ?? "Select Community"}</span>
    <span style={{ fontSize: "12px", color: "#6b7280" }}>▼</span>
    </div>
    {openCommunity && (
    <div style={communityDropdown}>
    {communities.map((item) => (
    <div
    key={item}
    onClick={() => {
    setSelectedCommunity(item);
    setOpenCommunity(false);
    if (item === "My account") {
    setTitle("Career Guidance to Young Students");
    setPostText("Hi all how are you?");
    } else if (item === "The Testers group") {
    setTitle("Career Growth");
    setPostText("To grow your career, please learn");
    } else if (item === "Tech genius") {
    setTitle("carreer growth");
    setPostText("");
    } else {
    setTitle("");
    setPostText("");
    }
    }}
    onMouseEnter={(e) => (e.currentTarget.style.background = "#f3f4f6")}
    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    style={dropdownItem}
    >
    {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <input
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={inputStyle}
                />

                <input
                  placeholder="Add industry"
                  style={inputStyle}
                />

                <div
               style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "12px",
                marginBottom: "12px",
               }}
              >
            {/* TEXTAREA */}
             <textarea
              placeholder="Start a post"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              style={{
              width: "100%",
              height: "140px",
              border: "none",
              outline: "none",
              resize: "none",
              fontSize: "14px",
              }}
              />

               {/* ICONS BAR (LEFT SIDE) */}
               <div
              style={{
              display: "flex",
              gap: "16px",
              marginTop: "10px",
              alignItems: "center",
              }}
              >
             {/* IMAGE */}
             <img
              src="/assets/Icons/image.svg"
               alt="image"
                  style={{ width: "18px", cursor: "pointer" }}
                  onClick={() => fileInputRef.current?.click()}
                  />

              {/* VIDEO */}
              <img
             src="/assets/Icons/videocam.svg"
              alt="video"
              style={{ width: "18px", cursor: "pointer" }}
               onClick={() => fileInputRef.current?.click()}
              />

           {/* TEXT */}
           <img
             src="/assets/Icons/text.svg"
             alt="text"
            style={{ width: "18px", cursor: "pointer" }}
            />
            </div>
           </div>

          {/* HIDDEN FILE INPUT */}
          <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*,video/*"
          />
          </>
            )}
            {/* ================= DISCUSSION FORM ================= */}
            {createType === "discussion" && (
              <>
                <div style={{ position: "relative", marginBottom: "12px" }}>
                  <div
                    onClick={() => setOpenCommunity(!openCommunity)}
                    style={inputBox}
                  >
                    <span style={{ color: selectedCommunity ? "#111827" : "#9ca3af" }}>
                              {selectedCommunity ?? "Select Community"}</span>
                    <span style={{ fontSize: "12px", color: "#6b7280" }}>▼</span>
                  </div>

                  {openCommunity && (
                    <div style={communityDropdown}>
                      {communities.map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setSelectedCommunity(item);
                            setOpenCommunity(false);
                            if (item === "My account") {
                            setDiscussionTitle("How can I grow in my career");
                            } else {
                            setDiscussionTitle("");
                            }
                          }}
                          onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#f3f4f6")
                    }
                  onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                 }
                 > {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <input
                  placeholder="Discussion Title"
                   value={discussionTitle}
                   onChange={(e) => setDiscussionTitle(e.target.value)}
                  style={inputStyle}
                />

                <div style={{ position: "relative", marginBottom: "12px" }}>
  <div
    style={inputBox}
    onClick={() => setOpenIndustry(!openIndustry)}
  >
    <span style={{ color: "#9ca3af" }}>Add industry</span>
    <span style={{ fontSize: "12px" }}>▼</span>
  </div>

  {/* INDUSTRY DROPDOWN */}
  {/* SELECTED INDUSTRIES (CHIPS) */}
{industries.length > 0 && (
  <div
    style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginBottom: "12px",
    }}
  >
    {industries.map((item) => (
      <div
        key={item}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 10px",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          fontSize: "13px",
          background: "#fff",
        }}
      >
        {item}
        <span
          style={{ cursor: "pointer", fontWeight: 600 }}
          onClick={() =>
            setIndustries(industries.filter((i) => i !== item))
          }
        >
          ×
        </span>
      </div>
    ))}
  </div>
)}
{openIndustry && (
  <div style={communityDropdown}>
    {industryOptions.map((item) => (
      <div
        key={item}
        style={dropdownItem}
        onClick={() => {
          if (!industries.includes(item)) {
            setIndustries([...industries, item]);
          }
          setOpenIndustry(false);
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#f3f4f6")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "transparent")
        }
      >
        {item}
      </div>
    ))}
  </div>
)}


                <div
                  style={{
                    ...inputStyle,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => fileInputRef.current?.click()}
                >
                  📷 Upload Cover Image
                </div>

                <div
             style={{
             border: "1px solid #e5e7eb",
             borderRadius: "12px",
             padding: "12px",
             marginBottom: "12px",
             }}
             >
            {/* COMMENTS TEXTAREA */}
            <textarea
             placeholder="Comments"
             style={{
             width: "100%",
             height: "140px",
             border: "none",
             outline: "none",
             resize: "none",
             fontSize: "14px",
             }}
             />

            {/* ICON BAR (LEFT SIDE) */}
            <div
            style={{
            display: "flex",
            gap: "16px",
            marginTop: "10px",
            alignItems: "center",
            }}
            >
          {/* IMAGE */}
          <img
           src="/assets/Icons/image.svg"
           alt="image"
           style={{ width: "18px", cursor: "pointer" }}
           onClick={() => fileInputRef.current?.click()}
           />

                {/* VIDEO */}
             <img
             src="/assets/Icons/videocam.svg"
             alt="video"
             style={{ width: "18px", cursor: "pointer" }}
             onClick={() => fileInputRef.current?.click()}
             />

            {/* TEXT */}
            <img
            src="/assets/Icons/text.svg"
            alt="text"
            style={{ width: "18px", cursor: "pointer" }}
             />
             <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*,video/*"
             />
            </div>
            </div>
            </div>
            </>
            )}

            <div style={{ textAlign: "right" }}>
              <button style={sendBtn}>Send post request</button>
            </div>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default Home;
