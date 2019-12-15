import React, {Component} from 'react';

import Ingredients from "./ingredients/ingredients";
import Burger from "./burger/burger";
import './burgerIngredients.css'
import meatImage from './ingredients/images/meat.png'
import cheeseImage from './ingredients/images/cheese.png'
import saladImage from './ingredients/images/salad.png'
import baconImage from './ingredients/images/bacon.png'

class CreateBurger extends Component {
    state = {
        ingredients: [
            {name: 'Meat', count: 0},
            {name: 'Cheese', count: 0},
            {name: 'Salad', count: 0},
            {name: 'Bacon', count: 0}
        ]
    };

    addIngredient = elem => {
        const ingredients = [...this.state.ingredients];
        const index = ingredients.findIndex(ingredient => ingredient.name === elem);
        ingredients[index].count++;
        this.setState({ingredients});
    };

    deleteIngredient = elem => {
        const ingredients = [...this.state.ingredients];
        const index = ingredients.findIndex(ingredient => ingredient.name === elem);
        ingredients[index].count--;
        this.setState({ingredients});
    };
    render() {
        const ingredients = [
            {name: 'Meat', price: 50, img: meatImage},
            {name: 'Cheese', price: 20, img: cheeseImage},
            {name: 'Salad', price: 5, img: saladImage},
            {name: 'Bacon', price: 20, img: baconImage}
        ];

        return (
            <div className="create-burger">
                <Ingredients addIngredient={this.addIngredient} deleteIngredient={this.deleteIngredient} ingredients={this.state.ingredients} priceImg={ingredients} />
                <Burger ingredients={this.state.ingredients} priceElement={ingredients} />
            </div>
        );
    }
}

export default CreateBurger;