"use client"
import Image from "next/image";


export default function aboutme() {
  return (
    <div className="m-5 ">
      <div className="bg-black">
        <span className="block mx-auto w-1/2"></span>

        <div>
          <h1 className="flex xs:text-2xl md:text-4xl justify-center py-2 text-gray-500">
            My Social Media
          </h1>
          <hr className="border-neutral-900 border-1" />
          <div className="flex justify-center">
            <a
              href="https://discord.com/users/528982743623925781"
              className="w-40"
              target="_blank"
            >
              <img src="/assets/about_me/Discord_Logo.svg" />
            </a>
            <a
              href="https://github.com/luca-naujoks"
              className=""
              target="_blank"
            >
              <img
                src="/assets/about_me/GitHub-Mark-Light-120px-plus.png"
                className="p-2.5"
              />
            </a>
            <a
              href="https://stackoverflow.com/users/20371424/bobby68"
              className="w-40"
              target="_blank"
            >
              <img src="/assets/about_me/Stack_Overflows.png" />
            </a>
          </div>
        </div>

        <p className="flex justify-center mt-5">
          <Image
            src="/assets/about_me/sinon.gif"
            alt="Sinon"
            width={500}
            height={280}
            className="rounded-md mb-4"
            priority
          />
        </p>

        <hr className="border-neutral-900 border-1" />

        <h2 className="flex xs:text-lg md:text-4xl  justify-center py-4 text-gray-500">
          {" "}
          About Me
        </h2>

        <div className="rounded-md bg-[#161b22] p-5 mb-6">
          <p>
            <span className="text-green-400 font-mono">name</span>:{" "}
            <span className="text-sky-400 font-mono">Luca Naujoks</span>
          </p>
          <p>
            <span className="text-green-400 font-mono">current_job</span>:{" "}
            <span className="text-sky-400 font-mono">
              Specialist for system integration
            </span>
          </p>
          <span className="text-green-400 font-mono">company</span>:{" "}
          <span className="text-sky-400 font-mono">Thinformatics</span>
          <p className="mt-4">
            <span className="text-green-400 font-mono">
              fields_of_interests
            </span>
            :
          </p>
          <p>
            <span className="text-sky-400 font-mono">[</span>
          </p>
          <p>
            <span className="text-sky-400 font-mono">
              <span className="text-white font-mono pl-5"> "</span>Web
              Development<span className="text-white font-mono">"</span>
            </span>
            <span className="text-sky-400 font-mono">,</span>
          </p>
          <p>
            <span className="text-sky-400 font-mono">
              <span className="text-white font-mono pl-5"> "</span>Data Science
              <span className="text-white font-mono">"</span>
            </span>
            <span className="text-sky-400 font-mono">,</span>
          </p>
          <p>
            <span className="text-sky-400 font-mono">
              <span className="text-white font-mono pl-5"> "</span>Machine
              Learning<span className="text-white font-mono">"</span>
            </span>
            <span className="text-sky-400 font-mono">,</span>
          </p>
          <p>
            <span className="text-sky-400 font-mono">
              <span className="text-white font-mono pl-5"> "</span>Game
              Development<span className="text-white font-mono">"</span>
            </span>
            <span className="text-sky-400 font-mono">,</span>
          </p>
          <p>
            <span className="text-sky-400 font-mono">]</span>
          </p>
          <p className="mt-4">
            <span className="text-green-400 font-mono">
              technical_background
            </span>
            :
          </p>
          <p>
            <span className="text-sky-400 font-mono">[</span>
          </p>
          <p>
            {" "}
            <span className="text-sky-400 font-mono">
              <span className="text-white font-mono pl-5">"</span>IT system
              electronics technician
              <span className="text-white font-mono">"</span>
            </span>
          </p>
          <p>
            <span className="text-sky-400 font-mono">]</span>
          </p>

          <p className="mt-4">
            <span className="text-green-400 font-mono">
              current_projects
            </span>
            :
          </p>
          <p>
            <span className="text-sky-400 font-mono">[</span>
          </p>
          <p>
            {" "}
            <span className="text-sky-400 font-mono">
              <span className="text-white font-mono pl-5" >"</span><a href="/project-money">Project Money</a> 
              <span className="text-white font-mono">"</span>
            </span>
          </p>
          <p>
            <span className="text-sky-400 font-mono">]</span>
          </p>

          <p className="mt-4">
            <span className="text-green-400 font-mono">currently_learning</span>
            :{" "}
            <span className="text-sky-400 font-mono">["Docker, Angular"]</span>
          </p>
          <p>
            <span className="text-green-400 font-mono">2022 Goals</span>:{" "}
            <span className="text-sky-400 font-mono">
              ["Learn Angular and progress in Docker"]
            </span>
          </p>
          <p>
            <span className="text-green-400 font-mono">hobbies</span>:{" "}
            <span className="text-sky-400 font-mono">
              ["Gaming", "Programming", "Firefighter", "Diving", "play with
              hardware"]
            </span>
          </p>
        </div>

        <hr className="border-neutral-900 border-1" />

        <h2 className="flex xs:text-lg md:text-4xl  justify-center py-2 text-gray-500">
          {" "}
          Some Tools / Languages I Use
        </h2>

        <div className="flex justify-center grid-cols-3 mt-3">
          <img
            src="/assets/about_me/vscode.svg"
            alt="vscode"
            width="45"
            height="45"
            className="mx-1"
          />
          <img
            src="/assets/about_me/PyCharm.svg"
            alt="PyCharm"
            width="45"
            height="45"
            className="mx-1"
          />
          <img
            src="/assets/about_me/IntelliJ.svg"
            alt="IntelliJ"
            width="45"
            height="45"
            className="mx-1"
          />
        </div>

        <div className="flex justify-center grid-cols-4 mt-3">
          <img
            src="/assets/about_me/docker.svg"
            alt="docker"
            width="45"
            height="45"
            className="mx-1"
          />
          <img
            src="/assets/about_me/linux.svg"
            alt="linux"
            width="45"
            height="45"
            className="mx-1"
          />
          <img
            src="/assets/about_me/Windows.png"
            alt="Windows"
            width="45"
            height="45"
            className="mx-1"
          />
          <img
            src="/assets/about_me/Mac.png"
            alt="Mac OS/IOS"
            width="45"
            height="45"
            className="mx-1"
          />
        </div>

        <div className="flex justify-center grid-cols-5 mt-3">
          <img
            src="/assets/about_me/java.png"
            alt="java"
            width="45"
            height="45"
            className="mx-1"
          />
          <img
            src="/assets/about_me/python.svg"
            alt="python"
            width="45"
            height="45"
            className="mx-1"
          />
          <img
            src="/assets/about_me/javascript.svg"
            alt="javascript"
            width="45"
            height="45"
            className="mx-1"
          />
          <img
            src="/assets/about_me/html5.svg"
            alt="html"
            width="45"
            height="45"
            className="mx-1"
          />
          <img
            src="/assets/about_me/css3.svg"
            alt="css3"
            width="45"
            height="45"
            className="mx-1"
          />
        </div>

        <div className="flex justify-center grid-cols-2 mb-5 mt-3">
          <ing
            src="/assets/about_me/git.svg"
            alt="git"
            width="45"
            height="45"
            className="mx-1"
          />
          <img
            src="/assets/about_me/mysql.svg"
            alt="mysql"
            width="45"
            height="45"
            className="mx-1"
          />
        </div>

        <hr className="border-neutral-900 border-1" />

        <h2 className="flex xs:text-md sm:text-lg md:text-4xl justify-center py-2 text-gray-500">
          Discord | Bots | Programming
        </h2>

        <div className="rounded-md bg-[#161b22] p-5 mt-5 " onClick={location.href = "/bobbybot"}>
          <p>
            <span className="text-green-400 font-mono">name</span>:{" "}
            <a className="text-sky-400 font-mono" href="/bobbybot">Bobby Bot / Bobby69</a>
          </p>
          <p>
            <span className="text-green-400 font-mono">current_job</span>:{" "}
            <span className="text-sky-400 font-mono">
              Music Player, Croupier, Messaging Bot
            </span>
          </p>
          <span className="text-green-400 font-mono">company</span>:{" "}
          <span className="text-sky-400 font-mono">
            Bobby<sup>tm</sup>
          </span>
          <p className="mt-4">
            <span className="text-green-400 font-mono">
              fields_of_interests
            </span>
            :
          </p>
          <p>
            <span className="text-sky-400 font-mono">[</span>
          </p>
          <p>
            <span className="text-sky-400 font-mono">
              <span className="text-white font-mono pl-5"> "</span>Music
              <span className="text-white font-mono">"</span>
            </span>
            <span className="text-sky-400 font-mono">,</span>
          </p>
          <p>
            <span className="text-sky-400 font-mono">
              <span className="text-white font-mono pl-5"> "</span>Data Science
              <span className="text-white font-mono">"</span>
            </span>
            <span className="text-sky-400 font-mono">,</span>
          </p>
          <p>
            <span className="text-sky-400 font-mono">
              <span className="text-white font-mono pl-5"> "</span>Pictures
              <span className="text-white font-mono">"</span>
            </span>
            <span className="text-sky-400 font-mono">,</span>
          </p>
          <p>
            <span className="text-sky-400 font-mono">
              <span className="text-white font-mono pl-5"> "</span>Anime
              <span className="text-white font-mono">"</span>
            </span>
            <span className="text-sky-400 font-mono">,</span>
          </p>
          <p>
            <span className="text-sky-400 font-mono">]</span>
          </p>
          <p className="mt-4">
            <span className="text-green-400 font-mono">software</span>:
          </p>
          <p>
            <span className="text-sky-400 font-mono">[</span>
          </p>
          <p>
            {" "}
            <span className="text-sky-400 font-mono">
              <span className="text-white font-mono pl-5">"</span>Python
              <span className="text-white font-mono">"</span>
            </span>
          </p>
          <p>
            <span className="text-sky-400 font-mono">]</span>
          </p>
          <p>
            <span className="text-green-400 font-mono">hobbies</span>:{" "}
            <span className="text-sky-400 font-mono">
              ["Watching Obi-Wan on Disney+", "Play Music"]
            </span>
          </p>
          <p>
            <span className="text-green-400 font-mono">Link</span>:{" "}
            <span className="text-sky-400 font-mono">You can Get my Bot </span>
            <a
              href="https://discord.com/oauth2/authorize?client_id=864513968935927809&permissions=8&scope=bot"
              target="blank"
              className="text-gray-500 font-mono underline"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
