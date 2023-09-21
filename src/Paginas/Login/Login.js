import React from "react";
import "./Login.css";


function Login (){
    return (<h1>
        <div className="Letras">
           Login 
        </div>
        
        <div className="Campos">
        <input className="campoUsuario" placeholder="Usuario"/>
        <input className="campoContra" placeholder="Contraseña"/>

        <button className="boton">Ingresar</button>  
        </div>

    </h1>)
}


export default Login;