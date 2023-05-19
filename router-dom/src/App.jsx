import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min'
export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          < Header />
        </div>

        <div>
          <MyNavLink to="/home">Home</MyNavLink>
          <hr />
          <MyNavLink to="/about">About</MyNavLink>
        </div>
        <div>
          {/* 注册路由 */}
          <Switch>
          <Route  path="/home" component={Home} />
          <Route  path="/about" component={About} />
          <Redirect to="/About" />
          </Switch>
        </div>
      </div>
    )
  }
}
