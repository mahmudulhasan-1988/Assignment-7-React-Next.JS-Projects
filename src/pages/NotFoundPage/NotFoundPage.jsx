import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center p-8 bg-base-100 shadow-xl rounded-2xl max-w-md">

        {/* 404 */}
        <h1 className="text-7xl font-bold text-error animate-bounce">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold mt-4">
          Page Not Found 😢
        </h2>

        <p className="text-gray-500 mt-2">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="btn btn-primary mt-6">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default NotFoundPage;