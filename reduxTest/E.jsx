import React from 'react'
import { connect } from 'react-redux'

class E extends React.Component {
    render() {
        // mapping 된 value 값을 store에서 가져옴
        let value = this.props.value
        return (
            <div>
                E
                {value}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.value    
})

export default connect(
    mapStateToProps,
    null
)(E)