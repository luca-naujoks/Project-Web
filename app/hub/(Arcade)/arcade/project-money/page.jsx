"use client";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function page() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      window.location.href = signIn();
    },
  });
  if (status === "loading") {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div id="container" className="w-[100%] h-[95%] bg-sky-700">
      <div className="p-3">
        <img
          src="/assets/project-money/project-money.png"
          alt="Project-Money"
          className="w-[20%] h-[20%]"
        />
      </div>
      <div id="options" className="flex flex-col justify-center items-center mt-14">
        
        <div id="play" className="flex justify-center items-center text-5xl border-2 rounded-md m-2 w-[30%] cursor-pointer p-2">Play Local</div>
        <div id="play" className="flex justify-center items-center text-5xl border-2 rounded-md m-2 w-[30%] text-gray-500 cursor-default p-2">Play Online</div>
        <div id="settings" className="flex justify-center items-center text-2xl  border-2 rounded-md m-2 w-[30%] cursor-pointer p-2"><span>Settings</span></div>

      </div>
    </div>
  );
}
