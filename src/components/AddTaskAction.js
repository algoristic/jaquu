import React from 'react'

import './AddTaskAction.css'

export default function({onClick, children}) {
    return (
        <div className='add-task-action' onClick={onClick}>
            <div className='icon-positioner'>
            {
                children
            }
            </div>
        </div>
    );
}
