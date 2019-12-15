import React from 'react';
import './ingredient.css'

const Ingredient = props => {
    return (
        <li className="ingredient">
            <button onClick={() => props.addIngredient(props.name)} className="ingredient-add"><img alt={props.name} src={props.img} /></button>
            <span className="ingredient-name">{props.name}</span>
            <span className="ingredient-count">x{props.count}</span>
            {props.count >= 1 ? <button onClick={() => props.deleteIngredient(props.name)} className="ingredient-delete">Delete</button>: null}
        </li>
    );
};

export default Ingredient;