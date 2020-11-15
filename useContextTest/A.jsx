import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';
import B from './B.jsx';
const A = () => {
    const { text } = useContext(AppContext);

    return (
        <div>
           <div>A text: {text}</div>
           <B /> 
        </div>
    )
}

export default A;