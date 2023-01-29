"use client"
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
    return(
        <div>
      <div id="container" className=" m-2">
        <h1 className="flex justify-center xs:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Welcome to My Arcade
        </h1>
      </div>
    </div>
    )
}