// import React from 'react'
import React, {useState} from 'react';
import PropTypes  from 'prop-types';

// Se le pasa como argumento la categoria
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')
    // Funcion para que se actualice el valor de entrada
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Se realiza la validacion para que no se ingrese de nuevo el mismo valor
        if (inputValue.trim().length > 2){

            // Se envia la refencia del set category
            setCategories(cats => [ inputValue, ...cats]);
            // Lo que se mandara al inputValue sera un String vacio
            setInputValue('');
        }
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input
             type = "text"
             value = {inputValue}
             onChange = {handleInputChange}/>
        </form>
    )
}
// El prop se utiliza para hacer la comunicacion entre los componentes y hacer necesario
// la propiedad de AddCategory
AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}
