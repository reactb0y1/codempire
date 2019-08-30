import React, {Component} from 'react'
import './Burger.css'
import menu from './../res/dataBase'
import {Link} from 'react-router-dom'

class Burger extends Component {

    makeList() {
        const ID = this.props.match.params.id;

        // Определяем какой именно объект из массива брать
        for(let i = 0; i < menu.length; i++) {
            if (menu[i].id === ID) {
                var ingredients = menu[i].ingredients;
            }
        }

        const item = ingredients.map((ingredient) =>
            <li className='ingredient'>
                <span className='ingredientName'>{ingredient.name}</span>
                <span className="counter">
                    <span className="counter_minus"/>
                    <span className='ingredientAmount'>{ingredient.amount}</span>
                    <span className="counter_plus"/>
                </span>
            </li>
        );

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

                        <span className="EditPhoto"/>

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