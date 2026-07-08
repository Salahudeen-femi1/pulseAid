import React, { useState, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import { PiUser, PiGear, PiSignOut } from "react-icons/pi";
import { assets } from "../../assets/assets";
import { getInitials } from "../../helper/utilitty";
import { useUser } from "../../Contect/userContext";
// import ThemeToggle from "../ui/ThemeToggle";

interface TopNavProps {
  showSearchBar?: boolean;
}

const TopNav: React.FC<TopNavProps> = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const { logout, user } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-full bg-fadedPrimary py-2.5 flex gap-3 items-center justify-between">
      <div className=""></div>

      <div className="flex gap-4 items-center">
        {/* <ThemeToggle /> */}

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 border-l border-primary/10 dark:border-light-tetiary/10 ps-4 hover:opacity-80 transition"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/20 dark:ring-primary">
              {user?.role === "admin" ? (
                <img
                  src={assets.logo}
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <h2 className="items-center flex flex-col translate-y-1">
                  {getInitials(
                    user?.name?.split(" ")?.[0] ?? "C",
                    user?.name?.split(" ")?.[1] ?? "N",
                  )}
                </h2>
              )}
            </div>
            <IoChevronDown
              className={`transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-45 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <Link
                to="/dashboard/settings"
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition"
                onClick={() => setIsDropdownOpen(false)}
              >
                <PiUser size={18} className="text-gray-600" />
                <span className="text-sm">My Account</span>
              </Link>

              <Link
                to="/dashboard/settings"
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition"
                onClick={() => setIsDropdownOpen(false)}
              >
                <PiGear size={18} className="text-gray-600" />
                <span className="text-sm">Settings</span>
              </Link>

              <div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-red-50 text-red-600 transition"
                >
                  <PiSignOut size={18} />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
