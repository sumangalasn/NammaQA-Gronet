import Header_Navbar from "./header/Header_Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER – FULL WIDTH */}
      <Header_Navbar />

      {/* BODY */}
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <Sidebar />

        {/* PAGE CONTENT */}
        <main className="flex-1 bg-[#F7F9FC] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
