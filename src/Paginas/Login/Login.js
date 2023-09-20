import React from "react";
import "./Login.css";


function Login (){
    return (<h1>
        <div className="todoLogin">
        Login
        <input className="campoUsuario"/>
        <input className="campoContra"/>

        <button className="boton">Ingresar</button>
        </div>
    </h1>)
}


export default Login;