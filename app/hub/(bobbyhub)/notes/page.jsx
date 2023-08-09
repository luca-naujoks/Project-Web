"use client";
import React, { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import axios from "axios";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      window.location.href = signIn();
    },
  });

  // Fetch data from MongoDB when the session changes and it's not loaded yet
  useEffect(() => {
    if (session?.user?.email) {
      axios
        .post(
          "http://localhost:8000/get-notes",
          { email: session.user.email }
        )
        .then((response) => {
          console.log(response)
          setNotes(response.data.notes);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [session]);

  return (
    <div className="flex flex-wrap">
      {Array.isArray(notes) ? (
        notes.map((note) => (
          <div key={note._id} className="w-full md:w-1/4 p-4">
            <div className="bg-[#161b22] rounded-md p-4">
              <p>{note.title}</p>
              <hr className="mb-3" />
              <p className="text-white">{note.description}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-[#161b22] rounded-md p-4">
            <p>No Notes Found</p>
            <hr className="mb-3" />
            <p className="text-white">click at the top right to create one</p>
          </div>
        </div>
      )}
    </div>
  );
}
