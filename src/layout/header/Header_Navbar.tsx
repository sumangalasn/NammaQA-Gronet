import type { FC } from "react";
import { useSidebar } from "../SidebarProvider";

import NQALogo from "../../assets/images/NQALogo.svg";
import searchIcon from "../../assets/icons/state_GreySearchIcon.svg";
import notificationIcon from "../../assets/icons/state_Notification.svg";
import dropdownIcon from "../../assets/icons/state_Dropdown.svg";

interface HeaderProps {
  profileName?: string;
}

const Header_Navbar: FC<HeaderProps> = ({ profileName = "Aleena" }) => {
  const { toggle } = useSidebar();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      {/* ================= ROW 1 ================= */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 32px",
        }}
      >
        {/* LEFT */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button onClick={toggle} style={{ cursor: "pointer" }}>
            
          </button>
          <img src={NQALogo} alt="NAMMAQA" style={{ height: "32px" }} />
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img src={notificationIcon} style={{ width: "20px" }} />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              border: "1px solid #E5E7EB",
              padding: "6px 10px",
              borderRadius: "999px",
            }}
          >
            <img
              src="https://via.placeholder.com/28"
              style={{ borderRadius: "50%" }}
            />
            <span style={{ fontSize: "14px" }}>{profileName}</span>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div style={{ height: "1px", backgroundColor: "#E5E7EB" }} />

      {/* ================= ROW 2 ================= */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          padding: "12px 32px",
        }}
      >
        {/* SEARCH */}
        <div style={{ position: "relative", width: "260px" }}>
          <img
            src={searchIcon}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "16px",
            }}
          />
          <input
            placeholder="Search"
            style={{
              width: "100%",
              height: "36px",
              paddingLeft: "36px",
              border: "1px solid #D1D5DB",
              borderRadius: "18px",
            }}
          />
        </div>

        {/* ================= MENU (FIGMA EXACT) ================= */}
        <nav
          style={{
            width: "862px",          // ✅ FIGMA WIDTH
            height: "26px",          // ✅ FIGMA HEIGHT
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",             // ✅ FIGMA GAP
            whiteSpace: "nowrap",
            margin: "0 auto",        // ✅ CENTER
          }}
        >
          <NavItem label="Community" dropdown active />
          <NavItem label="nAcademy" />
          <NavItem label="Articles" />
          <NavItem label="Abyasa" dropdown />
          <NavItem label="nCareer" dropdown />
          <NavItem label="Hire From Us" />
          <NavItem label="Reach Out to Us" />
        </nav>
      </div>
    </header>
  );
};

export default Header_Navbar;

/* ================= NAV ITEM ================= */
const NavItem = ({
  label,
  dropdown,
  active,
}: {
  label: string;
  dropdown?: boolean;
  active?: boolean;
}) => (
  <div
    style={{
    fontFamily: "Mada, system-ui, sans-serif", // ✅ MADA USED HERE
      fontSize: "14px",              // ✅ typography size
      fontWeight: 500,               // ✅ medium weight
      lineHeight: "22px",            // ✅ figma-like spacing
      letterSpacing: "0px",
      color: active ? "#031D4F" : "#374151",
      cursor: "pointer",

      display: "flex",
      alignItems: "center",
      gap: "6px",

      borderBottom: active ? "2px solid #031D4F" : "2px solid transparent",
      paddingBottom: "4px",
    }}
  >
    {label}
    {dropdown && (
      <img
        src={dropdownIcon}
        alt="dropdown"
        style={{ width: "10px", marginTop: "1px" }}
      />
    )}
  </div>
);
