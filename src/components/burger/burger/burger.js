import React from 'react';
import "./burger.css"
import Ingredient from "../burgerIngredient/ingredient";

const Burger = props => {
    const ingredients = props.ingredients;
    const priceElement = props.priceElement
    const burgerIngredients = [];
    let price = 20;

    ingredients.forEach((elem,id) => {
        for(let i = 0; i < elem.count; i++){
            burgerIngredients.push(<Ingredient key={elem.name+i} name={elem.name}/>);
            price += priceElement[id].price
        }
    });
    return (
        <div className="burger-block">
            <span>Burger</span>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"/>
                    <div className="Seeds2"/>
                </div>
                {burgerIngredients}
                <div className="BreadBottom"/>
            </div>
            <span>price:{price}</span>
        </div>
    );
};

export default Burger;