import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-3 sm:py-4 px-4 sm:px-6 flex flex-col items-center border-t border-zinc-700 text-center">
      
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-lg sm:text-xl font-semibold text-lime-400">
          SkyMart
        </h1>

        <p className="text-[10px] sm:text-xs md:text-sm text-zinc-500 leading-tight">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </div>

    </div>
  );
};

export default Footer;