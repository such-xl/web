import React, { Component } from 'react'
import PubSub from 'pubsub-js'


export default class Search extends Component {
  search = async () => {
    /*block
    //获取用户的输入
    const {keyWordElement:{value:keyWord}} = this; //keyWordElement没有定义
    console.log(keyWord);
    //发送网络请求
    axios.get(`http://localhost:3000/api1/search/user?q=${keyWord}`).then(
      response => {console.log('成功了',response.data);},
      error => {console.log('失败了',error);}
    )
    */

    console.log('Search组件发布消息了');
    PubSub.publish('atguigu', { name: 'tom', age: 18 })
    //使用fatch发送网络请求
    fetch('https://www.baidu.com?hhh').then(
      response => {
        console.log('联系服务器成功了');
        return response.json()
      },
      // error => {
      //   console.log('联系服务器失败了',error);
      //   return new Promise(()=>{})
      // }
    ).then(
      response => { console.log('获取数据成功了', response); },
      // error => {console.log('获取数据失败了',error);}
    ).catch(
      (error) => { console.log('请求出错', error); }
    )
    try {
      const response = await fetch('https://www.baidu.com?hhh')
      const data = await response.json()
      console.log(data);
    } catch (error) {
      console.log('请求出错', error);
    }

  }
  render() {
    return (
      <div>
        <h3 className='jumbotron-heading'>Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </div>
    )
  }
}
