import React from 'react'

import './Field.css'

export default function({dark, size, position}) {
    return (
        <div className={'field ' + (dark ? 'dark' : 'light')} style={{width: size, height: size}} />
    );
}
