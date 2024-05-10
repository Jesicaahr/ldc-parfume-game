import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="game-world-bg flex h-screen items-center justify-center bg-gray-900">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Oops!</h1>
          <h2 className="mt-3 text-2xl font-bold">
            Sorry, an unexpected error has occurred.
          </h2>
          <div className="mt-8 max-w-screen-md rounded-lg bg-gray-800 p-8">
            <h2 className="text-xl font-medium text-red-600">
              <i>{error.statusText || error.message}</i>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
