import React, { Component } from 'react'
import Detail from './Detail'
import { Link, Route } from 'react-router-dom'
export default class Message extends Component {
    state = {
        messageArr: [
            { id: '001', title: 'message001' },
            { id: '002', title: 'message002' },
            { id: '003', title: 'message003' }
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((msgObj) => {
                            return (
                                
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/deatil/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                                    {/* 向路由组件传递search参数 */}
                                    <Link to={`/home/message/deatil/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 声明接收params参数 */}
                {/* <Route path='/home/message/deatil/:id/:title' component={Detail} /> */}
                {/* search参数无需声明接收，正常注册路由即可 */}
                <Route path='/home/message/deatil' component={Detail} />
            </div>
        )
    }
}
