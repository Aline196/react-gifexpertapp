
//import React from 'react'
import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {


    const [categories, setCategories] = useState( ['One']);

    //Manera de agregar las categorias
    // const handleAdd = () =>{
    //     setCategories([...categories, 'Max']);
    //     // Otra manera de hacer lo anteriror es añadiendo los valores a una variable llamada ca
    //     setCategories(cats => [...cats, 'Mia']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Se le envia una funcion a AddCategory que contiene las categorias */}
            <AddCategory setCategories ={setCategories}/>
            <hr/>
            
            
            {/* Creamos una lista ordenada */}
            <ol>
                {/* El map nos servira para transformar cada uno de los elementos de la categoria
                Y va a regresar las posiciones */}
                {
                    categories.map(category => (
                        <GifGrid
                        key = {category}
                        category  = {category}
                        />
                     ))

                }

            </ol>
        </>
    )
}
