export default function Layout({children}) {
return (
    <div className="font-poppins antialiased bg-[#161b22]">
      <div
        id="view"
        className="h-full flex flex-row"
        x-data="{ sidenav: true }"
      >
        <div
          id="sidebar"
          className="flex justify-between bg-[#161b22] h-screen md:block shadow-xl px-3 xs:w-18 md:w-40 lg:w-[15%] transition-transform duration-300 ease-in-out"
          x-show="sidenav"
        >
          <div>
            <div className="flex border-2 border-gray-600 rounded-md mb-[5%]">
              <input
                type="text"
                className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm bg-[#161b22] text-white focus:outline-none xs:hidden md:block"
                placeholder="Search"
              />
              <button className="rounded-tr-md rounded-br-md px-2 py-3 xs:hidden md:block">
                <svg
                  className="w-4 h-4 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div id="menu" className="flex flex-col">
              <div className="flex flex-col md:space-y-2">
                <a
                  id="dashboardbtn"
                  
                  className="hover:scale-105 text-sm font-medium text-white py-2 px-0 hover:bg-gray-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/dashboard.png"
                    alt="dashboard"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="xs:hidden md:inline text-lg">
                    {" "}
                    Dashboard
                  </span>
                </a>
                <a
                  href="/hub/casino"
                  className="text-sm font-medium text-white py-2 px-1 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/lists.png"
                    alt="lists"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="xs:hidden md:inline text-lg"> Arcade</span>
                </a>

                <p className="text-center xs:hidden md:block text-xl">
                  Your Lists
                </p>
                <hr />
                <a
                  key="Home"
                 href="/hub/lists"
                  className="text-sm font-medium text-white py-2 px-1 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/lists.png"
                    alt="lists"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="xs:hidden md:inline text-lg"> Home</span>
                </a>

                <a
                  key="Dailys"
                  
                  className="text-sm font-medium text-white py-2 px-1 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/lists.png"
                    alt="lists"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="xs:hidden md:inline text-lg"> Dailys</span>
                </a>

                <a
                  key="Einkaufen"
                 
                  className="text-sm font-medium text-white py-2 px-1 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/lists.png"
                    alt="lists"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="xs:hidden md:inline text-lg"> Weeklys</span>
                </a>
                <a
                  
                  className="text-sm font-medium text-white py-2 px-1 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/settings.png"
                    alt="settings"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="xs:hidden md:inline text-lg"> Settings</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black rounded-tl-xl w-[85%] overflow-auto">
        {children}
        </div>
      </div>
    </div>
)
}
