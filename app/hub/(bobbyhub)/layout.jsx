export default function Layout({ children }) {
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
            <div id="menu" className="flex flex-col">
              <div className="flex flex-col md:space-y-2">
                <a
                  id="dashboardbtn"
                  href="/hub"
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
                  href="/hub/arcade"
                  className="text-sm font-medium text-white py-2 px-1 hover:bg-gray-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src="../assets/hub/lists.png"
                    alt="lists"
                    className="w-8 h-8 fill-current inline-block "
                  />
                  <span className="xs:hidden md:inline text-lg"> Arcade</span>
                </a>

                <p className="text-center xs:hidden md:block text-xl text-white">
                  Your Lists
                </p>
                <hr />
                <a
                  key="Home"
                  href="/hub/lists?list=Home"
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
                  href="/hub/lists?list=Dailys"
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
                  href="/hub/lists?list=Weeklys"
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
                  href="hub/settings"
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
  );
}
