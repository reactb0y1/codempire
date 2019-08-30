import React, {Component} from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'

class Menu extends Component {
    state = {
        menuItems: [
            {name: 'Гамбургер', id: 'burger_1'},
            {name: 'Чизбургер', id: 'burger_2'},
            {name: 'Чикенбургер', id: 'burger_3'},
            {name: 'Фишбургер', id: 'burger_4'}
        ]
    };

    makeList() {
        const menuItems = this.state.menuItems;

        const item = menuItems.map((menuItem) =>
            <li className='menuItem'>
                <Link
                    to={'/menu/' + menuItem.id}
                    className='MenuLink'>
                    <span
                        className='menuItemImg'
                        id={menuItem.id}
                    />
                    <p className="menuItemName">{menuItem.name}</p>
                </Link>
            </li>
        )

        return item
    }

    render() {
        return (
            <div className='menuContainer'>

                <header className='EditHeader'>
                    <h2 className="EditHeaderText">Меню</h2>
                </header>

                <ul className='Menu'>
                    {this.makeList()}
                </ul>
            </div>
        );
    }
}

export default Menu