import React, {Component} from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'

class Menu extends Component {
    state = {
        menuItems: [
            {name: 'Гамбургер'},
            {name: 'Чизбургер'},
            {name: 'Чикенбургер'},
            {name: 'Фишбургер'}
        ]
    };

    makeList() {
        const menuItems = this.state.menuItems;

        const item = menuItems.map((menuItem) =>
            <li className='menuItem'>
                <Link to='/edit'>{menuItem.name}</Link>
            </li>
        )

        return item
    }

    render() {
        return (
            <div className='menuContainer'>
                <ul className='Menu'>
                    {this.makeList()}
                </ul>
            </div>
        );
    }
}

export default Menu