import type { FC } from "react";
import { useState } from "react";
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
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
      {/* ================= TOP BAR ================= */}
      <div className="h-[72px] w-full max-w-[1600px] mx-auto px-6 flex items-center gap-6">

        {/* LOGO */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggle}
            className="lg:hidden p-2 rounded hover:bg-gray-100"
          >
            ☰
          </button>
          <img src={NQALogo} alt="NAMMAQA" className="h-8" />
        </div>

        {/* SEARCH */}
        <div className="flex-1 flex justify-start">
          <div className="relative w-[260px]">
            <img
              src={searchIcon}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 opacity-60"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-9 pl-10 pr-4 rounded-full border border-gray-300 bg-[#F9FAFB] text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* NAV LINKS (DESKTOP ONLY) */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavItem label="Community" dropdown />
          <NavItem label="nAcademy" active />
          <NavItem label="Articles" />
          <NavItem label="Abyasa" dropdown />
          <NavItem label="nCareer" dropdown />
          <NavItem label="Hire From Us" />
          <NavItem label="Reach Out to Us" />
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4 shrink-0">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">
            <img src={notificationIcon} className="w-5" />
          </button>

          <div className="flex items-center gap-2 border rounded-full px-3 py-1.5 cursor-pointer hover:bg-gray-50">
            <img
              src="https://via.placeholder.com/32"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium">{profileName}</span>
          </div>

          {/* MOBILE NAV TOGGLE */}
          <button
            className="lg:hidden p-2 rounded hover:bg-gray-100"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      {mobileMenu && (
        <div className="lg:hidden border-t bg-white px-6 py-4 space-y-3">
          {[
            "Community",
            "nAcademy",
            "Articles",
            "Abyasa",
            "nCareer",
            "Hire From Us",
            "Reach Out to Us",
          ].map((item) => (
            <div key={item} className="text-gray-700 font-medium">
              {item}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header_Navbar;

/* ================= HELPER ================= */
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
    className={`flex items-center gap-1 cursor-pointer text-sm font-medium ${
      active
        ? "text-[#031D4F] border-b-2 border-[#031D4F]"
        : "text-gray-700 hover:text-black"
    }`}
  >
    {label}
    {dropdown && <img src={dropdownIcon} className="w-2 mt-0.5" />}
  </div>
);
