import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2) {//Elimina espacios vacios y valida si es mayor a 2, entonces pasa
            setCategories( cate => [inputValue, ...cate]);//Agrega un nuevo elemento despues de darle enter en el input,tomando el valor del input
            setInputValue('');//Deja el input vacio
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                value={ inputValue } 
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
