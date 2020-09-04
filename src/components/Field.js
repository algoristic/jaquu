import React from 'react'

import './Field.css';

export default function(props) {
    return (
        <div className={'field ' + (props.dark ? 'dark' : 'light')} style={{width: props.size, height: props.size}} />
    );
}
