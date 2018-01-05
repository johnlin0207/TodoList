import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import Login from '../containers/Login'
import App from '../containers/App';

class WebRouter extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} render={()=>(<div><h1>Welcome</h1><a href="/login">Sign in</a></div>)}/>
                    <Route  path='/login' component={Login}/>
                    <PrivateRoute path='/app' component={App}/>
                </Switch>
            </Router>
        )
    }
}

// 定义PrivateRoute标签函数（组件），将标签里定义的component属性通过解构赋值赋值给Component,
// 即此时的Component是App组件
// 该函数返回一个Route组件
const PrivateRoute = ({component: Component, ...rest}) => (

    <Route {...rest} render={props => Number(localStorage.getItem('status'))  ? (
        <Component {...props}/>
    ) : (
        <Redirect to={{pathname: '/login', state: {from: props.location}}}/>)}
    />

);

export default WebRouter