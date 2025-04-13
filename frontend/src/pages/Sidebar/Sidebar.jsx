import React from "react";
import logo from "../Assests/logo.png";
<img src={logo} alt="Logo" />;
import { MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiSolidMessageRounded } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { MdDynamicFeed } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegSmileBeam } from "react-icons/fa";

function Sidebar() {
  return (
    <div>
      <div className="flex h-screen flex-col justify-between border-e border-gray-100  w-1/5">
        <div className="px-4 py-6">
          <span className="grid h-6 w-12 m-5   place-content-center text-gray-600">
            <img src={logo} alt="Logo" className="rounded-full" />
          </span>

          <ul className="mt-6 space-y-1">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <MdHome />
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <CgProfile />
                View Profile
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Saved Posts
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <BiSolidMessageRounded />
                Direct Message
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <MdGroups />
                Connections
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <MdDynamicFeed />
                Feed
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <FaNewspaper />
                Latest News
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <FaMapMarkerAlt />
                Live Events
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <FaRegSmileBeam />
                Reminiscences
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
