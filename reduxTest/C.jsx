import React from 'react'

import D from './D.jsx'

class C extends React.Component {
    render() {
        return (
            <div>
                C
                <D />
            </div>
        )
    }
}

export default C