import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error =  useRouteError()
    console.log(error)
   return (
       <div className="text-center text-5xl mt-36 text-[#7E90FE]">
           
           <h2>!!!Opps</h2>
           <Link to="/"> <button className="btn btn-primary">Go back to home</button> </Link>
       </div>
   );
};

export default ErrorPage;