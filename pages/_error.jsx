import "../app/globals.css";

export default function Error({ statusCode }) {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-64 text-center">
          <h1 className="text-6xl font-bold mb-4">{ statusCode }</h1>
          <p className="text-xl mb-8 animate__animated animate__fadeIn">
            The page you are looking for was not found.
          </p>
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

Error.getInitialProps = ({ res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}
