import React, {Component} from 'react'
import './Order.css'
import {Link} from 'react-router-dom'

class Order extends Component {
    render() {
        return (
            <div className='EditContainer'>

                <header className='EditHeader'>
                    <h2 className="EditHeaderText">Ваш заказ</h2>
                </header>

                <sector className="EditMid">

                    <aside className="EditBurgerInfoContainer">

                        <h3 className="nameBurger">Гамбургер</h3>

                        <span className="EditPhoto"></span>

                    </aside>

                    <main className='mainOrder'>

                        <button className='OrderButton'>Заказать</button>

                        <button className='OrderAddButton'>
                            <p className='OrderAddButtonP'>Добавить ещё 1 бургер и </p>
                            заказать
                        </button>

                        <Link to='/'>
                            <button className='OrderEndButton'>
                                Завершить
                            </button>
                        </Link>

                    </main>

                </sector>

            </div>

        );
    }
}

export default Order