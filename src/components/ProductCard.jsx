import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  return (
    <div className="w-[260px] rounded-2xl overflow-hidden border border-zinc-800 bg-[#0B0B0B] hover:border-lime-400 hover:shadow-[0_0_25px_rgba(132,204,22,0.15)] transition-all duration-300 group animate">
      {/* TOP SECTION (LIGHT BG) */}
      <div className="bg-[#EDEDED] p-4 relative">
        {/* CATEGORY BADGE */}
        <span className="absolute top-3 left-3 bg-zinc-600 text-xs px-3 py-1 rounded-full text-white capitalize">
          {product.category}
        </span>

        {/* IMAGE */}
        <div className="h-36 flex items-center justify-center">
          <img
            onClick={() => navigate(`/products/detail/${product.id}`)}
            src={product.images[0]}
            alt={product.title}
            className="h-full object-contain group-hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      {/* BOTTOM SECTION (DARK BG) */}
      <div className="p-4">
        {/* CATEGORY (again small text) */}
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product.category}
        </p>

        {/* TITLE */}
        <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2">
          {product.title}
        </h3>

        {/* RATING */}
        <div className="flex items-center gap-0.5 mt-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-sm ${
                i < Math.round(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-600"
              }`}
            >
              ★
            </span>
          ))}
          <span className="text-gray-500 text-xs ml-1">({product.rating})</span>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-zinc-800 my-3"></div>

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between">
          <p className="text-lime-400 text-lg font-bold">${product.price}</p>

          <button className="flex items-center gap-1 text-xs px-4 py-2 rounded-full bg-lime-400 text-black font-medium hover:opacity-90 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>{" "}
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
