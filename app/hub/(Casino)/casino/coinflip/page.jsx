"use client";
import { signIn, useSession } from "next-auth/react";

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
    <div className="m-3">
      <div id="coins-counter" className="flex justify-end mb-3">
        <span className="text-xl">$</span>
        <span className="text-xl">0012</span>
      </div>
      <div id="main-game" className="flex justify-between">
        <div className="border-2 border-gray-500 rounded-md w-[81%] h-128"></div>
        <div className="border-2 border-gray-500 rounded-md w-[18%]"></div>
      </div>
      <div
        id="controls"
        className="flex justify-between items-center border-2 border-gray-500 rounded-md"
      >
        <div className="flex">
          <div className="border-2 border-gray-500 rounded-md w-40 h-40 ml-3 my-3">
            5 Coins
          </div>
          <div className="border-2 border-gray-500 rounded-md w-40 h-40 ml-3 my-3">
            25 Coins
          </div>
        </div>

        <div className="flex border-2 border-gray-500 rounded-md w-40 h-40 mr-3 my-3">
          Flip
        </div>
      </div>
    </div>
  );
}
