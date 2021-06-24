import { useState, useEffect } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    // Va a tenr como estado inicial un objeto
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // El useEfect se uriliza para que no se carguen de nuevo todos los datos cuando se renderiza la categoria
    useEffect(() => {
        // Se realiza la peticion http
        getGifs(category)
        // Se agregan las imagenes
            .then (imgs => {
                console.log(imgs);
                 setState({
                    data: imgs,
                    loading: false
                });
             })


    }, [category])



    return state;
}
