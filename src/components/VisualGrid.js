import React from 'react'

import './VisualGrid.css'

export default function(props) {
    return (
        <div className='visual-grid'>
        {
            props.children
        }
        </div>
    );
}
