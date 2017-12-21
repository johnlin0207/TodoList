import React, {Component} from 'react'

class ToDo extends Component {

    render() {
        return (
            <li style={{textDecoration: this.props.todo.complete ? 'line-through' : 'none', cursor: 'pointer'}}
                onClick={this.props.onTodoClick}>
                {this.props.todo.text}
            </li>
        )
    }
}

export default ToDo