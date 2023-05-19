import React, { Component } from 'react'
import qs from 'qs'
const detailData = [
    { id: '001', content: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
    { id: '002', content: 'yyyyyyyyyyyyyyyyyyyyyyyy' },
    { id: '003', content: 'zzzzzzzzzzzzzzzzzzzzzzzz' }
]
export default class Detail extends Component {

    render() {
        // 接收params参数
        // const { id, title } = this.props.match.params
        // 接收search参数
        const { search } = this.props.location
        const { id, title } = qs.parse(search.slice(1))
        // 接收state参数
        
        const findResult = detailData.find((detailObj) => {
            return detailObj.id === id
        })
        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>Content:{findResult.content}</li>
            </ul>
        )
    }
}
