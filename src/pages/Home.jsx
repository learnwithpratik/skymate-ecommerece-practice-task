import React from "react";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router";
import CategorySection from "./CategorySection";

const Home = () => {
  let { loggedInUsers } = useAuth();

  return (
    <div className="min-h-screen py-16 sm:py-20 md:py-32 bg-black text-white px-4 sm:px-6 md:px-12 lg:px-36">
      
      {/* HERO SECTION */}
      <div className="border border-zinc-800 rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
        
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#1f1f1f_1px,transparent_1px),linear-gradient(90deg,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <p className="text-lime-400 text-xs sm:text-sm mb-4 uppercase tracking-widest">
              Good Evening 👋
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Welcome back,
              <br />
              <span className="text-lime-400 capitalize">
                {loggedInUsers.name}
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base mb-8">
              Discover today's picks — hand-curated products across electronics,
              fashion, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <NavLink
                to="/products"
                className="bg-lime-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-lime-300 transition text-sm sm:text-base"
              >
                Shop Now →
              </NavLink>

              <NavLink
                to="/products"
                className="border border-zinc-700 px-6 py-3 rounded-xl text-gray-300 hover:border-zinc-500 transition text-sm sm:text-base"
              >
                View All Products
              </NavLink>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-row md:flex-col gap-4 sm:gap-6 mt-10 md:mt-0 w-full md:w-auto justify-center">
            
            {/* Products */}
            <div className="bg-lime-400/10 border border-lime-400/20 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 text-center w-full">
              <p className="text-lime-400 text-2xl sm:text-3xl font-bold">20+</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Products Available</p>
            </div>

            {/* Delivery */}
            <div className="border border-zinc-700 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 text-center w-full">
              <p className="text-xl sm:text-2xl font-semibold">Free</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Delivery on ₹999+</p>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10">
        
        {/* Card 1 */}
        <div className="border border-zinc-800 rounded-2xl p-4 sm:p-6 flex items-center gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-lime-400/10 rounded-xl flex items-center justify-center text-lime-400">
            📦
          </div>
          <div>
            <p className="text-lg sm:text-xl font-semibold">0</p>
            <p className="text-gray-400 text-xs sm:text-sm">Cart Items</p>
            <p className="text-gray-500 text-xs">In your bag</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-zinc-800 rounded-2xl p-4 sm:p-6 flex items-center gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
            📈
          </div>
          <div>
            <p className="text-lg sm:text-xl font-semibold">$0.00</p>
            <p className="text-gray-400 text-xs sm:text-sm">Cart Value</p>
            <p className="text-gray-500 text-xs">Ready to checkout</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border border-zinc-800 rounded-2xl p-4 sm:p-6 flex items-center gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-400">
            ⭐
          </div>
          <div>
            <p className="text-lg sm:text-xl font-semibold">5</p>
            <p className="text-gray-400 text-xs sm:text-sm">Top Products</p>
            <p className="text-gray-500 text-xs">Highly rated</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border border-zinc-800 rounded-2xl p-4 sm:p-6 flex items-center gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400">
            🏷️
          </div>
          <div>
            <p className="text-lg sm:text-xl font-semibold">6</p>
            <p className="text-gray-400 text-xs sm:text-sm">Categories</p>
            <p className="text-gray-500 text-xs">To explore</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <CategorySection />
      </div>
    </div>
  );
};

export default Home;