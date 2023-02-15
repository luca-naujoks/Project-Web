"use client"
import { signIn, useSession, signOut } from "next-auth/react";
import { TypingText } from "../components/typing";

import { useRef, useEffect } from "react";

export function Auth({ req }) {
  const { data: session, status } = useSession();

  const node = useRef();

  // Track events outside scope
  const clickOutside = (e) => {
    if (!node.current.contains(e.target)) {
      document.getElementById("dropdownmenu").classList.add("hidden");
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  });

  if (status === "authenticated") {
    return (
      <div id="auth">
        <a
          id="profile"
          className="flex m-2 cursor-default items-center justify-center"
          onClick={function () {
            document.getElementById("dropdownmenu").classList.remove("hidden");
          }}
        >
          <p className="xs:text-sm md:text-md text-gray-500">{session.user.name}&nbsp;</p>
          <img
            src={session.user.image}
            className="rounded-full xs:h-7 md:h-10 "
          ></img>
        </a>
        <div ref={node} id="dropdownmenu" className="absolute p-2 m-2 text-right hidden bg-black rounded-b-lg border-gray-500 border-x-2 border-b-2">
          <a href="/profile" className="cursor-pointer">Profile</a>
          <p className="cursor-pointer">Settings</p>
          <p className="cursor-pointer" onClick={signOut}>
            logout
          </p>
        </div>
      </div>
    );
  }

  return (
    <a onClick={() => signIn("discord")}>
      <img
        src="../assets/Navigation/login.png"
        alt="Login"
        className="xs:h-8 md:h-10 hover:scale-125 transition duration-700 ease-in-out m-3"
      />
      <div ref={node} id="dropdownmenu"></div>
      <div id="auth"></div>
    </a>
  );
}

export function Welcome() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex justify-center">
        <p className="flex justify-center">
          <pre className="text-gray-800"><TypingText text={"Welcome back " + session.user.name} color="text-gray-800" size="text-5xl" time="100" /></pre>
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center text-5xl">
        <TypingText text="Hello and Welcome on Bobby68.de" color="text-gray-800" size="text-5xl" time="100" />
      </div>
    </div>
  );
}
