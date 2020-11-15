import React from 'react'
import { connect } from 'react-redux'

import store from './store.js'
import * as BReducer from './BReducer'

class B extends React.Component {
    constructor(props) {
        super(props)

        // input 엘리멘트의 value 접근을 위한 ref 생성
        this.input = React.createRef()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // current를 통해 속성 값 접근 가능
        let inputValue = this.input.current.value

        // 아래의 mapping 된 test 함수를 실행시킨다
        this.props.test(inputValue)
    }

    render() {
        return (
            <div>
                B
                <input ref={this.input} type="text"></input>
                <button onClick={this.handleClick}>render</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    test: (value) => dispatch(BReducer.test(value))
})

export default connect(
    null,
    mapDispatchToProps
)(B)