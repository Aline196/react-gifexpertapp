import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


// Se recibira como argumento la categoria
export const GifGrid = ({category}) => {

   
    const {data:images, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3 className ="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p>loading</p>}

           
            <div className = "card-grid animate__animated animate__bounce">
                    {  
                    // Se le envia la imagen al GifGridItem
                        images.map(img => (
                            <GifGridItem 
                            key = {img.id}
                            {...img} // se utiliza el operador spret 
                            />
                        ))
                    }
            </div>
        </>
        
    )
}
