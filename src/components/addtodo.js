import React, {Component} from 'react'
import PropTypes from 'prop-types';

class AddToDo extends Component {
    handleClick(e) {
        e.stopPropagation();
        e.preventDefault();
        let content = this.refs.content;
        let text = content.value.trim();
        this.props.onAddClick(text);
        content.value = ''
    }

    render() {
        return (
            <div className='addtodo'>
                <input type="text" ref="content"/>
                <button onClick={(e) => {
                    this.handleClick(e)
                }}>添加待办事项
                </button>
            </div>
        )
    }
}

AddToDo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

export default AddToDo