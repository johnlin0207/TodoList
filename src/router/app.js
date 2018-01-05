import React from 'react';
import {connect} from 'react-redux'

class App extends React.Component {

    render() {
        //let {userInfo} =this.props;
        //console.log('1111'+JSON.stringify(this.props));
        return (
            <div>
                <header>
                    <h2>Welcome back! {userInfo.username}</h2>
                </header>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let {userInfo} = state;
    return {
        userInfo
    }
};

export default connect(mapStateToProps)(App)