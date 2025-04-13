import { useState } from 'react';
import Search from "@/components/Search";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SuggestedUsers from "@/components/SuggestedUsers";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full flex-col overflow-hidden">
        {/* NAVBAR - Full width and fixed */}
        <header className="w-full sticky top-0 z-50 ">
          <div className="relative flex items-center h-16 px-4">
            {/* Left side - Mobile menu button */}
            <div className="absolute left-4">
              <SidebarTrigger onClick={toggleSidebar} />
            </div>

            {/* Center - Search bar */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-md">
              <Search />
            </div>

            {/* Right side - Avatar and logout */}
            <div className="ml-auto flex items-center gap-4">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User" />
                </div>
              </div>
              <button className="cursor-pointer border border-gray-700 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <div className="flex flex-1 overflow-hidden z-24 ">
          {/* LEFT SIDEBAR */}
          <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-[18%] min-w-[200px]' : 'w-0 min-w-0'} hidden md:block overflow-y-auto z-10`}>
            {isSidebarOpen && <AppSidebar />}
          </div>

          {/* CENTER CONTENT - Adjusts width based on sidebar state */}
          <main className={`flex-1 overflow-y-auto ${isSidebarOpen ? 'md:ml-[1%]' : 'ml-0'} transition-all duration-300`}>
            <div className="pl-3">
              <Outlet />
            </div>
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="w-[20%] min-w-[220px] border-l border-gray-700 hidden lg:block overflow-y-auto">
            <SuggestedUsers />
          </aside>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;