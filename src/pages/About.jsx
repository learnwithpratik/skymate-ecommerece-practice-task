import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-20">
      
      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto mt-6 sm:mt-10">
        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-lime-400 rounded-2xl flex items-center justify-center text-black text-lg sm:text-xl font-bold mb-6 animate-bounce">
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

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
          About <span className="text-lime-400">SkyMart</span>
        </h1>

        <p className="text-gray-400 mt-4 text-xs sm:text-sm md:text-base px-2 sm:px-0">
          SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair, and enjoyable — for everyone.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-12 max-w-5xl mx-auto">
        {[
          { value: "20K+", label: "Products" },
          { value: "50K+", label: "Happy Customers" },
          { value: "4.9", label: "Avg. Rating" },
          { value: "99%", label: "On-time Delivery" },
        ].map((item, i) => (
          <div
            key={i}
            className="border border-zinc-800 rounded-xl p-4 sm:p-6 text-center hover:border-lime-400/40 transition"
          >
            <p className="text-lg sm:text-xl font-semibold">{item.value}</p>
            <p className="text-gray-400 text-xs sm:text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* STORY */}
      <div className="mt-12 sm:mt-14 max-w-5xl mx-auto border border-zinc-800 rounded-2xl p-5 sm:p-6 md:p-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-400 text-xs sm:text-sm leading-6">
          SkyMart started in 2022 as a small side project — two engineers tired
          of bloated, slow e-commerce experiences. We asked ourselves: what if
          shopping online was actually enjoyable?
          <br />
          <br />
          Three years later, SkyMart serves over 50,000 customers across the
          country. We stock electronics, fashion, jewelry, and everyday
          essentials — all at prices that don’t require a second mortgage.
          <br />
          <br />
          We’re still the same team at heart: obsessed with speed, transparency,
          and making you feel good about every purchase you make here.
        </p>
      </div>

      {/* VALUES */}
      <div className="mt-14 sm:mt-16 max-w-5xl mx-auto">
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-6 sm:mb-8">
          What We Stand For
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              title: "Trust",
              desc: "Every product is verified for quality and authenticity before listing.",
            },
            {
              title: "Speed",
              desc: "We obsess over delivery times so your orders arrive when promised.",
            },
            {
              title: "Community",
              desc: "Built around real customer feedback, not just business metrics.",
            },
            {
              title: "Quality",
              desc: "We curate the best — no filler, no junk, just great products.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-zinc-800 rounded-xl p-5 sm:p-6 hover:border-lime-400/40 transition"
            >
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="mt-14 sm:mt-16 max-w-5xl mx-auto">
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-6 sm:mb-8">
          Meet the Team
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: "Aryan Shah", role: "Founder & CEO", color: "bg-lime-400" },
            {
              name: "Priya Mehta",
              role: "Head of Product",
              color: "bg-blue-500",
            },
            {
              name: "Rohan Verma",
              role: "Lead Engineer",
              color: "bg-purple-500",
            },
            {
              name: "Sneha Kapoor",
              role: "Design Director",
              color: "bg-red-500",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="border border-zinc-800 rounded-xl p-4 sm:p-6 text-center hover:border-lime-400/40 transition"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl flex items-center justify-center text-black font-bold mb-3 ${member.color}`}
              >
                {member.name.charAt(0)}
              </div>
              <p className="text-xs sm:text-sm font-semibold">
                {member.name}
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 sm:mt-20 max-w-5xl mx-auto border border-lime-400/20 rounded-2xl p-6 sm:p-8 md:p-10 text-center">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          Ready to shop?
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm mb-6">
          Explore thousands of products at unbeatable prices.
        </p>

        <button className="bg-lime-400 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-lime-300 transition text-sm sm:text-base">
          Browse Products →
        </button>
      </div>
    </div>
  );
};

export default About;