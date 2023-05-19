import React, { Component } from 'react'
const detailData = [
    { id: '001', content: 'xxxxxxxxxxxxxxxxxxxxxxxx' },
    { id: '002', content: 'yyyyyyyyyyyyyyyyyyyyyyyy' },
    { id: '003', content: 'zzzzzzzzzzzzzzzzzzzzzzzz' }
]
export default class Detail extends Component {

    render() {
        const { id, title } = this.props.match.params
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
