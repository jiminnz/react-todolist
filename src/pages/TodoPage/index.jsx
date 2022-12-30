import React from 'react'

import './index.css'
import Todo from '../../components/Todo'

class TodoPage extends React.Component {
    state = {
        todoList: []
    }

    inputRef = React.createRef()

    createTodo = () => {
        if(!this.inputRef.current.value) {
            alert('할 일을 입력해주세요!')
        } else {
            this.state.todoList.push(this.inputRef.current.value)
            this.setState({todoList: this.state.todoList})
            console.log(this.state.todoList)
            console.log(this.inputRef.current.value)
        }
        this.inputRef.current.value = ''
    }


    todoElement = () => {
        return (
            this.state.todoList.map(() => {
                return(
                    <li>
                        <Todo todoText={this.state.todoList}/>
                    </li>
                )
            })
        )
    }

    today = new Date()
    
    render() {
        return (
            <div id="wrap">
                <div className="header">
                    <h2>
                        안녕하세요.<br/>
                        <span>지민</span>의 TODOLIST
                        <p>{this.today.toDateString()}</p>
                    </h2>
                </div>
                <div className="container">
                    <div className="inputBox">
                        <input ref={this.inputRef} id="text" type="text" placeholder="할 일을 입력해주세요." required/>
                        <button className="plusBtn" onClick={() => {this.createTodo()}}>+</button>
                    </div>
                    <ul>
                        {this.todoElement()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TodoPage