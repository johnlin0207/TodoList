import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// class About extends React.Component {
//     render() {
//         return (
//             <Route>
//                 <div>
//                     <h1>主题选择</h1>
//                     <ul>
//                         <li><Link to={`${this.props.match}/rendering`}>使用React渲染</Link></li>
//                         <li><Link to={`${window.location}/component`}>组件</Link></li>
//                         <li><Link to={`${window.location}/prop`}>属性状态</Link></li>
//                     </ul>
//                 </div>
//             </Route>
//         )
//     }
// }

const About=({match,location})=>{
    return <div>match_name:{console.log(match)}{new URLSearchParams(location.search).get('name')}</div>
};
export default About
