import React from 'react'

import './TaskName.css'

export default function({ name }) {
    return (
        <div className='task-widget-name'>{name}</div>
    );
};
