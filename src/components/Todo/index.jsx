import React from 'react'

import './index.css'

const Todo = ({ todoText }) => {
    return (
        <div className="todoItem">{todoText}</div>
    )
}

export default Todo