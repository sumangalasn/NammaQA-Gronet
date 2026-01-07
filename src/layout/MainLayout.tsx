import Header_Navbar from "./header/Header_Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col"
    style={{ background: "#F7F9FC" }}  >
      {/* HEADER */}
      <Header_Navbar />

      {/* BODY */}
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN AREA */}
        <main
          className="flex-1 bg-[#F7F9FC]"
          style={{
            marginLeft: "260px",   // ✅ sidebar width
            marginTop: "20px",
          }}
        >
          {/* ===== MIDDLE FEED WRAPPER (FIGMA LAYOUT) ===== */}
          <div
            style={{
              width: "694px",        // ✅ Figma width
              marginLeft: "57px",    // ✅ (317 - 260)
              marginTop: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
