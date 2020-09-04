import React from 'react'

import './Grid.css'

export default function(props) {
    return (
        <div className='grid'>
        {
            props.children
        }
        </div>
    );
}
