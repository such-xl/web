import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class List extends Component {
    state ={
        data:'Hello!'
    }
    componentDidMount(){
        this.token = PubSub.subscribe('atguigu',(_,data)=>{
            //List主键收到订阅消息了
            console.log('List主键收到订阅消息了');
            console.log(data);
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
    render() {
        return (
            <div className='row'>
                <div className="card">
                    <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
                        <img alt="头像" src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{ width: '100px' }} />
                    </a>
                    <p className="card-text">reactjs</p>
                </div>
            </div>
        )
    }
}
