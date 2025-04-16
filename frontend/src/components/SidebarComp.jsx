import React from "react";
import logo from "../../assests/logo.png";
import { MdHome, MdGroups, MdDynamicFeed } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaNewspaper, FaMapMarkerAlt, FaRegSmileBeam } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

// Define menu items with their paths
const menuItems = [
  { icon: <MdHome />, label: "Home", path: "/" },
  { icon: <CgProfile />, label: "View Profile", path: "/profile" },
  { icon: null, label: "Saved Posts", path: "/saved" },
  { icon: <BiSolidMessageRounded />, label: "Direct Message", path: "/messages" },
  { icon: <MdGroups />, label: "Connections", path: "/connections" },
  { icon: <MdDynamicFeed />, label: "Feed", path: "/feed" },
  { icon: <FaNewspaper />, label: "Latest News", path: "/news" },
  { icon: <FaMapMarkerAlt />, label: "Live Events", path: "/events" },
  { icon: <FaRegSmileBeam />, label: "Reminiscences", path: "/reminiscences" },
];

function SidebarComp() {
  const location = useLocation();
  
  return (
    <aside className="flex h-screen flex-col justify-between border-e border-gray-100 w-64 overflow-hidden">
      <div className="px-4 py-6">
        {/* Logo */}
        <div className="mb-8 flex">
          <img
            src={logo}
            alt="Company Logo"
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>

        <nav aria-label="Main navigation">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "bg-blue-300 text-gray-900" // Active state
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900" // Default + hover
                  }`}
                  aria-current={location.pathname === item.path ? "page" : undefined}
                >
                  {item.icon && (
                    <span className="text-lg" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default SidebarComp;