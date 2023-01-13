import { Outlet, Navigate } from "react-router-dom";
function ProtectedRoute({token}) {
    console.log(token);
    if(token) return <Outlet/>
    return <Navigate replace to="/"/>
   //return <Outlet/>
}

export default ProtectedRoute;