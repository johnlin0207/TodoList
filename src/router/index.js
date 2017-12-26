import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import App from "../containers/App";
import Home from "../containers/home";
import About from "../containers/about";
import React from 'react';

class WebRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/app'>App</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                    <hr/>

                    <Route exact path='/' component={Home}/>
                    <Route path='/app' component={App}/>
                    <Route path='/about' component={About}/>
                </div>
            </Router>
        )
    }
}
export default WebRouter
