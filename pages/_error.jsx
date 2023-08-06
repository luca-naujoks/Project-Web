import "../app/globals.css";

export default function Error({ statusCode }) {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white">
            Oh no Some one Stole your Page
          </h1>
          <h2 className="text-4xl font-bold text-white">{statusCode}</h2>
          <div className="flex justify-center">
            <img
              src="../../assets/404/Thief.png"
              alt="Your page was stolen"
              className="w-96"
            />
          </div>
          <a
            href="/"
            className="bg-myblue text-white font-bold py-2 px-4 rounded animate__animated animate__bounceInUp"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
