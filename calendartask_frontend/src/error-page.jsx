import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className=" bg-orange-300">

            <div className="mx-auto p-5">
                <h1 className="text-red-600 font-bold text-lg">Oops! PAGE NOT FOUND</h1>
                <p>Sorry, the page you requested could not be served from this server.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}