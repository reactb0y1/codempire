import React, {Component} from 'react'
import './Burger.css'
import {Link} from 'react-router-dom'

class Burger extends Component {
    state = {
        ingredients: [
            {name: 'Бекон', amount: '1'},
            {name: 'Сыр', amount: '2'},
            {name: 'Котлета', amount: '1'},
            {name: 'Булка', amount: '2'},
            {name: 'Кетчуп', amount: '1'}
        ]
    }

    makeList() {
        const ingredients = this.state.ingredients;

        const item = ingredients.map((ingredient) =>
            <li className='ingredient'>
                <span className='ingredientName'>{ingredient.name}</span>
                <span className="counter">
                    <span className="counter_minus"></span>
                    <span className='ingredientAmount'>{ingredient.amount}</span>
                    <span className="counter_plus"></span>
                </span>
            </li>
        )

        return item
    }

    render() {
        return (
            <div className='EditContainer'>

                <header className='EditHeader'>
                    <h2 className="EditHeaderText">Редактор бургера</h2>
                </header>

                <sector className="EditMid">

                    <aside className="EditBurgerInfoContainer">

                        <h3 className="nameBurger">Гамбургер</h3>

                        <span className="EditPhoto"></span>

                    </aside>

                    <main className="ingredientsContainer">

                        <h3 className="ingredientsHead">Ингредиенты</h3>

                        <ul className="ingredients">
                            {this.makeList()}
                        </ul>

                        <Link to='/order'  className='EditLink'>
                            <button className='EditButton'>
                                Продолжить
                            </button>
                        </Link>

                    </main>

                </sector>

            </div>
        )
    }
}

export default Burger