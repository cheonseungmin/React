import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import A from './A.jsx'
import C from './C.jsx'
import store from './store.js'

class App extends React.Component {
    render() {
        return (
            // 이제 store의 값들은 각 컴포넌트들의 this.props로 접근할 수 있게 된다.
            <Provider store={store}>
                <A />
                <C />
            </Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('redux')
)