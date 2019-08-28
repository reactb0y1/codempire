import React, {Component} from 'react'
import './Order.css'
import {Link} from 'react-router-dom'

class Order extends Component {
    render() {
        return (
            <Link to='/'>Завершить</Link>
        );
    }
}

export default Order