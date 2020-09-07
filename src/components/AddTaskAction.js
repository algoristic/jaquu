import React from 'react'

import './AddTaskAction.css'

export default function({children}) {
    return (
        <div className='add-task-action'>
            <div className='icon-positioner'>
            {
                children
            }
            </div>
        </div>
    );
}
