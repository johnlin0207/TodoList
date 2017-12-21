import React, {Component} from 'react';
import Todo from './todo'

class ToDoList extends Component {

    render() {
        return (
            <ul>
                {
                    this.props.todoList.map((item, index) => {
                        return <Todo key={index} todo={item} onTodoClick={() => this.props.onTodoClick(index)}/>
                    })
                }
            </ul>
        )
    }
}

export default ToDoList