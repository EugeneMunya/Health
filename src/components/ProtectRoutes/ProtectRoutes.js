import { useSelector } from "react-redux";
import { Navigate, Outlet,useLocation } from "react-router-dom";

export const ProtectRoutes = ()=>{
    const location = useLocation()
    const authState = useSelector((state)=>state.auth)
    return (
        (authState?.token===null)?<Navigate to="/login" state={{path:location.pathname}}/>:<Outlet/>
    )
}