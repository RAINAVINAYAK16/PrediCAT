import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import carrowleft from "../assets/images/circle-arrow-left.svg";
import menu from "../assets/images/menu.svg";

function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate("/dashboard");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className={`fixed top-4 left-4 z-20 md:hidden transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-32" : ""
        }`}
        onClick={toggleSidebar}
      >
        <img
          src={isSidebarOpen ? carrowleft : menu}
          className="h-8"
          alt={isSidebarOpen ? "Close menu" : "Open menu"}
        />
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }
        md:relative md:translate-x-0 transition-transform duration-300 ease-in-out
        w-64 md:w-44 bg-white border-r border-gray-300 z-10
      `}
      >
        <div className="p-4">
          <div className="flex items-center space-x-2">
            
            <h1 onClick={handleArrowClick} className="text-2xl font-semibold hover:text-yellow-300 hover:cursor-pointer">
              Dashboard
            </h1>
          </div>
        </div>
        <nav>
          <ul className="mt-8">
            <li className="px-4 py-2 border-b border-gray-200">Today</li>
            <li className="px-4 py-2">History</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
