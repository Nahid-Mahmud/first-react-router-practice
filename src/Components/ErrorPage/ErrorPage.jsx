import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center min-h-screen flex-col text-5xl text-red-600 font-bold">
      <p>Oops! </p>
      {
        error.status ? <div className="flex justify-center items-center  flex-col text-5xl text-red-600 font-bold"> <p>{error.status} : {error.statusText} </p> <p>{error.data}</p></div> : "Page Not Found"
      }
    </div>
  );
};

export default ErrorPage;


{/* <p>{error.status} : {error.statusText} </p> */}
            // <p>{error.data}</p>