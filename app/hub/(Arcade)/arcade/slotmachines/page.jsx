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
        <div className="m-3">
      Slotmachines Coming soon
    </div>
    )
}