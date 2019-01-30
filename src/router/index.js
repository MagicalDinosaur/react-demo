import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import { createHashHistory } from 'history';

// 引入page
import Foot from '../components/footer';
import Header from '../components/header';

import Page1 from '../pages/page1';

import ReduxDemo from '../components/App';


 const routes= (
    <BrowserRouter>
        <div>
            <Header/>
            <Route path='/page1' component={Page1}></Route>
            <Route path='/reduxdemo' component={ReduxDemo}></Route>
             {/* 公共组件写在这里 */}
            <Foot />
        </div>
    </BrowserRouter>
)

export default class Root extends React.Component{
    render(){
        return routes;
    }
}
