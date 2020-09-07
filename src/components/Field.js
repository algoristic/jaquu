import React from 'react'

import Icon from './Icon'
import AddTaskAction from './AddTaskAction'
import './Field.css'

export default function({dark, size, position}) {
    return (
        <div className={'field ' + (dark ? 'dark' : 'light')} style={{width: size, height: size}}>
            <AddTaskAction>
                <Icon icon='plus' size='3x' />
            </AddTaskAction>
        </div>
    );
}
