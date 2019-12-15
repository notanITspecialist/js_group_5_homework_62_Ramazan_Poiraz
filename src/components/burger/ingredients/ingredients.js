import React from 'react';
import "./ingredients.css"
import Ingredient from "../listIngredient/ingredient";

const Ingredients = props => {
    const ingredients = props.ingredients;
    const priceImg = props.priceImg
    return (
        <div className="ingredients-block">
            <span>Ingredients</span>
            <ul>
                {ingredients.map((elem,id) => (
                    <Ingredient
                        key={elem.name+id}
                        img={priceImg[id].img}
                        addIngredient={props.addIngredient}
                        deleteIngredient={props.deleteIngredient}
                        name={elem.name}
                        count={elem.count}
                    />
                ))}
            </ul>

        </div>
    );
};

export default Ingredients;