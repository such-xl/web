import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          < Header />
        </div>

        <div>
          <MyNavLink to="/home/a/b">Home</MyNavLink>
          <hr />
          <MyNavLink to="/about">About</MyNavLink>
        </div>
        <div>
          {/* 注册路由 */}
          <Route exact="true" path="/home" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    )
  }
}
