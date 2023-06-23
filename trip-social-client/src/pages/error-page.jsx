import {useRouteError} from "react-router-dom"

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return(
        <div className="error404" id="error-page">
            <h1>Oops, an unexpected error has occurred.</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}