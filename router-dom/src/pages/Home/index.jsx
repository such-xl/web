import React, { Component } from 'react'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home内容</h3>
        <MyNavLink to="/home/news">News</MyNavLink>
        <MyNavLink to="/home/message">Message</MyNavLink>
        {/* 注册路由 */}
        <Route path="/home/news" component={News} />
        <Route path="/home/message" component={Message} />
      </div>
    )
  }
}
