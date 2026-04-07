import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const ProductDetails = ({ data }) => {
  let { id } = useParams();
  let [productDetail, setProductDetail] = useState({});
  let [moreProducts, setMoreProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigate = useNavigate();

  let getSingleProductDetail = async () => {
    try {
      let res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProductDetail(res.data);
    
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch related products (same category)
  const getMoreProducts = async (category) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}?limit=6`,
      );
      setMoreProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleProductDetail();
    }
  }, [id]);

  // 👉 Call related products AFTER product is loaded
  useEffect(() => {
    if (productDetail.category) {
      getMoreProducts(productDetail.category);
    }
  }, [productDetail]);

  if (!productDetail) {
    return <p className="text-white p-10">Loading...</p>;
  }

  // 🔥 FIXED loading condition
  if (!productDetail.id) {
    return <p className="text-white p-10">Loading...</p>;
  }

  const handleNext = () => {
    const nextId = Number(id) + 1;
    if (nextId <= 100) {
      navigate(`/products/detail/${nextId}`);
    }
  };

  // 🔹 Add to Cart
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      toast.success("Added to cart");
      return [...prev, { ...product, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // 🔹 Remove Item
  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast("Item removed");
  };

  // 🔹 Checkout
  const handleCheckout = () => {
    setCart([]);
    setIsCartOpen(false);
    toast.success("Order placed successfully!");
  };
  return (
    <>
      <div className="w-full bg-black">
        <div className="bg-black text-white px-4 sm:px-6 md:px-16 py-10 max-w-7xl mx-auto animate-fade-in">
          {/* BREADCRUMB */}
          <p className="text-xs sm:text-sm text-gray-400 mb-6 mt-6 line-clamp-1 capitalize">
            <NavLink
              to="/products"
              className="hover:text-zinc-500 duration-300"
            >
              ← Products
            </NavLink>{" "}
            / {productDetail.category} / {productDetail.title}...
          </p>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
            {/* IMAGE */}
            <div className="bg-[#E5E5E5] rounded-2xl md:rounded-3xl flex items-center justify-center h-[260px] sm:h-[320px] md:h-[420px] w-full">
              <img
                src={productDetail.images?.[0]}
                alt={productDetail.title}
                className="w-[70%] object-contain"
              />
            </div>

            {/* CONTENT */}
            <div>
              <span className="bg-lime-400/10 text-lime-400 text-xs px-3 py-1 border border-lime-400/80 rounded-full capitalize">
                {productDetail.category}
              </span>

              {/* TITLE */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4">
                {productDetail.title}
              </h1>

              {/* RATING */}
              <div className="flex items-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`${
                      i < Math.round(productDetail.rating)
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-xs sm:text-sm text-gray-400">
                  {productDetail.rating?.toFixed(1)}
                </span>
              </div>

              <hr className="border-zinc-800 my-4" />

              {/* PRICE */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-400">
                ${productDetail.price}
              </h2>

              <hr className="border-zinc-800 my-4" />

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm">
                {productDetail.description}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={() => handleAddToCart(productDetail)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-base bg-lime-400 text-black hover:bg-lime-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-cart"
                  >
                    {" "}
                    <circle cx="8" cy="21" r="1"></circle>{" "}
                    <circle cx="19" cy="21" r="1"></circle>{" "}
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>{" "}
                  </svg>{" "}
                  Add to Cart
                </button>

                <button className="border border-zinc-700 px-4 py-3 rounded-xl hover:bg-red-800/20">
                  {/* SVG unchanged */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </button>
              </div>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 text-center">
                <div className="border border-zinc-800 p-4 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AE600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck text-lime-400 mx-auto mb-1.5" > <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path> <path d="M15 18H9"></path> <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path> <circle cx="17" cy="18" r="2"></circle> <circle cx="7" cy="18" r="2"></circle> </svg>
                  <p className="text-sm">Free Delivery</p>
                </div>
                <div className="border border-zinc-800 p-4 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9AE600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield text-volt mx-auto mb-1.5"
                  >
                    {" "}
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>{" "}
                  </svg>
                  <p className="text-sm">Secure Pay</p>
                </div>
                <div className="border border-zinc-800 p-4 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9AE600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-rotate-ccw mx-auto mb-1.5"
                  >
                    {" "}
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>{" "}
                    <path d="M3 3v5h5"></path>{" "}
                  </svg>
                  <p className="text-sm">Easy Returns</p>
                </div>
              </div>

              <div className="py-4">
                <button
                  onClick={handleNext}
                  className="w-full p-3 text-base sm:text-lg rounded-xl font-semibold bg-lime-400 text-black"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

          {/* RELATED PRODUCTS */}
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              Related Products
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {moreProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-900 p-3 md:p-4 rounded-xl"
                >
                  <div className="bg-zinc-800 rounded-lg h-[140px] md:h-[180px] flex items-center justify-center">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-[80%]"
                    />
                  </div>

                  <h3 className="text-xs md:text-sm mt-2 line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-lime-400 font-semibold text-sm md:text-base">
                    ${item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CART DRAWER */}
          {isCartOpen && (
            <>
              {" "}
              {/* Overlay (optional click close) */}{" "}
              <div
                className="fixed inset-0 z-40 backdrop-blur-md bg-black/30 transition-all duration-300"
                onClick={() => setIsCartOpen(false)}
              />{" "}
              {/* Drawer */}{" "}
              <div className="fixed translate-x-20 duration-300 top-0 right-0 h-screen w-[380px] pt-18 bg-black border-l border-zinc-800 z-50 flex flex-col shadow-2xl">
                {" "}
                {/* HEADER */}{" "}
                <div className="p-5 border-b border-zinc-800 flex justify-between items-center">
                  {" "}
                  <h2 className="text-white font-semibold">
                    {" "}
                    Cart{" "}
                    <span className="text-lime-400 text-sm">
                      {" "}
                      {cart.length} items{" "}
                    </span>{" "}
                  </h2>{" "}
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-zinc-800 transition active:scale-90"
                  >
                    {" "}
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
                    >
                      {" "}
                      <line x1="18" y1="6" x2="6" y2="18" />{" "}
                      <line x1="6" y1="6" x2="18" y2="18" />{" "}
                    </svg>{" "}
                  </button>{" "}
                </div>{" "}
                {/* SCROLLABLE ITEMS */}{" "}
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {" "}
                  {cart.length === 0 ? (
                    <p className="text-gray-400">Your cart is empty</p>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-3 border border-zinc-800 rounded-xl"
                      >
                        {" "}
                        {/* IMAGE */}{" "}
                        <div className="w-[60px] h-[60px] bg-yellow-200 rounded-lg flex items-center justify-center">
                          {" "}
                          <img
                            src={item.thumbnail || item.images?.[0]}
                            alt=""
                            className="w-[70%]"
                          />{" "}
                        </div>{" "}
                        {/* INFO */}{" "}
                        <div className="flex-1">
                          {" "}
                          <h3 className="text-sm text-white line-clamp-1">
                            {" "}
                            {item.title}{" "}
                          </h3>{" "}
                          <p className="text-lime-400 font-semibold">
                            {" "}
                            ${item.price}{" "}
                          </p>{" "}
                          {/* QUANTITY */}{" "}
                          <div className="flex items-center gap-2 mt-2">
                            {" "}
                            <button
                              onClick={() => decreaseQty(item.id)}
                              className="w-6 h-6 border border-zinc-700 rounded"
                            >
                              {" "}
                              -{" "}
                            </button>{" "}
                            <span>{item.quantity}</span>{" "}
                            <button
                              onClick={() => increaseQty(item.id)}
                              className="w-6 h-6 border border-zinc-700 rounded"
                            >
                              {" "}
                              +{" "}
                            </button>{" "}
                          </div>{" "}
                        </div>{" "}
                        {/* DELETE */}{" "}
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red-500 text-sm"
                        >
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-trash2"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" x2="10" y1="11" y2="17"></line>
                            <line x1="14" x2="14" y1="11" y2="17"></line>
                          </svg>{" "}
                        </button>{" "}
                      </div>
                    ))
                  )}{" "}
                </div>{" "}
                {/* FOOTER */}{" "}
                <div className="p-5 border-t border-zinc-800">
                  {" "}
                  <div className="flex justify-between text-white mb-4">
                    {" "}
                    <span>Total</span>{" "}
                    <span className="text-lime-400 font-semibold">
                      {" "}
                      ${" "}
                      {cart.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0,
                      )}{" "}
                    </span>{" "}
                  </div>{" "}
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-lime-400 text-black py-3 rounded-xl font-semibold hover:bg-lime-300 transition"
                  >
                    {" "}
                    Checkout →{" "}
                  </button>{" "}
                  <button
                    onClick={() => setCart([])}
                    className="w-full text-gray-400 text-sm mt-3"
                  >
                    {" "}
                    Clear cart{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
