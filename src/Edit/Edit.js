import React, {Component} from 'react'
import './Edit.css'
import {Link} from 'react-router-dom'

class Edit extends Component {
    render() {
        return (
            <div className='EditContainer'>

                <header className='EditHeader'>
                    <h2 className="EditHeaderText">Редактор бургера</h2>
                </header>

                <sector className="EditMid">

                    <main className="ingredientsContainer"></main>

                    <aside className="EditPhotoContainer">
                        <img src="" alt="" className="EditPhoto"/>
                    </aside>

                </sector>

                <button>
                    <Link to='/order'>Продолжить</Link>
                </button>

            </div>
        )
    }
}

export default Edit