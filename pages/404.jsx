import "../app/globals.css";

export default function Error404() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold">
            Oh no Some one Stole your Page
          </h1>
          <div className="flex justify-center">
          <img src="../../assets/404/Thief.png" alt="Your page was stolen" className="w-96"/>
          </div>
          <a
            href="/"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded animate__animated animate__bounceInUp"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
