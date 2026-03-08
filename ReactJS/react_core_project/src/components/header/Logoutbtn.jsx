import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authslice";

function LogoutBtn(){
    const dispatch=useDispatch()
    const logouthandler=()=>{
        authService.logOut().then(()=>{
            dispatch(logout())
        })
        .catch(()=>{
            prompt("logout failed")
        })

    }
    return (
        <button onClick={logouthandler}>Logout</button>
    )
}
export default LogoutBtn
