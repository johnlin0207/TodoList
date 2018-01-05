//初始化登录状态
const AuthState = {

    loginIn(username){localStorage.setItem('status','1');localStorage.setItem('username',username)},
    loginOut(){localStorage.setItem('status','0');localStorage.setItem('username','')}
};
export default AuthState