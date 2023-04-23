"use client";
import { signIn, useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Page({ req }) {
  const { data: session, status } = useSession({
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
    <div className="bg-black xs:px-[5%] lg:px-[25%] py-5">
      <div
        className="bg-cover xs:h-20 lg:h-52 rounded-md"
        style={{ backgroundImage: "url(/assets/banner.jpg)" }}
      >
        <div className="flex items-center h-full justify-center">
          <div className="flex items-center">
            <img
              src={session.user.image}
              alt="Profile picture"
              className="xs:w-12 xs:h-12 lg:w-32 lg:h-32 rounded-full mr-10"
            />
            <div>
              <h1 className="text-white xs:text-md lg:text-2xl font-bold">
                {session.user.name}
              </h1>
            </div>
          </div>
        </div>
      </div>


      <div id="information" className="flex bg-myblue p-5 my-3 h-60 rounded-md">
        <div id="section_1" className="mr-[50%]">
          <p className="py-2 xs:text-sm md:text-md sm:text-md md:text-lg">
            User Name:{" "}
            <p className="text-gray-600 block  xs:text-sm sm:text-md md:text-lg">
              {session.user.name}
            </p>
          </p>
          <p className="py-2  xs:text-sm sm:text-md md:text-lg">
            Personal Name:{" "}
            <p className="text-gray-600 block xs:text-sm sm:text-md md:text-lg">
              
            </p>
          </p>
          <p className="py-2 xs:text-sm sm:text-md md:text-lg">
            Email:{" "}
            <p className="text-gray-600 block xs:text-sm sm:text-md md:text-lg">
              {session.user.email}
            </p>
          </p>
        </div>

      </div>

    </div>
  );
}
