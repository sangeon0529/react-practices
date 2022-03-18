import React, {useState} from 'react';

export default function ({ begin, step }) {
    
    const [Val, setVal] = useState(begin);

    return (
        <div>
            <button onClick={e => setVal(Val+step)}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ Val }</span>
        </div>
    );
}