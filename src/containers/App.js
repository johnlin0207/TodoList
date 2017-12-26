import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addTodo, completeTodo, setVisibility} from '../action/index';
import AddToDo from '../components/addtodo';
import ToDOList from '../components/todolist';
import Footer from '../components/footer'

class App extends Component {
    render() {
        const {todoList, filter, onAddClick, onTodoClick, onFilterSelect} = this.props;
        return (
            <div className='container'>
                <AddToDo onAddClick={onAddClick}/>
                <ToDOList todoList={todoList} onTodoClick={onTodoClick}/>
                <Footer filter={filter} onFilterSelect={onFilterSelect}/>
            </div>
        );
    }
}

//验证器，用于验证接收到的数据是否有效
App.propTypes = {
    todoList: PropTypes.arrayOf( //arrayOf,对todoList数组分别校验
        PropTypes.shape({ //shape,对指定属性校验
                text: PropTypes.string.isRequired, //isRequired,如果这个属性父组件没有提供时，会打印警告信息
                complete: PropTypes.bool.isRequired
            }
        )
    ),
    filter: PropTypes.oneOf([ //oneOf,限制属性值是某个特定值之一
        'SHOW_ALL',
        'SHOW_COMPLETE',
        'SHOW_UNCOMPLETE'
    ]).isRequired
};

//过滤显示的内容
const visifilter = (showRules, todoList) => {
    switch (showRules) {
        case 'SHOW_ALL':
            return todoList;
        case 'SHOW_COMPLETE':
            return todoList.filter(todo => todo.complete);
        case 'SHOW_UNCOMPLETE':
            return todoList.filter(todo => !todo.complete);
        default:
            return []
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: index => dispatch(completeTodo(index)),
        onFilterSelect: filter => dispatch(setVisibility(filter)),
        onAddClick: text => dispatch(addTodo(text))
    }
};

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        todoList: visifilter(state.visibilityFilter, state.todo), //todoList:[{todo:[],complete:Boolean},{}]
        filter: state.visibilityFilter //filter:"SHOW_XXX"
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
//export default App;