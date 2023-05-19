import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import { Link, Route } from 'react-router-dom'
import Header from './components/Header'
export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          < Header />
        </div>

        <div>
          <Link to="/home">Home</Link>
          <hr />
          <Link to="/about">About</Link>
        </div>
        <div>
          {/* 注册路由 */}
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    )
  }
}
