import { useState } from "react"
import { useNavigate } from "react-router-dom"



export function Register(){

    const navigate = useNavigate()
    const register = () =>{
        navigate('/')
    } 

    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="loginWrapper">
            {isLogin ? (
                <div className="loginPage">
                    <h2>Login</h2>

                    <input className="loginTextField" placeholder="Login..."/>

                    <input type="password" className="loginTextField" placeholder="Password..."/>
                    
                    <button className="signupButton" onClick={register}>Login</button>

                    <p>Don't have an account? <p className="signupRedirect" onClick={() => setIsLogin(false)}>Signup</p> </p>
                </div>
            ) : (
                <div className="loginPage">
                    <h2>Register</h2>

                    <input className="loginTextField" placeholder="Login..."/>
                    <input className="loginTextField" placeholder="Email..."/>

                    <input type="password" className="loginTextField" placeholder="Password..."/>
                    <input type="password" className="loginTextField" placeholder="Repeat password..."/>

                    <button className="signupButton" onClick={register}>Register</button>

                    <p>Already have an account? <p className="signupRedirect" onClick={() => setIsLogin(true)}>Login</p> </p>

                </div>
            )
               
        }
           
        </div>
    )
}