import React from 'react'

//Se envia la imagen y se pasan como parametros los datos de las imagenes que necesitamos
export const GifGridItem = ({id, title, url}) => {
    console.log(id, title, url);
    return (
        <div className = "card animate__animated animate__bounce">
            {/* Se empieza a crear la imagen para mostrarla */}
            {/* Al source se le pasara el url de la imagen y se obtiene el titulo de la imagen */}
            <img src = {url} alt = {title}/>
            <p> {title}</p>
        </div>
    )
}
