import React from "react";
import logo from "../../assests/logo.png";
import { 
  MdHome,
  MdGroups,
  MdDynamicFeed
} from "react-icons/md";
import { 
  CgProfile 
} from "react-icons/cg";
import { 
  BiSolidMessageRounded 
} from "react-icons/bi";
import { 
  FaNewspaper,
  FaMapMarkerAlt,
  FaRegSmileBeam 
} from "react-icons/fa";

// Define menu items as an array for better maintainability
const menuItems = [
  { icon: <MdHome />, label: "Home" },
  { icon: <CgProfile />, label: "View Profile" },
  { label: "Saved Posts" }, // No icon for this one
  { icon: <BiSolidMessageRounded />, label: "Direct Message" },
  { icon: <MdGroups />, label: "Connections" },
  { icon: <MdDynamicFeed />, label: "Feed" },
  { icon: <FaNewspaper />, label: "Latest News" },
  { icon: <FaMapMarkerAlt />, label: "Live Events" },
  { icon: <FaRegSmileBeam />, label: "Reminiscences" },
];

function SidebarComp() {
  return (
    <aside className="flex h-screen flex-col justify-between border-e border-gray-100 w-64 overflow-hidden">
      <div className="px-4 py-6">
        {/* Logo with better accessibility */}
        <div className="mb-8 flex ">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-12 w-12 rounded-full object-cover"
            aria-label="Company Logo"
          />
        </div>

        <nav aria-label="Main navigation">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                  aria-current={item.label === "Home" ? "page" : undefined}
                >
                  {item.icon && (
                    <span className="text-lg" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default SidebarComp;