import React, {Component} from 'react'
import './Menu.css'
import menu from './../res/dataBase'
import {Link} from 'react-router-dom'

class Menu extends Component {
    makeList() {
        const menuItems = menu;
        console.log("---", menuItems);

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