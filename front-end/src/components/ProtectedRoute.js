import { Outlet,Navigate } from "react-router-dom";
function ProtectedRoute(props) {
    if(props.login && props.admin === props.login.user_rol) return <Outlet/>
    return <Navigate replace to="/"/>
}

export default ProtectedRoute;