import Header_Navbar from "./header/Header_Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#F7F9FC" }}
    >
      <Header_Navbar />

      <div className="flex flex-1">
        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* PAGE CONTENT */}
        <div
          style={{
            marginLeft: "260px", // sidebar width
            marginTop: "20px",
            width: "100%",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
