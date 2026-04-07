import React, { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  let { pathname } = useLocation();
  let { setLoggedInUsers, loggedInUsers } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="w-full fixed top-0 z-50 
    bg-black/70 backdrop-blur-2xl border-b border-white/8 
    px-4 sm:px-6 md:px-12 lg:px-36 py-3 sm:py-4 flex items-center justify-between"
    >
      {/* LEFT: LOGO */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 sm:w-9 sm:h-9 bg-lime-400 rounded-xl flex items-center justify-center text-black font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="black"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-zap text-ink fill-ink"
          >
            {" "}
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>{" "}
          </svg>
        </div>
        <h1 className="text-lg sm:text-xl font-semibold text-white">
          Sky<span className="text-lime-400">Mart</span>
        </h1>
      </div>

      {/* CENTER: NAV LINKS (HIDDEN ON MOBILE) */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive && pathname === "/"
              ? "text-lime-400"
              : "text-gray-400 hover:text-white transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive && pathname === "/products"
              ? "text-lime-400"
              : "text-gray-400 hover:text-white transition"
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-lime-400"
              : "text-gray-400 hover:text-white transition"
          }
        >
          About
        </NavLink>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* USER BADGE */}
        <div className="flex items-center gap-2 border border-zinc-800 px-2 sm:px-3 py-1.5 rounded-xl bg-[#0B0B0B]">
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-lime-400 rounded-lg flex items-center justify-center text-black font-semibold text-xs sm:text-sm capitalize">
            {loggedInUsers.name[0]}
          </div>
          <span className="hidden sm:block text-gray-300 text-sm capitalize">
            {loggedInUsers.name}
          </span>
        </div>

        {/* CART */}
        <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-zinc-800 rounded-xl bg-[#0B0B0B] hover:border-lime-400 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart"
          >
            {" "}
            <circle cx="8" cy="21" r="1"></circle>{" "}
            <circle cx="19" cy="21" r="1"></circle>{" "}
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>{" "}
          </svg>
        </button>

        {/* LOGOUT */}
        <button
          onClick={() => {
            localStorage.removeItem("log user");
            setLoggedInUsers(null);
          }}
          className="w-9 h-9 text-lime-400 sm:w-10 sm:h-10 flex items-center justify-center border border-zinc-800 rounded-xl bg-[#0B0B0B] hover:border-red-400/30 hover:bg-red-800/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-log-out"
          >
            {" "}
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>{" "}
            <polyline points="16 17 21 12 16 7"></polyline>{" "}
            <line x1="21" x2="9" y1="12" y2="12"></line>{" "}
          </svg>
        </button>

        {/* HAMBURGER (MOBILE ONLY) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 flex text-gray-300 items-center justify-center border border-zinc-800 rounded-xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-zinc-800 flex flex-col items-center gap-4 py-6 md:hidden">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300"
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300"
          >
            About
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
