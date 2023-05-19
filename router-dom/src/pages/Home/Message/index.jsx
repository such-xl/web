import React, { Component } from 'react'
import Detail from './Detail'
import {Link,Route} from 'react-router-dom'
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
                                <li key={msgObj.id}><Link to={`/home/message/deatil/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link></li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path='/home/message/deatil/:id/:title' component={Detail} />
            </div>
        )
    }
}
