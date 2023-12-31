import Image from "next/image";
import React from "react";

function CTACard() {
  return (
    <div className="relative px-6 py-10 overflow-hidden rounded-md bg-slate-100">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
      <Image
        fill
        alt="CTA Card Image"
        className="object-cover object-center"
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
      />
      <div className="relative z-20">
        <div className="text-lg font-medium">#exploretheworld</div>
        <h3 className="mt-3 text-4xl font-semibold">
          Explore the World with me{" "}
        </h3>
        <p className="max-w-lg mt-2 text-lg">
          Lets discover the world together. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam, quos.
        </p>
        {/* form */}
        <form className="flex items-center w-full gap-2 mt-6">
          <input
            placeholder="Write your email"
            className="w-full md:w-auto px-3 py-2 text-base rounded-md outline-none  placeholder:text-sm bg-white/80 focus:ring-2 ring-neutral-600"
          />
          <button className="px-3 py-2 rounded-md whitespace-nowrap bg-neutral-900 text-neutral-200">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default CTACard;
