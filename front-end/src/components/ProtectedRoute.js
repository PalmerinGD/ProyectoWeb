import { Outlet,Navigate } from "react-router-dom";
function ProtectedRoute({ login }) {
    if(login) return <Outlet/>
    return <Navigate replace to="/"/>
}

export default ProtectedRoute;