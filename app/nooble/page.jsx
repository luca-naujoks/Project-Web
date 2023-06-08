import Link from "next/link";



export default function Home() {
  return (
    <div className="m-5">
      <main className="m-5">
        <div className="flex justify-center">
          <h1 className="text-4xl underline m-2 text-gray-500"> Nooble </h1>
        </div>
        <hr className="m-3 border-neutral-900 border-1" />

        <div className="flex xs:flex-col lg:flex-row">
          <Link
            href="/nooble"
            className="bg-[#161b22] rounded-md xs:w-auto lg:w-2/6 m-4 transition-all duration-600 p-10 hover:transform-none"
          >
            <div className="">
              <h2 className="text-xl underline text-gray-500">
                LF1 Eigene rolle im Betrieb kennenlernen
              </h2>
            </div>
            <div className=""></div>
          </Link>

          <Link
            href="/nooble/LF2"
            className="bg-[#161b22] rounded-md xs:w-auto lg:w-2/6 m-4 transition-all duration-600 p-10 hover:scale-105"
          >
            <div className="">
              <h2 className="text-xl underline text-gray-500">
                LF2 Arbeitsplätze richtig Ausstatten
              </h2>
            </div>
            <div className="hover:transform-none">
              <div>
                <span className="text-green-400 font-mono">berufsschule</span>:{" "}
                <span className="text-sky-400 font-mono">Itech BS 14</span>
              </div>
              <br></br>
              <div>
                <span className="text-green-400 font-mono">date</span>:{" "}
                <span className="text-sky-400 font-mono">
                  09.01-31.02.23
                </span>
              </div>
              <br></br>
              <div>
                <span className="text-green-400 font-mono">
                  fields_of_interests
                </span>
                :
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>Web
                  Development<span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>
                  Hardware Configuration<span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>
                  Programming<span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <div>
                <span className="text-green-400 font-mono">
                  technical_devices
                </span>
                :
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>
                  Web-Server
                  <span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <div>
                <span className="text-green-400 font-mono">products</span>:
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>
                  correct Schutzbedarfsanalyse
                  <span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>
                  Scootech Scooter Booking Programm
                  <span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <br></br>
            </div>
          </Link>

          <Link
            href="/nooble/LF3"
            className="bg-[#161b22] rounded-md xs:w-auto lg:w-2/6 m-4 transition-all duration-600 p-10 hover:scale-105"
          >
            <div className="">
              <h2 className="text-xl underline text-gray-500">LF3 Netzwerktechnik</h2>
            </div>
            <div className="hover:transform-none">
              <div>
                <span className="text-green-400 font-mono">berufsschule</span>:{" "}
                <span className="text-sky-400 font-mono">Itech BS 14</span>
              </div>
              <br></br>
              <div>
                <span className="text-green-400 font-mono">date</span>:{" "}
                <span className="text-sky-400 font-mono">
                  05.10-08.10.22, 24.10-10.11.22
                </span>
              </div>
              <br></br>
              <div>
                <span className="text-green-400 font-mono">
                  fields_of_interests
                </span>
                :
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>Web
                  Development<span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>
                  Networking<span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>
                  Programming<span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <div>
                <span className="text-green-400 font-mono">
                  technical_devices
                </span>
                :
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>
                  Rraspberry pis (4)
                  <span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>managed
                  ethernet switch<span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <div>
                <span className="text-green-400 font-mono">products</span>:
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>
                  functional Network
                  <span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>ipv4
                  calculator<span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>Next js
                  website<span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <br></br>
            </div>
          </Link>
        </div>

        <div className="flex xs:flex-col lg:flex-row">
          <Link
            href="/nooble/LF4"
            className="bg-[#161b22] rounded-md xs:w-auto lg:w-2/6 m-4 transition-all duration-600 p-10 hover:scale-105"
          >
            <div className="">
              <h2 className="text-xl underline text-gray-500">LF4 Schutzbedarfsanalyse</h2>
            </div>
            <div className="hover:transform-none">
              <div>
                <span className="text-green-400 font-mono">berufsschule</span>:{" "}
                <span className="text-sky-400 font-mono">Itech BS 14</span>
              </div>
              <br></br>
              <div>
                <span className="text-green-400 font-mono">date</span>:{" "}
                <span className="text-sky-400 font-mono">
                  09.01-31.02.23
                </span>
              </div>
              <br></br>
              <div>
                <span className="text-green-400 font-mono">
                  fields_of_interests
                </span>
                :
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>---
                  <span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <div>
                <span className="text-green-400 font-mono">
                  technical_devices
                </span>
                :
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>---
                  <span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <div>
                <span className="text-green-400 font-mono">products</span>:
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>
                  Schutzbedarfsanalyse
                  <span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <br></br>
            </div>
          </Link>

          <Link
            href="/nooble/LF5"
            className="bg-[#161b22] rounded-md xs:w-auto lg:w-2/6 m-4 transition-all duration-600 p-10 hover:scale-105"
          >
            <div className="">
              <h2 className="text-xl underline text-gray-500">LF5 Datenbanken</h2>
            </div>
            <div className="hover:transform-none">
              <div>
                <span className="text-green-400 font-mono">berufsschule</span>:{" "}
                <span className="text-sky-400 font-mono">Itech BS 14</span>
              </div>
              <br></br>
              <div>
                <span className="text-green-400 font-mono">zeitraum</span>:{" "}
                <span className="text-sky-400 font-mono">15.06-06.07.22</span>
              </div>
              <br></br>
              <div>
                <span className="text-green-400 font-mono">
                  themen aus dem lernfeld
                </span>
                :
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>programm
                  development<span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>SQL
                  datenbanken kontrollieren
                  <span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <div>
                <span className="text-green-400 font-mono">
                  techische geräte
                </span>
                :
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>
                  Rraspberry pis (3)
                  <span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <br></br>
              <div>
                <span className="text-green-400 font-mono">resultate</span>:
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>
                  funktionsfähige datenbank
                  <span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>programm
                  zur kontrolle der datenbank
                  <span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>python
                  <span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <br></br>
            </div>
          </Link>

          <Link
            href="/nooble/LF6"
            className="bg-[#161b22] rounded-md xs:w-auto lg:w-2/6 m-4 transition-all duration-600 p-10  hover:scale-105"
          >
            <div className="">
              <h2 className="text-xl underline text-gray-500">
                LF6 Serviceanfragen bearbeiten
              </h2>
            </div>
            <div className=""></div>
          </Link>
        </div>

        <div className="flex xs:flex-col lg:flex-row">
          <Link
            href="/nooble/LF7"
            className="bg-[#161b22] rounded-md xs:w-auto lg:w-2/6 m-4 transition-all duration-600 p-10 hover:scale-105 "
          >
            <div className="">
              <h2 className="text-xl underline text-gray-500">LF7 Cyber-physische Systeme</h2>
            </div>
            <div className="hover:transform-none">
              <span className="text-green-400 font-mono">date</span>:{" "}
              <span className="text-sky-400 font-mono">---</span>
              <br></br>
              <div>
                <span className="text-green-400 font-mono">
                  fields_of_interests
                </span>
                :
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>Programm
                  Development<span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>Hardware
                  <span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <div>
                <span className="text-green-400 font-mono">
                  technical_devices
                </span>
                :
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>Server
                  <span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>Mongodb Database
                  <span className="font-mono text-white">"</span>
                </span>
                <span className="text-sky-400 font-mono">,</span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <br></br>
              <div>
                <span className="text-green-400 font-mono">products</span>:
              </div>
              <div>
                <span className="text-sky-400 font-mono">[</span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>---
                  <span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>---
                  <span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                {" "}
                <span className="text-sky-400 font-mono">
                  <span className="text-white font-mono pl-5"> "</span>---
                  <span className="font-mono text-white">"</span>
                </span>
              </div>
              <div>
                <span className="text-sky-400 font-mono">]</span>
              </div>
              <br></br>
            </div>
          </Link>

          <Link
            href="/nooble"
            className="bg-[#161b22] rounded-md xs:w-auto lg:w-2/6 m-4 transition-all duration-600 p-10 hover:transform-none"
          >
            <div className="">
              <h2 className="text-xl underline text-gray-500">
                LF8 System übergreifende daten bereitstellen
              </h2>
            </div>
            <div className=""></div>
          </Link>

          <Link
            href="/nooble"
            className="bg-[#161b22] rounded-md xs:w-auto lg:w-2/6 m-4 transition-all duration-600 p-10 hover:transform-none"
          >
            <div className="">
              <h2 className="text-xl underline text-gray-500">
                LF9 netzwerke & Dienste bereitstellen
              </h2>
            </div>
            <div className=""></div>
          </Link>
        </div>

        <h2 className="text-red-900 text-4xl p-2 text-center">
          Ausbildungs Spezifisch
        </h2>
        <hr className="m-3 border-red-900 border-1" />

        <div className="flex xs:flex-col lg:flex-row">
          <Link
            href="/nooble"
            className="bg-[#161b22] rounded-md xs:w-auto lg:w-2/6 m-4 transition-all duration-600 p-10 hover:transform-none"
          >
            <div className="">
              <h2 className="text-xl underline text-gray-500">
                LF10 Serverdienste & Adminaufgaben Automatisieren
              </h2>
            </div>
            <div className=""></div>
          </Link>

          <Link
            href="/nooble"
            className="bg-[#161b22] rounded-md xs:w-auto lg:w-2/6 m-4 transition-all duration-600 p-10 hover:transform-none"
          >
            <div className="">
              <h2 className="text-xl underline text-gray-500">
                LF11 Betrieb & Sicherheit vernetzter Systeme
              </h2>
            </div>
            <div className=""></div>
          </Link>

          <Link
            href="/nooble"
            className="bg-[#161b22] rounded-md xs:w-auto lg:w-2/6 m-4 transition-all duration-600 p-10 hover:transform-none"
          >
            <div className="">
              <h2 className="text-xl underline text-gray-500">
                LF12 Kundenspezifische Systemintegration
              </h2>
            </div>
            <div className=""></div>
          </Link>
        </div>
      </main>
    </div>
  );
}
