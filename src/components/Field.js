import React from 'react'

import Icon from './Icon'
import AddTaskAction from './AddTaskAction'
import './Field.css'

function calculateProperties(index, dimensions) {
    let dark;
    const cols = dimensions.columns;
    const rows = dimensions.rows;
    const row = Math.floor(index / cols);
    const column = index % cols;
    if(cols % 2 === 0) {
        if(row % 2 === 0) {
            dark = (index % 2 === 0);
        } else {
            dark = (index % 2 === 1);
        }
    } else {
        dark = (index % 2 === 0);
    }
    return {
        x: column,
        y: row,
        accessible: ((row < rows-1) && (column < cols-1)),
        dark: dark
    };
}

export default function({index, boardDimensions, size, action}) {
    const {x, y, accessible, dark} = calculateProperties(index, boardDimensions);
    return (
        <div className={'field ' + (dark ? 'dark' : 'light') + (accessible ? ' accessible' : '')} style={{width: size, height: size}}>
        {
            accessible && (
                <AddTaskAction onClick={() => action({x: x, y: y})}>
                    <Icon icon='plus' size='3x' />
                </AddTaskAction>
            )
        }
        </div>
    );
}
