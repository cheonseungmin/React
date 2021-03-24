import { createStore } from 'redux';
import BReducer from './BReducer.js'

const store = createStore(
    BReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store