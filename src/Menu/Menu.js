import React, {Component} from 'react'
import './Menu.css'

class Menu extends Component {
    state = {
        menuItems: [
            {name: 'Гамбургер'},
            {name: 'Чизбургер'},
            {name: 'МакЧикен'},
            {name: 'ЧикенРол'}
        ]
    };

    makeList() {
        const menuItems = this.state.menuItems;

        const item = menuItems.map((menuItem) =>
            <li className='menuItem'>{menuItem.name}</li>
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