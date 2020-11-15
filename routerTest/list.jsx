import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.users = props.users // user데이터를 받아옴, 한번만 실행 됨
    }

    render() {
        let page = this.props.page
        let start = (page - 1) * 3
        let end = ((page - 1) * 3) + 3
        return (
            <div>
                {this.users.slice(start, end).map((user, i) => {
                    return <div key={i}>{user}</div>
                })}
            </div>
        )
    }
}

export default List