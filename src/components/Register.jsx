import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  let { setRegisteredUser, registeredUser } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const password = watch("password");

  const onSubmit = (data) => {
    let newUser = [...registeredUser, data];
    setRegisteredUser(newUser);
    localStorage.setItem("reg users", JSON.stringify(newUser));
    toast.success("user Registered Successfully");
    navigate('/auth')
    reset();
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* LOGO */}
      <div className="flex items-center gap-3 mb-10 animate-bounce duration-1000">
        <div className="w-10 h-10 bg-lime-400 rounded-xl flex items-center justify-center text-black font-bold">
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
        <h1 className="text-2xl font-semibold text-white">
          Sky<span className="text-lime-400">Mart</span>
        </h1>
      </div>

      {/* CARD */}
      <div className="w-full max-w-md bg-[#0B0B0B] border border-zinc-800 rounded-2xl p-8 shadow-xl">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-white mb-1">
          Create account
        </h2>
        <p className="text-gray-500 mb-6">Join SkyMart and start shopping</p>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Full name"
            className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-lime-400"
          />
          {errors.name && (
            <p className="text-red-400 text-xs">{errors.name.message}</p>
          )}

          {/* Email */}
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Email address"
            className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-lime-400"
          />
          {errors.email && (
            <p className="text-red-400 text-xs">{errors.email.message}</p>
          )}

          {/* Password */}
          <input
            {...register("password", {
              required: "Password required",
              minLength: { value: 6, message: "Min 6 characters" },
            })}
            type="password"
            placeholder="Password (min 6 chars)"
            className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-lime-400"
          />
          {errors.password && (
            <p className="text-red-400 text-xs">{errors.password.message}</p>
          )}

          {/* Confirm Password */}
          <input
            {...register("confirmPassword", {
              required: "Confirm password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm password"
            className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-lime-400"
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-xs">
              {errors.confirmPassword.message}
            </p>
          )}

          {/* BUTTON */}
          <button
            disabled={!isValid}
            onClick={() => Navigate("/")}
            className="w-full bg-lime-400 text-black font-semibold py-3 rounded-xl mt-2 hover:bg-lime-300 transition"
          >
            Create Account →
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-gray-500 text-sm text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/auth")}
            className="text-lime-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
