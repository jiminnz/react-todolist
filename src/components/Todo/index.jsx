import React from 'react'

import './index.css'

const Todo = ({ todoText }) => {
    return (
        <div>
            <input className="todoItem" type="text" readOnly value={todoText}/>
        </div>
    )
}

export default Todo