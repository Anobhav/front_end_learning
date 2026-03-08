import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin} from '../store/authSlice'
import {Button,Input, Logo} from "./index"
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"
function Login() {
    const navigate= useNavigate()
    const dispatch=useDispatch()
    const {register, handleSubmit}=useForm()
    const [error,setError]=useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session){
                const userData= await authService.getCurrentUser()
                if (userData){
                    dispatch(authLogin(userData))
                    navigate("/")
                }
            }
        } catch (e) {
            setError(e.message)
        }
    }

    return (
        <div>
            <div>

            </div>
            <h2> sign in </h2>
            <link to="/signup">sign up</link>
            {error && <p>{error}</p>} 
            <form onSubmit={handleSubmit(login)}>
                <div>
                    <input label="Email:" placeholder='Enter your email' type="email" {...register ("email", {
                        required:true,
                        validate:{
                            matchPattern: (value) => 
                                /^[\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                                    .test(value) ||
                                "Email address must be a valid address",
                        }
                    })}></input>
                    <input label="Password" type='password' placeholder='Enter your password'{...register("password",{
                        required:true,
                    })}></input>
                    <button type='submit'> Sign in</button>
                </div></form>      
            </div>
    )
}

export default Login
