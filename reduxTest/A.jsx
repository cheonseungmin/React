import React from 'react'

import B from './B.jsx'

class A extends React.Component {
    render() {
        return (
            <div>
                A
                <B />
            </div>
        )
    }
}

export default A