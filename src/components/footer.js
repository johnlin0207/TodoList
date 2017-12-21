import React, {Component} from 'react'

class Footer extends Component {

    handleFilter = (name, filter) => {

        //如果是当前已选的filter，则不调用dispatch，直接返回名字
        if (filter === this.props.filter) {
            return (<span>{name}</span>)
        }
        return (
            <span>
                <a href="javascript:void(0)" onClick={(e) => {
                    this.props.onFilterSelect(filter);
                    e.preventDefault();
                    e.stopPropagation()
                }}>{name}</a>
            </span>
        )
    };

    render() {
        return (
            <footer className='footer'>
                过滤方式：{' '}
                {this.handleFilter('全部', 'SHOW_ALL')}{' | '}
                {this.handleFilter('已完成', 'SHOW_COMPLETE')}{' | '}
                {this.handleFilter('未完成', 'SHOW_UNCOMPLETE')}

            </footer>
        )
    }
}

export default Footer