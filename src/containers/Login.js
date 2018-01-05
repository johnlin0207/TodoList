import React from 'react';
import {fetchUserInfo} from '../action';
import {connect} from 'react-redux';
import Auth from '../auth'

class Login extends React.Component {

    constructor(props){
        super(props);
        window.onbeforeunload = function(){
            Auth.loginOut()
        };
    }
    handleClick(e) {
        e.stopPropagation();
        e.preventDefault();
        let {dispatch} = this.props;
        let account = this.refs.account, passwd = this.refs.passwd;
        let user = {username: account.value.trim(), password: passwd.value.trim()};
        dispatch(fetchUserInfo(user));
    }

    componentWillReceiveProps(nextProps) {

        let {userInfo, history} = nextProps;
        if (userInfo.status) {
            Auth.loginIn(userInfo.username);
            history.push('/app');
        }else{
            alert(`Can\'t find user \"${userInfo.msg}\"`)
        }
    }


    render() {
        return (
            <div className='login'>
                <div className='login-box'>
                    <div className='input-area'>
                        <p><span>Account:</span><input type="text" ref='account' placeholder='Your name'/></p><br/>
                        <p><span>Password:</span><input type="password" ref='passwd' placeholder='Your Password'/></p><br/>
                        <button onClick={(event) => {
                            this.handleClick(event)
                        }}>Sign in
                        </button>
                    </div>
                </div>
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

export default connect(mapStateToProps)(Login)