import React, { Component } from 'react'

import ThemeControlButton from './ThemeControlButton'
import ThemeContext from '../context/ThemeContext'
import themes from '../assets/themes'

import './ThemeSwitcher.css'

class ThemeSwitcher extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
            {({ setTheme, isActive }) => {
                return (
                    <div className='theme-switcher'>
                    {
                        Object.values(themes).map(theme => {
                            return (
                                <ThemeControlButton theme={theme}
                                    setTheme={setTheme}
                                    active={isActive(theme)}>
                                </ThemeControlButton>
                            );
                        })
                    }
                    </div>
                );
            }}
            </ThemeContext.Consumer>
        );
    }
}

export default ThemeSwitcher;