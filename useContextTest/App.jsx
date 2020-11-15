import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from './AppContext.jsx'
import A from './A.jsx';

const App = () => {
    const [ text, setText] = useState('default');

    return (
        <div>
            <AppContext.Provider value={{text, setText}}>
                <div>App text: {text}</div> 
                <A />
            </AppContext.Provider>
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)