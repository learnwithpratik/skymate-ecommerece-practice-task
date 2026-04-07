import React from "react";
import { Link } from "react-router";

const CategorySection = () => {
  const categories = [
    { name: "Electronics", items: 17, icon: "💻" },
    { name: "Clothing", items: 2, icon: "👕" },
    { name: "Furniture", items: 3, icon: "🪑" },
    { name: "Home", items: 14, icon: "🏠" },
    { name: "Sports", items: 8, icon: "⚽" },
    { name: "Accessories", items: 6, icon: "👜" },
  ];

  return (
    <section className=" py-16 bg-black text-white">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-semibold tracking-wide">
          Shop by Category
        </h2>

        <Link
          to="/products"
          className="text-lime-400 text-sm flex items-center gap-1 hover:gap-2 hover:-translate-x-2 hover:font-semibold hover:tracking-wider transition-all"
        >
          View All →
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group bg-[#0B0B0B] border border-zinc-800 
            rounded-2xl p-8 flex flex-col items-center justify-center
            hover:border-lime-400 
            hover:shadow-[0_0_25px_rgba(132,204,22,0.15)]
            transition-all duration-300 cursor-pointer hover:-translate-y-2 "
          >
            {/* ICON */}
            <div
              className="w-16 h-16 flex items-center justify-center 
               rounded-xl text-3xl mb-4
              group-hover:text-black
              transition-all duration-300"
            >
              {cat.icon}
            </div>

            {/* NAME */}
            <h3 className="text-lg font-medium">
              {cat.name}
            </h3>

            {/* ITEMS */}
            <p className="text-sm text-gray-400 mt-1">
              {cat.items} items
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;