
import { useState } from "react"

// Esto es un HOOK y permite añadir funcionalidad/utilidad a los componentes o 
// poder ejecutar codigo arbitrario cuando ocurra algo en los componentes

export function TwitterFollowCard ({children, formatUserName, userName = 'unknown', avatar }) {

    //se ha pasado directamente la función formarUserName por props 
    //se puede dar un valor por defecto por si ese campo no llega 
    //el children que llega es el name (que está envuelto por TwitterFollowCard)
    //las props una vez llegan no se deben modificar, son inmutables! mejor crear una variable nueva con otro nombre

    const [isFollowing, setIsFollowing] = useState(false)
    // el primer miembro del array es el VALOR del ESTADO, y en la 2º es una función para ACTUALIZAR EL ESTADO

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    //para que el boton cambie dependiendo del estado: (se ha usado condicional ternario)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    //también podemos cambiar el estilo en función del estado
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    
    
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt="Imagen 1" src={avatar}></img>
                <div className="tw-followCard-info"> 
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}> 
                    {text}  
                </button>

            </aside>
        </article>)
 

}