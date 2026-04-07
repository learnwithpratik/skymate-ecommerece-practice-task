import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  let { registeredUser, setLoggedInUsers } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const handleFormSubmit = (data) => {
    let user = registeredUser.find(
      (elem) => elem.email === data.email && elem.password === data.password,
    );
    if (!user) {
      toast.error("User Not Found");
      reset();
      return;
    }

    setLoggedInUsers(user);
    navigate("/")
    localStorage.setItem('log user', JSON.stringify(user));
    toast.success("Login successfull");
    reset();
  };

  return (
    <div className="h-screen bg-black text-white flex">
      {/* LEFT SECTION */}
      <div className="w-1/2 hidden md:flex flex-col justify-center px-20 border-r border-gray-400/30">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center text-black font-bold">
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
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
          </div>
          <h1 className="text-2xl font-semibold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Text */}
        <p className="text-lime-400 uppercase tracking-widest text-sm mb-6">
          Welcome back
        </p>

        <h2 className="text-6xl font-bold leading-tight mb-6">
          Shop the future.
          <br />
          <span className="text-lime-400">Today.</span>
        </h2>

        <p className="text-gray-400 max-w-md mb-12">
          Thousands of products, lightning-fast delivery, and prices that make
          your wallet happy.
        </p>

        {/* Stats */}
        <div className="flex gap-6">
          {[
            { value: "20K+", label: "Products" },
            { value: "50K+", label: "Users" },
            { value: "4.9★", label: "Rating" },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-xl px-8 py-5 w-[150px] text-center"
            >
              <p className="text-lime-400 font-bold text-xl">{item.value}</p>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-[420px] bg-[#0B0B0B] border border-zinc-800 rounded-2xl p-10 shadow-2xl">
          <h3 className="text-2xl font-semibold mb-2">Sign in</h3>
          <p className="text-gray-500 mb-8">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email address"
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lime-400"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                {...register("password", {
                  required: "Password required",
                  minLength: { value: 6, message: "Min 6 characters" },
                })}
                type="password"
                placeholder="Password"
                className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lime-400"
              />
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              disabled={!isValid}
              className="w-full bg-lime-400 text-black font-semibold py-3 rounded-xl mt-2 hover:bg-lime-300 transition"
            >
              Sign in →
            </button>
          </form>

          {/* Footer */}
          <p className="text-gray-500 text-sm text-center mt-6">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/auth/register")}
              className="text-lime-400 cursor-pointer hover:underline"
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
