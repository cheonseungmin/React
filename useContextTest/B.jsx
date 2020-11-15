import React, { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

const B = () => {
    const { text, setText } = useContext(AppContext);

    const handleChange = (e) => {
        const { value } = e.target;
        setText(value);
    }

    return (
        <div>
           <div>B text: {text}</div>
           <input type='text' onChange={(e) => {handleChange(e)}}></input>
        </div>
    )
}

export default B;

