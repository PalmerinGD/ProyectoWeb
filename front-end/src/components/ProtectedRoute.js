import { Outlet, Navigate } from "react-router-dom";
function ProtectedRoute({token, admin, user, profesor}) {
    if(token === null) return <Navigate replace to="/"/>
    if(admin) {
        if (token.user_rol === "0") return <Outlet />
        return <Navigate replace to="/" />
    }
    else if(user) {
        if(token.user_rol === "1") return <Outlet/>
        return <Navigate replace to="/"/>
    }
    else if(profesor){
        if(token.user_rol === "2") return <Outlet/>
        return <Navigate replace to="/"/>
    }
    else return null;
}

export default ProtectedRoute;