import React from "react"
import "./Page404.css"
import { Link } from "react-router-dom"

function Page404() {
    return ( 
        <div className = "Page404" >
            <h1>404</h1>
            <span>Oups! La page que vous demandez n'existe pas.</span>
            <Link to="/" className="message-erreur">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Page404;