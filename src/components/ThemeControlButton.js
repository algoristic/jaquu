import React from 'react'

import Icon from './Icon'

import './ThemeControlButton.css'

export default function({ theme, active, setTheme }) {
    const { button } = theme;
    return (
        <span className={'theme-control-button' + (
            active ? '' : ' enabled'
        )} style={{
            color: button.color,
            background: button.background
        }}>
            <Icon name={button.icon} onClick={() => setTheme(theme)} size='lg' />
        </span>
    );
}