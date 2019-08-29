import React, {Component} from 'react'
import './Edit.css'
import {Link} from 'react-router-dom'

class Edit extends Component {
    render() {
        return (
            <Link to='/order'>Продолжить</Link>
        )
    }
}

export default Edit