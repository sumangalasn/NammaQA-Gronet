import React, { useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSidebar } from "../layout/SidebarProvider";

// ICONS
import icon1 from "../assets/icons/Vector2.svg";
import icon2 from "../assets/icons/Vector1.png";
import icon3 from "../assets/icons/Vector3.svg";
import icon4 from "../assets/icons/Vector4.svg";
import icon5 from "../assets/icons/Vector5.svg";
import icon6 from "../assets/icons/Vector6.svg";

interface SidebarProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, isDesktop, close } = useSidebar();

  const menuItems: MenuItem[] = [
    { id: "home", label: "Home", icon: icon1, route: "/home" },
    { id: "my-gronetters", label: "My Gronetters", icon: icon2, route: "/my-gronetters" },
    { id: "popular-discussions", label: "Popular Discussions", icon: icon3, route: "/popular-discussions" },
    { id: "explore", label: "Explore", icon: icon4, route: "/explore" },
    { id: "messages", label: "Messages", icon: icon5, route: "/messages" },
    { id: "my-gronet", label: "My Gronet", icon: icon6, route: "/my-gronet" },
  ];

  useEffect(() => {
    if (!setActiveSection) return;

    const currentPath = location.pathname;
    const activeItem = menuItems.find(item =>
      currentPath.startsWith(item.route)
    );

    if (activeItem) {
      setActiveSection(activeItem.id);
    }
  }, [location.pathname]);

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {!isDesktop && isOpen && (
        <div
          style={{
            position: "fixed",
            top: "128px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 30,
          }}
          onClick={close}
        />
      )}

      {/* SIDEBAR */}
      <aside
        style={{
          position: "fixed",              // 🔥 MAIN FIX
          top: "128px",                   // header height
          left: 0,
          width: "260px",
          height: "calc(100vh - 128px)",
          background: "#ffffff",
          borderRight: "1px solid #e5e7eb",
          zIndex: 40,
          overflow: "hidden",
          display: isDesktop || isOpen ? "block" : "none",
        }}
      >
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 16px",
            fontSize: "14px",
            fontWeight: 500,
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          ← <span>Gronet</span>
        </button>

        {/* Menu */}
        <nav>
          <div style={{ padding: "8px" }}>
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  to={item.route}
                  onClick={() => {
                    if (setActiveSection) setActiveSection(item.id);
                    if (!isDesktop) close();
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 12px",
                    marginBottom: "4px",
                    borderRadius: "8px",
                    color: "#111827",
                    textDecoration: "none",
                    background: isActive ? "#eef2ff" : "transparent",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    style={{ width: "20px", height: "20px" }}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
